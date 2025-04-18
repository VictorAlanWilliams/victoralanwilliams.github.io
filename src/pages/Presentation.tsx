import { Icon } from "../components/Icon"
import { WordColor } from "../components/WordColor"


export const Presentation = () => {
    return (
        <div className="presentation-card">
            <WordColor words="Victor Williams" word_style="word-color" letter_style="letter" />
            <Subtitle />
            <div className="bio-sentence">
                <p>
                    I'm a 27 year old Developer. I specialize in Frontend & Backend <br></br>
                    using <b>React</b>, <b>NodeJS</b>, <b>MongoDB</b>, <b>Typescript</b> and <b>Bootstrap</b>.
                </p>
            </div>
        </div>
    )
}


const Subtitle = () => {
    return (
        <div className="subtitle">
            <IconSentence icon=">" text="FullStack Developer" styleIcon="color-yellow size-5vh" styleText="size-5vh"/>
            <IconSentence text="Santiago - Chile" styleIcon="color-yellow size-4vh" icon={<Icon style="color-yellow" name="icomoon-free:location2"/>} styleText="size-4vh opacity-70"/>
        </div>
    )
}

interface Props {
    icon?: string | React.ReactNode;
    text?: string;
    styleIcon?: string;
    styleText?: string;
}


const IconSentence = (_props: Props) => {
    const props = { ... {}, ..._props };
    return (
        <div className="icon-sentence">
            <div className={props.styleIcon}>
                {props.icon}
            </div>
            <div className={props.styleText}>
                {props.text}
            </div>
        </div>
    )
}
