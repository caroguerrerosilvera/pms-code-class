const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000


const API_CHECKS_URL = 'https://api.truora.com/v1/checks'


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/validation', (req, res) => {
    res.send('Here BGK')
  })

async function createCheck () {
    var item = 
        {
            type: 'person',
            country: 'CO',
            national_id: 1017213273,   
            user_authorized: true    
        };

        
    let params = new URLSearchParams();
    params.append('type', 'person');
    params.append('country', 'CO');
    params.append('national_id', 1017);
    params.append('user_authorized', true);

    // 'country=co&national_id=1017213273&type=person&user_authorized=true'
    try {
       const res = await axios.post(
            API_CHECKS_URL,
            params,
            {headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Truora-API-Key': API_KEY,
                'truora-priority': 'high'
            }}
        )
 
        return res.data
    }
    catch (err) {
        console.error(err);
    }
}


app.post('/checks/create', async (req, res) => {
    const checks_response = await createCheck()
    res.send(checks_response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})