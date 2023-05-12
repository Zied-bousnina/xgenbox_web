import React, { useState } from 'react';
import './TopButton.css'; // Optionally, create a CSS file for styling

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Add an event listener to the window's scroll event
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      // If the user has scrolled down more than 200px, show the button
      setShowButton(true);
    } else {
      // Otherwise, hide the button
      setShowButton(false);
    }
  });

  const handleClick = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Render the button conditionally based on the showButton state
  return (
    <>
      {showButton && (
        <button className="top-button" onClick={handleClick}>
          Top
        </button>
      )}
    </>
  );
};

export default TopButton;
