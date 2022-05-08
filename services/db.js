const mysql = require('mysql2/promise');
require('dotenv').config()

async function query(sql) {
  const connection = await mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
  });

  await connection.connect(async (err) => {
    if(err) throw err }
  )
  
  const [results,] = await connection.execute(sql)
  
  connection.end()
 
 return results;
}

async function preparedQuery(sql, id){
  const connection = await mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
  });

  await connection.connect(async (err) => {
    if(err) throw err }
  )
  
  const bind = Array.of(id)

  const [results, ] = await connection.execute(sql , bind)
  
  connection.end()
 
 return results;
}

module.exports = {
  query,
  preparedQuery,
}
