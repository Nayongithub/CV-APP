import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './Navbar'
import Home from "../body/Home";
import PDFTest from "../body/PDFTest";
import Print from "../body/Print";


const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0px auto",
    padding: "0px",
    width:'980px'
    // width: "794px", a4 size width
    // height:"1122px" a4 size height
    //  background:'#FBF1F1'
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div>
         
          <Navbar/>
          <div className={classes.main}>
      
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
             
              <Route path="/pdf-test">
                <PDFTest />
              </Route>
              <Route path="/print">
                <Print />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Navigation;
