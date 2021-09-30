import { Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import './styles/style.css';
export const App: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className="page-main">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

