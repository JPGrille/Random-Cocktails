
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random.php");
        console.log(result.data);
        res.render("index.ejs", { content: result.data.drinks });
      } catch (error) {
        console.log(error);
        res.render("index.ejs", { content: error });
      }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
