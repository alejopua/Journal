
import PropTypes from 'prop-types';
import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
    container 
    spacing={ 0 }
    direction={ "column" }
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
  >
    <Grid
      item
      className="box-shadow"
      width={{ md: 450 }}
      xs={ 3 }
      sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

      { children }

    </Grid>
  </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}


