import {
  Grid,
  Typography,
  TextField,
  Button,
  Link as MaterialLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  displayName: "petito",
  email: "petito@das.com",
  password: "1234",
};

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange, formState } =
    useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Create an account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="full name"
              type="text"
              placeholder="full name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 0.5 }}>¿Already Registered? </Typography>
            <MaterialLink
              component={RouterLink}
              color="inherit"
              to="/auth/login"
            >
              Login
            </MaterialLink>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
