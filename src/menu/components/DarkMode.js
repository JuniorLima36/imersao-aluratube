import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorMode";

const StyledSwitch = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 3px;
  width: 50px;
  height: 25px;
  border: none;
  font-size: 12px;
  border-radius: 10000px;
  background-color: #333333;

  label {
    width: 50px;
  }

  span { 
    display: inline-flex; 
    align-items: center; 
    justify-content: center;
    width: 20px; 
    height: 20px; 
  }
  
  label:before {
    content: "";
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 24px;
    height: 24px;
    transition: .3s;
    border-radius: 100%;
    background-color: #fafafa;
    border: 1px solid #333333;
  }

  input[type="checkbox"] { 
    display: none; 
  }

  input[type="checkbox"]:checked + label:before { 
    transform: translateX(100%); 
  }
`;

export default function DarkModeSwitch() {
  const context = React.useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input id="darkmode" type="checkbox" onChange={() => {
        context.toggleMode();
      }} />
      <label
        htmlFor="darkmode"
        className="darkmode-switch"
      >
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}