import React from "react";

const Code = (props) => {
    return (
        <code>
            Code: {props.number}: {props.children}
        </code>
    )
}

export default Code;