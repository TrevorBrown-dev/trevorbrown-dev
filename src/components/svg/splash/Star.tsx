import React from "react";

export const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={54}
            height={54}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M27.419.848l7.176 19.394L53.99 27.42l-19.395 7.176L27.42 53.99l-7.177-19.395L.849 27.42l19.395-7.177L27.419.849z"
                fill="#fff"
            />
        </svg>
    )
}