import * as React from "react"

function Cross(props) {
    return (
        <svg
            width={55}
            height={56}
            viewBox="0 0 55 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={15.047}
                y={10.869}
                width={8.25}
                height={41.25}
                rx={4.125}
                transform="rotate(-25 15.047 10.87)"
                fill="#407FF0"
            />
            <rect
                x={44.451}
                y={15.364}
                width={8.25}
                height={41.25}
                rx={4.125}
                transform="rotate(65 44.451 15.364)"
                fill="#407FF0"
            />
        </svg>
    )
}

export default Cross;
