import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Grid } from "@mui/material";

const transaction = [
  {
    img: "https://randomuser.me/api/portraits/med/men/42.jpg",
    name: "Vicola Dias",
    date: "2 Jan 2021",
    amount: "$122.00",
    status: "Approved",
    color: "#14c1e3",
  },
  {
    img: "https://randomuser.me/api/portraits/med/men/49.jpg",
    name: "    jasmith Anta",
    date: "2 Jan 2021",
    amount: "$182.00",
    status: "Declined",
    color: "#e319be",
  },
  {
    img: "https://randomuser.me/api/portraits/med/women/68.jpg",
    name: "Jenny Core",
    date: "2 Jan 2021",
    amount: "$342.00",
    status: "Pending",
    color: "blue",
  },
  {
    img: "https://randomuser.me/api/portraits/med/women/72.jpg",
    name: "Anny Row",
    date: "2 Jan 2021",
    amount: "$822.00",
    status: "Approved",
    color: "#14c1e3",
  },
];
export default function LatestTransaction() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {transaction.map((val, key) => {
        return (
          <Grid
            key={key}
            container
            spacing={1}
            style={{ padding: "10px", alignItems: "center" }}
          >
            <Grid item xs={6} style={{ display: "flex" }}>
              <Avatar alt="Remy Sharp" src={val.img} />
              <h4 style={{ marginLeft: "20px", alignItems: "center" }}>
                {val.name}
              </h4>
            </Grid>
            <Grid item xs={2}>
              {val.date}
            </Grid>
            <Grid item xs={2}>
              {val.amount}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                color: val.color,
                background: "#d3ebed",
                textAlign: "center",
                padding: "5px",
              }}
            >
              {val.status}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
const useStyles = makeStyles(() => ({
  main: {
    boxShadow: "  8px 10px 13px 5px rgba(0,0,0,0.42)",
    margin: "30px 20px",
  },
}));
