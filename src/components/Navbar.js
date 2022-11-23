import React from "react";
import { Button, Divider } from "@mantine/core";
import "./Home.css";
const logo =
  "https://i.pinimg.com/736x/dc/39/7b/dc397bc95c4ac7a99c7a45a73355adee.jpg";
function Navbar() {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="logo" width="100px" height="100px" />
      </div>
      <div className="launch">
        <Button
          radius="xl"
          size="md"
          uppercase
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
        >
          LAUNCH
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
