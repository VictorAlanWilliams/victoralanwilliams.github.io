
interface Props{
    style?: string,
    name?: string
}


export const Icon = (_props:Props) => {
    const props = {...{style: "icon", name:"mdi:times"}, ..._props}
    return(
        <span className={`iconify ${props.style}`} data-icon={props.name}></span>
    )
}