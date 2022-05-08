const db = require('./db');
const helper = require('../helper');


async function getMultiple(){
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages`
  );
    
  const data = helper.emptyOrRows(rows);
  return data;
}

async function getOne(id){
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages WHERE id='${id}'`
  );
    
  const data = helper.emptyOrRows(rows);
  return data;
}

async function create(data){
  const result = await db.query(
    `INSERT INTO programming_languages (name, released_year, githut_rank, pypl_rank, tiobe_rank)
    VALUES ('${data.name}', ${data.released_year}, ${data.githut_rank}, ${data.pypl_rank}, ${data.tiobe_rank})`
  )
  let message = 'There was an error while creating'

  if(result.affectedRows){
    message = 'New Programming Languages added Successfully'
  }
  return {message}
}

async function update(id, data){
  const {name, released_year , githut_rank , pypl_rank , tiobe_rank} = data
  const result = await db.query(
    `UPDATE programming_languages 
    SET name = '${name}', released_year = ${released_year}, githut_rank = ${githut_rank}, pypl_rank = ${pypl_rank}, tiobe_rank = ${tiobe_rank}
    WHERE id='${id}'`
  )
  let message = 'There was an error while updating'

  if(result.affectedRows){
    message = `${name} updated Successfully`
  }
  return {message}
}

async function deleteOne(id){
  
  const result = await db.preparedQuery("DELETE FROM programming_languages WHERE id = ? ", parseInt(id))
  
  let message = 'Deleting unsuccessfull, an error occured'

  if(result.affectedRows){
    message = `Rows deleted Successfully`
  }
  return {message}
}

module.exports = {
  getMultiple,
  getOne,
  create,
  update,
  deleteOne
}

