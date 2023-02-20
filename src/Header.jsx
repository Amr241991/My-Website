var React = require("react");
function Header() {
  const data = new Date();
  const currentData = data.getHours();
  const custtumStyle = {
    color: ""
  };
  let greating;
  if (currentData < 12) {
    greating = "Coode Morning";
    custtumStyle.color = "red";
  } else if (currentData < 18) {
    greating = "Goode Afternoon";
    custtumStyle.color = "green";
  } else {
    greating = "Goode Night";
    custtumStyle.color = "blue";
  }
  return (
    <header>
      <h1 style={custtumStyle}>{greating}</h1>
    </header>
  );
}
export default Header;
