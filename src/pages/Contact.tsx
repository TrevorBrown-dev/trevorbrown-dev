import emailjs from 'emailjs-com';
import { ContactForm } from '../components/ContactForm';
export interface ContactInfo {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
export const sendContactInfo = (message: ContactInfo) => emailjs.send("service_2lvytnt", "template_chs9bqb", message as any, "user_j0ic49hl7EFPe9IulXwIV");

export const Contact: React.FC = () => {
    return (
        <section className="hero-section contact">
            <h2 id="contact">Let's Chat!</h2>
            <div className="subheader">Interested in collaborating? Send me a message and let's make some magic!</div>
            <ContactForm />
        </section>
    );
}