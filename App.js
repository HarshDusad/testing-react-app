import React from 'react';
import './App.css';

const GridItem = ({ number, text, imageSrc }) => {
  return (
    <div className="grid-item">
      <div className="image-container">
        <img src={imageSrc} alt={`Item ${number}`} className="image" />
      </div>
      <h3>{number}</h3>
      <p>{text}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="grid-container">
      <GridItem
        number={`800+`}
        text="Happy Customers"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/800px-X_logo.jpg"
      />
      <GridItem
        number={`400+`}
        text="Project Completed"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/800px-X_logo.jpg"
      />
      <GridItem
        number={`84+`}
        text="Expert Advisors"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/800px-X_logo.jpg"
      />
      <GridItem
        number={`940+`}
        text="Global Presence"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/800px-X_logo.jpg"
      />
    </div>
  );
};

export default App;
