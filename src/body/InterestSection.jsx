import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import MuiAlert from "@material-ui/lab/Alert";


const InterestSection = ({
  myTextArea,
  showInterestTitleTextArea,
  setShowInterestTitleTextArea,
  controlPanelName,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  typeName,
  setTypeName,
  interestTitle,
  interestTitleFontSize,
  interestTitleFontitalic,
  interestTitleFontWeight,
  interestTitleFontColor,
  interestTitleFontFamily,
  interestDetailFontSize,
  interestDetailFontitalic,
  interestDetailFontWeight,
  interestDetailFontColor,
  interestDetailFontFamily,
}) => {
  const [interestMainArray, setInterestMainArray] = useState([
    { id: "interest1", value: "Reading Nobel", show: true },
    { id: "interest2", value: "Traveling", show: true },
    { id: "interest3", value: "Photography", show: true },
    { id: "interest4", value: "Gardening", show: true },
    { id: "interest5", value: "Painting", show: true },
    { id: "interest6", value: "Hiking", show: true },
   
  ]);
  const [removedInterestItemsArray, setremovedInterestItemsArray] = useState([]);
  const [indexNo, setIndexNo] = useState(null);
  const [itemId, setItemId] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [refresh, setRefresh] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const removeItem = (item) => {
    console.log("removeItem", item);
    if (interestMainArray.length > 2) {
      let newItem = { id: item.id, value: "Interest Title", show: true };
      removedInterestItemsArray.push(newItem);
      let newMainArray = interestMainArray.filter((res) => res !== item);
      setInterestMainArray(newMainArray);
    } else {
      setMessage("Minimum 4 interest must be added. Or delete interest section");
      handleClick();
    }
  };

  const addItem = () => {
    if (removedInterestItemsArray.length > 0) {
      let firstItem = removedInterestItemsArray[0];
      console.log("firstItem", firstItem);
      let newRemoverItemsArray = removedInterestItemsArray.filter(
        (res) => res.id !== firstItem.id
      );
      setremovedInterestItemsArray(newRemoverItemsArray);
      interestMainArray.push(firstItem);
    } else {
      setMessage("Maximum 10 interest can be added");
      handleClick();
    }
  };
  const checkData = () => {
    console.log("interestMainArray", interestMainArray);
    console.log("removedInterestItemsArray", removedInterestItemsArray);
  };
  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    console.log("SetValuesToControlPanel type", type);
    if (type === "interestTitle") {
      setShowInterestTitleTextArea(false);
      setControlPanelName(interestTitle);
      setControlPanelFontSize(interestTitleFontSize);
      setcontrolPanelFontitalic(interestTitleFontitalic);
      setcontrolPanelFontWeight(interestTitleFontWeight);
      setControlPanelFontColor(interestTitleFontColor);
      setcontrolPanelFontFamily(interestTitleFontFamily);
    } else if (type === "interestDetail") {
      console.log("interestDetail");
      setControlPanelFontSize(interestDetailFontSize);
      setcontrolPanelFontitalic(interestDetailFontitalic);
      setcontrolPanelFontWeight(interestDetailFontWeight);
      setControlPanelFontColor(interestDetailFontColor);
      setcontrolPanelFontFamily(interestDetailFontFamily);
    }
  };
  const fnsetvalue = (item, i) => {
    console.log("fnsetvalue", item, i);
    setRefresh(!refresh);
    setIndexNo(i);
    setItemId(item.id);

    setControlPanelName(item.value);
    let modifiedItem = { ...item, show: !item.show };
    console.log("modifiedItem", modifiedItem);
    interestMainArray[i] = modifiedItem;
  };
  const saveNew = () => {
    let modifiedItem = { id: itemId, value: controlPanelName, show: true };
    console.log("modifiedItem", modifiedItem);
    interestMainArray[indexNo] = modifiedItem;
    setRefresh(!refresh);
    setShowInterestTitleTextArea(true)
  };

  return (
    <>
      {/* <div>
      
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="info">
            {message}
          </Alert>
        </Snackbar>
      </div> */}
      <button onClick={checkData}>Check</button>
      <button onClick={addItem}>Add New</button>

      <button onClick={saveNew}>Save New</button>
      <div>
        {showInterestTitleTextArea ? (
          <Typography
            onClick={() => SetValuesToControlPanel("interestTitle")}
            style={{
              fontSize: `${interestTitleFontSize}px`,
              fontWeight: `${interestTitleFontWeight}`,
              fontStyle: `${interestTitleFontitalic}`,
              color: `${interestTitleFontColor}`,
              fontFamily: `${interestTitleFontFamily}`,
              cursor: "pointer",
            }}
          >
            {interestTitle}
          </Typography>
        ) : (
          myTextArea()
        )}
      </div>
      {interestMainArray.map((item, i) => (
        <div id={item.id} key={i} style={{ marginTop: "5px" }}>
          {item.show === true ? (
            <>
              <Typography
                style={{
                  fontSize: `${interestDetailFontSize}px`,
                  fontWeight: `${interestDetailFontWeight}`,
                  fontStyle: `${interestDetailFontitalic}`,
                  color: `${interestDetailFontColor}`,
                  fontFamily: `${interestDetailFontFamily}`,
                  cursor: "pointer",
                }}
                onClick={() => {
                  SetValuesToControlPanel("interestDetail");
                  fnsetvalue(item, i);
                }}
              >
                {item.value}{" "}
                <ClearIcon
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    fontSize: "15px",
                    border: "1px solid antiquewhite",
                    marginLeft: "20px",
                    marginTop: "5px" 
                  }}
                  onClick={() => removeItem(item)}
                />
              </Typography>
            </>
          ) : (
            myTextArea()
          )}
        </div>
      ))}
    </>
  );
};

export default InterestSection;
