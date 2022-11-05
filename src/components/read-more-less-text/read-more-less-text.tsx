import React, { useState } from "react";

interface IProps {
  text: string,
  charLimit: number,
  readMoreText: string,
  readLessText: string
}

interface IState {
    text: string,
    charLimit: number,
    readMoreText: string,
    readLessText: string,
    showFullText: boolean
}

const ReadMoreLessText = (props: IProps) => {
    const [state, setState] = useState<IState>(
        {
            text: props.text,
            charLimit: props.charLimit,
            readMoreText: props.readLessText? props.readLessText : "Read more",
            readLessText: props.readLessText? props.readLessText : "Read less",
            showFullText: false
        }
    );

    return(
        <>
            {(state.text && state.text?.length > state.charLimit)?
                state.showFullText ?
                    (
                        <p>
                            {state.text}
                            <span
                                onClick={() => {
                                    setState({...state, showFullText: false});
                                }}
                                className="read-more-less-text"
                            >
                                &nbsp;{state.readLessText}
                            </span>
                        </p>
                    ) : 
                    (
                        <p>
                            {state.text.substring(0, state.charLimit)}...
                            <span
                                onClick={() => {
                                    setState({...state, showFullText: true});
                                }}
                                className="read-more-less-text"
                            >
                                {state.readMoreText}
                            </span>
                        </p>
                    ) :
                    (
                       state.text 
                    )}
        </>
    )
}

export default ReadMoreLessText;