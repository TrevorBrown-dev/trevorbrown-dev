import { ButtonPrimary } from "./ButtonPrimary";

export const ContactForm: React.FC = () => {
    return (
        <form action="POST" className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            console.log("Sending Message...", e);
        }}>


            <ButtonPrimary type='submit'>Send!</ButtonPrimary>
        </form>
    );
}