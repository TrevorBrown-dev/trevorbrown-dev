export const BluePlanet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={203}
            height={203}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask
                id="bp-prefix__a"
                style={{
                    maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={203}
                height={203}
            >
                <path
                    d="M203 101.5c0 56.057-45.443 101.5-101.5 101.5S0 157.557 0 101.5 45.443 0 101.5 0 203 45.443 203 101.5z"
                    fill="#955BA5"
                />
            </mask>
            <g mask="url(#bp-prefix__a)">
                <path
                    d="M203 101.5c0 56.057-45.443 101.5-101.5 101.5S0 157.557 0 101.5 45.443 0 101.5 0 203 45.443 203 101.5z"
                    fill="#4F80FF"
                />
                <circle cx={101.5} cy={205.379} r={26.961} fill="#334A85" />
                <circle cx={8.723} cy={66.609} r={8.723} fill="#334A85" />
                <circle cx={39.648} cy={140.355} r={8.723} fill="#334A85" />
                <circle cx={111.809} cy={7.93} r={22.203} fill="#334A85" />
                <circle cx={189.123} cy={65.42} r={16.256} fill="#334A85" />
                <circle
                    cx={140.355}
                    cy={126.874}
                    r={40.441}
                    transform="rotate(92.293 140.355 126.874)"
                    fill="#334A85"
                />
                <path
                    d="M116.633 124.734c.918 6.783 6.401 20.494 20.98 21.077"
                    stroke="#4F80FF"
                    strokeWidth={10}
                    strokeLinecap="round"
                />
            </g>
        </svg>
    )
}