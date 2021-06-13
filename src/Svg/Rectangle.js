import * as React from "react"

function Rectangle(props) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={43.729}
                y={13.509}
                width={31.6}
                height={31.6}
                rx={7.2}
                transform="rotate(107 43.729 13.51)"
                stroke="#407FF0"
                strokeWidth={6.4}
            />
        </svg>
    )
}

export default Rectangle;
