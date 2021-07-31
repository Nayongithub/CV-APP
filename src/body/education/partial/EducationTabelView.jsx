import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";

const EducationTabelView = ({
  controlPanelName,
  setControlPanelName,
  setShowEducationTitleTextArea,
  isHeader,
  setIsHeader,
  fnsetHeadervalue,
  tableHeader,
  removeHeaderTopic,
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
          degree: "Degree Name",
        };
        const oldSubject = item.subject;
        const modifiedSubject = {
          ...oldSubject,
          subject: "Subject Name",
        };
        const oldPassingYear = item.passingYear;
        const modifiedPassingYear = {
          ...oldPassingYear,
          passingYear: "2018-2020",
        };
        const oldResult = item.result;
        const modifiedResult = {
          ...oldResult,
          result: "5.00",
        };
        newObject = {
          ...item,
          degree: modifiedDegree,
          subject: modifiedSubject,
          passingYear: modifiedPassingYear,
          result: modifiedResult,
        };
        newArray.push(newObject);
      });
    }
    return setEducationMainArray(newArray);
  }, []);
  return (
    <div style={{ marginTop: "15px", overflowWrap: "break-word" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
          {tableHeader.institute.institute ? (
              <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                <div
                  id={tableHeader.institute.id}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  {tableHeader.institute.show ? (
                    <>
                      <div>
                        <Typography
                          onClick={() => {
                            fnsetHeadervalue(
                              tableHeader.institute.institute,
                              "institute"
                            );
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
                          {tableHeader.institute.institute}
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
                              onClick={() => removeHeaderTopic("institute")}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    myTextArea("center")
                  )}
                </div>
              </td>
            ) : null}

            {tableHeader.degree.degree ? (
              <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                <div
                  id={tableHeader.degree.id}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  {tableHeader.degree.show ? (
                    <>
                      <div>
                        <Typography
                          onClick={() => {
                            fnsetHeadervalue(
                              tableHeader.degree.degree,
                              "degree"
                            );
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
                          {tableHeader.degree.degree}
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
                              onClick={() => removeHeaderTopic("degree")}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    myTextArea("center")
                  )}
                </div>
              </td>
            ) : null}

            {tableHeader.subject.subject ? (
              <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                <div
                  id={tableHeader.subject.id}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  {tableHeader.subject.show ? (
                    <>
                      <div>
                        <Typography
                          onClick={() => {
                            fnsetHeadervalue(
                              tableHeader.subject.subject,
                              "subject"
                            );
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
                          {tableHeader.subject.subject}
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
                              onClick={() => removeHeaderTopic("subject")}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    myTextArea("center")
                  )}
                </div>
              </td>
            ) : null}
            {tableHeader.passingYear.passingYear ? (
              <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                <div
                  id={tableHeader.passingYear.id}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  {tableHeader.passingYear.show ? (
                    <>
                      <div>
                        <Typography
                          onClick={() => {
                            fnsetHeadervalue(
                              tableHeader.passingYear.passingYear,
                              "passingYear"
                            );
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
                          {tableHeader.passingYear.passingYear}
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
                              onClick={() => removeHeaderTopic("passingYear")}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    myTextArea("center")
                  )}
                </div>
              </td>
            ) : null}

            {tableHeader.result.result ? (
              <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                <div
                  id={tableHeader.result.id}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  {tableHeader.result.show ? (
                    <>
                      <div>
                        <Typography
                          onClick={() => {
                            fnsetHeadervalue(
                              tableHeader.result.result,
                              "result"
                            );
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
                          {tableHeader.result.result}
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
                              onClick={() => removeHeaderTopic("result")}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    myTextArea("center")
                  )}
                </div>
              </td>
            ) : null}
          </tr>
          {educationMainArray &&
            educationMainArray.map((item, i) => (
              <tr id={item.id} key={i}>
                <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                  <div id={item.institute.id}>
                    {item.institute.show ? (
                      <>
                        <div
                          style={{
                            position: "relative",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            onClick={() => {
                              fnsetvalue(item, i, "institute");
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
                      myTextArea("center")
                    )}
                  </div>
                </td>

                {item.degree.degree ? (
                  <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                    <div
                      id={item.degree.id}
                      style={{ position: "relative", textAlign: "center" }}
                    >
                      {item.degree.show ? (
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
                      ) : (
                        myTextArea("center")
                      )}
                    </div>
                  </td>
                ) : null}
                {item.subject.subject ? (
                  <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                    <div
                      id={item.subject.id}
                      style={{
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      {item.subject.show ? (
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
                      ) : (
                        myTextArea("center")
                      )}
                    </div>
                  </td>
                ) : null}
                {item.passingYear.passingYear ? (
                  <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                    <div id={item.passingYear.id}>
                      {item.passingYear.show ? (
                        <div
                          style={{
                            position: "relative",
                            textAlign: "center",
                          }}
                        >
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
                      ) : (
                        myTextArea("center")
                      )}
                    </div>
                  </td>
                ) : null}
                {item.result.result ? (
                  <td style={{ padding: "7px", border: "1px solid #ddd" }}>
                    <div
                      id={item.result.id}
                      style={{
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      {item.result.show ? (
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
                      ) : (
                        myTextArea("center")
                      )}
                    </div>
                  </td>
                ) : null}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTabelView;
