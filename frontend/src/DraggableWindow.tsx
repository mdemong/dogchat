import { useState } from "react";
import Draggable from "react-draggable";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  height: 100vh;
  box-sizing: border-box;
  .window-title {
    cursor: grab;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 18px;
    margin-left: -1px;
    margin-top: -1px;
    position: relative;
  }
  #close-button {
    cursor: not-allowed;
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

export const DraggableWindow = ({children} : React.PropsWithChildren) => {
  return (
    <>
      <Wrapper className="wrapper">
        <Draggable bounds=".wrapper" handle=".window-title">
          <Window className="window">
            <WindowHeader className="window-title">
              <h1>DogChat</h1>
              <Button disabled id="close-button">
                <img className="close-icon" src="src/assets/close-window-peggysPastels.png"></img>
              </Button>
            </WindowHeader>
            <WindowContent>
              {children}
            </WindowContent>
          </Window>
        </Draggable>
      </Wrapper>
    </>
  );
};
