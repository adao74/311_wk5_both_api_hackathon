const pool = require('../mysql/connection')
const mysql = require('mysql2')


console.log(process.env.PASSWORD, "asdfadsf")

const getEmployees = (req, res) => {

  pool.query("SELECT * FROM employees LIMIT 50", (err, results) => {
    console.log(results)
    if (err) console.log(err)
    return res.json(results)
  })

}  

const getEmployeesById = (req, res) => {

  let sqlquery = "SELECT * FROM employees WHERE emp_no = ?"
  sqlquery = mysql.format(sqlquery, [parseInt(req.params.id)])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })

}

const getEmployeesByFirstName = (req, res) => {

  let sqlquery = "SELECT * FROM employees WHERE first_name = ?"
  sqlquery = mysql.format(sqlquery, [req.params.first_name])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }