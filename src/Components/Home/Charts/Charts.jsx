import React from "react";
import { makeStyles } from "@mui/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.charts}>
      <h3 className={classes.title}>Sales Analytic</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  charts: {
    margin: "20px",
    padding: "20px",
    boxShadow: "  8px 10px 13px 5px rgba(0,0,0,0.42) ",
  },
  title: {
    marginBottom: "20px",
  },
}));
