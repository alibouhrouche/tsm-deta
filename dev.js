require('dotenv').config()
const port = 3000
require('.').listen(port,function () {
    console.log(`App listening on port ${port}`)
})