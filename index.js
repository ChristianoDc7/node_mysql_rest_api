const express = require("express");

const app = express();

const port = 8080;

const programmingLanguagesRouter = require("./routes/programmingLanguage");

//pour les body en json
app.use(express.json());

//pour les url avec paramètre et query
app.use(express.urlencoded({extended: true}));

//home
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue" });
});

/* routes programming languages */
app.use("/programming-languages", programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});