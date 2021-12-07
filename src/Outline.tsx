import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import KeyboardIcon from '@mui/icons-material/Keyboard'

import './style/outline.scss'
import { useState } from 'react'
import StartPage from './pages/StartPage'
import DatePage from './pages/DatePage'
import InputPage from './pages/InputPage'

const Outline = () => {
  const [page, setPage] = useState<string>('start')
  return (
    <div className="outline">
      <main className="page">
        {page === 'start' && <StartPage />}
        {page === 'date' && <DatePage />}
        {page === 'input' && <InputPage />}
      </main>
      <footer className="footer">
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
        </BottomNavigation>
      </footer>
    </div>
  )
}

export default Outline
