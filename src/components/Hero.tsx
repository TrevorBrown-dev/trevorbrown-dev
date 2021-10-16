import { ButtonPrimary } from "./ButtonPrimary";
import { Splash } from "./Splash";
export const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView();
}
export const Hero: React.FC = () => {
    return (
        <section className="hero">
            <header>
                <h1 className="slogan">Web Dev With A Passion</h1>
                <ButtonPrimary onClick={() => scrollTo('#contact')}>Let's Make Magic!</ButtonPrimary>
            </header>
            <Splash />
        </section>
    )
}