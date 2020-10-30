const express = require('express')
const path = require('path')
const app = express()
const api = require('./api/api')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()

const { logError, notFound, errorHandler } = require('./middlewares')

const connection = require('./database')
connection.then(db => console.log('DB is connected'))
    .catch(console.log)


app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/api/v1', api)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.use(notFound)
app.use(logError)
app.use(errorHandler)

app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})