const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get("/", function (req, res) {
	res.sendFile(__dirname+"/login.html");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})