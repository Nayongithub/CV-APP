import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const LanguageSection = ({
  myTextArea,
  showLanguageTitleTextArea,
  setshowLanguageTitleTextArea,
  controlPanelName,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  typeName,
  setTypeName,
  languageTitle,
  languageTitleFontSize,
  languageTitleFontitalic,
  languageTitleFontWeight,
  languageTitleFontColor,
  languageTitleFontFamily,
  languageDetailFontSize,
  languageDetailFontitalic,
  languageDetailFontWeight,
  languageDetailFontColor,
  languageDetailFontFamily,
}) => {
  const [languageMainArray, setlanguageMainArray] = useState([
    { id: "language1", value: "English", show: true },
    { id: "language2", value: "French", show: true },
    { id: "language3", value: "Japanese", show: true },

   
 
   
  ]);
  const [removedlanguageItemsArray, setRemovedlanguageItemsArray] = useState([
    { id: "language4", value: "Language Name", show: true },
    { id: "language5", value: "Language Name", show: true },
    { id: "language6", value: "Language Name", show: true },
  ]);
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
    if (languageMainArray.length > 1) {
      let newItem = { id: item.id, value: "Language Name", show: true };
      removedlanguageItemsArray.push(newItem);
      let newMainArray = languageMainArray.filter((res) => res !== item);
      setlanguageMainArray(newMainArray);
    } else {
      setMessage("Minimum 4 language must be added. Or delete language section");
      handleClick();
    }
  };

  const addItem = () => {
    if (removedlanguageItemsArray.length > 0) {
      let firstItem = removedlanguageItemsArray[0];
      console.log("firstItem", firstItem);
      let newRemoverItemsArray = removedlanguageItemsArray.filter(
        (res) => res.id !== firstItem.id
      );
      setRemovedlanguageItemsArray(newRemoverItemsArray);
      languageMainArray.push(firstItem);
    } else {
      setMessage("Maximum 10 language can be added");
      handleClick();
    }
  };
  const checkData = () => {
    console.log("languageMainArray", languageMainArray);
    console.log("removedlanguageItemsArray", removedlanguageItemsArray);
  };
  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    console.log("SetValuesToControlPanel type", type);
    if (type === "languageTitle") {
      setshowLanguageTitleTextArea(false);
      setControlPanelName(languageTitle);
      setControlPanelFontSize(languageTitleFontSize);
      setcontrolPanelFontitalic(languageTitleFontitalic);
      setcontrolPanelFontWeight(languageTitleFontWeight);
      setControlPanelFontColor(languageTitleFontColor);
      setcontrolPanelFontFamily(languageTitleFontFamily);
    } else if (type === "languageDetail") {
      console.log("languageDetail");
      setControlPanelFontSize(languageDetailFontSize);
      setcontrolPanelFontitalic(languageDetailFontitalic);
      setcontrolPanelFontWeight(languageDetailFontWeight);
      setControlPanelFontColor(languageDetailFontColor);
      setcontrolPanelFontFamily(languageDetailFontFamily);
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
    languageMainArray[i] = modifiedItem;
  };
  const saveNew = () => {
    let modifiedItem = { id: itemId, value: controlPanelName, show: true };
    console.log("modifiedItem", modifiedItem);
    languageMainArray[indexNo] = modifiedItem;
    setRefresh(!refresh);
    setshowLanguageTitleTextArea(true)
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
        {showLanguageTitleTextArea ? (
          <Typography
            onClick={() => SetValuesToControlPanel("languageTitle")}
            style={{
              fontSize: `${languageTitleFontSize}px`,
              fontWeight: `${languageTitleFontWeight}`,
              fontStyle: `${languageTitleFontitalic}`,
              color: `${languageTitleFontColor}`,
              fontFamily: `${languageTitleFontFamily}`,
              cursor: "pointer",
            }}
          >
            {languageTitle}
          </Typography>
        ) : (
          myTextArea()
        )}
      </div>
      {languageMainArray.map((item, i) => (
        <div id={item.id} key={i} style={{ marginTop: "5px" }}>
          {item.show === true ? (
            <>
              <Typography
                style={{
                  fontSize: `${languageDetailFontSize}px`,
                  fontWeight: `${languageDetailFontWeight}`,
                  fontStyle: `${languageDetailFontitalic}`,
                  color: `${languageDetailFontColor}`,
                  fontFamily: `${languageDetailFontFamily}`,
                  cursor: "pointer",
                }}
                onClick={() => {
                  SetValuesToControlPanel("languageDetail");
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

export default LanguageSection;