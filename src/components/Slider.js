import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ onPointSelected }) => {
  const [highlightedPoint, setHighlightedPoint] = useState(null);

  const handleClick = (position) => {
    setHighlightedPoint(position);

    setTimeout(() => {
      setHighlightedPoint(null);
      onPointSelected();
    }, 1000);
  };

  return (
    <div className="slider-container">
      <div className="slider-none-adjust">
        <div className={`slider-points ${highlightedPoint ? 'hide-other-points' : ''}`}>
          <a
            className={`point ${highlightedPoint === '0%' ? 'highlighted' : ''}`}
            style={{ left: '0%' }}
            onClick={() => handleClick('0%')}
          ></a>
          <a
            className={`point ${highlightedPoint === '25%' ? 'highlighted' : ''}`}
            style={{ left: '20%' }}
            onClick={() => handleClick('25%')}
          ></a>
          <a
            className={`point ${highlightedPoint === '50%' ? 'highlighted' : ''}`}
            style={{ left: '40%' }}
            onClick={() => handleClick('50%')}
          ></a>
          <a
            className={`point ${highlightedPoint === '75%' ? 'highlighted' : ''}`}
            style={{ left: '60%' }}
            onClick={() => handleClick('75%')}
          ></a>
          <a
            className={`point ${highlightedPoint === '100%' ? 'highlighted' : ''}`}
            style={{ left: '80%' }}
            onClick={() => handleClick('100%')}
          ></a>
        </div>
        <div className={`point-line ${highlightedPoint ? 'highlighted' : ''}`}
        >
          <div
            className="point-line-left"
            style={{
              transform: highlightedPoint
                ? `translateX(calc(${highlightedPoint} - 100%))`
                : 'translateX(-100%)',
              transition: highlightedPoint ? 'transform 0.2s' : 'none',
            }}
          ></div>
        </div>
      </div>
      <div className="slider-labels">
        <div className="label" style={{ left: '2%' }} onClick={() => handleClick('0%')}>
          <p className="desktop">Strongly Disagree</p>
        </div>
        <div className="label" style={{ left: '21%' }} onClick={() => handleClick('25%')}>
          <p className="desktop">Disagree</p>
        </div>
        <div className="label" style={{ left: '45.5%' }} onClick={() => handleClick('50%')}>
          <p className="desktop">Neutral</p>
        </div>
        <div className="label" style={{ left: '70%' }} onClick={() => handleClick('75%')}>
          <p className="desktop">Agree</p>
        </div>
        <div className="label" style={{ left: '96%' }} onClick={() => handleClick('100%')}>
          <p className="desktop">Strongly Agree</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
