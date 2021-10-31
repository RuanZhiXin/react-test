import React from 'react';


// Generates random colours any time it's called
const randomColour = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

// A memoized button with a random background colour

const RandomColoredButton = React.memo((props) =>
    <button onClick={props.onClick} style={{background: randomColour()}} className="m-4 p-2">
      {props.children}
    </button>
);

export default RandomColoredButton;
