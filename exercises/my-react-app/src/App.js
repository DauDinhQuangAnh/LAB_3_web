import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

function App() {

  alert("Alert!!!");

  const element = (
    <Button style={{ margin: "10px 10px" }} type="primary"></Button>
  );

  ReactDOM.render(element, document.getElementById("root"));
}
export default App;