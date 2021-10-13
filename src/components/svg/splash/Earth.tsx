import React from "react";

export const Earth: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={250}
            height={250}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask
                id="ea-prefix__a"
                style={{
                    maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={250}
                height={250}
            >
                <path
                    d="M250 125c0 69.036-55.964 125-125 125S0 194.036 0 125 55.964 0 125 0s125 55.964 125 125z"
                    fill="#955BA5"
                />
            </mask>
            <g mask="url(#ea-prefix__a)">
                <path
                    d="M250 125c0 69.036-55.964 125-125 125S0 194.036 0 125 55.964 0 125 0s125 55.964 125 125z"
                    fill="#4F80FF"
                />
                <path
                    d="M41.504 113.281c-8.984-4.296 2.441-27.832-2.441-30.273-4.883-2.441-21.876 32.227-25.391 30.273-4.395-2.441.488-27.832 0-34.668-.488-6.835 24.902-18.554 27.832-20.996 2.93-2.441-8.3-26.367-2.441-28.32 5.859-1.953 75.683 53.71 62.988 53.71-10.157 0 11.719 26.856 5.859 38.087-5.859 11.23-20.689 1.556-21.484 2.441-.796.886 5.37 16.114 0 17.09-5.371.977-27.344 2.93-31.25 0-3.907-2.93-4.688-23.047-13.672-27.344zM65.43 20.508l-6.348-1.465 2.93-14.648L122.07-11.23 183.594-.488l29.785 32.226-9.766 4.883c-8.3-4.72-25.879-14.355-29.785-15.137-4.883-.976-49.316 3.418-49.316 6.836s50.293 12.696 59.082 13.184c8.789.488 8.301 43.945 30.761 58.105 22.461 14.161-80.078 11.231-83.007 9.278-2.93-1.953-17.09-26.367-19.043-32.227-1.953-5.86 10.742-19.531 7.812-21.972C117.188 52.245 79.59 39.55 76.66 36.62c-2.93-2.93 16.276-2.116 18.555-7.324-6.348-3.744-19.238-11.328-20.02-11.719-.78-.39-6.836 1.79-9.765 2.93zM54.688 164.062c-4.297-7.812-14.16-8.138-18.555-7.324l-40.528 11.231 47.364 63.965c22.46 12.207 70.508 35.937 83.008 33.203 15.625-3.418 18.066-38.086 20.507-44.434 2.442-6.347 4.883-20.019 11.231-31.738 5.078-9.375 53.711 21.484 66.894 29.297l18.555-44.434c0-4.069-10.352-23.047-18.555-27.344-10.254-5.371-18.554 5.371-24.414 10.254-5.859 4.883-33.691-10.254-33.691-17.09s-45.41 1.954-49.805 0c-4.394-1.953-16.113 6.836-18.555 12.207-2.44 5.372-8.3 15.625-20.019 20.02-11.719 4.395-18.066 1.953-23.438-7.813z"
                    fill="#35B86B"
                />
                <path
                    d="M62.012 208.496c-10.938-3.125-15.95 6.836-17.09 12.207-4.557 4.883 1.172 3.125 0 5.859-1.172 2.735 73.242 43.458 85.449 26.368l61.523-14.16 2.442-8.301c-4.72-3.418-19.727-12.403-22.461-15.137-2.734-2.734-22.949-4.395-32.715-4.883-8.789 0-27.344.977-31.25 4.883-4.883 4.883-32.227-2.93-45.898-6.836zM55.687 44.265c-10.936 3.456-15.948-7.56-17.087-13.5-4.557-5.399-13.963-16.954-15.135-19.978-1.171-3.024 34.662-25.378 52.726-36.178l109.356 36.178-2.441 10.8c-4.719 3.78-14.841 12.095-17.575 15.118-2.734 3.024-22.945 4.86-32.709 5.4-8.788 0-27.339-1.08-31.245-5.4-4.882-5.4-32.221 3.24-45.89 7.56z"
                    fill="#fff"
                />
            </g>
        </svg>
    )
}