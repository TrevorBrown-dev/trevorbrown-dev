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
        // sendContactInfo(data as ContactInfo);
    }

    return (
        <form action="POST" className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id='firstName' name="firstName" />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id='lastName' name="lastName" />
            <label htmlFor="email">Email: </label>
            <input type="text" id='email' name="email" />
            <label htmlFor="message">Message: </label>
            <textarea name="message" id="message"></textarea>
            <ButtonPrimary type='submit'>Send!</ButtonPrimary>
        </form>
    );
}