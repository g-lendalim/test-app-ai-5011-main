import { useState } from 'react';

export default function Triangle() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    if (base && height) {
      const calculatedArea = (parseFloat(base) * parseFloat(height)) / 2;
      setArea(calculatedArea);
    } else {
      setArea('Please enter both base and height');
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="card w-100">
        <div className="card-header bg-dark text-white text-center">
          <h2>Triangle Area Solver</h2>
        </div>
        <div className="card-body">
          <div className="form-group mb-3">
            <label htmlFor="base" className="form-label fw-bold">Base:</label>
            <input
              type="number"
              className="form-control form-control-lg w-100"
              id="base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="Enter base length"
            />
          </div>
          
          <div className="form-group mb-3">
            <label htmlFor="height" className="form-label fw-bold">Height:</label>
            <input
              type="number"
              className="form-control form-control-lg w-100"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height length"
            />
          </div>

          <div className="d-grid gap-2">
            <button 
              className="btn btn-primary btn-lg mb-3 w-100" 
              style={{ backgroundColor: "#0000FF" }}
              onClick={calculateArea}
            >
              Calculate Area
            </button>
          </div>

          {area !== null && (
            <div className="mt-3">
              <h4>Results:</h4>
              <div className="alert alert-success w-100">
                {typeof area === 'number' 
                  ? `The area of the triangle is: ${area} square units` 
                  : area}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}