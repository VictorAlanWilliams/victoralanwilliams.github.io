import { IconContainer } from "./IconContainer"
import { Navbar } from "./Navbar"
// import { Titlename } from "./Titlename"


export const Header = () => {
    return(
        <div className="header">
            {/* <Titlename /> */}
            <IconContainer addedStyle="logo" iconStyle="logo-icon" name="wi:moon-alt-waxing-crescent-2"/>
            <Navbar />
        </div>
    )
}