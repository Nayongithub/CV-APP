import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import MuiAlert from "@material-ui/lab/Alert";


const SkillSection = ({
  myTextArea,
  showSkillTitleTextArea,
  setShowSkillTitleTextArea,
  controlPanelName,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  typeName,
  setTypeName,
  skillTitle,
  skillTitleFontSize,
  skillTitleFontitalic,
  skillTitleFontWeight,
  skillTitleFontColor,
  skillTitleFontFamily,
  skillDetailFontSize,
  skillDetailFontitalic,
  skillDetailFontWeight,
  skillDetailFontColor,
  skillDetailFontFamily,
}) => {
  const [skillMainArray, setSkillMainArray] = useState([
    { id: "skill1", value: "MS Word", show: true },
    { id: "skill2", value: "MS Excel", show: true },
    { id: "skill3", value: "MS PowerPoint", show: true },
    { id: "skill4", value: "Photoshop", show: true },
    { id: "skill5", value: "Illustrator", show: true },
    { id: "skill6", value: "Billing", show: true },
    { id: "skill7", value: "Answering Phones", show: true },
    { id: "skill8", value: "Welcoming Visitors", show: true },
    { id: "skill9", value: "Communication Skills", show: true },
    { id: "skill10", value: "Record-Keeping", show: true },
  ]);
  const [removedSkillItemsArray, setRemovedSkillItemsArray] = useState([]);
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
    if (skillMainArray.length > 4) {
      let newItem = { id: item.id, value: "Skill Title", show: true };
      removedSkillItemsArray.push(newItem);
      let newMainArray = skillMainArray.filter((res) => res !== item);
      setSkillMainArray(newMainArray);
    } else {
      setMessage("Minimum 4 skill must be added. Or delete skill section");
      handleClick();
    }
  };

  const addItem = () => {
    if (removedSkillItemsArray.length > 0) {
      let firstItem = removedSkillItemsArray[0];
      console.log("firstItem", firstItem);
      let newRemoverItemsArray = removedSkillItemsArray.filter(
        (res) => res.id !== firstItem.id
      );
      setRemovedSkillItemsArray(newRemoverItemsArray);
      skillMainArray.push(firstItem);
    } else {
      setMessage("Maximum 10 skill can be added");
      handleClick();
    }
  };
  const checkData = () => {
    console.log("skillMainArray", skillMainArray);
    console.log("removedSkillItemsArray", removedSkillItemsArray);
  };
  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    console.log("SetValuesToControlPanel type", type);
    if (type === "skillTitle") {
      setShowSkillTitleTextArea(false);
      setControlPanelName(skillTitle);
      setControlPanelFontSize(skillTitleFontSize);
      setcontrolPanelFontitalic(skillTitleFontitalic);
      setcontrolPanelFontWeight(skillTitleFontWeight);
      setControlPanelFontColor(skillTitleFontColor);
      setcontrolPanelFontFamily(skillTitleFontFamily);
    } else if (type === "skillDetail") {
      console.log("skillDetail");
      setControlPanelFontSize(skillDetailFontSize);
      setcontrolPanelFontitalic(skillDetailFontitalic);
      setcontrolPanelFontWeight(skillDetailFontWeight);
      setControlPanelFontColor(skillDetailFontColor);
      setcontrolPanelFontFamily(skillDetailFontFamily);
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
    skillMainArray[i] = modifiedItem;
  };
  const saveNew = () => {
    let modifiedItem = { id: itemId, value: controlPanelName, show: true };
    console.log("modifiedItem", modifiedItem);
    skillMainArray[indexNo] = modifiedItem;
    setRefresh(!refresh);
    setShowSkillTitleTextArea(true)
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
        {showSkillTitleTextArea ? (
          <Typography
            onClick={() => SetValuesToControlPanel("skillTitle")}
            style={{
              fontSize: `${skillTitleFontSize}px`,
              fontWeight: `${skillTitleFontWeight}`,
              fontStyle: `${skillTitleFontitalic}`,
              color: `${skillTitleFontColor}`,
              fontFamily: `${skillTitleFontFamily}`,
              cursor: "pointer",
            }}
          >
            {skillTitle}
          </Typography>
        ) : (
          myTextArea()
        )}
      </div>
      {skillMainArray.map((item, i) => (
        <div id={item.id} key={i} style={{ marginTop: "5px" }}>
          {item.show === true ? (
            <>
              <Typography
                style={{
                  fontSize: `${skillDetailFontSize}px`,
                  fontWeight: `${skillDetailFontWeight}`,
                  fontStyle: `${skillDetailFontitalic}`,
                  color: `${skillDetailFontColor}`,
                  fontFamily: `${skillDetailFontFamily}`,
                  cursor: "pointer",
                }}
                onClick={() => {
                  SetValuesToControlPanel("skillDetail");
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

export default SkillSection;
