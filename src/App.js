import React from "react";
import alice from "./Assets/alice.png";
import classes from "./Components/Scenery/scenery.module.css";
import Scenery from "./Components/Scenery/index";
function App() {
  const aliceRef = React.createRef();
  return (
    <>
      <Scenery>
        <img
          src={alice}
          ref={aliceRef}
          className={classes.alice}
          alt="ground"
        ></img>
      </Scenery>
    </>
  );
}

export default App;
