import React from 'react';
import './Poetry.css'; // Import the CSS file

function Poetry() {
  return (
    <div className="poetry-container">
      <div className="title">
        <h1>Poetry</h1>
      </div>
        <div className="iframe-container">
          <iframe
            src="https://www.canva.com/design/DAGDj3LwGdc/tEgWtTmlmnHzphsuuJjs3Q/view?embed"
            title="Poetry Slide Deck"
            allowFullScreen
            className="custom-iframe"
          ></iframe>
        </div>
        <a href="https://www.canva.com/design/DAGDj3LwGdc/tEgWtTmlmnHzphsuuJjs3Q/view?utm_content=DAGDj3LwGdc&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener noreferrer">
        </a>
        {' '}
      </div>
  );
}

export default Poetry;
