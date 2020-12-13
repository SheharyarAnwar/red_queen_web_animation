import React, { useLayoutEffect, useEffect, useState } from "react";
import ground from "../../Assets/ground.jpg";
import bush from "../../Assets/bush.png";
import knight from "../../Assets/knight.png";
import palm from "../../Assets/palm_2.png";
import smpalm from "../../Assets/palm_small.png";
import mpalm from "../../Assets/palm.png";
import pawn from "../../Assets/pawn.png";
import rook from "../../Assets/rook.png";
import dpawn from "../../Assets/pawn_down.png";
import classes from "./scenery.module.css";
function Index(props) {
  const [playbackRate, setplaybackRate] = useState(false);
  const bgRef = React.createRef();

  const timer = () => {
    setTimeout(() => {
      setplaybackRate(!playbackRate);
    }, 300);
  };
  const sceneClicked = () => {
    const [alice, bg] = document.getAnimations();
    console.log(bg.playState);
    if (bg.playState === "paused") {
      bg.play();
    }
    alice.updatePlaybackRate(alice.playbackRate + 0.2);
    bg.updatePlaybackRate(alice.playbackRate);
  };
  useEffect(() => {
    timer();
    console.log("AFter timer");
    const [alice, bg] = document.getAnimations();
    if (alice.playbackRate < 1) {
      bg.updatePlaybackRate(0);
      return;
    }
    alice.updatePlaybackRate(alice.playbackRate - 0.2);
    bg.updatePlaybackRate(alice.playbackRate);
  }, [playbackRate]);
  useLayoutEffect(() => {
    const alice = props.children.ref.current;
    const bg = bgRef.current;
    const aliceFrames = [
      {
        transform: "translateY(0%)",
      },
      {
        transform: "translateY(-100%)",
      },
    ];
    const aliceTiming = {
      duration: 1000,
      easing: "steps(7, end)",
      iterations: Infinity,
      direction: "reverse",
    };
    const bgFrames = [
      {
        transform: "translateX(20%)",
      },
      {
        transform: "translateX(-100%)",
      },
    ];
    const bgTiming = {
      duration: 10000,
      iterations: Infinity,
      easing: "linear",
    };
    const aliceAnimation = alice.animate(aliceFrames, aliceTiming);
    const bgAnimation = bg.animate(bgFrames, bgTiming);
    bgAnimation.pause();
    aliceAnimation.play();
  }, []);
  return (
    <>
      <div className={classes.bg} onClick={sceneClicked}>
        <div className={classes.sky} alt="ground"></div>
        <div className={classes.aliceWrapper}>{props.children}</div>
        <img src={ground} className={classes.ground} alt="ground"></img>
        <div className={classes.scenery} ref={bgRef}>
          <img src={bush} className={classes.bush} alt="ground"></img>
          <img src={knight} className={classes.knight} alt="ground"></img>
          <img src={palm} className={classes.palm} alt="ground"></img>
          <img src={smpalm} className={classes.smpalm} alt="ground"></img>
          <img src={mpalm} className={classes.mpalm} alt="ground"></img>
          <img src={pawn} className={classes.pawn} alt="ground"></img>
          <img src={rook} className={classes.rook} alt="ground"></img>
          <img src={dpawn} className={classes.dpawn} alt="ground"></img>
        </div>
      </div>
    </>
  );
}

export default Index;
