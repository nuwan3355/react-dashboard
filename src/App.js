import React from "react";
import TopBar from "./Components/Common/TopBar";
import SideBar from "./Components/Common/SideBar";
import { makeStyles } from "@mui/styles";
import Home from "./Layouts/Home/Home";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Layouts/UserList/UserList";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <TopBar />
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user-list" component={UserList} />
              <Route path="/user/:userid"/>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}
const useStyles = makeStyles(() => ({}));

export default App;
