import { ContactInfo, sendContactInfo } from "../pages/Contact";
import { ButtonPrimary } from "./ButtonPrimary";

export const ContactForm: React.FC = () => {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        //Gather the Form Data
        const formData = new FormData(e.currentTarget);
        const data: { [key: string]: any } = {};
        formData.forEach((val, key) => data[key] = val)

        //Clear The Form
        e.currentTarget.reset();

        //Send the Email
        sendContactInfo(data as ContactInfo);
    }

    return (
        <form action="POST" className="contact-form" onSubmit={handleSubmit}>
            <input type="text" id='firstName' name="firstName" placeholder="First Name" required />
            <input type="text" id='lastName' name="lastName" placeholder="Last Name" required />
            <input type="email" id='email' name="email" placeholder="Email" style={{ gridColumn: '1/-1' }} required />
            <textarea name="message" id="message" placeholder="Message" style={{ gridColumn: '1/-1' }} required></textarea>
            <ButtonPrimary type='submit' style={{ gridColumn: '1/-1' }}>Send!</ButtonPrimary>
        </form>
    );
}