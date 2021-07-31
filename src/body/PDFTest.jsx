import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { jsPDF } from "jspdf";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatLineSpacingIcon from "@material-ui/icons/FormatLineSpacing";

import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import PowerInputIcon from "@material-ui/icons/PowerInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

//-----------------------Sections---------------------
import NameSection from "./NameSection";
import ContactSection from "./ContactSection";
import CareerObjectiveSection from "./CareerObjectiveSection";
import SkillSection from "./SkillSection";
import LanguageSection from "./LanguageSection";
import InterestSection from "./InterestSection";
import EducationSection from "./education/EducationSection";
import PersonalInfoSection from "./PersonalInfoSection";
import ReferenceSection from "./ReferenceSection";
import DeclarationSection from "./DeclarationSection";

const fontColors = [
  { color: "#641E16" },
  { color: "#78281F " },
  { color: "#512E5F" },
  { color: "#4A235A" },
  { color: "#203864" },
  { color: "#154360" },
  { color: "#1B4F72" },
  { color: "#0E6251" },
  { color: "#0B5345" },
  { color: "#145A32" },
  { color: "#186A3B" },
  { color: "#FCD765" },
  { color: "#7D6608" },
  { color: "#7E5109" },
  { color: "#784212" },
  { color: "#6E2C00" },
  { color: "white" },
  { color: "#7B7D7D" },
  { color: "#626567" },
  { color: "#4D5656" },
  { color: "#424949" },
  { color: "#1B2631" },
  { color: "#17202A" },
];
const fontFamilies = [
  { label: "Allura", value: "Allura, cursive" },
  {
    label: "Big Shoulders Stencil Display",
    value: "'Big Shoulders Stencil Display', cursive",
  },
  { label: "Dancing Script", value: "'Dancing Script', cursive" },
  { label: "Great Vibes", value: "Great Vibes, cursive" },
  { label: "Lato", value: "Lato, sans-serif" },
  { label: "Montserrat", value: "Montserrat, sans-serif" },
  { label: "Open Sans", value: "Open Sans, sans-serif" },
  { label: "Oswald", value: "Oswald, sans-serif" },
  { label: "Pacifico", value: "Pacifico, cursive" },
  { label: "Pinyon Script", value: "Pinyon Script, cursive" },
  { label: "Raleway", value: "Raleway, sans-serif" },
  { label: "Roboto", value: "Roboto, sans-serif" },
  { label: "Source Sans Pro", value: "Source Sans Pro, sans-serif" },
  { label: "Stint Ultra Condensed", value: "Stint Ultra Condensed, cursive" },
  { label: "Viaoda Libre", value: "Viaoda Libre, cursive" },
];

const useStyles = makeStyles((theme) => ({
  page1_left2: {
    padding: "80px 10px 10px 60px",
  },
  page1_right2: {
    padding: 10,
  },
  image_box: {
    // margin:'auto',
    height: 160,
    width: 160,
    border: "1px solid green",
    position: "relative",
  },
  image: {
    // margin:'auto',
    height: 160,
    width: 160,
  },

  color_table: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px",
  },
  center_align: {
    textAlign: "center",
  },
  textAreaStyle: {
    "&:focus": {
      outline: "none !important",
      border: 0,
      padding: 0,
      margin: 0,
      font: "Roboto",
    },
  },
}));

