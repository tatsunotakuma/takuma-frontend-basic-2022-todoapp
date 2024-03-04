import React from "react";

import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <StyledImage src={check} alt="check icon" />
    </StyledCheckbox>
  );
};

const StyledImage = styled.img`
  display: none;
  width: 16px;
`;

const StyledCheckbox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  flex-shrink: 0;
  cursor: pointer;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  background-color: ${COLOR.LIGHT_BLACK};

  :hover {
    ${StyledImage} {
      display: block;
    }
  }
`;
