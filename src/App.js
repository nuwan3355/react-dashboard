import React from "react";
import TopBar from "./Components/Common/TopBar";
import SideBar from "./Components/Common/SideBar";
import { makeStyles } from "@mui/styles";
import Home from "./Layouts/Home/Home";
import { Grid } from "@mui/material";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <TopBar />
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={10}>
            <Home />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
const useStyles = makeStyles(() => ({
 
}));

export default App;
