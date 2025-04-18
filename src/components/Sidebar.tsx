// import { Icon } from "./Icon"

import { IconContainer } from "./IconContainer"


export const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideIconNav/>
        </div>
    )
}


const SideIconNav = () => {
    return (
        <div className="side-icon-nav">
            <a href="https://www.linkedin.com/in/victor--williams/" target="_blank">
            <IconContainer addedStyle="icon-nav" name="ri:linkedin-fill" labelTSX={<LabelIcon label="Linkedin"/>} />
            </a>
            <a href="https://github.com/AlanBritoW" target="_blank">
            <IconContainer addedStyle="icon-nav" name="bytesize:github" labelTSX={<LabelIcon label="Github"/>} />
            </a>
            <a href="mailto: victor.williams.ab@gmail.com" target="_blank">
            <IconContainer addedStyle="icon-nav" name="tdesign:mail-filled" labelTSX={<LabelIcon label="Gmail" />}/>
            </a>
        </div>
    )
}

interface LabelProps{
    label?: string;
}

const LabelIcon = (_props: LabelProps) =>{
    const props = {... {label: "Label"}, ..._props};
    return(
        <div className="label-icon">
            {props.label}
        </div>
    )
}