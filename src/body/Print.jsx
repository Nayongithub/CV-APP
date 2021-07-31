import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import PDFTest  from "./PDFTest";

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef} style={{backgroundColor:'green',width:'980px',margin:'auto'}}>
<h1>123456789123456789123456789 123456789 123456789 123456789 12345 dfs sdfg sdf dsf sdf g</h1>
{/* <h1>123456789123456789123456789 123456789 123456789 1234 56789 12345</h1> */}


{/* <PDFTest/> */}
      </div>
    
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Print;

