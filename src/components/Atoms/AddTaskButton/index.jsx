import React from "react";

import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import plus from "../../../assets/svg/plus.svg";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={plus} alt="add icon" />
      <StyledAddTask>タスクを追加</StyledAddTask>
    </StyledButton>
  );
};

const StyledButton = styled.button`
   {
    display: flex;
    padding: 2px 6px;
    gap: 10px;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background-color: ${COLOR.LIGHT_BLACK};
    transition: background-color 0.3 ease;

    :hover {
      background-color: ${COLOR.GREEN_TRANSLUCENT};
    }
  }
`;

const StyledImage = styled.img`
   {
    width: 20px;
  }
`;

const StyledAddTask = styled.div`
   {
    color: ${COLOR.GREEN};
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.S};
  }
`;
