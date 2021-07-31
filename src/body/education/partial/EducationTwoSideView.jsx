import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const EducationTwoSideView = ({
  editMood,
  removeTopic,
  SetValuesToControlPanel,
  fnsetvalue,
  removeItem,
  educationMainArray,
  setEducationMainArray,
  myTextArea,
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
  useEffect(() => {
    let newArray = [];
    let newObject;
    {
      educationMainArray.map((item, i) => {
        const oldDegree = item.degree;
        const modifiedDegree = {
          ...oldDegree,
          degree: "Certificate/Degree Name",
        };
        const oldSubject = item.subject;
        const modifiedSubject = {
          ...oldSubject,
          subject: "Group/Subject Name",
        };
        const oldPassingYear = item.passingYear;
        const modifiedPassingYear = {
          ...oldPassingYear,
          passingYear: "2018-2020",
        };
        newObject = {
          ...item,
          degree: modifiedDegree,
          subject: modifiedSubject,
          passingYear: modifiedPassingYear,
        };
        newArray.push(newObject);
      });
    }
    return setEducationMainArray(newArray);
  }, []);
  return (
    <div>
      {educationMainArray.map((item, i) => (
        <div id={item.id} key={i} style={{ marginTop: "15px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1, marginRight: 30 }}>
              <div id={item.institute.id}>
                {item.institute.show ? (
                  <>
                    <div style={{ position: "relative" }}>
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
                        {item.institute.institute}
                      </Typography>

                      {editMood ? (
                        <div>
                          <ClearIcon
                            style={{
                              cursor: "pointer",
                              border: "1px solid darksalmon",
                              backgroundColor: "darksalmon",
                              position: "absolute",
                              top: 0,
                              right: 0,
                            }}
                            onClick={() => removeItem(item)}
                          />
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : (
                  myTextArea()
                )}
              </div>
              {item.passingYear.passingYear ? (
                <>
                  <div id={item.passingYear.id}>
                    {item.passingYear.show ? (
                      <>
                        <div style={{ position: "relative" }}>
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
                            }}
                          >
                            {item.passingYear.passingYear}
                          </Typography>

                          {editMood ? (
                            <div>
                              <ClearIcon
                                style={{
                                  cursor: "pointer",
                                  border: "1px solid antiquewhite",
                                  backgroundColor: "antiquewhite",
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                }}
                                fontSize="small"
                                onClick={() =>
                                  removeTopic(item, i, "passingYear")
                                }
                              />
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : (
                      myTextArea()
                    )}
                  </div>
                </>
              ) : null}
            </div>
            <div style={{ flex: 2 }}>
              
              {item.degree.degree ? (
                <>
                  <div id={item.degree.id} style={{ position: "relative" }}>
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
                            }}
                          >
                            {item.degree.degree}
                          </Typography>
                          {editMood ? (
                            <div>
                              <ClearIcon
                                style={{
                                  cursor: "pointer",
                                  border: "1px solid antiquewhite",
                                  backgroundColor: "antiquewhite",
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                }}
                                fontSize="small"
                                onClick={() => removeTopic(item, i, "degree")}
                              />
                            </div>
                          ) : null}
                        </div>
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
                      position: "relative",
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
                            }}
                          >
                            {item.subject.subject}
                          </Typography>
                          {editMood ? (
                            <div>
                              <ClearIcon
                                style={{
                                  cursor: "pointer",
                                  border: "1px solid antiquewhite",
                                  backgroundColor: "antiquewhite",
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                }}
                                fontSize="small"
                                onClick={() => removeTopic(item, i, "subject")}
                              />
                            </div>
                          ) : null}
                        </div>
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
                      position: "relative",
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
                            }}
                          >
                            {item.result.result}
                          </Typography>
                          {editMood ? (
                            <div>
                              <ClearIcon
                                style={{
                                  cursor: "pointer",
                                  border: "1px solid antiquewhite",
                                  backgroundColor: "antiquewhite",
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                }}
                                fontSize="small"
                                onClick={() => removeTopic(item, i, "result")}
                              />
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : (
                      myTextArea()
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTwoSideView;
