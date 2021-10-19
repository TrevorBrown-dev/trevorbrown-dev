import React from "react"

export const EmailJS: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <div className="emailjs" style={{ display: 'inline-flex', flex: 0 }}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 510.88 512"
                fill="#FCA253"
                className="prefix__logo prefix__navbar-logo"
                {...props}
            >
                <rect x={270.57} width={240.31} height={240.31} rx={24} fill="inherit" />
                <path
                    d="M215.12 254.73V68.5a29.16 29.16 0 00-8.55-20.64 29.19 29.19 0 00-41.28 0L16.18 197a55.27 55.27 0 000 78.14l220.71 220.68a55.27 55.27 0 0078.14 0l149.11-149.11a29.19 29.19 0 000-41.28l-1.14-1.12a29.16 29.16 0 00-20.64-8.55H256.15a41 41 0 01-41.03-41.03z"
                    fill="inherit"
                />
            </svg>
            <span style={{ fontFamily: "Open Sans,Roboto,Oxygen,Ubuntu,Cantarell,Lato,Helvetica Neue,sans-serif", fontSize: '2.5em', marginLeft: '.3em' }}>EmailJS</span>
        </div>
    )
}