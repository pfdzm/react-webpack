import * as React from "react";
import * as ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("app")).render(<h1>Hello webpack</h1>);

if (module.hot) {
  module.hot.accept();
}
