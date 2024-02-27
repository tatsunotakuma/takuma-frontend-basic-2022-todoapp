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
   {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
    transition: background-color 0.3 ease;

    :hover {
      background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    }
  }
`;

const StyledImage = styled.img`
   {
    width: 100%;
    height: 100%;
  }
`;
