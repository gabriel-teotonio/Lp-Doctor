import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Services } from "./components/Services-section"
import { GlobalStyle } from "./GlobalStyles"

function App() {

  const theme = {
    colors: {
      primaryColor: '#0059ff',
      secundaryColor: 'rgba(255, 83, 19, 1)'
    },
    textSize: {
      title: '2rem',
    }
  }

  return (
      <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Services />

      <GlobalStyle />
      </ThemeProvider>
  )
}

export default App
