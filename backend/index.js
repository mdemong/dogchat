import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("Saying Hello Dog");
    res.send("Hello Dog");
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})

// This must be the last route in the list.
app.use((req, res) => {
    res.status(404).send("404. Looks like you barked up the wrong tree");
})