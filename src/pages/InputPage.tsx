import { Button, TextField, Grid, Paper, Typography } from '@mui/material'

const InputPage = () => {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginTop: 4, marginBottom: 4 }}>
      <Typography>Input Page</Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={6} container justifyContent="center" alignItems="center">
          <Button variant="contained">Hello World</Button>
        </Grid>
        <Grid item xs={6}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default InputPage
