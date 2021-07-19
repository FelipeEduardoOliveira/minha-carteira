import React from "react";

import { Container, ToggleLabel, ToggleSelect } from "./styles";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelect
        checked={false}
        onChange={() => console.log("mudou")}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
