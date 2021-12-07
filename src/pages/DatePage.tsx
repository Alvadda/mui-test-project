import { TextField, Paper, Typography } from '@mui/material'
import { DateTimePicker } from '@mui/lab'
import { useState } from 'react'

const DatePage = () => {
  const [value, setValue] = useState<Date | undefined>()
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginTop: 4, marginBottom: 4 }}>
      <Typography>Input Page</Typography>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Start"
        value={value}
        inputFormat="DD.MM.YY HH:mm"
        onChange={(newValue) => {
          setValue(newValue ?? undefined)
        }}
      />
    </Paper>
  )
}

export default DatePage
