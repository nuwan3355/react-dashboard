import React from "react";
import { makeStyles } from "@mui/styles";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const list = [
  {
    title: "Revanue",
    money: "2,514",
    rate: "-11.4",
  },
  {
    title: "Sales",
    money: "3,454",
    rate: "-3.4",
  },
  {
    title: "Cost",
    money: "6,914",
    rate: "2.4",
  },
];
export default function FeturedInfo() {
  const classes = useStyles();
  return (
    <div className={classes.fetured}>
      {list.map((val, key) => {
        return (
          <div key={key} className={classes.feturedItem}>
            <span className={classes.feturedTitle}>{val.title}</span>
            <div className={classes.feturedMoneyContainer}>
              <span className={classes.feturedMoney}>{val.money}</span>
              <span className={classes.feturedMoneyRate}>
                {val.rate}{" "}
                {val.rate > 0 ? (
                  <ArrowUpward style={{ color: "#089608", fontSize: "20px" }} />
                ) : (
                  <ArrowDownward style={{ color: "red", fontSize: "20px" }} />
                )}
              </span>
            </div>
            <span className={classes.feturedSub}> Compared to last month</span>
          </div>
        );
      })}
    </div>
  );
}
const useStyles = makeStyles(() => ({
  fetured: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  feturedItem: {
    flex: 1,
    margin: "25px 20px",
    padding: "30px",
    borderRadius: " 60px 0px 60px 0px",
    cursor: "pointer",
    boxShadow: "   8px 10px 13px 5px rgba(0,0,0,0.42) ",
  },
  feturedTitle: {
    fontSize: "20px",
  },
  feturedMoneyContainer: {
    margin: "10px 0px",
    display: "flex",
    alignItems: "center",
  },
  feturedMoney: {
    fontSize: "30px",
    fontWeight: "600",
  },
  feturedMoneyRate: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
  feturedSub: {
    fontSize: "14px",
    color: "gray",
  },
}));
