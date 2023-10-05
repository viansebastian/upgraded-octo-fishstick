const express = require('express');
const app = express();
app.use(express.json());
const { port } = require('./config.js');
const PORT = process.env.PORT || port; 

app.listen(PORT, () => {
    console.log("Server listening on port " + port);
});

app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.get('/status', (req, res) => {
    const status = {
        "Status" : "Running"
    }
    res.send(status);
});

app.get('/statusstatus', (req, res) => {
    const exams = {
        "Monday" : "AAK",
        "Tuesday" : "Bentar"
    }
    res.send(exams);
});