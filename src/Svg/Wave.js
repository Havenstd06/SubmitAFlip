import * as React from "react"

function Wave(props) {
    return (
        <svg
            width={1920}
            height={150}
            viewBox="0 0 1920 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                opacity={0.298}
                d="M-7 50.826s847.837 198 1933 0"
                stroke="#407FF0"
                strokeWidth={2}
            />
            <path
                opacity={0.297}
                d="M-7 1.826s847.837 198 1933 0"
                stroke="#407FF0"
                strokeWidth={2}
            />
        </svg>
    )
}

export default Wave;
