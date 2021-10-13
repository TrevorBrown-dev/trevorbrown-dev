import { ButtonPrimary } from "./ButtonPrimary"
import { Splash } from "./Splash"

export const Hero: React.FC = () => {
    return (
        <section className="hero">
            <header>
                <h1 className="slogan">Web Dev With A Passion</h1>
                <ButtonPrimary>Let's Make Magic!</ButtonPrimary>
            </header>
            <Splash />
        </section>
    )
}