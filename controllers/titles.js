const pool = require('../mysql/connection')
const mysql = require('mysql2')


console.log(process.env.PASSWORD, "asdfadsf")

const getTitles = (req, res) => {

  pool.query("SELECT * FROM titles;", (err, results) => {
    console.log(results)
    if (err) console.log(err)
    return res.json(results)
  })

}  

const getTitlesEmployeeById = (req, res) => {

  let sqlquery = "SELECT * FROM titles WHERE emp_no = ?;"
  sqlquery = mysql.format(sqlquery, [parseInt(req.params.id)])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })

}

const getTitlesByTitle = (req, res) => {

  let sqlquery = "SELECT * FROM titles WHERE title = ?"
  sqlquery = mysql.format(sqlquery, [req.params.title])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })
}

const getTitlesByFromDate = (req, res) => {

    let sqlquery = "SELECT * FROM titles WHERE from_date = ?;"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

  const getTitlesByToDate = (req, res) => {

    let sqlquery = "SELECT * FROM titles WHERE to_date = ?;"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

module.exports = { getTitles, getTitlesEmployeeById, getTitlesByTitle, getTitlesByFromDate, getTitlesByToDate }