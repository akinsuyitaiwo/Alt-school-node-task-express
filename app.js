import express from express;

const app = express();

port = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello, welcome to my school task');
  });
app.get("/", (req, res) => {
    res.send('Hello, welcome to my school task');
  });

  app.listen(port, () => {
    console.log(` App listening on port ${port}`)
  })