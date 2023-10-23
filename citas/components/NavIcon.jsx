import React, { useState } from "react";

function NavIcon({ inactiveIcon, activeIcon }) {
 const [isActive, setIsActive] = useState(false);

 return (
   <div onClick={() => setIsActive(!isActive)}>
     {isActive ? activeIcon : inactiveIcon}
   </div>
 );
}

export default HeaderIcon;