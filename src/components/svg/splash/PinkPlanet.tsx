import React from "react"

export const PinkPlanet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={236}
            height={236}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask
                id="pp-prefix__a"
                style={{
                    maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={236}
                height={236}
            >
                <path
                    d="M236 118c0 65.17-52.83 118-118 118S0 183.17 0 118 52.83 0 118 0s118 52.83 118 118z"
                    fill="#955BA5"
                />
            </mask>
            <g mask="url(#pp-prefix__a)">
                <path
                    d="M236 118c0 65.17-52.83 118-118 118S0 183.17 0 118 52.83 0 118 0s118 52.83 118 118z"
                    fill="#FF4F7B"
                />
                <circle cx={90.805} cy={166.398} r={15.211} fill="#FF9CB4" />
                <circle cx={34.109} cy={136.438} r={10.141} fill="#FF9CB4" />
                <circle cx={201.891} cy={150.266} r={10.141} fill="#FF9CB4" />
                <circle cx={60.844} cy={75.594} r={25.813} fill="#FF9CB4" />
                <circle cx={165.477} cy={188.523} r={18.898} fill="#FF9CB4" />
                <circle
                    cx={184.319}
                    cy={51.569}
                    r={47.016}
                    transform="rotate(84.142 184.319 51.569)"
                    fill="#FF9CB4"
                />
                <path
                    d="M156.666 53.016c2.175 7.654 10.745 22.529 27.619 20.798"
                    stroke="#FF4F7B"
                    strokeWidth={10}
                    strokeLinecap="round"
                />
            </g>
        </svg>
    )
}