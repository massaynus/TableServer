const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/data', async (req, res) => {
    const data = req.body
    console.log('Recieved data:', data)

    for (const row of data)
        row['%'] = Math.floor(Math.random() * 100 * 100) / 100

    await new Promise(res => setTimeout(res, 1000))
    res.json(data)
})

app.listen(5000, () => console.log('server up on 5000'))