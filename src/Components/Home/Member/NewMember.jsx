import { Avatar } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";

const member = [
  {
    img: "https://randomuser.me/api/portraits/med/men/87.jpg",
    name: "Rafael Diaz ",
    job: "Software Engineer",
  },
  {
    img: "https://randomuser.me/api/portraits/med/women/13.jpg",
    name: "Victoria Dumont ",
    job: "Frontend Developer",
  },
  {
    img: "https://randomuser.me/api/portraits/med/women/74.jpg",
    name: "Fatma Çetin ",
    job: "Backend Developer",
  },
  {
    img: "https://randomuser.me/api/portraits/med/women/30.jpg",
    name: "Lena Ramos ",
    job: "Analytic Engineer",
  },
  {
    img: "https://randomuser.me/api/portraits/med/women/49.jpg",
    name: "Faith Simpson ",
    job: "System Engineer",
  },
];
export default function NewMember() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {member.map((val, key) => {
        return (
          <div key={key} className={classes.box}>
            <div className={classes.avatar}>
              <Avatar alt="Remy Sharp" src={val.img} />
            </div>
            <div className={classes.details}>
              <h4>{val.name}</h4>
              <p>{val.job}</p>
            </div>
            <div className={classes.displayBox}>
              <VisibilityIcon />
              <p>Display</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    padding: "10px",
    justifyContent: "space-between",
    borderBottom: "1px solid #d1dcf0",
  },
  avatar: {
    marginRight: "20px",
  },
  displayBox: {
    display: "flex",
    alignItems: "center",
    background: "#ced5e0",
    borderRadius: "20px",
    padding: "0px 5px",
    cursor: "pointer",
  },
  main: {
    boxShadow: "  8px 10px 13px 5px rgba(0,0,0,0.42)",
    margin: "20px",
  },
}));
