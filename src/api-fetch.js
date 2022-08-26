 export default function getPlayers() {
     return fetch('https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=124cbfa4cf2340d9be44fc44edc4ef87'
     ).then((response) => response.json());
}