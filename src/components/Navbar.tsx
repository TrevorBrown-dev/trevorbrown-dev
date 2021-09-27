import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    const links: Readonly<[string, string, string][]> = [
        ['/', 'Home', 'home'], ['/about', 'About', 'visibility']
    ];

    return (
        <nav className="navbar">
            {links.map(([to, name, icon], i) => (
                <Link key={i} to={to} className='icon-button no-underline backdrop-hover'>
                    <span className="material-icons-outlined icon">
                        {icon}
                    </span>
                    <span className='route'>
                        {name}
                    </span>
                </Link>
            ))}
        </nav>
    );
}