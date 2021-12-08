import CssBaseline from '@mui/material/CssBaseline'
import { LocalizationProvider } from '@mui/lab'
import AdapterMoment from '@mui/lab/AdapterMoment'
import { createTheme, ThemeProvider } from '@mui/material'

import Outline from './Outline'
import { blueGrey } from '@mui/material/colors'
import { useState } from 'react'

export const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: blueGrey,
    },
  })

  const switchMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <Outline darkMode={darkMode} switchTheme={switchMode} />
      </LocalizationProvider>
    </ThemeProvider>
  )
}
