import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface Props{
    content?: React.ReactNode;
}

export const Content = (props: Props) => {
    return (
        <>
        <Header />
        <Sidebar/>
        <div className="body-content">
            {props.content}
        </div>
        <Footer />
        </>
    )
}

Content.defaultProps = {
    content: null
}