import { Grid, Typography, TextField, Button, Link as MaterialLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create an account">
      <form action="">
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="full name"
              type="text"
              placeholder="full name"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mt: 1, mb: 2}}>
            <Grid item xs={ 12 }>
              <Button variant="contained" fullWidth>
                Create
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 0.5 }}>¿Already Registered? </Typography>
            <MaterialLink component={ RouterLink } color="inherit" to="/auth/login">
              Login
            </MaterialLink>
          </Grid>

        </Grid>
      </form>
  </AuthLayout>
  )
}
