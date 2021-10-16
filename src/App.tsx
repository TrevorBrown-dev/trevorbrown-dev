import { Route } from 'react-router';
import { Home } from './pages/Home';
import './styles/style.css';
export const App: React.FC = () => {
  return (
    <>
      <div className="page-container">
        {/* <Navbar /> */}
        <div className="page-main">
          <Route path="/" exact component={Home} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

