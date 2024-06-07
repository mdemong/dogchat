import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import original from "react95/dist/themes/peggysPastels";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { Button, Window, WindowContent, WindowHeader, styleReset } from "react95";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

// const Wrapper = styled.div`
//   height: 100vh;
//   box-sizing: border-box;
//   padding: 5rem;
//   background: ${({ theme }) => theme.desktopBackground};
// `;

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
   height: 100vh;
   box-sizing: border-box;
  .window-title {
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

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Wrapper>
          <Window>
            <WindowHeader className="window-title">
              <span>DogChat</span>
              <Button disabled>
                <img className="close-icon" src="src/assets/close-window-peggysPastels.png"></img>
                {/* <span className="close-icon"/> */}
              </Button>
            </WindowHeader>
            <WindowContent>
              <p>what a cool window</p>
            </WindowContent>
          </Window>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
