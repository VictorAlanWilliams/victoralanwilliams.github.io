import { Icon } from "./Icon"


interface Props{
    name?: string;
    addedStyle?: string;
    iconStyle?: string;
    labelTSX? : React.ReactNode;
}

export const IconContainer = (_props:Props) => {
    const props = {... {addedStyle: "", iconStyle:"icon"}, ..._props};
    return(
        <div className="icon-container">
        <div className= {`${props.addedStyle} circle-icon`}>
            <Icon name={props.name} style={props.iconStyle}/>
        </div>
        {props.labelTSX}
        </div>
    )
}