import React from "react";
import Typography from "@material-ui/core/Typography";


const CareerObjectiveSection = ({
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  careerObjectiveTitle,
  careerObjectiveTitleFontSize,
  careerObjectiveTitleFontitalic,
  careerObjectiveTitleFontWeight,
  careerObjectiveTitleFontColor,
  careerObjectiveTitleFontFamily,
  careerObjectiveDetail,
  careerObjectiveDetailFontSize,
  careerObjectiveDetailFontitalic,
  careerObjectiveDetailFontWeight,
  careerObjectiveDetailFontColor,
  careerObjectiveDetailFontFamily,
}) => {
  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    if (type === "careerObjectiveTitle") {
      setControlPanelName(careerObjectiveTitle);
      setControlPanelFontSize(careerObjectiveTitleFontSize);
      setcontrolPanelFontitalic(careerObjectiveTitleFontitalic);
      setcontrolPanelFontWeight(careerObjectiveTitleFontWeight);
      setControlPanelFontColor(careerObjectiveTitleFontColor);
      setcontrolPanelFontFamily(careerObjectiveTitleFontFamily);
    } else if (type === "careerObjectiveDetail") {
      setControlPanelName(careerObjectiveDetail);
      setControlPanelFontSize(careerObjectiveDetailFontSize);
      setcontrolPanelFontitalic(careerObjectiveDetailFontitalic);
      setcontrolPanelFontWeight(careerObjectiveDetailFontWeight);
      setControlPanelFontColor(careerObjectiveDetailFontColor);
      setcontrolPanelFontFamily(careerObjectiveDetailFontFamily);
    }
  };

  return (
    <>
      <Typography
        onClick={() => SetValuesToControlPanel("careerObjectiveTitle")}
        style={{
          fontSize: `${careerObjectiveTitleFontSize}px`,
          fontWeight: `${careerObjectiveTitleFontWeight}`,
          fontStyle: `${careerObjectiveTitleFontitalic}`,
          color: `${careerObjectiveTitleFontColor}`,
          fontFamily: `${careerObjectiveTitleFontFamily}`,
          cursor: "pointer",
        }}
      >
        {careerObjectiveTitle}
      </Typography>
      <div
        style={{
          marginTop: "10px",
          width: "80%",
        }}
      >
        <Typography
          onClick={() => SetValuesToControlPanel("careerObjectiveDetail")}
          style={{
            fontSize: `${careerObjectiveDetailFontSize}px`,
            fontWeight: `${careerObjectiveDetailFontWeight}`,
            fontStyle: `${careerObjectiveDetailFontitalic}`,
            color: `${careerObjectiveDetailFontColor}`,
            fontFamily: `${careerObjectiveDetailFontFamily}`,
            cursor: "pointer",
          }}
        >
          {careerObjectiveDetail}
        </Typography>
      </div>
    </>
  );
};

export default CareerObjectiveSection;
