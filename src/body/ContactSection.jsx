import React from "react";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from '@material-ui/icons/Phone';


const ContactSection = ({
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  contactTitle,
  contactTitleFontSize,
  contactTitleFontitalic,
  contactTitleFontWeight,
  contactTitleFontColor,
  contactTitleFontFamily,
  contactAddress,
  contactAddressFontSize,
  contactAddressFontitalic,
  contactAddressFontWeight,
  contactAddressFontColor,
  contactAddressFontFamily,
  contactPhone,
  contactPhoneFontSize,
  contactPhoneFontitalic,
  contactPhoneFontWeight,
  contactPhoneFontColor,
  contactPhoneFontFamily,
  contactEmail,
  contactEmailFontSize,
  contactEmailFontitalic,
  contactEmailFontWeight,
  contactEmailFontColor,
  contactEmailFontFamily,
}) => {
  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    if (type === "contactTitle") {
      setControlPanelName(contactTitle);
      setControlPanelFontSize(contactTitleFontSize);
      setcontrolPanelFontitalic(contactTitleFontitalic);
      setcontrolPanelFontWeight(contactTitleFontWeight);
      setControlPanelFontColor(contactTitleFontColor);
      setcontrolPanelFontFamily(contactTitleFontFamily);
    } 
    else if (type === "contactPhone") {
      setControlPanelName(contactPhone);
      setControlPanelFontSize(contactPhoneFontSize);
      setcontrolPanelFontitalic(contactPhoneFontitalic);
      setcontrolPanelFontWeight(contactPhoneFontWeight);
      setControlPanelFontColor(contactPhoneFontColor);
      setcontrolPanelFontFamily(contactPhoneFontFamily);
    }
    else if (type === "contactEmail") {
      setControlPanelName(contactEmail);
      setControlPanelFontSize(contactEmailFontSize);
      setcontrolPanelFontitalic(contactEmailFontitalic);
      setcontrolPanelFontWeight(contactEmailFontWeight);
      setControlPanelFontColor(contactEmailFontColor);
      setcontrolPanelFontFamily(contactEmailFontFamily);
    }
    else if (type === "contactAddress") {
      setControlPanelName(contactAddress);
      setControlPanelFontSize(contactAddressFontSize);
      setcontrolPanelFontitalic(contactAddressFontitalic);
      setcontrolPanelFontWeight(contactAddressFontWeight);
      setControlPanelFontColor(contactAddressFontColor);
      setcontrolPanelFontFamily(contactAddressFontFamily);
    }
  };

  return (
    <>
      <Typography
        onClick={() => SetValuesToControlPanel("contactTitle")}
        style={{
          fontSize: `${contactTitleFontSize}px`,
          fontWeight: `${contactTitleFontWeight}`,
          fontStyle: `${contactTitleFontitalic}`,
          color: `${contactTitleFontColor}`,
          fontFamily: `${contactTitleFontFamily}`,
          cursor: "pointer",
        }}
      >
        {contactTitle}
      </Typography>
      <div
        style={{
          marginTop: "10px",
          width: "80%",
        }}
      >
        <Typography
          onClick={() => SetValuesToControlPanel("contactPhone")}
          style={{
            fontSize: `${contactPhoneFontSize}px`,
            fontWeight: `${contactPhoneFontWeight}`,
            fontStyle: `${contactPhoneFontitalic}`,
            color: `${contactPhoneFontColor}`,
            fontFamily: `${contactPhoneFontFamily}`,
            cursor: "pointer",
          }}
        >
          <PhoneIcon/>{contactPhone}
        </Typography>
        <Typography
          onClick={() => SetValuesToControlPanel("contactEmail")}
          style={{
            fontSize: `${contactEmailFontSize}px`,
            fontWeight: `${contactEmailFontWeight}`,
            fontStyle: `${contactEmailFontitalic}`,
            color: `${contactEmailFontColor}`,
            fontFamily: `${contactEmailFontFamily}`,
            cursor: "pointer",
          }}
        >
          {contactEmail}
        </Typography>
        <Typography
          onClick={() => SetValuesToControlPanel("contactAddress")}
          style={{
            fontSize: `${contactAddressFontSize}px`,
            fontWeight: `${contactAddressFontWeight}`,
            fontStyle: `${contactAddressFontitalic}`,
            color: `${contactAddressFontColor}`,
            fontFamily: `${contactAddressFontFamily}`,
            cursor: "pointer",
          }}
        >
          {contactAddress}
        </Typography>
      </div>
    </>
  );
};

export default ContactSection;
