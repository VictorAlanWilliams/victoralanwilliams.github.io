import { Presentation } from "../pages/Presentation"


export const PageContent = () => {
    return(
        <>
        <Presentation />
        <PageSpace count={20}/>
        <Presentation />
        </>
    )
}

const PageSpace = (props: {count: number}) => {
    return(
        <>
        {
            Array.from({length: props.count}, () => (
                <br></br>
            ))
        }
        </>
    )
}