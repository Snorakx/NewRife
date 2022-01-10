import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.scss";
import PrimaryButton from "../../../common/components/PrimaryBtn/index";
import SecondaryBtn from "../../../common/components/SecondaryBtn";
import {SettingsButton} from "../../../common/components/SettingsButton";
import { useDispatch } from "react-redux";
import { addUserWorkedHour } from "../../../state/hours/hoursAction";




const hourSeconds = 3;

const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  if (minutes === 0) {
    return `50:00`;
  } else {
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  }
};

const renderTime = (time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{formatRemainingTime(time)}</div>
    </div>
  );
};

const TimerComponent = () => {
  const dispatch = useDispatch();
  const [isStarted, setIsStarted] = useState(false);
  const [key, setKey] = useState(0);

  const onFinish = () =>{
    if(isStarted){
      console.log("PLUS 1 PUNKT !!!")
      dispatch(addUserWorkedHour())
    }
  }

  const timerProps = {
    isPlaying: isStarted,
    size: 300,
    strokeWidth: 20,
    key: key
  };
  
  const resetTimer = () =>{
    setKey((prevKey)=> prevKey +1 )
    setIsStarted(false);
  }
  return (
    <div className="timer-circle-container">
      <CountdownCircleTimer
        {...timerProps}
        
        colors={[
          ["#FFDA58", 1],
          ["#FFDA58", 1],
          ["#ff6058", 1],
        ]}
        duration={hourSeconds}
       onComplete={()=>{onFinish()}}
      >
        {({ elapsedTime }) => renderTime(hourSeconds - elapsedTime)}
      </CountdownCircleTimer>
      {!isStarted ? (
        <PrimaryButton
          handleClick={() => {
            setIsStarted(true);
          }}
        >
          Rozpocznij
        </PrimaryButton>
      ) : (
        <div className="timer-buttons">
        <SecondaryBtn
          handleClick={() => {
            setIsStarted(false);
          }}
        >
          Zatrzymaj
        </SecondaryBtn>
        <SettingsButton optionNames={[{name:"Dodaj Zadanie"},{name:"Zakończ",  handleClick: resetTimer}]}>Opcje</SettingsButton>
        </div>
      )}
    </div>
  );
};

export default TimerComponent;
