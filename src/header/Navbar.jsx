import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0px auto",
    padding: "0px",
    width: "980px",
    //  background:'#FBF1F1'
  },
  navbarstyle: {
    listStyleType: "none",
    margin: 0,
    padding: "10px 100px",
    overflow: "hidden",
    backgroundColor: "coral",
    "& li": {
      float: "left",
      "& a": {
        display: "block",
        color: "white",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        "&:hover": {
          color: "black",
        },
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <ul className={classes.navbarstyle}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/pdf-test">PDFTest</Link>
          </li>
          <li>
            <Link to="/print">Print</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
