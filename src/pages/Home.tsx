import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "./About";
import { Contact } from "./Contact";

export const Home: React.FC = () => {
    return (
        <main className="home">
            <Hero />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}