import React from "react";
import { makeStyles } from "@mui/styles";
import FeturedInfo from "../../Components/Home/FeaturedInfo/FeturedInfo";
import NewMember from "../../Components/Home/Member/NewMember";
import LatestTransaction from "../../Components/Home/Member/LatestTransaction";
import Charts from "../../Components/Home/Charts/Charts";
import { userData } from "../../Components/DummyData";
import { Grid } from "@mui/material";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <FeturedInfo />
      <Charts data={userData} />
      <Grid container>
        <Grid item xs={5}>
          <NewMember />
        </Grid>
        <Grid item xs={7}>
          <LatestTransaction />
        </Grid>
      </Grid>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  home: {
    flex: 4,
  },
}));
