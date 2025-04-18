

export const Navbar = () => {
    return(
        <div className="navbar">
            <Navbutton name="Home"/>
            <Navbutton name="About"/>
            <Navbutton name="Contact"/>
        </div>
    )
}

interface Props{
    name?: string;
}

const Navbutton = (_props:Props) => {
    const props = {...{name: "Name"}, ..._props}
    return(
        <div className="navbutton">
            {props.name}
        </div>
    )
}
