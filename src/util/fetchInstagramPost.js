// import axios from 'axios';

const axios = require('axios');

async function getFollowers(username) {
    const data = await axios.get(`https://www.instagram.com/akash.developer/?__a=1`);
    console.log(data.data);
}

getFollowers();