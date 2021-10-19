import React from "react";
import { makeStyles } from "@mui/styles";
import { NotificationsNone } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import LanguageIcon from "@mui/icons-material/Language";

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.topbar}>
      <div className={classes.topbarwrapper}>
        <div className={classes.topleft}>
          <span className={classes.logo}>Dashboard</span>
        </div>
        <div className={classes.topright}>
          <div className={classes.topbariconsContainer}>
            <Badge
              color="secondary"
              badgeContent={1}
              showZero
              className={classes.badge}
            >
              <NotificationsNone />
            </Badge>
            <Badge
              color="secondary"
              badgeContent={0}
              showZero
              className={classes.badge}
            >
              <LanguageIcon />
            </Badge>
            <div className={classes.badge}>
              <SettingsIcon />
            </div>
            <div>
              <img
                className={classes.avatar}
                src="https://randomuser.me/api/portraits/med/men/28.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  topbar: {
    width: "100%",
    height: "60px",
    backgroundColor: "white",
    position: "sticky",
    top: "0px",
    borderBottom: "1px solid #cde0ca",
    zIndex: "999",
  },
  topbarwrapper: {
    height: "100%",
    padding: "0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "30px",
    color: "darkblue",
    cursor: "pointer",
  },
  topbariconsContainer: {
    display: "flex",
    width: "140px",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  badge: {
    cursor: "pointer",
  },
  avatar: {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
}));