const PDFTest = (ref) => {
  const defaultImg = "/image/testImage.jpg";
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const classes = useStyles();
  // const [themeColor, setThemeColor] = useState("#203864");
  const themeColor = "#203864";
  const themeLineHeight = 1.5;
  const themeLetterSpace = 0.15;
  const [preview, setPreview] = useState();
  //--------------------Control Panel-------------------------------------
  const [controlPanelName, setControlPanelName] = useState("");
  const [controlPanelFontSize, setControlPanelFontSize] = useState(15);
  const [controlPanelLineHeight, setControlPanelLineHeight] = useState(0);
  const [controlPanelLetterSpace, setControlPanelLetterSpace] = useState(0);
  const [controlPanelFontWeight, setcontrolPanelFontWeight] = useState(400);
  const [controlPanelFontitalic, setcontrolPanelFontitalic] = useState("");
  const [controlPanelFontColor, setControlPanelFontColor] = useState("");
  const [controlPanelFontFamily, setcontrolPanelFontFamily] = useState("");
  //--------------------Name Div-------------------------------------

  const [name, setName] = useState("Md. Nayon Hossain");
  const [nameFontSize, setNameFontSize] = useState(25);
  const [nameFontitalic, setNameFontitalic] = useState("normal");
  const [nameFontWeight, setNameFontWeight] = useState(400);
  const [nameFontColor, setNameFontColor] = useState("white");
  const [nameFontFamily, setNameFontFamily] = useState("Roboto, sans-serif");
  const [showNameTextArea, setShowNameTextArea] = useState(true);

  const [designation, setDesignation] = useState("Reactjs Developer");
  const [designationFontSize, setDesignationFontSize] = useState(13);
  const [designationFontitalic, setDesignationFontitalic] = useState("normal");
  const [designationFontWeight, setDesignationFontWeight] = useState(400);
  const [designationFontColor, setDesignationFontColor] = useState("#FCD765");
  const [designationFontFamily, setDesignationFontFamily] =
    useState("Roboto, sans-serif");
  const [showDesignationTextArea, setShowDesignationTextArea] = useState(true);
  //-----------------Contact Div-------------------------------------

  const [contactTitle, setContactTitle] = useState("Contact");
  const [contactTitleFontSize, setContactTitleFontSize] = useState(25);
  const [contactTitleFontitalic, setContactTitleFontitalic] =
    useState("normal");
  const [contactTitleFontWeight, setContactTitleFontWeight] = useState(400);
  const [contactTitleFontColor, setContactTitleFontColor] = useState("#FCD765");
  const [contactTitleFontFamily, setContactTitleFontFamily] =
    useState("Roboto, sans-serif");
  const [contactAddress, setContactAddress] = useState(
    " Address: Section-11, Block-A, Avenue-2, Road-19, House-28 Mirpur Dhaka 1216"
  );
  const [contactAddressFontSize, setContactAddressFontSize] = useState(12);
  const [contactAddressFontitalic, setContactAddressFontitalic] =
    useState("normal");
  const [contactAddressFontWeight, setContactAddressFontWeight] = useState(400);
  const [contactAddressFontColor, setContactAddressFontColor] =
    useState("white");
  const [contactAddressFontFamily, setContactAddressFontFamily] =
    useState("Roboto, sans-serif");
  const [contactPhone, setContactPhone] = useState("Phone: +8801793661517");
  const [contactPhoneFontSize, setContactPhoneFontSize] = useState(12);
  const [contactPhoneFontitalic, setContactPhoneFontitalic] =
    useState("normal");
  const [contactPhoneFontWeight, setContactPhoneFontWeight] = useState(400);
  const [contactPhoneFontColor, setContactPhoneFontColor] = useState("white");
  const [contactPhoneFontFamily, setContactPhoneFontFamily] =
    useState("Roboto, sans-serif");
  const [contactEmail, setContactEmail] = useState(
    "<b>Email:</b> mahnayon@gmail.com"
  );
  const [contactEmailFontSize, setContactEmailFontSize] = useState(12);
  const [contactEmailFontitalic, setContactEmailFontitalic] =
    useState("normal");
  const [contactEmailFontWeight, setContactEmailFontWeight] = useState(400);
  const [contactEmailFontColor, setContactEmailFontColor] = useState("white");
  const [contactEmailFontFamily, setContactEmailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Career Objective Div-------------------------------------

  const [careerObjectiveTitle, setCareerObjectiveTitle] =
    useState("Career Objective");
  const [careerObjectiveTitleFontSize, setCareerObjectiveTitleFontSize] =
    useState(25);
  const [careerObjectiveTitleFontitalic, setCareerObjectiveTitleFontitalic] =
    useState("normal");
  const [careerObjectiveTitleFontWeight, setCareerObjectiveTitleFontWeight] =
    useState(400);
  const [careerObjectiveTitleFontColor, setCareerObjectiveTitleFontColor] =
    useState("#FCD765");
  const [careerObjectiveTitleFontFamily, setCareerObjectiveTitleFontFamily] =
    useState("Roboto, sans-serif");
  const [careerObjectiveDetail, setCareerObjectiveDetail] = useState(
    "To become a successful professional in the field of Information Technology by utilizing my skills and enable further personal and professional development and work towards the prosperity of the organization"
  );
  const [careerObjectiveDetailFontSize, setCareerObjectiveDetailFontSize] =
    useState(12);
  const [careerObjectiveDetailFontitalic, setCareerObjectiveDetailFontitalic] =
    useState("normal");
  const [careerObjectiveDetailFontWeight, setCareerObjectiveDetailFontWeight] =
    useState(400);
  const [careerObjectiveDetailFontColor, setCareerObjectiveDetailFontColor] =
    useState("white");
  const [careerObjectiveDetailFontFamily, setCareerObjectiveDetailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Skill Div-------------------------------------
  const [showSkillTitleTextArea, setShowSkillTitleTextArea] = useState(true);
  const [skillTitle, setSkillTitle] = useState("Skills");
  const [skillTitleFontSize, setSkillTitleFontSize] = useState(25);
  const [skillTitleFontitalic, setSkillTitleFontitalic] = useState("normal");
  const [skillTitleFontWeight, setSkillTitleFontWeight] = useState(400);
  const [skillTitleFontColor, setSkillTitleFontColor] = useState("#FCD765");
  const [skillTitleFontFamily, setSkillTitleFontFamily] =
    useState("Roboto, sans-serif");

  const [skillDetailFontSize, setSkillDetailFontSize] = useState(12);
  const [skillDetailFontitalic, setSkillDetailFontitalic] = useState("normal");
  const [skillDetailFontWeight, setSkillDetailFontWeight] = useState(400);
  const [skillDetailFontColor, setSkillDetailFontColor] = useState("white");
  const [skillDetailFontFamily, setSkillDetailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Language Div-------------------------------------
  const [showLanguageTitleTextArea, setShowLanguageTitleTextArea] =
    useState(true);
  const [languageTitle, setLanguageTitle] = useState("Languages");
  const [languageTitleFontSize, setLanguageTitleFontSize] = useState(25);
  const [languageTitleFontitalic, setLanguageTitleFontitalic] =
    useState("normal");
  const [languageTitleFontWeight, setLanguageTitleFontWeight] = useState(600);
  const [languageTitleFontColor, setLanguageTitleFontColor] =
    useState("#203864");
  const [languageTitleFontFamily, setLanguageTitleFontFamily] =
    useState("Roboto, sans-serif");

  const [languageDetailFontSize, setLanguageDetailFontSize] = useState(16);
  const [languageDetailFontitalic, setLanguageDetailFontitalic] =
    useState("normal");
  const [languageDetailFontWeight, setLanguageDetailFontWeight] = useState(400);
  const [languageDetailFontColor, setLanguageDetailFontColor] =
    useState("black");
  const [languageDetailFontFamily, setLanguageDetailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Interest Div-------------------------------------
  const [showInterestTitleTextArea, setShowInterestTitleTextArea] =
    useState(true);
  const [interestTitle, setInterestTitle] = useState("Interests");
  const [interestTitleFontSize, setInterestTitleFontSize] = useState(25);
  const [interestTitleFontitalic, setInterestTitleFontitalic] =
    useState("normal");
  const [interestTitleFontWeight, setInterestTitleFontWeight] = useState(600);
  const [interestTitleFontColor, setInterestTitleFontColor] =
    useState("#203864");
  const [interestTitleFontFamily, setInterestTitleFontFamily] =
    useState("Roboto, sans-serif");

  const [interestDetailFontSize, setInterestDetailFontSize] = useState(16);
  const [interestDetailFontitalic, setInterestDetailFontitalic] =
    useState("normal");
  const [interestDetailFontWeight, setInterestDetailFontWeight] = useState(400);
  const [interestDetailFontColor, setInterestDetailFontColor] =
    useState("black");
  const [interestDetailFontFamily, setInterestDetailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Education Div-------------------------------------
  const [showEducationTitleTextArea, setShowEducationTitleTextArea] =
    useState(true);
  const [educationTitle, setEducationTitle] = useState(
    "Academic Qualifications:"
  );
  const [educationTitleFontSize, setEducationTitleFontSize] = useState(25);
  const [educationTitleLineHeight, setEducationTitleLineHeight] =
    useState(themeLineHeight);
  const [educationTitleLetterSpace, seteducationTitleLetterSpace] =
    useState(themeLetterSpace);
  const [educationTitleFontitalic, setEducationTitleFontitalic] =
    useState("normal");
  const [educationTitleFontWeight, setEducationTitleFontWeight] = useState(600);
  // const [educationTitleFontColor, setEducationTitleFontColor] = useState("red");
  const [educationTitleFontColor, setEducationTitleFontColor] =
    useState(themeColor);
  const [educationTitleFontFamily, setEducationTitleFontFamily] =
    useState("Roboto, sans-serif");

  const [educationSubtitleFontSize, setEducationSubtitleFontSize] =
    useState(20);
  const [educationSubtitleLineHeight, setEducationSubtitleLineHeight] =
    useState(themeLineHeight);
  const [educationSubtitleLetterSpace, seteducationSubtitleLetterSpace] =
    useState(themeLetterSpace);
  const [educationSubtitleFontitalic, setEducationSubtitleFontitalic] =
    useState("normal");
  const [educationSubtitleFontWeight, setEducationSubtitleFontWeight] =
    useState(600);
  const [educationSubtitleFontColor, setEducationSubtitleFontColor] =
    useState("#000");
  const [educationSubtitleFontFamily, setEducationSubtitleFontFamily] =
    useState("Roboto, sans-serif");

  const [educationDetailFontSize, setEducationDetailFontSize] = useState(16);
  const [educationDetailLineHeight, setEducationDetailLineHeight] =
    useState(themeLineHeight);
  const [educationDetailLetterSpace, seteducationDetailLetterSpace] =
    useState(themeLetterSpace);
  const [educationDetailFontitalic, setEducationDetailFontitalic] =
    useState("normal");
  const [educationDetailFontWeight, setEducationDetailFontWeight] =
    useState(400);
  const [educationDetailFontColor, setEducationDetailFontColor] =
    useState("#000");
  const [educationDetailFontFamily, setEducationDetailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Personal Info Div-------------------------------------
  const [showPersonalInfoTitleTextArea, setShowPersonalInfoTitleTextArea] =
    useState(true);
  const [personalInfoTitle, setPersonalInfoTitle] = useState("Personal Info:");
  const [personalInfoTitleFontSize, setPersonalInfoTitleFontSize] =
    useState(25);
  const [personalInfoTitleFontitalic, setPersonalInfoTitleFontitalic] =
    useState("normal");
  const [personalInfoTitleFontWeight, setPersonalInfoTitleFontWeight] =
    useState(400);
  const [personalInfoTitleFontColor, setPersonalInfoTitleFontColor] =
    useState("#FCD765");
  const [personalInfoTitleFontFamily, setPersonalInfoTitleFontFamily] =
    useState("Roboto, sans-serif");

  const [personalInfoSubtitleFontSize, setPersonalInfoSubtitleFontSize] =
    useState(12);
  const [personalInfoSubtitleFontitalic, setPersonalInfoSubtitleFontitalic] =
    useState("normal");
  const [personalInfoSubtitleFontWeight, setPersonalInfoSubtitleFontWeight] =
    useState(400);
  const [personalInfoSubtitleFontColor, setPersonalInfoSubtitleFontColor] =
    useState("white");
  const [personalInfoSubtitleFontFamily, setPersonalInfoSubtitleFontFamily] =
    useState("Roboto, sans-serif");

  const [personalInfoDetailFontSize, setPersonalInfoDetailFontSize] =
    useState(14);
  const [personalInfoDetailFontitalic, setPersonalInfoDetailFontitalic] =
    useState("normal");
  const [personalInfoDetailFontWeight, setPersonalInfoDetailFontWeight] =
    useState(400);
  const [personalInfoDetailFontColor, setPersonalInfoDetailFontColor] =
    useState("white");
  const [personalInfoDetailFontFamily, setPersonalInfoDetailFontFamily] =
    useState("Roboto, sans-serif");
  //-----------------Reference Div-------------------------------------
  const [showReferenceTitleTextArea, setShowReferenceTitleTextArea] =
    useState(true);
  const [referenceTitle, setReferenceTitle] = useState("References:");
  const [referenceTitleFontSize, setReferenceTitleFontSize] = useState(25);
  const [referenceTitleFontitalic, setReferenceTitleFontitalic] =
    useState("normal");
  const [referenceTitleFontWeight, setReferenceTitleFontWeight] = useState(600);
  const [referenceTitleFontColor, setReferenceTitleFontColor] =
    useState("#203864");
  const [referenceTitleFontFamily, setReferenceTitleFontFamily] =
    useState("Roboto, sans-serif");

  const [referenceSubtitleFontSize, setReferenceSubtitleFontSize] =
    useState(16);
  const [referenceSubtitleFontitalic, setReferenceSubtitleFontitalic] =
    useState("normal");
  const [referenceSubtitleFontWeight, setReferenceSubtitleFontWeight] =
    useState(600);
  const [referenceSubtitleFontColor, setReferenceSubtitleFontColor] =
    useState("#000");
  const [referenceSubtitleFontFamily, setReferenceSubtitleFontFamily] =
    useState("Roboto, sans-serif");

  const [referenceDetailFontSize, setReferenceDetailFontSize] = useState(12);
  const [referenceDetailFontitalic, setReferenceDetailFontitalic] =
    useState("normal");
  const [referenceDetailFontWeight, setReferenceDetailFontWeight] =
    useState(400);
  const [referenceDetailFontColor, setReferenceDetailFontColor] =
    useState("#000");
  const [referenceDetailFontFamily, setReferenceDetailFontFamily] =
    useState("Roboto, sans-serif");

  //--------------------Declaration Div-------------------------------------

  const [declarationTitle, setDeclarationTitle] = useState("Declaration");
  const [declarationTitleFontSize, setDeclarationTitleFontSize] = useState(25);
  const [declarationTitleFontitalic, setDeclarationTitleFontitalic] =
    useState("normal");
  const [declarationTitleFontWeight, setDeclarationTitleFontWeight] =
    useState(600);
  const [declarationTitleFontColor, setDeclarationTitleFontColor] =
    useState("#203864");
  const [declarationTitleFontFamily, setDeclarationTitleFontFamily] =
    useState("Roboto, sans-serif");
  const [showDeclarationTitleTextArea, setShowDeclarationTitleTextArea] =
    useState(true);

  const [declarationDetail, setDeclarationDetail] = useState(
    "I do hereby declare that the above information is true & correct to the best of my knowledge."
  );
  const [declarationDetailFontSize, setDeclarationDetailFontSize] =
    useState(16);
  const [declarationDetailFontitalic, setDeclarationDetailFontitalic] =
    useState("normal");
  const [declarationDetailFontWeight, setDeclarationDetailFontWeight] =
    useState(400);
  const [declarationDetailFontColor, setDeclarationDetailFontColor] =
    useState("#000");
  const [declarationDetailFontFamily, setDeclarationDetailFontFamily] =
    useState("Roboto, sans-serif");
  const [showDeclarationDetailTextArea, setShowDeclarationDetailTextArea] =
    useState(true);

  const [signatureTitle, setSignatureTitle] = useState("Signature");
  const [signatureTitleFontSize, setSignatureTitleFontSize] = useState(25);
  const [signatureTitleFontitalic, setSignatureTitleFontitalic] =
    useState("normal");
  const [signatureTitleFontWeight, setSignatureTitleFontWeight] = useState(600);
  const [signatureTitleFontColor, setSignatureTitleFontColor] =
    useState("#203864");
  const [signatureTitleFontFamily, setSignatureTitleFontFamily] =
    useState("Roboto, sans-serif");
  const [showSignatureTitleTextArea, setShowSignatureTitleTextArea] =
    useState(true);

  const [typeName, setTypeName] = useState("");

  const doc = new jsPDF("p", "pt", "a4");

  const fnpdf = () => {
    console.log("fnpdf");

    doc.html(document.querySelector("#PDF_Container"), {
      callback: function (pdf) {
        // doc.addImage(imgdata, 100, 100, 80, 80);
        pdf.save("mypdf.pdf");
      },
    });
  };

  const myTextArea = (TextAlign) => {
    console.log("TextAlign", TextAlign);

    return (
      <TextareaAutosize
        aria-label="empty textarea"
        id="nameTextareaAutosize"
        variant="outlined"
        value={controlPanelName}
        style={{
          fontSize: `${controlPanelFontSize}px`,
          lineHeight: `${controlPanelLineHeight}`,

          letterSpacing: `${controlPanelLetterSpace}px`,
          color: `${controlPanelFontColor}`,
          fontWeight: `${controlPanelFontWeight}`,
          fontFamily: `${controlPanelFontFamily}`,
          fontStyle: `${controlPanelFontitalic}`,
          border: 0,
          padding: "0px",
          margin: "0px",
          backgroundColor: "rgb(0, 0, 0,0.5)",
          width: "100%",
          resize: "none",
          textAlign: TextAlign,
        }}
        onChange={(e) => Setvalues(e.target.value, `${typeName}`, "header")}
        placeholder="Empty"
        className={classes.textAreaStyle}
      />
    );
  };

  var imgdata = "";
  const encodedImageBase64 = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log("aaaaaa");
      let imageFile = e.target.files[0];

      console.log("imageFile", imageFile);
      const reader = new FileReader();
      reader.onload = (x) => {
        console.log("x", x);
        imgdata = x.target.result;
        //   setImageFile(imageFile);
        setPreview(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      // setImageFile(null);
      // setPreview(defaultImg);
    }
  };

  const fnTest = () => {
    console.log("Working");
  };

  const uploadImage = () => {
    document.getElementById("file_button").click();
  };

  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    if (type === "name") {
      setControlPanelName(name);
      setControlPanelFontSize(nameFontSize);
      setcontrolPanelFontWeight(nameFontWeight);
      setcontrolPanelFontitalic(nameFontitalic);
      setControlPanelFontColor(nameFontColor);
      setcontrolPanelFontFamily(nameFontFamily);
    } else if (type === "designation") {
      setControlPanelName(designation);
      setControlPanelFontSize(designationFontSize);
      setcontrolPanelFontWeight(designationFontWeight);
      setcontrolPanelFontitalic(designationFontitalic);
      setControlPanelFontColor(designationFontColor);
      setcontrolPanelFontFamily(designationFontFamily);
    }
  };
  const Setvalues = (value, type, input) => {
    console.log("type", type);
    if (type === "name") {
      if (input === "header") {
        console.log("header Working");
        setName(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setNameFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setNameFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setNameFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setNameFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setNameFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setNameFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setNameFontFamily(value);
      }
    }
    //--------------designation------------------------
    else if (type === "designation") {
      if (input === "header") {
        console.log("header Working");
        setDesignation(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setDesignationFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setDesignationFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setDesignationFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setDesignationFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setDesignationFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setDesignationFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setDesignationFontFamily(value);
      }
    }
    //--------------Contact Title------------------------
    else if (type === "contactTitle") {
      if (input === "header") {
        console.log("header Working");
        setContactTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setContactTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setContactTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setContactTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setContactTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setContactTitleFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setContactTitleFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setContactTitleFontFamily(value);
      }
    }
    //--------------Contact Phone------------------------
    else if (type === "contactPhone") {
      if (input === "header") {
        console.log("header Working");
        setContactPhone(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setContactPhoneFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setContactPhoneFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setContactPhoneFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setContactPhoneFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setContactPhoneFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setContactPhoneFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setContactPhoneFontFamily(value);
      }
    }
    //--------------Contact Email------------------------
    else if (type === "contactEmail") {
      if (input === "header") {
        console.log("header Working");
        setContactEmail(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setContactEmailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setContactEmailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setContactEmailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setContactEmailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setContactEmailFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setContactEmailFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setContactEmailFontFamily(value);
      }
    }
    //--------------Contact Address------------------------
    else if (type === "contactAddress") {
      if (input === "header") {
        console.log("header Working");
        setContactAddress(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setContactAddressFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setContactAddressFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setContactAddressFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setContactAddressFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setContactAddressFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setContactAddressFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setContactAddressFontFamily(value);
      }
    }
    //---------------------------careerObjectiveTitle----------------
    else if (type === "careerObjectiveTitle") {
      if (input === "header") {
        console.log("header Working");
        setCareerObjectiveTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setCareerObjectiveTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setCareerObjectiveTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setCareerObjectiveTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setCareerObjectiveTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setCareerObjectiveTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setCareerObjectiveTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setCareerObjectiveTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }
    //---------------------------careerObjectiveDetail----------------
    else if (type === "careerObjectiveDetail") {
      if (input === "header") {
        console.log("header Working");
        setCareerObjectiveDetail(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setCareerObjectiveDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setCareerObjectiveDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setCareerObjectiveDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setCareerObjectiveDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setCareerObjectiveDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setCareerObjectiveDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setCareerObjectiveDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setCareerObjectiveDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }
    //---------------------------education Title ----------------
    else if (type === "educationTitle") {
      if (input === "header") {
        console.log("header Working");
        setEducationTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setEducationTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setEducationTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setEducationTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setEducationTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setEducationTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "lineHeight") {
        console.log("lineHeight Working");

        setEducationTitleLineHeight(value);
        setControlPanelLineHeight(value);
      } else if (input === "letterSpace") {
        console.log("letterSpace Working");

        seteducationTitleLetterSpace(value);
        setControlPanelLetterSpace(value);
      } else if (input === "color") {
        console.log("size Working");

        setEducationTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setEducationTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setEducationTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "educationSubtitle") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setEducationSubtitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setEducationSubtitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setEducationSubtitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setEducationSubtitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setEducationSubtitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "lineHeight") {
        console.log("lineHeight Working");

        setEducationSubtitleLineHeight(value);
        setControlPanelLineHeight(value);
      } else if (input === "letterSpace") {
        console.log("letterSpace Working");

        seteducationSubtitleLetterSpace(value);
        setControlPanelLetterSpace(value);
      } else if (input === "color") {
        console.log("size Working");

        setEducationSubtitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setEducationSubtitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setEducationSubtitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "educationDetail") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setEducationDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setEducationDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setEducationDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setEducationDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setEducationDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "lineHeight") {
        console.log("lineHeight Working");

        setEducationDetailLineHeight(value);
        setControlPanelLineHeight(value);
      } else if (input === "letterSpace") {
        console.log("letterSpace Working");

        seteducationDetailLetterSpace(value);
        setControlPanelLetterSpace(value);
      } else if (input === "color") {
        console.log("size Working");

        setEducationDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setEducationDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setEducationDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }
    //---------------------------Reference Title ----------------
    else if (type === "referenceTitle") {
      if (input === "header") {
        console.log("header Working");
        setReferenceTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setReferenceTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setReferenceTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setReferenceTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setReferenceTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setReferenceTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setReferenceTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setReferenceTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setReferenceTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "referenceSubtitle") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setReferenceSubtitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setReferenceSubtitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setReferenceSubtitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setReferenceSubtitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setReferenceSubtitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setReferenceSubtitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setReferenceSubtitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setReferenceSubtitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "referenceDetail") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setReferenceDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setReferenceDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setReferenceDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setReferenceDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setReferenceDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setReferenceDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setReferenceDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setReferenceDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }
    //---------------------------Skill Title ----------------
    else if (type === "skillTitle") {
      if (input === "header") {
        console.log("header Working");
        setSkillTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setSkillTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setSkillTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setSkillTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setSkillTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setSkillTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setSkillTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setSkillTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setSkillTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "skillDetail") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setSkillDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setSkillDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setSkillDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setSkillDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setSkillDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setSkillDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setSkillDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setSkillDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }
    //---------------------------Language ----------------
    else if (type === "languageTitle") {
      if (input === "header") {
        console.log("header Working");
        setLanguageTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setLanguageTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setLanguageTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setLanguageTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setLanguageTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setLanguageTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setLanguageTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setLanguageTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setLanguageTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "languageDetail") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setLanguageDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setLanguageDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setLanguageDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setLanguageDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setLanguageDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setLanguageDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setLanguageDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setLanguageDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }
    //---------------------------Interest Title ----------------
    else if (type === "interestTitle") {
      if (input === "header") {
        console.log("header Working");
        setInterestTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setInterestTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setInterestTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setInterestTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setInterestTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setInterestTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setInterestTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setInterestTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setInterestTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "interestDetail") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setInterestDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setInterestDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setInterestDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setInterestDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setInterestDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setInterestDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setInterestDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setInterestDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    }

    //---------------------------personal Info Title ----------------
    else if (type === "personalInfoTitle") {
      if (input === "header") {
        console.log("header Working");
        setPersonalInfoTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setPersonalInfoTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setPersonalInfoTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setPersonalInfoTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setPersonalInfoTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setPersonalInfoTitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setPersonalInfoTitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setPersonalInfoTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setPersonalInfoTitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "personalInfoSubtitle") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setPersonalInfoSubtitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setPersonalInfoSubtitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setPersonalInfoSubtitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setPersonalInfoSubtitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setPersonalInfoSubtitleFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setPersonalInfoSubtitleFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setPersonalInfoSubtitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setPersonalInfoSubtitleFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "personalInfoDetail") {
      if (input === "header") {
        console.log("header Working");

        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setPersonalInfoDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setPersonalInfoDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setPersonalInfoDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setPersonalInfoDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setPersonalInfoDetailFontSize(value);
        setControlPanelFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setPersonalInfoDetailFontColor(value);
        setControlPanelFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setPersonalInfoDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setPersonalInfoDetailFontFamily(value);
        setcontrolPanelFontFamily(value);
      }
    } else if (type === "declarationTitle") {
      if (input === "header") {
        console.log("header Working");
        setDeclarationTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setDeclarationTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setDeclarationTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setDeclarationTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setDeclarationTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setDeclarationTitleFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setDeclarationTitleFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setDeclarationTitleFontFamily(value);
      }
    } else if (type === "declarationDetail") {
      if (input === "header") {
        console.log("header Working");
        setDeclarationDetail(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setDeclarationDetailFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setDeclarationDetailFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setDeclarationDetailFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setDeclarationDetailFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setDeclarationDetailFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setDeclarationDetailFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setDeclarationDetailFontFamily(value);
      }
    } else if (type === "signatureTitle") {
      if (input === "header") {
        console.log("header Working");
        setSignatureTitle(value);
        setControlPanelName(value);
      } else if (input === "bold") {
        console.log("bold Working");

        if (controlPanelFontWeight === 400) {
          console.log("fnBold", "600");
          setSignatureTitleFontWeight(600);
          setcontrolPanelFontWeight(600);
        } else {
          setSignatureTitleFontWeight(400);
          setcontrolPanelFontWeight(400);
        }
      } else if (input === "italic") {
        console.log("italic Working");

        if (controlPanelFontitalic === "normal") {
          console.log("italic");
          setSignatureTitleFontitalic("italic");
          setcontrolPanelFontitalic("italic");
        } else {
          console.log("normal");
          setSignatureTitleFontitalic("normal");
          setcontrolPanelFontitalic("normal");
        }
      } else if (input === "size") {
        console.log("size Working");

        setControlPanelFontSize(value);
        setSignatureTitleFontSize(value);
      } else if (input === "color") {
        console.log("size Working");

        setControlPanelFontColor(value);
        setSignatureTitleFontColor(value);
      } else if (input === "fontFamily") {
        console.log("size Working");
        setcontrolPanelFontFamily(value);
        setSignatureTitleFontFamily(value);
      }
    }
  };
  const [refresh, setRefresh] = useState(false);
  const catchClick = (id) => {
    // return  console.log("id", id, typeof id);
    // setRefresh(!refresh)

    // const concernedElement = document.getElementById(id);
    // console.log("concernedElement", concernedElement);

    document.addEventListener("mousedown", (event) => {
      console.log("catchClick Working");
      // console.log("event", event);
      // if (concernedElement.contains(event.target)) {
      // setRefresh(!refresh);
      // console.log("Inside refresh", refresh);
      // console.log("concernedElementevent", event.target);
      // console.log("Clicked Inside");
      // } else {
      // setRefresh(!refresh)
      // console.log("Outside refresh", refresh);
      // console.log("Clicked Outside / Elsewhere");
      // setShowNameTextArea(true);
      // setShowDesignationTextArea(true);
      // }
    });
  };

  useEffect(() => {
    // console.log("refresh", refresh);
  }, [refresh]);
  return (
    <>
      <div>
        <button onClick={fnTest}>Test</button>

        <div
          style={{
            marginBottom: "15px",
            border: "1px solid green",
            borderRadius: "5px",
            backgroundColor: "#F5F8FB",
          }}
        >
          <Typography style={{ fontSize: "15px", textAlign: "center" }}>
            {controlPanelName}
          </Typography>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={1}
          >
            {/* <Grid item lg={2} className={classes.center_align}>
              <Typography style={{ fontSize: "15px", textAlign: "center" }}>
                Text
              </Typography>{" "}
              <TextField
              id="name"
              type="text"
              variant="outlined"
              value={controlPanelName}
              size="small"
              onChange={(e) =>
                Setvalues(e.target.value, `${typeName}`, "header")
              }
            />
              <TextareaAutosize
              aria-label="empty textarea"
              id="name"
              // type="text"
              variant="outlined"
              value={controlPanelName}
              // size="small"
              style={{
                borderColor: "cornflowerblue",
                fontSize: `${controlPanelFontSize}px`,
                color: `${controlPanelFontColor}`,
                // fontSize:'35px',
                // color:'red',
                // padding: "10px",
                borderRadius: "5px",
                backgroundColor: "antiquewhite",
                // minHeight:'30px',
                width: "100%",
              }}
              onChange={(e) =>
                Setvalues(e.target.value, `${typeName}`, "header")
              }

            />
              <MyTextArea
              controlPanelName={controlPanelName}
              controlPanelFontSize={controlPanelFontSize}
              controlPanelFontColor={controlPanelFontColor}
              controlPanelFontFamily={controlPanelFontFamily}
              typeName={typeName}
              Setvalues={Setvalues}
            />
            </Grid> */}
            <Grid item lg={4} className={classes.center_align}>
              Style
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                <FormatBoldIcon
                  fontSize="large"
                  onClick={() => Setvalues(true, `${typeName}`, "bold")}
                  style={{
                    border: "1px solid green",
                    padding: "5px",
                    marginTop: "3px",
                    borderRadius: "5px",
                    marginRight: "2px",
                    color: `${
                      controlPanelFontWeight === 600 ? "green" : "black"
                    }`,
                  }}
                />
                <FormatItalicIcon
                  fontSize="large"
                  onClick={() => Setvalues(true, `${typeName}`, "italic")}
                  style={{
                    border: "1px solid green",
                    padding: "5px",
                    marginTop: "3px",
                    borderRadius: "5px",
                    color: `${
                      controlPanelFontitalic === "italic" ? "green" : "black"
                    }`,
                  }}
                />
                <TextField
                  id="outlined-start-adornment"
                  type="number"
                  value={controlPanelLineHeight}
                  size="small"
                  onChange={(e) =>
                    Setvalues(e.target.value, `${typeName}`, "lineHeight")
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FormatLineSpacingIcon fontSize="small" />
                      </InputAdornment>
                    ),
                    inputProps: { min: "0", step: "0.1" },
                  }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-start-adornment"
                  type="number"
                  value={controlPanelLetterSpace}
                  size="small"
                  onChange={(e) =>
                    Setvalues(e.target.value, `${typeName}`, "letterSpace")
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PowerInputIcon fontSize="small" />
                      </InputAdornment>
                    ),
                    inputProps: { min: "0", step: "0.1" },
                  }}
                  variant="outlined"
                />
              </div>
            </Grid>
            {/* <Grid item lg={2} className={classes.center_align}>
          <Typography style={{ fontSize: "15px", textAlign: "center" }}>
              Font Size
            </Typography>
            <TextField
              //111
              id="outlined-start-adornment"
              type="number"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormatLineSpacingIcon fontSize="small" />
                  </InputAdornment>
                ),
                inputProps: { min: "0", max: "10", step: "0.1" } 
              }}
              variant="outlined"
            />
          </Grid> */}

            <Grid item lg={1} className={classes.center_align}>
              <Typography style={{ fontSize: "15px", textAlign: "center" }}>
                Font Size
              </Typography>
              <TextField
                id="fontSize"
                type="number"
                variant="outlined"
                value={controlPanelFontSize}
                size="small"
                onChange={(e) =>
                  Setvalues(e.target.value, `${typeName}`, "size")
                }
              />
            </Grid>

            <Grid item lg={3} className={classes.center_align}>
              <Typography style={{ fontSize: "15px", textAlign: "center" }}>
                Font Color
              </Typography>{" "}
              <TextField
                id="fontColor"
                type="text"
                variant="outlined"
                value={controlPanelFontColor}
                size="small"
                onChange={(e) =>
                  Setvalues(e.target.value, `${typeName}`, "color")
                }
              />
            </Grid>

            <Grid item lg={3} className={classes.center_align}>
              <Typography style={{ fontSize: "15px", textAlign: "center" }}>
                Font Family
              </Typography>{" "}
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
                size="small"
              >
                <Select
                  labelId="fontFamilyLabel"
                  id="fontFamily"
                  value={controlPanelFontFamily}
                  onChange={(e) =>
                    Setvalues(e.target.value, `${typeName}`, "fontFamily")
                  }
                >
                  {fontFamilies.map((item, i) => (
                    <MenuItem key={i} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div className={classes.color_table}>
            {fontColors.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: `${item.color}`,
                  cursor: "pointer",
                  margin: "2px 5px",
                  borderRadius: "5px",
                  height: "30px",
                  width: "30px",
                }}
                onClick={() => Setvalues(item.color, `${typeName}`, "color")}
              ></div>
            ))}
          </div>
        </div>
        <div ref={componentRef} style={{ width: "980px", margin: "auto" }}>
          <div
            style={{
              // height: "842px",
              border: "1px solid green",
              display: "flex",
              // margin: 0,
              // padding: 0,
              // boxSizing: " border-box ",
            }}
          >
            <div
              id="leftSide"
              style={{
                backgroundColor: "#203864",
                flexBasis: "300px",
                // margin: 0,
                // padding: 0,
                // boxSizing: " border-box ",
              }}
            >
              <div
                style={{
                  margin: "80px 10px 10px 60px",
                  borderLeft: "1px solid green",
                  // margin: 0,
                  // padding: 0,
                  // boxSizing: " border-box ",
                }}
              >
                <div
                  id="image_div"
                  style={{
                    height: 160,
                    width: 160,
                    border: "1px solid green",
                    position: "relative",
                    // backgroundImage: `url(${defaultImg})`,
                  }}
                  onClick={uploadImage}
                >
                  <img
                    // src={defaultImg}
                    src={preview}
                    alt=""
                    style={{ height: 160, width: 160 }}
                  />
                  <input
                    accept="image/*"
                    id="file_button"
                    type="file"
                    onChange={encodedImageBase64}
                    hidden
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  <NameSection
                    setRefresh={setRefresh}
                    refresh={refresh}
                    myTextArea={myTextArea}
                    controlPanelName={controlPanelName}
                    controlPanelFontColor={controlPanelFontColor}
                    controlPanelFontSize={controlPanelFontSize}
                    controlPanelFontFamily={controlPanelFontFamily}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    name={name}
                    nameFontSize={nameFontSize}
                    nameFontitalic={nameFontitalic}
                    nameFontWeight={nameFontWeight}
                    nameFontColor={nameFontColor}
                    nameFontFamily={nameFontFamily}
                    showNameTextArea={showNameTextArea}
                    setShowNameTextArea={setShowNameTextArea}
                    designation={designation}
                    designationFontSize={designationFontSize}
                    designationFontitalic={designationFontitalic}
                    designationFontWeight={designationFontWeight}
                    designationFontColor={designationFontColor}
                    designationFontFamily={designationFontFamily}
                    showDesignationTextArea={showDesignationTextArea}
                    setShowDesignationTextArea={setShowDesignationTextArea}
                    Setvalues={Setvalues}
                    catchClick={catchClick}
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  <ContactSection
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    contactTitle={contactTitle}
                    contactTitleFontSize={contactTitleFontSize}
                    contactTitleFontitalic={contactTitleFontitalic}
                    contactTitleFontWeight={contactTitleFontWeight}
                    contactTitleFontColor={contactTitleFontColor}
                    contactTitleFontFamily={contactTitleFontFamily}
                    contactAddress={contactAddress}
                    contactAddressFontSize={contactAddressFontSize}
                    contactAddressFontitalic={contactAddressFontitalic}
                    contactAddressFontWeight={contactAddressFontWeight}
                    contactAddressFontColor={contactAddressFontColor}
                    contactAddressFontFamily={contactAddressFontFamily}
                    contactPhone={contactPhone}
                    contactPhoneFontSize={contactPhoneFontSize}
                    contactPhoneFontitalic={contactPhoneFontitalic}
                    contactPhoneFontWeight={contactPhoneFontWeight}
                    contactPhoneFontColor={contactPhoneFontColor}
                    contactPhoneFontFamily={contactPhoneFontFamily}
                    contactEmail={contactEmail}
                    contactEmailFontSize={contactEmailFontSize}
                    contactEmailFontitalic={contactEmailFontitalic}
                    contactEmailFontWeight={contactEmailFontWeight}
                    contactEmailFontColor={contactEmailFontColor}
                    contactEmailFontFamily={contactEmailFontFamily}
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  <SkillSection
                    myTextArea={myTextArea}
                    showSkillTitleTextArea={showSkillTitleTextArea}
                    setShowSkillTitleTextArea={setShowSkillTitleTextArea}
                    controlPanelName={controlPanelName}
                    controlPanelFontColor={controlPanelFontColor}
                    controlPanelFontSize={controlPanelFontSize}
                    controlPanelFontFamily={controlPanelFontFamily}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    skillTitle={skillTitle}
                    skillTitleFontSize={skillTitleFontSize}
                    skillTitleFontitalic={skillTitleFontitalic}
                    skillTitleFontWeight={skillTitleFontWeight}
                    skillTitleFontColor={skillTitleFontColor}
                    skillTitleFontFamily={skillTitleFontFamily}
                    skillDetailFontSize={skillDetailFontSize}
                    skillDetailFontitalic={skillDetailFontitalic}
                    skillDetailFontWeight={skillDetailFontWeight}
                    skillDetailFontColor={skillDetailFontColor}
                    skillDetailFontFamily={skillDetailFontFamily}
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  <CareerObjectiveSection
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    careerObjectiveTitle={careerObjectiveTitle}
                    careerObjectiveTitleFontSize={careerObjectiveTitleFontSize}
                    careerObjectiveTitleFontitalic={
                      careerObjectiveTitleFontitalic
                    }
                    careerObjectiveTitleFontWeight={
                      careerObjectiveTitleFontWeight
                    }
                    careerObjectiveTitleFontColor={
                      careerObjectiveTitleFontColor
                    }
                    careerObjectiveTitleFontFamily={
                      careerObjectiveTitleFontFamily
                    }
                    careerObjectiveDetail={careerObjectiveDetail}
                    careerObjectiveDetailFontSize={
                      careerObjectiveDetailFontSize
                    }
                    careerObjectiveDetailFontitalic={
                      careerObjectiveDetailFontitalic
                    }
                    careerObjectiveDetailFontWeight={
                      careerObjectiveDetailFontWeight
                    }
                    careerObjectiveDetailFontColor={
                      careerObjectiveDetailFontColor
                    }
                    careerObjectiveDetailFontFamily={
                      careerObjectiveDetailFontFamily
                    }
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  <PersonalInfoSection
                    showPersonalInfoTitleTextArea={
                      showPersonalInfoTitleTextArea
                    }
                    setShowPersonalInfoTitleTextArea={
                      setShowPersonalInfoTitleTextArea
                    }
                    myTextArea={myTextArea}
                    controlPanelName={controlPanelName}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    personalInfoTitle={personalInfoTitle}
                    personalInfoTitleFontSize={personalInfoTitleFontSize}
                    personalInfoTitleFontitalic={personalInfoTitleFontitalic}
                    personalInfoTitleFontWeight={personalInfoTitleFontWeight}
                    personalInfoTitleFontColor={personalInfoTitleFontColor}
                    personalInfoTitleFontFamily={personalInfoTitleFontFamily}
                    personalInfoSubtitleFontSize={personalInfoSubtitleFontSize}
                    personalInfoSubtitleFontitalic={
                      personalInfoSubtitleFontitalic
                    }
                    personalInfoSubtitleFontWeight={
                      personalInfoSubtitleFontWeight
                    }
                    personalInfoSubtitleFontColor={
                      personalInfoSubtitleFontColor
                    }
                    personalInfoSubtitleFontFamily={
                      personalInfoSubtitleFontFamily
                    }
                    personalInfoDetailFontSize={personalInfoDetailFontSize}
                    personalInfoDetailFontitalic={personalInfoDetailFontitalic}
                    personalInfoDetailFontWeight={personalInfoDetailFontWeight}
                    personalInfoDetailFontColor={personalInfoDetailFontColor}
                    personalInfoDetailFontFamily={personalInfoDetailFontFamily}
                  />
                </div>
              </div>
            </div>

            <div style={{ flexBasis: "680px" }}>
              <div
                style={{
                  margin: "80px 30px 10px 30px",
                  // borderLeft: "1px solid green",111
                }}
              >
                <div>
                  <EducationSection
                    themeColor={themeColor}
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

                <div style={{ marginTop: "40px" }}>
                  <InterestSection
                    myTextArea={myTextArea}
                    showInterestTitleTextArea={showInterestTitleTextArea}
                    setShowInterestTitleTextArea={setShowInterestTitleTextArea}
                    controlPanelName={controlPanelName}
                    controlPanelFontColor={controlPanelFontColor}
                    controlPanelFontSize={controlPanelFontSize}
                    controlPanelFontFamily={controlPanelFontFamily}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    interestTitle={interestTitle}
                    interestTitleFontSize={interestTitleFontSize}
                    interestTitleFontitalic={interestTitleFontitalic}
                    interestTitleFontWeight={interestTitleFontWeight}
                    interestTitleFontColor={interestTitleFontColor}
                    interestTitleFontFamily={interestTitleFontFamily}
                    interestDetailFontSize={interestDetailFontSize}
                    interestDetailFontitalic={interestDetailFontitalic}
                    interestDetailFontWeight={interestDetailFontWeight}
                    interestDetailFontColor={interestDetailFontColor}
                    interestDetailFontFamily={interestDetailFontFamily}
                  />
                </div>

                <div style={{ marginTop: "40px" }}>
                  <LanguageSection
                    myTextArea={myTextArea}
                    showLanguageTitleTextArea={showLanguageTitleTextArea}
                    setShowLanguageTitleTextArea={setShowLanguageTitleTextArea}
                    controlPanelName={controlPanelName}
                    controlPanelFontColor={controlPanelFontColor}
                    controlPanelFontSize={controlPanelFontSize}
                    controlPanelFontFamily={controlPanelFontFamily}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    languageTitle={languageTitle}
                    languageTitleFontSize={languageTitleFontSize}
                    languageTitleFontitalic={languageTitleFontitalic}
                    languageTitleFontWeight={languageTitleFontWeight}
                    languageTitleFontColor={languageTitleFontColor}
                    languageTitleFontFamily={languageTitleFontFamily}
                    languageDetailFontSize={languageDetailFontSize}
                    languageDetailFontitalic={languageDetailFontitalic}
                    languageDetailFontWeight={languageDetailFontWeight}
                    languageDetailFontColor={languageDetailFontColor}
                    languageDetailFontFamily={languageDetailFontFamily}
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  <ReferenceSection
                    showReferenceTitleTextArea={showReferenceTitleTextArea}
                    setShowReferenceTitleTextArea={
                      setShowReferenceTitleTextArea
                    }
                    myTextArea={myTextArea}
                    controlPanelName={controlPanelName}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    referenceTitle={referenceTitle}
                    referenceTitleFontSize={referenceTitleFontSize}
                    referenceTitleFontitalic={referenceTitleFontitalic}
                    referenceTitleFontWeight={referenceTitleFontWeight}
                    referenceTitleFontColor={referenceTitleFontColor}
                    referenceTitleFontFamily={referenceTitleFontFamily}
                    referenceSubtitleFontSize={referenceSubtitleFontSize}
                    referenceSubtitleFontitalic={referenceSubtitleFontitalic}
                    referenceSubtitleFontWeight={referenceSubtitleFontWeight}
                    referenceSubtitleFontColor={referenceSubtitleFontColor}
                    referenceSubtitleFontFamily={referenceSubtitleFontFamily}
                    referenceDetailFontSize={referenceDetailFontSize}
                    referenceDetailFontitalic={referenceDetailFontitalic}
                    referenceDetailFontWeight={referenceDetailFontWeight}
                    referenceDetailFontColor={referenceDetailFontColor}
                    referenceDetailFontFamily={referenceDetailFontFamily}
                  />
                </div>
                <div style={{ marginTop: "40px" }}>
                  {/* <DeclarationSection
                    myTextArea={myTextArea}
                    setControlPanelName={setControlPanelName}
                    setControlPanelFontSize={setControlPanelFontSize}
                    setcontrolPanelFontWeight={setcontrolPanelFontWeight}
                    setcontrolPanelFontitalic={setcontrolPanelFontitalic}
                    setControlPanelFontColor={setControlPanelFontColor}
                    setcontrolPanelFontFamily={setcontrolPanelFontFamily}
                    typeName={typeName}
                    setTypeName={setTypeName}
                    declarationTitle={declarationTitle}
                    declarationTitleFontSize={declarationTitleFontSize}
                    declarationTitleFontitalic={declarationTitleFontitalic}
                    declarationTitleFontWeight={declarationTitleFontWeight}
                    declarationTitleFontColor={declarationTitleFontColor}
                    declarationTitleFontFamily={declarationTitleFontFamily}
                    showDeclarationTitleTextArea={showDeclarationTitleTextArea}
                    setShowDeclarationTitleTextArea={
                      setShowDeclarationTitleTextArea
                    }
                    declarationDetail={declarationDetail}
                    declarationDetailFontSize={declarationDetailFontSize}
                    declarationDetailFontitalic={declarationDetailFontitalic}
                    declarationDetailFontWeight={declarationDetailFontWeight}
                    declarationDetailFontColor={declarationDetailFontColor}
                    declarationDetailFontFamily={declarationDetailFontFamily}
                    showDeclarationDetailTextArea={
                      showDeclarationDetailTextArea
                    }
                    setShowDeclarationDetailTextArea={
                      setShowDeclarationDetailTextArea
                    }
                    signatureTitle={signatureTitle}
                    signatureTitleFontSize={signatureTitleFontSize}
                    signatureTitleFontitalic={signatureTitleFontitalic}
                    signatureTitleFontWeight={signatureTitleFontWeight}
                    signatureTitleFontColor={signatureTitleFontColor}
                    signatureTitleFontFamily={signatureTitleFontFamily}
                    showSignatureTitleTextArea={showSignatureTitleTextArea}
                    setShowSignatureTitleTextArea={
                      setShowSignatureTitleTextArea
                    }
                    catchClick={catchClick}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type="file" hidden onChange={encodedImageBase64} />
        <button onClick={fnpdf}>pdf</button>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </>
  );
};

export default PDFTest;
