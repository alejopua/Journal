import { Grid } from "@mui/material";
import { Loading } from "./loading/Loading";

export const ChekingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid container direction="row" justifyContent="center">
        {/* <CircularProgress color="warning" /> */}
        <Loading />
      </Grid>
    </Grid>
  );
};
