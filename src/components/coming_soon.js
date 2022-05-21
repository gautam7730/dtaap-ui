
import React from "react";
import Image from "react-bootstrap/Image";
//import a from '../assets/img/coming_soon.svg'
  
export default function ComingSoon() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Coming Soon</h4>
      {/* <Image
        src="./../assets/img/coming_soon.svg"
        
      /> */}
       <Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        roundedCircle
      /> 
    </div>
  );
}
