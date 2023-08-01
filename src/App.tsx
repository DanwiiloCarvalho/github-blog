import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Cover } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Cover />
        <Router />
      </BrowserRouter>
      <GlobalStyle theme={defaultTheme} />
    </ThemeProvider>
  )
}
