import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Outlet } from 'react-router-dom'

export function App() {
return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <Header />
    <Outlet />
  </ThemeProvider>
  )
}
