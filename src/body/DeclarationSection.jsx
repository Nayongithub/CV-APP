import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles({
  hideShow: {
   '&:hover':{
     display:'block'
   }
  },
});

const DeclarationSection = ({
  myTextArea,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  declarationTitle,
  declarationTitleFontSize,
  declarationTitleFontitalic,
  declarationTitleFontWeight,
  declarationTitleFontColor,
  declarationTitleFontFamily,
  declarationDetail,
  declarationDetailFontSize,
  declarationDetailFontitalic,
  declarationDetailFontWeight,
  declarationDetailFontColor,
  declarationDetailFontFamily,

  signatureTitle,
  signatureTitleFontSize,
  signatureTitleFontitalic,
  signatureTitleFontWeight,
  signatureTitleFontColor,
  signatureTitleFontFamily,
  catchClick,
  setShowDeclarationTitleTextArea,
  showDeclarationTitleTextArea,
  showDeclarationDetailTextArea,
  setShowDeclarationDetailTextArea,
  setShowSignatureTitleTextArea,
  showSignatureTitleTextArea,
}) => {
  const classes = useStyles();
  const [signaturePreview, setSignaturePreview] = useState();
  
  var imgdata = "";
  const encodedImageBase64 = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log("aaaaaa");
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        console.log("x", x);
        imgdata = x.target.result;
        //   setImageFile(imageFile);
        setSignaturePreview(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      // setImageFile(null);
      // setSignaturePreview(defaultImg);
    }
  };
  const uploadImage = () => {
    document.getElementById("signatureFile_button").click();
  };

  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    if (type === "declarationTitle") {
      setShowDeclarationTitleTextArea(false);
      setControlPanelName(declarationTitle);
      setControlPanelFontSize(declarationTitleFontSize);
      setcontrolPanelFontWeight(declarationTitleFontWeight);
      setcontrolPanelFontitalic(declarationTitleFontitalic);
      setControlPanelFontColor(declarationTitleFontColor);
      setcontrolPanelFontFamily(declarationTitleFontFamily);
    } else if (type === "declarationDetail") {
      setShowDeclarationDetailTextArea(false);
      setControlPanelName(declarationDetail);
      setControlPanelFontSize(declarationDetailFontSize);
      setcontrolPanelFontWeight(declarationDetailFontWeight);
      setcontrolPanelFontitalic(declarationDetailFontitalic);
      setControlPanelFontColor(declarationDetailFontColor);
      setcontrolPanelFontFamily(declarationDetailFontFamily);
    } else if (type === "signatureTitle") {
      setShowSignatureTitleTextArea(false);
      setControlPanelName(signatureTitle);
      setControlPanelFontSize(signatureTitleFontSize);
      setcontrolPanelFontWeight(signatureTitleFontWeight);
      setcontrolPanelFontitalic(signatureTitleFontitalic);
      setControlPanelFontColor(signatureTitleFontColor);
      setcontrolPanelFontFamily(signatureTitleFontFamily);
    }
    setTimeout(function () {
      document.getElementById("nameTextareaAutosize").select();
    }, 200);
  };
  return (
    <>
      <button
        onClick={() => {
          setShowDeclarationTitleTextArea(true);
          setShowDeclarationDetailTextArea(true);
          setShowSignatureTitleTextArea(true);
        }}
      >
        Save
      </button>
      <div style={{ overflowWrap: "anywhere" }}>
        <div
          id="declarationTitleDiv"
          className="click-text"
          //   onClick={() => catchClick("declarationTitleDiv")}
        >
          {showDeclarationTitleTextArea ? (
            <Typography
              onClick={() => SetValuesToControlPanel("declarationTitle")}
              style={{
                fontSize: `${declarationTitleFontSize}px`,
                fontWeight: `${declarationTitleFontWeight}`,
                fontStyle: `${declarationTitleFontitalic}`,
                color: `${declarationTitleFontColor}`,
                fontFamily: `${declarationTitleFontFamily}`,
                cursor: "pointer",
              }}
            >
              {declarationTitle}
            </Typography>
          ) : (
            myTextArea()
          )}
        </div>
        <div
          id="declarationDetailDiv"
          className="click-text"
          //   onClick={() => catchClick("declarationDetailDiv")}
        >
          {showDeclarationDetailTextArea ? (
            <Typography
              style={{
                fontSize: `${declarationDetailFontSize}px`,
                fontWeight: `${declarationDetailFontWeight}`,
                fontStyle: `${declarationDetailFontitalic}`,
                color: `${declarationDetailFontColor}`,
                fontFamily: `${declarationDetailFontFamily}`,
                cursor: "pointer",
                // lineHeight:1.65
              }}
              onClick={() => SetValuesToControlPanel("declarationDetail")}
            >
              {declarationDetail}
            </Typography>
          ) : (
            myTextArea()
          )}
        </div>
        <div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
          <div

            id="signatureImage_div"
            style={{
              height: 40,
              width: 200,
              border: "1px solid green",
              position: "relative",
              textAlign: "center",
              margin: "auto",
              cursor:'pointer',
            }}
            onClick={uploadImage}
           >
            <img
              src={signaturePreview}
              alt=""
              style={{ height: 40, width: 200 }}
            />
            <input
              accept="image/*"
              id="signatureFile_button"
              type="file"
              onChange={encodedImageBase64}
              hidden
            />
          </div>
          <div
            id="signatureTitleDiv"
            className="click-text"
            //   onClick={() => catchClick("signatureTitleDiv")}
          >
            <Typography style={{lineHeight:0,marginTop:'5px'}}>
              -----------------------------------------------
            </Typography>
            {showSignatureTitleTextArea ? (
              <Typography
                onClick={() => SetValuesToControlPanel("signatureTitle")}
                style={{
                  fontSize: `${signatureTitleFontSize}px`,
                  fontWeight: `${signatureTitleFontWeight}`,
                  fontStyle: `${signatureTitleFontitalic}`,
                  color: `${signatureTitleFontColor}`,
                  fontFamily: `${signatureTitleFontFamily}`,
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                {signatureTitle}
              </Typography>
            ) : (
              myTextArea()
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeclarationSection;
