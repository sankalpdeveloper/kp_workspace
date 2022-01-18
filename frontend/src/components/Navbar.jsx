import React from "react";
import NavBarInstance from "./reusable/NavBarInstance";


  const Navbar = () => {
    const [activeKey, setActiveKey] = React.useState(null);
    return (
      <div className="nav-wrapper">
        <NavBarInstance appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
      </div>
    );
  };
  
export default Navbar
