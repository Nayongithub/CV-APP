import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const EducationListView = ({
  themeColor,
  appliedDesign,
  editMood,
  removeTopic,
  SetValuesToControlPanel,
  showEducationTitleTextArea,
  fnsetvalue,
  removeItem,
  educationMainArray,
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
  return (
    <>
      {educationMainArray.map((item, i) => (
        <div id={item.id} key={i}>
          <div
            id={item.institute.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            {item.institute.show ? (
              <>
                <div>
                  <Typography
                    onClick={() => {
                      fnsetvalue(item, i, "institute");
                      SetValuesToControlPanel("educationSubtitle");
                    }}
                    style={{
                      fontSize: `${educationSubtitleFontSize}px`,
                      lineHeight: `${educationSubtitleLineHeight}`,
                      letterSpacing: `${educationSubtitleLetterSpace}px`,
                      fontWeight: `${educationSubtitleFontWeight}`,
                      fontStyle: `${educationSubtitleFontitalic}`,
                      color: `${educationSubtitleFontColor}`,
                      fontFamily: `${educationSubtitleFontFamily}`,
                      cursor: "pointer",
                    }}
                  >
                    {item.institute.institute}{" "}
                  </Typography>
                </div>

                {editMood ? (
                  <div>
                    <ClearIcon
                      style={{
                        cursor: "pointer",
                        border: "1px solid antiquewhite",
                        backgroundColor: "antiquewhite",
                      }}
                      onClick={() => removeItem(item)}
                    />{" "}
                  </div>
                ) : null}
              </>
            ) : (
              myTextArea()
            )}
          </div>
          {item.degree.degree ? (
            <>
              <div
                id={item.degree.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                {item.degree.show ? (
                  <>
                    <div>
                      <Typography
                        onClick={() => {
                          fnsetvalue(item, i, "degree");
                          SetValuesToControlPanel("educationDetail");
                        }}
                        style={{
                          fontSize: `${educationDetailFontSize}px`,
                          lineHeight: `${educationDetailLineHeight}`,
                          letterSpacing: `${educationDetailLetterSpace}px`,
                          fontWeight: `${educationDetailFontWeight}`,
                          fontStyle: `${educationDetailFontitalic}`,
                          color: `${educationDetailFontColor}`,
                          fontFamily: `${educationDetailFontFamily}`,
                          cursor: "pointer",
                          marginTop: "5px",
                        }}
                      >
                        {item.degree.degree}
                      </Typography>
                    </div>
                    {editMood ? (
                      <div>
                        <ClearIcon
                          style={{
                            cursor: "pointer",
                            border: "1px solid antiquewhite",
                          }}
                          fontSize="small"
                          onClick={() => removeTopic(item, i, "degree")}
                        />
                      </div>
                    ) : null}
                  </>
                ) : (
                  myTextArea()
                )}
              </div>
            </>
          ) : null}

          {item.subject.subject ? (
            <>
              <div
                id={item.subject.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                {item.subject.show ? (
                  <>
                    <div>
                      <Typography
                        onClick={() => {
                          fnsetvalue(item, i, "subject");
                          SetValuesToControlPanel("educationDetail");
                        }}
                        style={{
                          fontSize: `${educationDetailFontSize}px`,
                          lineHeight: `${educationDetailLineHeight}`,
                          letterSpacing: `${educationDetailLetterSpace}px`,
                          fontWeight: `${educationDetailFontWeight}`,
                          fontStyle: `${educationDetailFontitalic}`,
                          color: `${educationDetailFontColor}`,
                          fontFamily: `${educationDetailFontFamily}`,
                          cursor: "pointer",
                          marginTop: "5px",
                        }}
                      >
                        {item.subject.subject}
                      </Typography>
                    </div>
                    {editMood ? (
                      <div>
                        <ClearIcon
                          style={{
                            cursor: "pointer",
                            border: "1px solid antiquewhite",
                          }}
                          fontSize="small"
                          onClick={() => removeTopic(item, i, "subject")}
                        />
                      </div>
                    ) : null}
                  </>
                ) : (
                  myTextArea()
                )}
              </div>
            </>
          ) : null}

          {item.passingYear.passingYear ? (
            <>
              <div
                id={item.passingYear.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                {item.passingYear.show ? (
                  <>
                    <div>
                      <Typography
                        onClick={() => {
                          fnsetvalue(item, i, "passingYear");
                          SetValuesToControlPanel("educationDetail");
                        }}
                        style={{
                          fontSize: `${educationDetailFontSize}px`,
                          lineHeight: `${educationDetailLineHeight}`,
                          letterSpacing: `${educationDetailLetterSpace}px`,
                          fontWeight: `${educationDetailFontWeight}`,
                          fontStyle: `${educationDetailFontitalic}`,
                          color: `${educationDetailFontColor}`,
                          fontFamily: `${educationDetailFontFamily}`,
                          cursor: "pointer",
                          marginTop: "5px",
                        }}
                      >
                        {item.passingYear.passingYear}
                      </Typography>
                    </div>
                    {editMood ? (
                      <div>
                        <ClearIcon
                          style={{
                            cursor: "pointer",
                            border: "1px solid antiquewhite",
                          }}
                          fontSize="small"
                          onClick={() => removeTopic(item, i, "passingYear")}
                        />
                      </div>
                    ) : null}
                  </>
                ) : (
                  myTextArea()
                )}
              </div>
            </>
          ) : null}

          {item.result.result ? (
            <>
              <div
                id={item.result.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                {item.result.show ? (
                  <>
                    <div>
                      <Typography
                        onClick={() => {
                          fnsetvalue(item, i, "result");
                          SetValuesToControlPanel("educationDetail");
                        }}
                        style={{
                          fontSize: `${educationDetailFontSize}px`,
                          lineHeight: `${educationDetailLineHeight}`,
                          letterSpacing: `${educationDetailLetterSpace}px`,
                          fontWeight: `${educationDetailFontWeight}`,
                          fontStyle: `${educationDetailFontitalic}`,
                          color: `${educationDetailFontColor}`,
                          fontFamily: `${educationDetailFontFamily}`,
                          cursor: "pointer",
                          marginTop: "5px",
                        }}
                      >
                        {item.result.result}
                      </Typography>
                    </div>
                    {editMood ? (
                      <div>
                        <ClearIcon
                          style={{
                            cursor: "pointer",
                            border: "1px solid antiquewhite",
                          }}
                          fontSize="small"
                          onClick={() => removeTopic(item, i, "result")}
                        />
                      </div>
                    ) : null}
                  </>
                ) : (
                  myTextArea()
                )}
              </div>
            </>
          ) : null}

          <hr />
        </div>
      ))}
    </>
  );
};

export default EducationListView;
