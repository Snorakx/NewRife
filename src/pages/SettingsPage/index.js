import React, { useState, useEffect } from "react";
import Logo from "../../common/components/logo/logo-lg/index";
import BasicText from "../../common/components/Texts/BasicText/index";
import Title from "../../common/components/Texts/Titles/index";
import Slider from "@material-ui/core/Slider";
import PrimaryBtn from "../../common/components/PrimaryBtn/index";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const [hoursPerMonday, setHoursPerMonday] = useState(0);
  const [hoursPerTuesday, setHoursPerTuesday] = useState(0);
  const [hoursPerWednesday, setHoursPerWednesday] = useState(0);
  const [hoursPerThursday, setHoursPerThursday] = useState(0);
  const [hoursPerFriday, setHoursPerFriday] = useState(0);
  const [hoursPerSaturday, setHoursPerSaturday] = useState(0);
  const [hoursPerSunday, setHoursPerSunday] = useState(0);

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

    const hoursSum =
      hoursPerMonday +
      hoursPerTuesday +
      hoursPerWednesday +
      hoursPerThursday +
      hoursPerFriday +
      hoursPerSaturday +
      hoursPerSunday;

    if (hoursSum > 48) {
      console.log(hoursSum);
    } else {
      dispatch(setSettings(hoursPerDay));
      history.push("/home");
    }
  };

  return (
    <div className="box">
      <Logo />
      <BasicText>Ile czasu w tygodniu chcesz spędzić na pracy?</BasicText>
      <BasicText>
        Masz w sumie do dyspozycji 48 godzin na cały tydzień.{" "}
      </BasicText>
      <Title>Poniedziałek</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom1"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerMonday}
        onChange={(e) => setHoursPerMonday(e.target.value)}
      />
      <Title>Wtorek</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom2"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerTuesday}
        onChange={(e) => setHoursPerTuesday(e.target.value)}
      />
      <Title>Środa</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerWednesday}
        onChange={(e) => setHoursPerWednesday(e.target.value)}
      />
      <Title>Czwartek</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerThursday}
        onChange={(e) => setHoursPerThursday(e.target.value)}
      />
      <Title>Piątek</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerFriday}
        onChange={(e) => setHoursPerFriday(e.target.value)}
      />
      <Title>Sobota</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerSaturday}
        onChange={(e) => setHoursPerSaturday(e.target.value)}
      />
      <Title>Niedziela</Title>
      <Slider
        className="slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
        value={hoursPerSunday}
        onChange={(e) => setHoursPerSunday(e.target.value)}
      />

      <PrimaryBtn handleClick={handleSettingsSubmit}>
        Zapisz ustawienia i przejdź do aplikacji
      </PrimaryBtn>
    </div>
  );
};

export default DefaultSettings;
