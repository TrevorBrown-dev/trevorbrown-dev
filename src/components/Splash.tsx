import { Avatar } from "./svg/splash/Avatar";
import { BluePlanet } from "./svg/splash/BluePlanet";
import { Earth } from "./svg/splash/Earth";
import { PinkPlanet } from "./svg/splash/PinkPlanet";
import { RingedPlanet } from "./svg/splash/RingedPlanet";
import { Star } from "./svg/splash/Star";

export const Splash: React.FC = () => {
    return (
        <div className="splash" role="img">
            <RingedPlanet style={{
                position: 'absolute', left: '1em', top: '-10em', transform: 'scale(0.5)'
            }} />
            <PinkPlanet style={{
                position: 'absolute', left: '27em', top: '-10em', transform: 'scale(0.65)'
            }} />
            <BluePlanet style={{
                position: 'absolute', right: '35em', top: '-8em', transform: 'scale(0.6)'
            }} />
            <Earth style={{
                position: 'absolute', right: '10em', top: '-5em', transform: 'scale(0.6)'
            }} />
            <Star style={{
                position: 'absolute', right: '10em', top: '-5em', transform: 'scale(0.6)'
            }} />
            <Star style={{
                position: 'absolute', left: '20em', top: '-5em', transform: 'scale(1) rotate(20deg)'
            }} />
            <Star style={{
                position: 'absolute', left: '50em', top: '-9em', transform: 'scale(0.5) rotate(50deg)'
            }} />
            <Star style={{
                position: 'absolute', right: '50em', top: '-5em', transform: 'scale(0.5) rotate(80deg)'
            }} />
            <Star style={{
                position: 'absolute', right: '30em', top: '-11em', transform: 'scale(0.5) rotate(80deg)'
            }} />
            <Star style={{
                position: 'absolute', left: '40em', top: '-4em', transform: 'scale(0.7) rotate(42deg)'
            }} />
            <div className="avatar">

                < Avatar />
            </div>
        </div >
    );
}