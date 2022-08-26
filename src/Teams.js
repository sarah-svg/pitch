import React from 'react'
import getPlayers from './api-fetch';
import './App.css';

export default function Teams() {
    const [teams, setTeams] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        getPlayers().then(
            (data) => {
                setTeams(data);
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
    )
    }, []);
    return (  
        <>
    <h1 style={{display:'flex', justifyContent:'center'}}>Football Teams</h1>
        <div className='teams'>
          
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {teams.map((team) => (
                <div className='team' key={team.Key}>
                    <h3>{team.FullName}</h3>
                    <p>{team.City}</p>
                    <p>{team.PlayerID}</p>
                    <p>{team.Conference}</p>
                    <p>{team.Division}</p>
                    <p>{team.HeadCoach}</p>
                    <p>{team.TeamID}</p>
                    <img src={team.WikipediaLogoUrl} />
                </div>
            ))};
            </div>
            </>
    )
}