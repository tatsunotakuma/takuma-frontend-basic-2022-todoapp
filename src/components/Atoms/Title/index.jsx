import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

import React from "react";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.L}
`;
