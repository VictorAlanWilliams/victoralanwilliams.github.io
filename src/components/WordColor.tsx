
interface WordProps{
    words?: string;
    word_style? : string;
    letter_style?: string;
}

export const WordColor = (_props:WordProps) => {
    const props = {... {words: "hello world"}, ..._props};
    return(
        <>
            <h1 className={props.word_style}>
            {props.words.split(" ").map(word => 
                    <>
                    <span className={props.letter_style}>{word[0].toUpperCase()}</span>{word.slice(1)}
                    <span> </span> 
                    </>
            )}
            </h1>
        </>
    )
}