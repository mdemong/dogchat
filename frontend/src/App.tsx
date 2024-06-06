import { ThemeProvider, createGlobalStyle } from 'styled-components';

import original from 'react95/dist/themes/original';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Window, WindowContent, WindowHeader, styleReset } from 'react95';

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

function App() {
  return (
    <> 
      <GlobalStyles/>
      <ThemeProvider theme={original}>
        <Window>
          <WindowHeader>
            <span>DogChat</span>
          </WindowHeader>
          <WindowContent>
            <p>what a cool window</p>
          </WindowContent>
        </Window>
      </ThemeProvider>
    </>
  )
}

export default App
