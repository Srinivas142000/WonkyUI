import React, { useState } from "react";
import '../cssstyles/homepage.css';

const Hint1 = () => {
  const [scratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
  };

  return (
    <div className="hint1-text">
      <h1>Hint 1: How to navigate the first page to the next?</h1>
      <h2>Try the scratch card for the hint</h2>
      <div className={`scratch-card ${scratched ? 'scratched' : ''}`} onMouseMove={handleScratch}>
        <h3>
          The objective of this page was to identify the button that goes to the next page,
          Have you checked the four corners of the page to see if they hide any buttons??
        </h3>
      </div>
    </div>
  );
};

const Hint2 = () => {
  const [scratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
  };

  return (
    <div className="hint2-text">
      <h1>Hint 2: How to navigate the first page to the next?</h1>
      <h2>Try the scratch card for the hint</h2>
      <div className={`scratch-card ${scratched ? 'scratched' : ''}`} onMouseMove={handleScratch}>
        <h3>
          Great work identifying the button on page 1! Now that the button is random, let's parse the screen to detect its new location.
        </h3>
      </div>
    </div>
  );
};

export { Hint1, Hint2 };
