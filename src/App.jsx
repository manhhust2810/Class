import React from "react";
import "./App.css";
import RaceChart from "./chart/raceChart";
import BasicChart from "./chart/basicChart";
import LineChart from "./chart/lineChart";
import DonutChart from "./chart/donutChart";

function App() {
  return (
    <div>
      {/* <DonutChart></DonutChart> */}
      <LineChart></LineChart>
      <BasicChart></BasicChart>
      <RaceChart></RaceChart>
    </div>
  );
}

export default App;
