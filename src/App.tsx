import { GlobalStyle } from './styled-components';
import Login from './pages/login';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components';
import { Loader } from './pages/loader';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Login></Login> */}
        <Loader />
        
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
