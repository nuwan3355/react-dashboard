import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const data = [
  createData(
    "https://randomuser.me/api/portraits/med/men/87.jpg",
    "Julias@gmail.com",
    "Active",
    "$24"
  ),
  createData(
    "https://randomuser.me/api/portraits/med/women/13.jpg",
    "Jessica@gmail.com",
    "Active",
    "$37"
  ),
  createData(
    "https://randomuser.me/api/portraits/med/women/74.jpg",
    "Sofiya@gmail.com",
    "Active",
    "$24"
  ),
  createData(
    "https://randomuser.me/api/portraits/med/women/30.jpg",
    "Catharin@gmail.com",
    "Active",
    "$67"
  ),
  createData(
    "https://randomuser.me/api/portraits/med/women/49.jpg",
    "Rebbeca.com",
    "Active",
    "$49"
  ),
];

export default function BasicTable() {
  const [rows, setRows] = React.useState(data);
  const handleChange = (index) => {
    console.log(index);
    const aa = [...rows];
    aa.splice(index, 1);
    setRows(aa);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ margin: " 30px auto", width: "90%", textAlign: "center" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Profile</TableCell>
            <TableCell align="right">Gmail</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Transaction</TableCell>
            <TableCell align="center">Protein</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar alt="Remy Sharp" src={row.name} />
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell
                align="center"
                style={{ textAlign: "center", margin: "auto" }}
              >
                <div style={{ display: "inline-flex" }}>
                  <Link to={"/user/" + key} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: "lightgreen",
                        padding: "3px",
                        borderRadius: "10px",
                        width: "60px",
                        margin: "auto",
                        cursor: "pointer",
                      }}
                    >
                      edit
                    </div>
                  </Link>
                  <div
                    onClick={() => handleChange(key)}
                    style={{
                      marginLeft: "10px",
                      cursor: "pointer",
                      border: "1px solid gray",
                    }}
                  >
                    <Delete />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
