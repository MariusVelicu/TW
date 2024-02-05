import React from 'react'
import { useState } from "react";
import Robot from "./Robot";
import RobotForm from "./RobotForm";
import RobotList from "./RobotList";

function App() {
  return (
    <div>
      <RobotForm/>
      A list of robots
      <RobotList />
    </div>
  );
}

export default App;
