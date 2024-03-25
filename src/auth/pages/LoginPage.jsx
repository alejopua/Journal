import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link as MaterialLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="">
        <Grid container>
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
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
                <Google />
                  <Typography sx={{ ml: 1 }}>Login with</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <MaterialLink component={ RouterLink } color="inherit" to="/auth/register">
              Create an account
            </MaterialLink>
          </Grid>

        </Grid>
      </form>
  </AuthLayout>
  )
}
