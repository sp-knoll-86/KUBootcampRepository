import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Presentation from "./presentation";
registerServiceWorker();

ReactDOM.render(<Presentation />, document.getElementById("root"));
