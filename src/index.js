import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import Teams from './Teams';
import LeagueStandings from './LeagueStandings';
import Team from './Team';
import Footer from './Footer';
import Header from './Header';

function Home() { 
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  return <App />;
}
function TeamsPage() { 
  let navigate = useNavigate();
  let params = useParams();
  return <Teams navigate={navigate} params={params} />;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {/* <header className="App-header">
     
        <Link to='/'>Home</Link>
        <Link to='teams-players'>Teams</Link>
        <Link to='league'>League Standings</Link>
  </header>  * /} */}

    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="teams-players" element={<TeamsPage/>}/>
        <Route path=":teamId" element={<Team />} />
        <Route path='league' element={<LeagueStandings />} /> 
     

      </Routes>
      <Footer/>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
