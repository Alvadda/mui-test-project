import { BottomNavigation, BottomNavigationAction, Switch } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import TimerIcon from '@mui/icons-material/Timer'

import { useState, VFC } from 'react'
import StartPage from './pages/StartPage'
import DatePage from './pages/DatePage'
import InputPage from './pages/InputPage'

interface OutlineProps {
  darkMode: boolean
  switchTheme: () => void
}

const useStyles: any = makeStyles({
  outline: {
    display: 'grid',
    gridTemplate: `
    'page' 9fr
    'footer' 1fr;
    `,
    height: '100vh',
  },
  page: {
    gridArea: 'page',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'footer',
  },
})

const Outline: VFC<OutlineProps> = ({ darkMode, switchTheme }) => {
  const [page, setPage] = useState<string>('start')
  const classes = useStyles()

  return (
    <div className={classes.outline}>
      <main className={classes.page}>
        <Switch checked={darkMode} onChange={switchTheme} />
        {page === 'start' && <StartPage />}
        {page === 'date' && <DatePage />}
        {page === 'input' && <InputPage />}
      </main>
      <footer className={classes.footer}>
        <BottomNavigation
          showLabels
          value={page}
          onChange={(event, newValue) => {
            setPage(newValue)
          }}
        >
          <BottomNavigationAction label="Start" value="start" icon={<PlayArrowIcon />} />
          <BottomNavigationAction label="Date" value="date" icon={<CalendarTodayIcon />} />
          <BottomNavigationAction label="Input" value="input" icon={<KeyboardIcon />} />
          <BottomNavigationAction label="Input" value="input" icon={<TimerIcon />} />
        </BottomNavigation>
      </footer>
    </div>
  )
}

export default Outline
