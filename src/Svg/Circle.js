import * as React from "react"

function Circle(props) {
    return (
        <svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx={23} cy={23} r={19.445} stroke="#407FF0" strokeWidth={7.11} />
        </svg>
    )
}

export default Circle;
