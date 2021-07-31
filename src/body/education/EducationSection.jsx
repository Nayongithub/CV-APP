import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import EducationListView from "./partial/EducationListView";
import EducationSideBySidyView from "./partial/EducationSideBySidyView";
import EducationTwoSideView from "./partial/EducationTwoSideView";
import EducationTwoSideView2 from "./partial/EducationTwoSideView2";
import EducationTabelView from "./partial/EducationTabelView";

const useStyles = makeStyles({
  hide: {
    display: "none",
  },
  HoverStyle: {
    "&:hover #showMe": {
      display: "block",
    },
  },
});

const EducationSection = ({
  themeColor,
  showEducationTitleTextArea,
  setShowEducationTitleTextArea,
  myTextArea,
  controlPanelName,
  setControlPanelName,
  setControlPanelFontSize,
  setControlPanelLineHeight,
  setControlPanelLetterSpace,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  educationTitle,
  educationTitleFontSize,
  educationTitleLineHeight,
  educationTitleLetterSpace,
  educationTitleFontitalic,
  educationTitleFontWeight,
  educationTitleFontColor,
  setEducationTitleFontColor,
  educationTitleFontFamily,

  educationSubtitleFontSize,
  educationSubtitleLineHeight,
  educationSubtitleLetterSpace,
  educationSubtitleFontitalic,
  educationSubtitleFontWeight,
  educationSubtitleFontColor,
  educationSubtitleFontFamily,

  educationDetailFontSize,
  educationDetailLineHeight,
  educationDetailLetterSpace,
  educationDetailFontitalic,
  educationDetailFontWeight,
  educationDetailFontColor,
  educationDetailFontFamily,
}) => {
  const classes = useStyles();
 
  const titleStyles = [
    {},
    { textAlign: "center", width: "100%" },
    { borderBottom: `2px solid ${themeColor}` },
    {
      borderBottom: `2px solid ${themeColor}`,
      marginLeft: "auto",
      marginRight: "auto",
    },
    { borderBottom: `2px solid ${themeColor}`, width: "100%" },
    {
      borderBottom: `2px solid ${themeColor}`,
      textAlign: "center",
      width: "100%",
    },

    {
      borderTop: `2px solid ${themeColor}`,
      borderBottom: `2px solid ${themeColor}`,
    },
    {
      borderTop: `2px solid ${themeColor}`,
      borderBottom: `2px solid ${themeColor}`,
      marginLeft: "auto",
      marginRight: "auto",
    },
    {
      borderTop: `2px solid ${themeColor}`,
      borderBottom: `2px solid ${themeColor}`,
      width: "100%",
    },
    {
      borderTop: `2px solid ${themeColor}`,
      borderBottom: `2px solid ${themeColor}`,
      textAlign: "center",
      width: "100%",
    },

    { border: `2px solid ${themeColor}`, padding: "0px 10px" },
    {
      border: `2px solid ${themeColor}`,
      padding: "0px 10px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    { backgroundColor: `${themeColor}`, paddingRight: "10px" },
    {
      backgroundColor: `${themeColor}`,
      padding: "0px 60px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    { backgroundColor: `${themeColor}`, width: "100%" },
    { backgroundColor: `${themeColor}`, width: "100%", textAlign: "center" },
    {
      backgroundColor: `${themeColor}`,
      borderRadius: "0px 25px 25px 0px",
      paddingRight: "10px",
    },
    {
      backgroundColor: `${themeColor}`,
      borderRadius: "0px 25px 25px 0px",
      paddingRight: "30%",
    },
    {
      backgroundColor: `${themeColor}`,
      borderRadius: "25px",
      padding: "0px 20px",
    },
    {
      backgroundColor: `${themeColor}`,
      borderRadius: "25px",
      padding: "0px 20px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    {
      backgroundColor: `${themeColor}`,
      borderRadius: "25px",
      width: "100%",
      textAlign: "center",
      padding: "0px 20px",
    },
    {
      backgroundColor: `${themeColor}20`,
      borderLeft: `5px solid ${themeColor}`,
      width: "100%",
      padding: "0px 20px",
    },
  ];
  const [tableHeader, setTableHeader] = useState({
    id: "EduHeader",
    institute: {
      id: "EduHeaderInstitute",
      institute: "Institute",
      show: true,
    },
    degree: {
      id: "EduHeaderDegree",
      degree: "Degree",
      show: true,
    },
    subject: {
      id: "EduHeaderSubject",
      subject: "Subject",
      show: true,
    },
    passingYear: {
      id: "EduHeaderPassingYear",
      passingYear: "Section",
      show: true,
    },
    result: { id: "EduHeaderResult", result: "Result", show: true },
  });
  const [educationMainArray, setEducationMainArray] = useState([
    {
      id: "Edu1",
      institute: {
        id: "Edu1Institute",
        institute: "Your Institute Name",
        show: true,
      },
      degree: {
        id: "Edu1Degree",
        degree: "Your Certificate/degree Name",
        show: true,
      },
      subject: {
        id: "Edu1Subject",
        subject: "Group/Subject : Group/Subject Name",
        show: true,
      },
      passingYear: {
        id: "Edu1PassingYear",
        passingYear: "Passing year : 2020",
        show: true,
      },
      result: { id: "Edu1Result", result: "Result : 4.00", show: true },
    },
    {
      id: "Edu2",
      institute: {
        id: "Edu2Institute",
        institute: "Your Institute Name",
        show: true,
      },
      degree: {
        id: "Edu2Degree",
        degree: "Your Certificate/degree Name",
        show: true,
      },
      subject: {
        id: "Edu2Subject",
        subject: "Group/Subject : Group/Subject Name",
        show: true,
      },
      passingYear: {
        id: "Edu2PassingYear",
        passingYear: "Passing year : 2020",
        show: true,
      },
      result: { id: "Edu2Result", result: "Result : 5.00", show: true },
    },
    {
      id: "Edu3",
      institute: {
        id: "Edu3Institute",
        institute: "Your Institute Name",
        show: true,
      },
      degree: {
        id: "Edu3Degree",
        degree: "Your Certificate/degree Name",
        show: true,
      },
      subject: {
        id: "Edu3Subject",
        subject: "Group/Subject : Group/Subject Name",
        show: true,
      },
      passingYear: {
        id: "Edu3PassingYear",
        passingYear: "Passing year : 2020",
        show: true,
      },
      result: { id: "Edu3Result", result: "Result : 5.00", show: true },
    },
  ]);
  const [removedEducationItemsArray, setRemovedEducationItemsArray] = useState(
    [{
      id: "Edu4",
      institute: {
        id: "Edu4Institute",
        institute: "Your Institute Name",
        show: true,
      },
      degree: {
        id: "Edu4Degree",
        degree: "Your Certificate/degree Name",
        show: true,
      },
      subject: {
        id: "Edu4Subject",
        subject: "Group/Subject : Group/Subject Name",
        show: true,
      },
      passingYear: {
        id: "Edu4PassingYear",
        passingYear: "Passing year : 2020",
        show: true,
      },
      result: { id: "Edu4Result", result: "Result : 4.00", show: true },
    },
    {
      id: "Edu5",
      institute: {
        id: "Edu5Institute",
        institute: "Your Institute Name",
        show: true,
      },
      degree: {
        id: "Edu5Degree",
        degree: "Your Certificate/degree Name",
        show: true,
      },
      subject: {
        id: "Edu5Subject",
        subject: "Group/Subject : Group/Subject Name",
        show: true,
      },
      passingYear: {
        id: "Edu5PassingYear",
        passingYear: "Passing year : 2020",
        show: true,
      },
      result: { id: "Edu5Result", result: "Result : 4.00", show: true },
    },
  
  ]
  );
  const [indexNo, setIndexNo] = useState(0);
  const [isHeader, setIsHeader] = useState(false)
  const [item, setItem] = useState({});
  const [refress, setRefress] = useState(false);
  const [type, setType] = useState("");
  const [editMood, setEditMood] = useState(false);
  const [hideEducationSection, setHideEducationSection] = useState(false);
  const handleMood = () => {
    setEditMood(!editMood);
  };
  const hideSection = () => {
    setHideEducationSection(true);
  };

  const removeHeaderTopic = ( type) => {
   
    console.log("type", type);
  
    let newObject;
    if (type === "institute") {
      // this is not used
  
      const oldItem = tableHeader.institute;
      const modifiedItem = { ...oldItem, institute: '' };
      newObject = { ...tableHeader, institute: modifiedItem };
    } else if (type === "degree") {
      const oldItem = tableHeader.degree;
      const modifiedItem = { ...oldItem, degree: "" };
      newObject = { ...tableHeader, degree: modifiedItem };
    } else if (type === "subject") {
      const oldItem = tableHeader.subject;
      const modifiedItem = { ...oldItem, subject: "" };
      newObject = { ...tableHeader, subject: modifiedItem };
    } else if (type === "passingYear") {
      const oldItem = tableHeader.passingYear;
      const modifiedItem = { ...oldItem, passingYear: "" };
      newObject = { ...tableHeader, passingYear: modifiedItem };
    } else if (type === "result") {
      const oldItem = tableHeader.result;
      const modifiedItem = { ...oldItem, result: "" };
      newObject = { ...tableHeader, result: modifiedItem };
    }

    console.log("newObject", newObject);
    setTableHeader(newObject);
    setRefress(!refress)
  };
  const removeTopic = (item, i, type) => {
    console.log("item", item);
    console.log("type", type);
    let newObject;
    if (type === "institute") {
        // this is not used
      setControlPanelName(item.institute.institute);
      const oldItem = item.institute;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, institute: modifiedItem };
    } else if (type === "degree") {
      const oldItem = item.degree;
      const modifiedItem = { ...oldItem, degree: "" };
      newObject = { ...item, degree: modifiedItem };
    } else if (type === "subject") {
      const oldItem = item.subject;
      const modifiedItem = { ...oldItem, subject: "" };
      newObject = { ...item, subject: modifiedItem };
    } else if (type === "passingYear") {
      const oldItem = item.passingYear;
      const modifiedItem = { ...oldItem, passingYear: "" };
      newObject = { ...item, passingYear: modifiedItem };
    } else if (type === "result") {
      const oldItem = item.result;
      const modifiedItem = { ...oldItem, result: "" };
      newObject = { ...item, result: modifiedItem };
    }

    console.log("newObject", newObject);
    setItem(newObject);
    educationMainArray[i] = newObject;
  };
  const removeItem = (item) => {
    console.log("item", item);
    if (educationMainArray.length > 1) {
      const oldInstitue = item.institute;
      const modifiedInstitue = {
        ...oldInstitue,
        institute: "Your Institute Name",
        show: true,
      };
      const oldDegree = item.degree;
      const modifiedDegree = {
        ...oldDegree,
        degree: "Your Certificate/degree Name",
        show: true,
      };
      const oldSubject = item.subject;
      const modifiedSubject = {
        ...oldSubject,
        degree: "Group/Subject : Group/Subject Name",
        show: true,
      };
      const oldPassingYear = item.passingYear;
      const modifiedPassingYear = {
        ...oldPassingYear,
        passingYear: "Passing year : 2020",
        show: true,
      };
      const oldResult = item.result;
      const modifiedResult = {
        ...oldResult,
        result: "Result : 5.00",
        show: true,
      };

      let newObject = {
        ...item,
        institute: modifiedInstitue,
        degree: modifiedDegree,
        subject: modifiedSubject,
        passingYear: modifiedPassingYear,
        result: modifiedResult,
      };

      removedEducationItemsArray.push(newObject);
      let newMainArray = educationMainArray.filter((res) => res.id !== item.id);
      setEducationMainArray(newMainArray);
    }
  };

  const addItem = () => {
    if (removedEducationItemsArray.length > 0) {
      let firstItem = removedEducationItemsArray[0];
      console.log("firstItem", firstItem);
      let newRemoverItemsArray = removedEducationItemsArray.filter(
        (res) => res.id !== firstItem.id
      );
      setRemovedEducationItemsArray(newRemoverItemsArray);
      educationMainArray.push(firstItem);
    }
  };
  const fnsetHeadervalue = (item, type) => {
    
    if (editMood === false) {
      setIsHeader(true)
      console.log("item", item);
      console.log("type", type);
      setType(type);
      let newObject;
      if (type === "institute") {
        setControlPanelName(item);
        const oldItem = tableHeader.institute;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...tableHeader, institute: modifiedItem };
      } else if (type === "degree") {
        setControlPanelName(item);
        const oldItem = tableHeader.degree;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...tableHeader, degree: modifiedItem };
      } else if (type === "subject") {
        setControlPanelName(item);
        const oldItem = tableHeader.subject;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...tableHeader, subject: modifiedItem };
      } else if (type === "passingYear") {
        setControlPanelName(item);
        const oldItem = tableHeader.passingYear;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...tableHeader, passingYear: modifiedItem };
      } else if (type === "result") {
        setControlPanelName(item);
        const oldItem = tableHeader.result;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...tableHeader, result: modifiedItem };
      }
      setTableHeader(newObject);
    }
  };
  const fnsetvalue = (item, i, type) => {
    if (editMood === false) {
      console.log("item", item);
        setIndexNo(i);
      setType(type);
      console.log("item.institute.id", item.institute.id);
      console.log("type", type);
      let newObject;
      if (type === "institute") {
        setControlPanelName(item.institute.institute);
        const oldItem = item.institute;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...item, institute: modifiedItem };
      } else if (type === "degree") {
        setControlPanelName(item.degree.degree);
        const oldItem = item.degree;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...item, degree: modifiedItem };
      } else if (type === "subject") {
        setControlPanelName(item.subject.subject);
        const oldItem = item.subject;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...item, subject: modifiedItem };
      } else if (type === "passingYear") {
        setControlPanelName(item.passingYear.passingYear);
        const oldItem = item.passingYear;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...item, passingYear: modifiedItem };
      } else if (type === "result") {
        setControlPanelName(item.result.result);
        const oldItem = item.result;
        const modifiedItem = { ...oldItem, show: !oldItem.show };
        newObject = { ...item, result: modifiedItem };
      }

      console.log("newObject", newObject);
      setItem(newObject);
      educationMainArray[i] = newObject;
    }
  };
  const saveNewHeader = () => {
    console.log("saveNewHeader");
    setShowEducationTitleTextArea(true);
    console.log('type',type);
    try {
      let newObject;

      if (type === "institute") {
        const oldItem = tableHeader.institute;
        const modifiedItem = {
          ...oldItem,
          institute: controlPanelName,
          show: true,
        };
        newObject = { ...tableHeader, institute: modifiedItem };
        setTableHeader(newObject)
      } else if (type === "degree") {
        const oldItem = tableHeader.degree;
        const modifiedItem = {
          ...oldItem,
          degree: controlPanelName,
          show: true,
        };
        newObject = { ...tableHeader, degree: modifiedItem };
        setTableHeader(newObject)
      } else if (type === "subject") {
        const oldItem = tableHeader.subject;
        const modifiedItem = {
          ...oldItem,
          subject: controlPanelName,
          show: true,
        };
        newObject = { ...tableHeader, subject: modifiedItem };
        setTableHeader(newObject)
      } else if (type === "passingYear") {
        const oldItem = tableHeader.passingYear;
        const modifiedItem = {
          ...oldItem,
          passingYear: controlPanelName,
          show: true,
        };
        newObject = { ...tableHeader, passingYear: modifiedItem };
        console.log('newObject',newObject);
        setTableHeader(newObject)
      } else if (type === "result") {
        const oldItem = tableHeader.result;
        const modifiedItem = {
          ...oldItem,
          result: controlPanelName,
          show: true,
        };
        newObject = { ...tableHeader, result: modifiedItem };
        setTableHeader(newObject)
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const saveNew = () => {
    console.log("saveNew");
    setIsHeader(false)
    setShowEducationTitleTextArea(true);
    try {
      let newObject;

      if (type === "institute") {
        const oldItem = item.institute;
        const modifiedItem = {
          ...oldItem,
          institute: controlPanelName,
          show: true,
        };
        newObject = { ...item, institute: modifiedItem };
        console.log("newObject", newObject);
        educationMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "degree") {
        const oldItem = item.degree;
        const modifiedItem = {
          ...oldItem,
          degree: controlPanelName,
          show: true,
        };
        newObject = { ...item, degree: modifiedItem };
        console.log("newObject", newObject);
        educationMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "subject") {
        const oldItem = item.subject;
        const modifiedItem = {
          ...oldItem,
          subject: controlPanelName,
          show: true,
        };
        newObject = { ...item, subject: modifiedItem };
        console.log("newObject", newObject);
        educationMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "passingYear") {
        const oldItem = item.passingYear;
        const modifiedItem = {
          ...oldItem,
          passingYear: controlPanelName,
          show: true,
        };
        newObject = { ...item, passingYear: modifiedItem };
        console.log("newObject", newObject);
        educationMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "result") {
        const oldItem = item.result;
        const modifiedItem = {
          ...oldItem,
          result: controlPanelName,
          show: true,
        };
        newObject = { ...item, result: modifiedItem };
        console.log("newObject", newObject);
        educationMainArray[indexNo] = newObject;
        setRefress(!refress);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
const saveNewData=()=>{
  console.log('isHeader',isHeader);
  if (isHeader) {
    console.log('saveNewHeader1111');
    saveNewHeader()
  }else{
    console.log('saveNew11111');
    saveNew()
  }
}
  const SetValuesToControlPanel = (type) => {
    if (editMood === false) {
      setTypeName(type);
      if (type === "educationTitle") {
        setShowEducationTitleTextArea(false);
        setControlPanelName(educationTitle);
        setControlPanelFontSize(educationTitleFontSize);
        setControlPanelLineHeight(educationTitleLineHeight);
        setControlPanelLetterSpace(educationTitleLetterSpace);
        setcontrolPanelFontitalic(educationTitleFontitalic);
        setcontrolPanelFontWeight(educationTitleFontWeight);
        setControlPanelFontColor(educationTitleFontColor);
        setcontrolPanelFontFamily(educationTitleFontFamily);
      } else if (type === "educationSubtitle") {
        // setControlPanelName(educationDetail);
        setControlPanelFontSize(educationSubtitleFontSize);
        setControlPanelLineHeight(educationSubtitleLineHeight);
        setControlPanelLetterSpace(educationSubtitleLetterSpace);
        setcontrolPanelFontitalic(educationSubtitleFontitalic);
        setcontrolPanelFontWeight(educationSubtitleFontWeight);
        setControlPanelFontColor(educationSubtitleFontColor);
        setcontrolPanelFontFamily(educationSubtitleFontFamily);
      } else if (type === "educationDetail") {
        // setControlPanelName(educationDetail);
        setControlPanelFontSize(educationDetailFontSize);
        setControlPanelLineHeight(educationDetailLineHeight);
        setControlPanelLetterSpace(educationDetailLetterSpace);
        setcontrolPanelFontitalic(educationDetailFontitalic);
        setcontrolPanelFontWeight(educationDetailFontWeight);
        setControlPanelFontColor(educationDetailFontColor);
        setcontrolPanelFontFamily(educationDetailFontFamily);
      }
    }
  };
  const [styleNo, setStyleNo] = useState(0);
  const [appliedDesign, setappliedDesign] = useState(titleStyles[0]);
  const maxStyleNo = titleStyles.length - 1;
  const changeStyle = (type) => {
    if (type === "forward") {
      console.log("forward");
      if (styleNo === maxStyleNo) {
        setStyleNo(0);
        setappliedDesign(titleStyles[0]);
      } else {
        let newStyleNo = styleNo + 1;
        console.log("newStyleNo", newStyleNo);
        setStyleNo(newStyleNo);
        setappliedDesign(titleStyles[newStyleNo]);
      }
    } else if (type === "backward") {
      console.log("backward");
      if (styleNo === 0) {
        setStyleNo(maxStyleNo);
        setappliedDesign(titleStyles[maxStyleNo]);
      } else {
        let newStyleNo = styleNo - 1;
        setStyleNo(newStyleNo);
        setappliedDesign(titleStyles[newStyleNo]);
      }
    }
  };

  useEffect(() => {
    console.log("themeColor", themeColor);
    console.log("educationTitleFontColor", educationTitleFontColor);
    console.log("BackgroundColor", appliedDesign.backgroundColor);
    let BackgroundColor = appliedDesign.backgroundColor;
    if (BackgroundColor) {
      if (educationTitleFontColor === BackgroundColor) {
        console.log("same");
        setEducationTitleFontColor("white");
      }
    } else {
      setEducationTitleFontColor(themeColor);
    }
  }, [styleNo]);
  useEffect(() => {
    //only change here for title design
    let titleStyleStartNo = 4;
    setStyleNo(titleStyleStartNo);
    setappliedDesign(titleStyles[titleStyleStartNo]);
  }, []);
  if (hideEducationSection === true) {
    return <div></div>;
  } else {
    return (
      <div
        className={classes.HoverStyle}
        style={{
          position: "relative",
        }}
      >
        <div
          style={{ position: "absolute", right: "0px", top: "0px" }}
          className={classes.hide}
          id="showMe"
        >
          <ChevronLeftIcon
            onClick={() => changeStyle("backward")}
            style={{
              cursor: "pointer",
              border: "1px solid antiquewhite",
              borderRadius: "25px",
              backgroundColor: "antiquewhite",
              padding: "2px",
            }}
          />
          <ChevronRightIcon
            onClick={() => changeStyle("forward")}
            style={{
              cursor: "pointer",
              border: "1px solid antiquewhite",
              borderRadius: "25px",
              backgroundColor: "antiquewhite",
              padding: "2px",
            }}
          />
          <SaveIcon
            onClick={saveNewData}
            style={{
              cursor: "pointer",
              border: "1px solid antiquewhite",
              borderRadius: "25px",
              backgroundColor: "antiquewhite",
              padding: "2px",
            }}
          />
          <AddIcon
            onClick={addItem}
            style={{
              cursor: "pointer",
              border: "1px solid antiquewhite",
              borderRadius: "25px",
              backgroundColor: "antiquewhite",
              padding: "2px",
              marginLeft: "3px",
            }}
          />
          <EditIcon
            onClick={handleMood}
            style={{
              cursor: "pointer",
              border: "1px solid antiquewhite",
              borderRadius: "25px",
              backgroundColor: "antiquewhite",
              padding: "2px",
              marginLeft: "3px",
            }}
          />
          <ClearIcon
            style={{
              cursor: "pointer",
              border: "1px solid antiquewhite",
              borderRadius: "25px",
              backgroundColor: "antiquewhite",
              padding: "2px",
              marginLeft: "3px",
            }}
            onClick={() => hideSection()}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {showEducationTitleTextArea ? (
            <>
              <div style={appliedDesign}>
                <Typography
                  onClick={() => SetValuesToControlPanel("educationTitle")}
                  style={{
                    fontSize: `${educationTitleFontSize}px`,
                    lineHeight: `${educationTitleLineHeight}`,
                    letterSpacing: `${educationTitleLetterSpace}px`,
                    fontWeight: `${educationTitleFontWeight}`,
                    fontStyle: `${educationTitleFontitalic}`,
                    color: `${educationTitleFontColor}`,
                    fontFamily: `${educationTitleFontFamily}`,
                    cursor: "pointer",
                  }}
                >
                  {educationTitle}
                </Typography>
              </div>
            </>
          ) : (
            myTextArea()
          )}
        </div>
        <EducationTabelView
        controlPanelName={controlPanelName}
        setControlPanelName={setControlPanelName}
        setShowEducationTitleTextArea={setShowEducationTitleTextArea}
        isHeader={isHeader}
        fnsetHeadervalue={fnsetHeadervalue}
        tableHeader={tableHeader}
        removeHeaderTopic={removeHeaderTopic}
        setIsHeader={setIsHeader}
          editMood={editMood}
          removeTopic={removeTopic}
          SetValuesToControlPanel={SetValuesToControlPanel}
          fnsetvalue={fnsetvalue}
          removeItem={removeItem}
          educationMainArray={educationMainArray}
          setEducationMainArray={setEducationMainArray}
          myTextArea={myTextArea}
          
          educationSubtitleFontSize={educationSubtitleFontSize}
          educationSubtitleLineHeight={educationSubtitleLineHeight}
          educationSubtitleLetterSpace={educationSubtitleLetterSpace}
          educationSubtitleFontitalic={educationSubtitleFontitalic}
          educationSubtitleFontWeight={educationSubtitleFontWeight}
          educationSubtitleFontColor={educationSubtitleFontColor}
          educationSubtitleFontFamily={educationSubtitleFontFamily}
          educationDetailFontSize={educationDetailFontSize}
          educationDetailLineHeight={educationDetailLineHeight}
          educationDetailLetterSpace={educationDetailLetterSpace}
          educationDetailFontitalic={educationDetailFontitalic}
          educationDetailFontWeight={educationDetailFontWeight}
          educationDetailFontColor={educationDetailFontColor}
          educationDetailFontFamily={educationDetailFontFamily}
        />
        <hr/>
        <EducationTwoSideView2
          editMood={editMood}
          removeTopic={removeTopic}
          SetValuesToControlPanel={SetValuesToControlPanel}
          fnsetvalue={fnsetvalue}
          removeItem={removeItem}
          educationMainArray={educationMainArray}
          setEducationMainArray={setEducationMainArray}
          myTextArea={myTextArea}
          educationSubtitleFontSize={educationSubtitleFontSize}
          educationSubtitleLineHeight={educationSubtitleLineHeight}
          educationSubtitleLetterSpace={educationSubtitleLetterSpace}
          educationSubtitleFontitalic={educationSubtitleFontitalic}
          educationSubtitleFontWeight={educationSubtitleFontWeight}
          educationSubtitleFontColor={educationSubtitleFontColor}
          educationSubtitleFontFamily={educationSubtitleFontFamily}
          educationDetailFontSize={educationDetailFontSize}
          educationDetailLineHeight={educationDetailLineHeight}
          educationDetailLetterSpace={educationDetailLetterSpace}
          educationDetailFontitalic={educationDetailFontitalic}
          educationDetailFontWeight={educationDetailFontWeight}
          educationDetailFontColor={educationDetailFontColor}
          educationDetailFontFamily={educationDetailFontFamily}
        />
        <hr/>
        <EducationTwoSideView
          editMood={editMood}
          removeTopic={removeTopic}
          SetValuesToControlPanel={SetValuesToControlPanel}
          fnsetvalue={fnsetvalue}
          removeItem={removeItem}
          educationMainArray={educationMainArray}
          setEducationMainArray={setEducationMainArray}
          myTextArea={myTextArea}
          educationSubtitleFontSize={educationSubtitleFontSize}
          educationSubtitleLineHeight={educationSubtitleLineHeight}
          educationSubtitleLetterSpace={educationSubtitleLetterSpace}
          educationSubtitleFontitalic={educationSubtitleFontitalic}
          educationSubtitleFontWeight={educationSubtitleFontWeight}
          educationSubtitleFontColor={educationSubtitleFontColor}
          educationSubtitleFontFamily={educationSubtitleFontFamily}
          educationDetailFontSize={educationDetailFontSize}
          educationDetailLineHeight={educationDetailLineHeight}
          educationDetailLetterSpace={educationDetailLetterSpace}
          educationDetailFontitalic={educationDetailFontitalic}
          educationDetailFontWeight={educationDetailFontWeight}
          educationDetailFontColor={educationDetailFontColor}
          educationDetailFontFamily={educationDetailFontFamily}
        />
        <hr/>
        <EducationSideBySidyView
          editMood={editMood}
          removeTopic={removeTopic}
          SetValuesToControlPanel={SetValuesToControlPanel}
          fnsetvalue={fnsetvalue}
          removeItem={removeItem}
          educationMainArray={educationMainArray}
          setEducationMainArray={setEducationMainArray}
          myTextArea={myTextArea}
          educationSubtitleFontSize={educationSubtitleFontSize}
          educationSubtitleLineHeight={educationSubtitleLineHeight}
          educationSubtitleLetterSpace={educationSubtitleLetterSpace}
          educationSubtitleFontitalic={educationSubtitleFontitalic}
          educationSubtitleFontWeight={educationSubtitleFontWeight}
          educationSubtitleFontColor={educationSubtitleFontColor}
          educationSubtitleFontFamily={educationSubtitleFontFamily}
          educationDetailFontSize={educationDetailFontSize}
          educationDetailLineHeight={educationDetailLineHeight}
          educationDetailLetterSpace={educationDetailLetterSpace}
          educationDetailFontitalic={educationDetailFontitalic}
          educationDetailFontWeight={educationDetailFontWeight}
          educationDetailFontColor={educationDetailFontColor}
          educationDetailFontFamily={educationDetailFontFamily}
        />
<hr/>
        <EducationListView 
        themeColor={themeColor}
        appliedDesign={appliedDesign}
        editMood={editMood}
        removeTopic={removeTopic}
        SetValuesToControlPanel={SetValuesToControlPanel}
        fnsetvalue={fnsetvalue}
        removeItem={removeItem}
        educationMainArray={educationMainArray}
        showEducationTitleTextArea={showEducationTitleTextArea}
        setShowEducationTitleTextArea={
          setShowEducationTitleTextArea
        }
        myTextArea={myTextArea}
        controlPanelName={controlPanelName}
        setControlPanelName={setControlPanelName}
        setControlPanelFontSize={setControlPanelFontSize}
        setControlPanelLineHeight={setControlPanelLineHeight}
        setControlPanelLetterSpace={setControlPanelLetterSpace}
        setcontrolPanelFontWeight={setcontrolPanelFontWeight}
        setcontrolPanelFontitalic={setcontrolPanelFontitalic}
        setControlPanelFontColor={setControlPanelFontColor}
        setcontrolPanelFontFamily={setcontrolPanelFontFamily}
        setTypeName={setTypeName}
        educationTitle={educationTitle}
        educationTitleFontSize={educationTitleFontSize}
        educationTitleLineHeight={educationTitleLineHeight}
        educationTitleLetterSpace={educationTitleLetterSpace}
        educationTitleFontitalic={educationTitleFontitalic}
        educationTitleFontWeight={educationTitleFontWeight}
        educationTitleFontColor={educationTitleFontColor}
        setEducationTitleFontColor={setEducationTitleFontColor}
        educationTitleFontFamily={educationTitleFontFamily}
        educationSubtitleFontSize={educationSubtitleFontSize}
        educationSubtitleLineHeight={educationSubtitleLineHeight}
        educationSubtitleLetterSpace={educationSubtitleLetterSpace}
        educationSubtitleFontitalic={educationSubtitleFontitalic}
        educationSubtitleFontWeight={educationSubtitleFontWeight}
        educationSubtitleFontColor={educationSubtitleFontColor}
        educationSubtitleFontFamily={educationSubtitleFontFamily}
        educationDetailFontSize={educationDetailFontSize}
        educationDetailLineHeight={educationDetailLineHeight}
        educationDetailLetterSpace={educationDetailLetterSpace}
        educationDetailFontitalic={educationDetailFontitalic}
        educationDetailFontWeight={educationDetailFontWeight}
        educationDetailFontColor={educationDetailFontColor}
        educationDetailFontFamily={educationDetailFontFamily}
        />
      </div>
    );
  }
};

export default EducationSection;
