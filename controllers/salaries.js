const pool = require('../mysql/connection')
const mysql = require('mysql2')


console.log(process.env.PASSWORD, "asdfadsf")

const getSalaries = (req, res) => {

  pool.query("SELECT * FROM salaries;", (err, results) => {
    console.log(results)
    if (err) console.log(err)
    return res.json(results)
  })

}  

const getSalariesEmployeeById = (req, res) => {

  let sqlquery = "SELECT * FROM salaries WHERE emp_no = ?;"
  sqlquery = mysql.format(sqlquery, [parseInt(req.params.id)])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })

}

const getSalariesBySalary = (req, res) => {

  let sqlquery = "SELECT * FROM salaries WHERE salary = ?"
  sqlquery = mysql.format(sqlquery, [req.params.salary])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })
}

const getSalariesByFromDate = (req, res) => {

    let sqlquery = "SELECT * FROM salaries WHERE from_date = ?;"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

  const getSalariesByToDate = (req, res) => {

    let sqlquery = "SELECT * FROM salaries WHERE to_date = ?;"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

module.exports = { getSalaries, getSalariesEmployeeById, getSalariesBySalary, getSalariesByFromDate, getSalariesByToDate }