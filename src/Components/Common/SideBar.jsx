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
import { NavLink } from "react-router-dom";

const array = [
  {
    name: "Dashboard",
    message: [
      { icon: <LineStyle />, iconName: "Home", link: "/" },
      { icon: <Timeline />, iconName: "Analytics", link: "/analytics" },
      { icon: <TrendingUp />, iconName: "Sales", link: "/sales" },
    ],
  },
  {
    name: "Quick Meny",
    message: [
      { icon: <Person />, iconName: "User", link: "/user-list" },
      { icon: <DateRange />, iconName: "Products", link: "/products" },
      { icon: <AttachMoney />, iconName: "Transaction", link: "/transaction" },
      { icon: <BarChart />, iconName: "Reports", link: "/reports" },
    ],
  },
  {
    name: "Notifications",
    message: [
      { icon: <MailOutline />, iconName: "Mail", link: "/mail" },
      { icon: <Feedback />, iconName: "Feedback", link: "/feedback" },
      { icon: <Message />, iconName: "Message", link: "/message" },
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
                    <NavLink
                      exact
                      to={title.link}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "blue",
                        borderBottom: "1px solid gray",
                      }}
                      
                   
                      className={classes.sideBarListItem}
                    >
                      <div className={classes.icon}>{title.icon}</div>
                      {title.iconName}
                    </NavLink>
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
    textDecoration: "none",
    color: "#555",
  },
  icon: {
    marginRight: "5px",
  },
}));
