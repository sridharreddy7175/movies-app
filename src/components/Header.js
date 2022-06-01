import React from 'react'
import Popular from "./Popular";
import SideHeader from "./SideHeader";
import FreeWatch from "./FreeWatch";
import { Footer } from './Footer';



const Header = () => {
    return (
        <div>
            <SideHeader />
            <Popular />
            <FreeWatch />
            <Footer />
        </div>
    )
}

export default Header
