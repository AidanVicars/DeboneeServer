const cors = require("cors");
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const api_key = "08d359ba99c24203812f8ecf62dd1f2e";

app.use(express.json());
app.use(cors());

app.listen(80, () => {
    console.log("Listening on port 80!");
});

app.get('/', (req, res) => {
    res.send("Sup homesauce");
});

app.get ('/GetPlayer/:userName/', async (req, res) => {

    const userName = req.params.userName;
    const options = {
        headers: {
            "X-API-Key": api_key
        }
    }


    const api_url = `https://bungie.net/Platform/Destiny2/SearchDestinyPlayer/3/${userName}/`;
    const fetch_response =  await fetch(api_url, options);
    const json = await fetch_response.json();
    res.json(json);
    
    
});

