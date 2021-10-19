import React from "react";
import { makeStyles } from "@mui/styles";
import {
  AttachMoney,
  BarChart,
  DateRange,
  Feedback,
  LineStyle,
  MailOutline,
  Message,
  Person,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";

const array = [
  {
    name: "Dashboard",
    message: [
      { icon: <LineStyle />, iconName: "Home" },
      { icon: <Timeline />, iconName: "Analytics" },
      { icon: <TrendingUp />, iconName: "Sales" },
    ],
  },
  {
    name: "Quick Meny",
    message: [
      { icon: <Person />, iconName: "User" },
      { icon: <DateRange />, iconName: "Products" },
      { icon: <AttachMoney />, iconName: "Transaction" },
      { icon: <BarChart />, iconName: "Reports" },
    ],
  },
  {
    name: "Notifications",
    message: [
      { icon: <MailOutline />, iconName: "Mail" },
      { icon: <Feedback />, iconName: "Feedback" },
      { icon: <Message />, iconName: "Message" },
    ],
  },
];
export default function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.SideBar}>
      <div className={classes.sideBarWrapper}>
        {array.map((val, key) => {
          return (
            <div key={key} className={classes.sideBarMenu}>
              <h3 className={classes.sideBarTitle}>{val.name}</h3>
              {val.message.map((title, key) => {
                return (
                  <ul key={key} className={classes.sideBarList}>
                    <li className={classes.sideBarListItem}>
                      <div className={classes.icon}>{title.icon}</div>
                      {title.iconName}
                    </li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  SideBar: {
    position: "fixed",
    top: "70px",
    background: "rgb(251,251,255)",
  },
  sideBarWrapper: {
    padding: "20px",
    color: "#555",
  },
  sideBarMenu: {
    marginBottom: "10px",
  },
  sideBarTitle: {
    fontSize: "13px",
    color: "rgb(187,186,186)",
  },
  sideBarList: {
    listStyle: "none",
  },
  sideBarListItem: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    marginRight: "5px",
  },
}));
