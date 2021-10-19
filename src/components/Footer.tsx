import { EmailJS } from "./svg/EmailJS";
import { Firebase } from "./svg/Firebase";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="center-text" style={{ marginBottom: '1em' }}>
                <span>Powered By</span> <br />
                <div className="logos">
                    <a href="https://firebase.google.com/">
                        <Firebase style={{ transform: 'scale(1.75)', marginRight: '3em' }} />
                    </a>
                    <a href="https://www.emailjs.com/">
                        <EmailJS height="3em" />
                    </a>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} &mdash; Trevor Brown
            </div>
        </footer>
    );
}