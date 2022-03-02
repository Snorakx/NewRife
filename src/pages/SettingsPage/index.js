import React, { useState } from "react";
import Logo from "../../common/components/logo/logo-lg/index";
import BasicText from "../../common/components/Texts/BasicText/index";
import Title from "../../common/components/Texts/Titles/index";
import Slider from "@material-ui/core/Slider";
import PrimaryBtn from "../../common/components/PrimaryBtn/index";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../state/hours/hoursAction";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
];

function valuetext(value) {
  return `${value}`;
}

const DefaultSettings = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const hours = useSelector((state) => state.hours);

  const [hoursPerMonday, setHoursPerMonday] = useState(
    hours.monday ? hours.monday : 0
  );
  const [hoursPerTuesday, setHoursPerTuesday] = useState(
    hours.tuesday ? hours.tuesday : 0
  );
  const [hoursPerWednesday, setHoursPerWednesday] = useState(
    hours.wednesday ? hours.wednesday : 0
  );
  const [hoursPerThursday, setHoursPerThursday] = useState(
    hours.thursday ? hours.thursday : 0
  );
  const [hoursPerFriday, setHoursPerFriday] = useState(
    hours.friday ? hours.friday : 0
  );
  const [hoursPerSaturday, setHoursPerSaturday] = useState(
    hours.saturday ? hours.saturday : 0
  );
  const [hoursPerSunday, setHoursPerSunday] = useState(
    hours.sunday ? hours.sunday : 0
  );

  const countHours = (hoursPerDay) => {
    let number = 0;
    for (let i in hoursPerDay) {
      number += hoursPerDay[i];
    }
    return number;
  };

  const handleSettingsSubmit = () => {
    const hoursPerDay = {
      hoursPerMonday,
      hoursPerTuesday,
      hoursPerWednesday,
      hoursPerThursday,
      hoursPerFriday,
      hoursPerSaturday,
      hoursPerSunday,
    };
    const sum = countHours(hoursPerDay);
    if (sum > 48) {
      console.log(sum);
    } else {
      dispatch(setSettings(hoursPerDay));
      history.push("/home");
    }
  };

  return (
    <div className="box">
      {!hours.settingsAdded ? <Logo /> : ""}
      <BasicText>Ile czasu w tygodniu chcesz spędzić na pracy?</BasicText>
      <BasicText>
        Masz w sumie do dyspozycji 48 godzin na cały tydzień.
      </BasicText>
      <br />
      <Title>Poniedziałek</Title>
      <Slider
        className="slider"
        getAriaValueText={valuetext}
        defaultValue={hours.monday ? hours.monday : 0}
        aria-labelledby="discrete-slider-custom1"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerMonday(val)}
      />
      <Title>Wtorek</Title>
      <Slider
        className="slider"
        defaultValue={hours.tuesday ? hours.tuesday : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom2"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerTuesday(val)}
      />
      <Title>Środa</Title>
      <Slider
        className="slider"
        defaultValue={hours.wednesday ? hours.wednesday : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerWednesday(val)}
      />
      <Title>Czwartek</Title>
      <Slider
        className="slider"
        defaultValue={hours.thursday ? hours.thursday : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerThursday(val)}
      />
      <Title>Piątek</Title>
      <Slider
        className="slider"
        defaultValue={hours.friday ? hours.friday : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerFriday(val)}
      />
      <Title>Sobota</Title>
      <Slider
        className="slider"
        defaultValue={hours.saturday ? hours.saturday : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerSaturday(val)}
      />
      <Title>Niedziela</Title>
      <Slider
        className="slider"
        defaultValue={hours.sunday ? hours.sunday : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e, val) => setHoursPerSunday(val)}
      />
      <PrimaryBtn handleClick={handleSettingsSubmit}>
        {!hours.settingsAdded
          ? "Zapisz ustawienia i przejdź do aplikacji"
          : "Zapisz ustawienia"}
      </PrimaryBtn>
    </div>
  );
};

export default DefaultSettings;
