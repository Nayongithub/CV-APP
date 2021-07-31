import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";

const ReferenceSection = ({
  showReferenceTitleTextArea,
  setShowReferenceTitleTextArea,
  myTextArea,
  controlPanelName,
  setControlPanelName,
  setControlPanelFontSize,
  setcontrolPanelFontWeight,
  setcontrolPanelFontitalic,
  setControlPanelFontColor,
  setcontrolPanelFontFamily,
  setTypeName,
  referenceTitle,
  referenceTitleFontSize,
  referenceTitleFontitalic,
  referenceTitleFontWeight,
  referenceTitleFontColor,
  referenceTitleFontFamily,
  referenceSubtitleFontSize,
  referenceSubtitleFontitalic,
  referenceSubtitleFontWeight,
  referenceSubtitleFontColor,
  referenceSubtitleFontFamily,

  referenceDetailFontSize,
  referenceDetailFontitalic,
  referenceDetailFontWeight,
  referenceDetailFontColor,
  referenceDetailFontFamily,
}) => {
  const [referenceMainArray, setReferenceMainArray] = useState([
    {
      id: "Ref1",
      refererName: {
        id: "Ref1refererName",
        refererName: "Sayed Zahidul Hassan",
        show: true,
      },
      professionTitle: {
        id: "Ref1professionTitle",
        professionTitle: "Project Manager",
        show: true,
      },
      institute: {
        id: "Ref1institute",
        institute: "ABC Corporation",
        show: true,
      },
      phone: {
        id: "Ref1phone",
        phone: "Phone : +88 01700000000",
        show: true,
      },
      email: {
        id: "Ref1email",
        email: "Email : demo1234@email.com",
        show: true,
      },
    },
    {
      id: "Ref2",
      refererName: {
        id: "Ref2refererName",
        refererName: "Md. Azman Ali",
        show: true,
      },
      professionTitle: {
        id: "Ref2professionTitle",
        professionTitle: "Project Manager",
        show: true,
      },
      institute: {
        id: "Ref2institute",
        institute: "ABC Corporation",
        show: true,
      },
      phone: {
        id: "Ref2phone",
        phone: "Phone : +88 01700000000",
        show: true,
      },
      email: {
        id: "Ref2email",
        email: "Email : demo1234@email.com",
        show: true,
      },
    },
  ]);
  const [removedReferenceItemsArray, setRemovedReferenceItemsArray] = useState(
    []
  );
  const [indexNo, setIndexNo] = useState(0);
  const [item, setItem] = useState({});
  const [refress, setRefress] = useState(false);
  const [type, setType] = useState("");
  const removeItem = (item) => {
    console.log("item", item);
    if (referenceMainArray.length > 1) {
      const oldReferer = item.refererName;
      const modifiedReferer = {
        ...oldReferer,
        refererName: "Referer Name",
        show: true,
      };
      const oldProfessionTitle = item.professionTitle;
      const modifiedProfessionTitle = {
        ...oldProfessionTitle,
        professionTitle: "Designation",
        show: true,
      };
      const oldInstitute = item.institute;
      const modifiedInstitute = {
        ...oldInstitute,
        institute: "Company Name",
        show: true,
      };
      const oldPhone = item.phone;
      const modifiedPhone = {
        ...oldPhone,
        phone: "+88 01700000000",
        show: true,
      };
      const oldEmail = item.email;
      const modifiedEmail = {
        ...oldEmail,
        email: "email : demo1234@email.com",
        show: true,
      };

      let newObject = {
        ...item,
        refererName: modifiedReferer,
        professionTitle: modifiedProfessionTitle,
        institute: modifiedInstitute,
        phone: modifiedPhone,
        email: modifiedEmail,
      };

      removedReferenceItemsArray.push(newObject);
      let newMainArray = referenceMainArray.filter((res) => res.id !== item.id);
      setReferenceMainArray(newMainArray);
    }
  };

  const addItem = () => {
    if (removedReferenceItemsArray.length > 0) {
      let firstItem = removedReferenceItemsArray[0];
      console.log("firstItem", firstItem);
      let newRemoverItemsArray = removedReferenceItemsArray.filter(
        (res) => res.id !== firstItem.id
      );
      setRemovedReferenceItemsArray(newRemoverItemsArray);
      referenceMainArray.push(firstItem);
    }
  };
  const checkData = () => {
    console.log("referenceMainArray", referenceMainArray);
    console.log("removedReferenceItemsArray", removedReferenceItemsArray);
  };

  const fnsetvalue = (item, i, type) => {
    console.log("item", item);
    setIndexNo(i);
    setType(type);
    console.log("item.refererName.id", item.refererName.id);
    console.log("type", type);
    let newObject;
    if (type === "refererName") {
      setControlPanelName(item.refererName.refererName);
      const oldItem = item.refererName;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, refererName: modifiedItem };
    } else if (type === "professionTitle") {
      setControlPanelName(item.professionTitle.professionTitle);
      const oldItem = item.professionTitle;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, professionTitle: modifiedItem };
    } else if (type === "institute") {
      setControlPanelName(item.institute.institute);
      const oldItem = item.institute;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, institute: modifiedItem };
    } else if (type === "phone") {
      setControlPanelName(item.phone.phone);
      const oldItem = item.phone;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, phone: modifiedItem };
    } else if (type === "email") {
      setControlPanelName(item.email.email);
      const oldItem = item.email;
      const modifiedItem = { ...oldItem, show: !oldItem.show };
      newObject = { ...item, email: modifiedItem };
    } 

    console.log("newObject", newObject);
    setItem(newObject);
    referenceMainArray[i] = newObject;
  };
  const saveNew = () => {
    console.log("saveNew");
    try {
      let newObject;

      if (type === "refererName") {
        const oldItem = item.refererName;
        const modifiedItem = {
          ...oldItem,
          refererName: controlPanelName,
          show: true,
        };
        newObject = { ...item, refererName: modifiedItem };
        console.log("newObject", newObject);
        referenceMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "professionTitle") {
        const oldItem = item.professionTitle;
        const modifiedItem = {
          ...oldItem,
          professionTitle: controlPanelName,
          show: true,
        };
        newObject = { ...item, professionTitle: modifiedItem };
        console.log("newObject", newObject);
        referenceMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "institute") {
        const oldItem = item.institute;
        const modifiedItem = {
          ...oldItem,
          institute: controlPanelName,
          show: true,
        };
        newObject = { ...item, institute: modifiedItem };
        console.log("newObject", newObject);
        referenceMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "phone") {
        const oldItem = item.phone;
        const modifiedItem = {
          ...oldItem,
          phone: controlPanelName,
          show: true,
        };
        newObject = { ...item, phone: modifiedItem };
        console.log("newObject", newObject);
        referenceMainArray[indexNo] = newObject;
        setRefress(!refress);
      } else if (type === "email") {
        const oldItem = item.email;
        const modifiedItem = {
          ...oldItem,
          email: controlPanelName,
          show: true,
        };
        newObject = { ...item, email: modifiedItem };
        console.log("newObject", newObject);
        referenceMainArray[indexNo] = newObject;
        setRefress(!refress);
      } 
    } catch (error) {
      console.log("error", error);
    }
  };

  const SetValuesToControlPanel = (type) => {
    setTypeName(type);
    if (type === "referenceTitle") {
      setShowReferenceTitleTextArea(false);
      setControlPanelName(referenceTitle);
      setControlPanelFontSize(referenceTitleFontSize);
      setcontrolPanelFontitalic(referenceTitleFontitalic);
      setcontrolPanelFontWeight(referenceTitleFontWeight);
      setControlPanelFontColor(referenceTitleFontColor);
      setcontrolPanelFontFamily(referenceTitleFontFamily);
    } else if (type === "referenceSubtitle") {
      // setControlPanelName(referenceDetail);
      setControlPanelFontSize(referenceSubtitleFontSize);
      setcontrolPanelFontitalic(referenceSubtitleFontitalic);
      setcontrolPanelFontWeight(referenceSubtitleFontWeight);
      setControlPanelFontColor(referenceSubtitleFontColor);
      setcontrolPanelFontFamily(referenceSubtitleFontFamily);
    } else if (type === "referenceDetail") {
      // setControlPanelName(referenceDetail);
      setControlPanelFontSize(referenceDetailFontSize);
      setcontrolPanelFontitalic(referenceDetailFontitalic);
      setcontrolPanelFontWeight(referenceDetailFontWeight);
      setControlPanelFontColor(referenceDetailFontColor);
      setcontrolPanelFontFamily(referenceDetailFontFamily);
    }
  };

  return (
    <>
   
      <button onClick={checkData}>Check Arrays</button>
      <button onClick={addItem}>Add New Object</button>
      <button onClick={saveNew}>Save Data</button>
      <div>
        {showReferenceTitleTextArea ? (
          <Typography
            onClick={() => SetValuesToControlPanel("referenceTitle")}
            style={{
              fontSize: `${referenceTitleFontSize}px`,
              fontWeight: `${referenceTitleFontWeight}`,
              fontStyle: `${referenceTitleFontitalic}`,
              color: `${referenceTitleFontColor}`,
              fontFamily: `${referenceTitleFontFamily}`,
              cursor: "pointer",
            }}
          >
            {referenceTitle}
          </Typography>
        ) : (
          myTextArea()
        )}
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        {referenceMainArray.map((item, i) => (
          <div id={item.id} key={i} style={{ flex: 1 }}>
            {/* <button onClick={() => removeItem(item)}>Remove Object</button> */}
            <div id={item.refererName.id}>
              {item.refererName.show ? (
                <Typography
                  onClick={() => {
                    fnsetvalue(item, i, 'refererName');
                    SetValuesToControlPanel("referenceSubtitle");
                  }}
                  style={{
                    fontSize: `${referenceSubtitleFontSize}px`,
                    fontWeight: `${referenceSubtitleFontWeight}`,
                    fontStyle: `${referenceSubtitleFontitalic}`,
                    color: `${referenceSubtitleFontColor}`,
                    fontFamily: `${referenceSubtitleFontFamily}`,
                    cursor: "pointer",
                    lineSpace: 0,
                  }}
                >
                {item.refererName.refererName} <ClearIcon style={{position:'absolute',marginLeft:'20px'}} fontSize='small' onClick={() => removeItem(item)} />
                </Typography>
              ) : (
                myTextArea()
              )}
            </div>
            <div id={item.professionTitle.id}>
              {item.professionTitle.show ? (
                <Typography
                  onClick={() => {
                    fnsetvalue(item, i, 'professionTitle');
                    SetValuesToControlPanel("referenceDetail");
                  }}
                  style={{
                    fontSize: `${referenceDetailFontSize}px`,
                    fontWeight: `${referenceDetailFontWeight}`,
                    fontStyle: `${referenceDetailFontitalic}`,
                    color: `${referenceDetailFontColor}`,
                    fontFamily: `${referenceDetailFontFamily}`,
                    cursor: "pointer",
                    lineSpace: 0,
                  }}
                >
                  {item.professionTitle.professionTitle}
                </Typography>
              ) : (
                myTextArea()
              )}
            </div>
            <div id={item.institute.id}>
              {item.institute.show ? (
                <Typography
                  onClick={() => {
                    fnsetvalue(item, i, 'institute');
                    SetValuesToControlPanel("referenceDetail");
                  }}
                  style={{
                    fontSize: `${referenceDetailFontSize}px`,
                    fontWeight: `${referenceDetailFontWeight}`,
                    fontStyle: `${referenceDetailFontitalic}`,
                    color: `${referenceDetailFontColor}`,
                    fontFamily: `${referenceDetailFontFamily}`,
                    cursor: "pointer",
                    lineSpace: 0,
                  }}
                >
                  {item.institute.institute}
                </Typography>
              ) : (
                myTextArea()
              )}
            </div>
            <div id={item.phone.id}>
              {item.phone.show ? (
                <Typography
                  onClick={() => {
                    fnsetvalue(item, i, 'phone');
                    SetValuesToControlPanel("referenceDetail");
                  }}
                  style={{
                    fontSize: `${referenceDetailFontSize}px`,
                    fontWeight: `${referenceDetailFontWeight}`,
                    fontStyle: `${referenceDetailFontitalic}`,
                    color: `${referenceDetailFontColor}`,
                    fontFamily: `${referenceDetailFontFamily}`,
                    cursor: "pointer",
                    lineSpace: 0,
                  }}
                >
                  {item.phone.phone}
                </Typography>
              ) : (
                myTextArea()
              )}
            </div>
            <div id={item.email.id}>
              {item.email.show ? (
                <Typography
                  onClick={() => {
                    fnsetvalue(item, i, 'email');
                    SetValuesToControlPanel("referenceDetail");
                  }}
                  style={{
                    fontSize: `${referenceDetailFontSize}px`,
                    fontWeight: `${referenceDetailFontWeight}`,
                    fontStyle: `${referenceDetailFontitalic}`,
                    color: `${referenceDetailFontColor}`,
                    fontFamily: `${referenceDetailFontFamily}`,
                    cursor: "pointer",
                    lineSpace: 0,
                  }}
                >
                  {item.email.email}
                </Typography>
              ) : (
                myTextArea()
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReferenceSection;
