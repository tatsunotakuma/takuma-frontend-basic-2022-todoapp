import React from "react";

import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={pencil} alt="edit icon" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const StyledImage = styled.img`
   {
    width: 100%;
    height: 100%;
  }
`;