import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GitHubProvider } from './context/gitHubContext'
import { Router } from './Router'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <GitHubProvider>
          <Router />
        </GitHubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
