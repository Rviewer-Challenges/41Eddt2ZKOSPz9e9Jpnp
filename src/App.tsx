import { GlobalStyle } from './styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components';
import { Router } from './router';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
