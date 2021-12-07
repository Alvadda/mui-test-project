import CssBaseline from '@mui/material/CssBaseline'
import { LocalizationProvider } from '@mui/lab'
import AdapterMoment from '@mui/lab/AdapterMoment'

import Outline from './Outline'

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CssBaseline />
      <Outline />
    </LocalizationProvider>
  )
}
