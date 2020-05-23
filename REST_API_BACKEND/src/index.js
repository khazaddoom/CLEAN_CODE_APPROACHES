const express = require('express')
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Hello from express</h1>')
})

app.listen(3000, () => {
    console.log('Server running at PORT: 3000...')
})