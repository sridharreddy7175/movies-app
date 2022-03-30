import React from 'react'
import Popular from "./Popular";
import SideHeader from "./SideHeader";
import FreeWatch from "./FreeWatch";



const Header = () => {
    return (
        <div>
            <SideHeader />
            <Popular />
            <FreeWatch />
        </div>
    )
}

export default Header
