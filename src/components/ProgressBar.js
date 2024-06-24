import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, index }) => {
  return (
    <div className="all-bars">
      <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="200">
        <div className="progress-bar-fill" style={{ width: progress>0 && progress<=300 ? "100%" : "0%" }}></div>
      </div>

      <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="200">
        <div className="progress-bar-fill" style={{ width: progress>100 && progress<=300 ? "100%" : "0%" }}></div>
      </div>

      <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="200">
        <div className="progress-bar-fill" style={{ width: progress>200 && progress<=300 ? "100%" : "0%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
