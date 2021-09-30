import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    const links: Readonly<[string, string, string][]> = [
        ['/', 'Home', 'home'], ['/about', 'About', 'visibility',],
        ['/resume', 'Resume', 'description']
    ];

    return (
        <nav className="navbar">
            {links.map(([to, name, icon], i) => <MyLink key={i} to={to} name={name} icon={icon} />)}
        </nav>
    );
}

const MyLink: React.FC<{ to: string, icon: string, name: string }> = ({ to, icon, name }) => {
    return (
        <Link to={to} className='icon-button no-underline backdrop-hover'>
            <span className={`material-icons-outlined icon`}>
                {icon}
            </span>
            <span className='route'>
                {name}
            </span>
        </Link>
    );
}