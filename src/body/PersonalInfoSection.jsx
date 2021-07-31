import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";

const PersonalInfoSection = ({
  showPersonalInfoTitleTextArea,
  setShowPersonalInfoTitleTextArea,
  myTextArea,
  controlPanelName,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  personalInfoTitle,
  personalInfoTitleFontSize,
  personalInfoTitleFontitalic,
  personalInfoTitleFontWeight,
  personalInfoTitleFontColor,
  personalInfoTitleFontFamily,
  personalInfoSubtitleFontSize,
  personalInfoSubtitleFontitalic,
  personalInfoSubtitleFontWeight,
  personalInfoSubtitleFontColor,
  personalInfoSubtitleFontFamily,

  personalInfoDetailFontSize,
  personalInfoDetailFontitalic,
  personalInfoDetailFontWeight,
  personalInfoDetailFontColor,
  personalInfoDetailFontFamily,
}) => {
  const [personalInfoMainArray, setPersonalInfoMainArray] = useState([
    {
      id: "PI1",
      title: {
        id: "PI1title",
        title: "Father's Name",
        show: true,
      },
      detail: {
        id: "PI1detail",
        detail: "MR. ROBERT SMITH",
        show: true,
      },
    },
    {
      id: "PI2",
      title: {
        id: "PI2title",
        title: "Mother's Name",
        show: true,
      },
      detail: {
        id: "PI2detail",
        detail: "MRS ROBERT SMITH",
        show: true,
      },
    },
    {
      id: "PI3",
      title: {
        id: "PI3title",
        title: "Date of Birth",
        show: true,
      },
      detail: {
        id: "PI3detail",
        detail: "01 JAN, 2020",
        show: true,
      },
    },
    {
      id: "PI4",
      title: {
        id: "PI4title",
        title: "Gender",
        show: true,
      },
      detail: {
        id: "PI4detail",
        detail: "MALE",
        show: true,
      },
    },
    {
      id: "PI5",
      title: {
        id: "PI5title",
        title: "Marital Status",
        show: true,
      },
      detail: {
        id: "PI5detail",
        detail: "SINGLE",
        show: true,
      },
    },
    {
      id: "PI6",
      title: {
        id: "PI6title",
        title: "Nationality",
        show: true,
      },
      detail: {
        id: "PI6detail",
        detail: "YOUR NATIONALITY",
        show: true,
      },
    },
    {
      id: "PI7",
      title: {
        id: "PI7title",
        title: "Religion",
        show: true,
      },
      detail: {
        id: "PI7detail",
        detail: "ISLAM",
        show: true,
      },
    },
    {
      id: "PI8",
      title: {
        id: "PI8title",
        title: "Present Address",
        show: true,
      },
      detail: {
        id: "PI8detail",
        detail:
          "ROAD: ##, HOUSE: ##, SECTION: ##, BLOCK: #, AVENUE: #, CITY NAME. ",
        show: true,
      },
    },
    {
      id: "PI9",
      title: {
        id: "PI9title",
        title: "Permanent Address",
        show: true,
      },
      detail: {
        id: "PI9detail",
        detail:
          "ROAD: ##, HOUSE: ##, SECTION: ##, BLOCK: #, AVENUE: #, CITY NAME. ",
        show: true,
      },
    },
  ]);
  const [removedPersonalInfoItemsArray, setRemovedPersonalInfoItemsArray] = useState(
    []
  );
  const [indexNo, setIndexNo] = useState(0);
  const [item, setItem] = useState({});
  const [refress, setRefress] = useState(false);
  const [type, setType] = useState("");
  const removeItem = (item) => {
    console.log("item", item);
    if (personalInfoMainArray.length > 1) {
      const oldTitle = item.title;
      const modifiedTitle = {
        ...oldTitle,
        title: "New Title",
        show: true,
      };
      const oldDetail = item.detail;
      const modifiedDetail = {
        ...oldDetail,
        detail: "New Deatil",
        show: true,
      };
      let newObject = { ...item, title: modifiedTitle, detail: modifiedDetail };
      removedPersonalInfoItemsArray.push(newObject);
      let newMainArray = personalInfoMainArray.filter(
        (res) => res.id !== item.id
      );
      setPersonalInfoMainArray(newMainArray);
    }
  };

  const addItem = () => {
    if (removedPersonalInfoItemsArray.length > 0) {
      let firstItem = removedPersonalInfoItemsArray[0];
      console.log("firstItem", firstItem);
      let newRemoverItemsArray = removedPersonalInfoItemsArray.filter(
        (res) => res.id !== firstItem.id
      );
      setRemovedPersonalInfoItemsArray(newRemoverItemsArray);
      personalInfoMainArray.push(firstItem);
    }
  };
  const checkData = () => {
    console.log("personalInfoMainArray", personalInfoMainArray);
    console.log("removedPersonalInfoItemsArray", removedPersonalInfoItemsArray);
  };

  const fnsetvalue = (item, i, type) => {
    console.log("item", item);
    setIndexNo(i);
    setType(type);
    console.log("item.title.id", item.title.id);
    console.log("type", type);
    let newObject;
    if (type === "title") {
      setControlPanelName(item.title.title);
      const oldItem = item.title;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, title: modifiedItem };
    } else if (type === "detail") {
      setControlPanelName(item.detail.detail);
      const oldItem = item.detail;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, detail: modifiedItem };
    }

    console.log("newObject", newObject);
    setItem(newObject);
    personalInfoMainArray[i] = newObject;
  };
  const saveNew = () => {
    console.log("saveNew");
    try {
      let newObject;

      if (type === "title") {
        const oldItem = item.title;
        const modifiedItem = {
          ...oldItem,
          title: controlPanelName,
          show: true,
        };
        newObject = { ...item, title: modifiedItem };
        console.log("newObject", newObject);
        personalInfoMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "detail") {
        const oldItem = item.detail;
        const modifiedItem = {
          ...oldItem,
          detail: controlPanelName,
          show: true,
        };
        newObject = { ...item, detail: modifiedItem };
        console.log("newObject", newObject);
        personalInfoMainArray[indexNo] = newObject;
        setRefress(!refress);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    if (type === "personalInfoTitle") {
      setShowPersonalInfoTitleTextArea(false);
      setControlPanelName(personalInfoTitle);
      setControlPanelFontSize(personalInfoTitleFontSize);
      setcontrolPanelFontitalic(personalInfoTitleFontitalic);
      setcontrolPanelFontWeight(personalInfoTitleFontWeight);
      setControlPanelFontColor(personalInfoTitleFontColor);
      setcontrolPanelFontFamily(personalInfoTitleFontFamily);
    } else if (type === "personalInfoSubtitle") {
      // setControlPanelName(personalInfoDetail);
      setControlPanelFontSize(personalInfoSubtitleFontSize);
      setcontrolPanelFontitalic(personalInfoSubtitleFontitalic);
      setcontrolPanelFontWeight(personalInfoSubtitleFontWeight);
      setControlPanelFontColor(personalInfoSubtitleFontColor);
      setcontrolPanelFontFamily(personalInfoSubtitleFontFamily);
    } else if (type === "personalInfoDetail") {
      // setControlPanelName(personalInfoDetail);
      setControlPanelFontSize(personalInfoDetailFontSize);
      setcontrolPanelFontitalic(personalInfoDetailFontitalic);
      setcontrolPanelFontWeight(personalInfoDetailFontWeight);
      setControlPanelFontColor(personalInfoDetailFontColor);
      setcontrolPanelFontFamily(personalInfoDetailFontFamily);
    }
  };

  return (
    <>
     
      <button onClick={checkData}>Check Arrays</button>
      <button onClick={addItem}>Add New Object</button>
      <button onClick={saveNew}>Save Data</button>
      <div>
        {showPersonalInfoTitleTextArea ? (
          <Typography
            onClick={() => SetValuesToControlPanel("personalInfoTitle")}
            style={{
              fontSize: `${personalInfoTitleFontSize}px`,
              fontWeight: `${personalInfoTitleFontWeight}`,
              fontStyle: `${personalInfoTitleFontitalic}`,
              color: `${personalInfoTitleFontColor}`,
              fontFamily: `${personalInfoTitleFontFamily}`,
              cursor: "pointer",
            }}
          >
            {personalInfoTitle}
          </Typography>
        ) : (
          myTextArea()
        )}
      </div>
      {personalInfoMainArray.map((item, i) => (
        <div id={item.id} key={i} style={{ marginBottom: "13px" }}>
          <div id={item.title.id}>
            {item.title.show ? (
              <Typography
                onClick={() => {
              
                  fnsetvalue(item, i, "title");
                  SetValuesToControlPanel("personalInfoSubtitle");
                }}
                style={{
                  fontSize: `${personalInfoSubtitleFontSize}px`,
                  fontWeight: `${personalInfoSubtitleFontWeight}`,
                  fontStyle: `${personalInfoSubtitleFontitalic}`,
                  color: `${personalInfoSubtitleFontColor}`,
                  fontFamily: `${personalInfoSubtitleFontFamily}`,
                  cursor: "pointer",
                }}
              >
                {item.title.title}
                <ClearIcon
                  style={{ position: "absolute", marginLeft: "20px" }}
                  fontSize="small"
                  onClick={() => removeItem(item)}
                />
              </Typography>
            ) : (
              myTextArea()
            )}
          </div>
          <div id={item.detail.id}>
            {item.detail.show ? (
              <Typography
                onClick={() => {
           
                  fnsetvalue(item, i, "detail");
                  SetValuesToControlPanel("personalInfoDetail");
                }}
                style={{
                  fontSize: `${personalInfoDetailFontSize}px`,
                  fontWeight: `${personalInfoDetailFontWeight}`,
                  fontStyle: `${personalInfoDetailFontitalic}`,
                  color: `${personalInfoDetailFontColor}`,
                  fontFamily: `${personalInfoDetailFontFamily}`,
                  cursor: "pointer",
                }}
              >
                {item.detail.detail}
              </Typography>
            ) : (
              myTextArea()
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfoSection;
