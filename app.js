const heading1 = React.createElement("h1", {}, "Namaste React!");
const heading2 = React.createElement("h2", {}, "Namaste Javascript!");
const container = React.createElement("div", { classname: "conatiner" }, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)