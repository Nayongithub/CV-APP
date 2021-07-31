import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textArea: {
    "&:focus": {
      outline: "none !important",
      borderColor: "rgb(0, 0, 0,0)",
    },
  },
}));
const NameSection = ({
  myTextArea,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  name,
  nameFontSize,
  nameFontitalic,
  nameFontWeight,
  nameFontColor,
  nameFontFamily,
  designation,
  designationFontSize,
  designationFontitalic,
  designationFontWeight,
  designationFontColor,
  designationFontFamily,
  catchClick,
  setShowNameTextArea,
  showNameTextArea,
  showDesignationTextArea,
  setShowDesignationTextArea,
  setRefresh,
  refresh,
  Setvalues,
}) => {
  const classes = useStyles();

  const SetValuesToControlPanel = (type) => {
    // setRefresh(!refresh);
    setTypeName(type);
    if (type === "name") {
      setShowNameTextArea(false);
      setControlPanelName(name);
      setControlPanelFontSize(nameFontSize);
      setcontrolPanelFontWeight(nameFontWeight);
      setcontrolPanelFontitalic(nameFontitalic);
      setControlPanelFontColor(nameFontColor);
      setcontrolPanelFontFamily(nameFontFamily);
    } else if (type === "designation") {
      setShowDesignationTextArea(false);
      setControlPanelName(designation);
      setControlPanelFontSize(designationFontSize);
      setcontrolPanelFontWeight(designationFontWeight);
      setcontrolPanelFontitalic(designationFontitalic);
      setControlPanelFontColor(designationFontColor);
      setcontrolPanelFontFamily(designationFontFamily);
    }
    setTimeout(function () {
      document.getElementById("nameTextareaAutosize").select();
    }, 200);
  };
  // const catchClick = (id) => {
  //   console.log('id',id,typeof(id));
  //   console.log("catchClick Working");
  //   const concernedElement = document.getElementById(id);
  //   document.addEventListener("mousedown", (event) => {
  //     if (concernedElement.contains(event.target)) {
  //       console.log("Clicked Inside");
  //     } else {
  //       console.log("Clicked Outside / Elsewhere");
  //       setShowNameTextArea(true);
  //       setShowDesignationTextArea(true)
  //     }
  //   });
  // };
  const save =()=>{
    console.log("save");
    setShowNameTextArea(true)
    setShowDesignationTextArea(true)
  }
  return (
    <>
      <div style={{ overflowWrap: "anywhere" }}>
        <button onClick={save}>save</button>
        <div
          id="nameDiv"
          className="click-text"
          onClick={() => catchClick("nameDiv")}
        >
          {showNameTextArea ? (
            <Typography
              onClick={() => SetValuesToControlPanel("name")}
              style={{
                fontSize: `${nameFontSize}px`,
                fontWeight: `${nameFontWeight}`,
                fontStyle: `${nameFontitalic}`,
                color: `${nameFontColor}`,
                fontFamily: `${nameFontFamily}`,
                cursor: "pointer",
                backgroundColor: "green",
                // lineHeight:1.65
              }}
            >
              {name}
            </Typography>
          ) : (
            myTextArea()
          )}
        </div>
        <div
          id="designationDiv"
          className="click-text"
          onClick={() => catchClick("designationDiv")}
        >
          {showDesignationTextArea ? (
            <Typography
              style={{
                fontSize: `${designationFontSize}px`,
                fontWeight: `${designationFontWeight}`,
                fontStyle: `${designationFontitalic}`,
                color: `${designationFontColor}`,
                fontFamily: `${designationFontFamily}`,
                cursor: "pointer",
                // lineHeight:1.65
              }}
              onClick={() => SetValuesToControlPanel("designation")}
            >
              {designation}
            </Typography>
          ) : (
            myTextArea()
          )}
        </div>
      </div>
    </>
  );
};

export default NameSection;
