let express = require('express');
let app = express();
const path = require('path')

//get env config
require('dotenv').config()

//port sur .env
const port = process.env.PORT || 3000

let body = require('body-parser');
let mysql = require('mysql');

//raha mandray json izy
app.use(body.json());

//donnée avy @ formulaire
app.use(body.urlencoded({
    extended : true
}));


//manokatra connexion mysql
let dbConn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})
dbConn.connect();

//à l'ouverture principale
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
  });

app.get('/hello/:name',(req, res) => {
    const name = req.params.name
    res.send(`Bonjour ${name}`)
})

app.get('/search', (req, res) => {
    const {nom , fonction} = req.query
    res.send(`Votre nom : ${nom} et votre Fonction : ${fonction}`)
})

app.post('/poste' , (req, res) => {
    const {nom , fonction} = req.body
    res.json({nom , fonction})
})

app.get('/prog', function (req,res){
    dbConn.query(`SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages`, function(err , resl ,fields){
        if(err) throw err;
        return res.json({err:false , data : resl , message:'pg lists'});
    });
});


//écoute sur le port
app.listen(port,function(){
    console.log(`Running on ${port}` )
})