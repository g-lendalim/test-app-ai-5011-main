import React, { useState } from "react";

const Counter = () => {
  const [entryCount, setEntryCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);
  const [actionLog, setActionLog] = useState([]);

  const logAction = (action) => {
    const timestamp = new Date().toLocaleString();
    const newLog = [{ action, timestamp }, ...actionLog].slice(0, 10);
    setActionLog(newLog);
  };

  const updateEntry = () => {
    setEntryCount(entryCount + 1);
    logAction("Entry");
  };

  const updateExit = () => {
    setExitCount(exitCount + 1);
    logAction("Exit");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Counter</h1>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Entries:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#28a745" }}>
            {entryCount}
          </span>
        </p>
        <button
          className="btn btn-success"
          onClick={updateEntry}
          style={{ padding: "10px 20px", fontSize: "16px" }}
          aria-label="Add an entry"
        >
          Add Entry
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Exits:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#dc3545" }}>
            {exitCount}
          </span>
        </p>
        <button
          className="btn btn-danger"
          onClick={updateExit}
          style={{ padding: "10px 20px", fontSize: "16px" }}
          aria-label="Add an exit"
        >
          Add Exit
        </button>
      </div>

      <h4 className="mt-4 mb-3 text-secondary">Last 10 Actions</h4>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {actionLog.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No actions recorded yet.
                </td>
              </tr>
            ) : (
              actionLog.map((log, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    className={
                      log.action === "Entry" ? "text-success" : "text-danger"
                    }
                  >
                    {log.action}
                  </td>
                  <td>{log.timestamp}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Counter;
