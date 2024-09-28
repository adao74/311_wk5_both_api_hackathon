const pool = require('../mysql/connection')
const mysql = require('mysql2')


console.log(process.env.PASSWORD, "asdfadsf")

const getDepartment = (req, res) => {

  pool.query("SELECT * FROM departments;", (err, results) => {
    console.log(results)
    if (err) console.log(err)
    return res.json(results)
  })

}  

const getDepartmentById = (req, res) => {

  let sqlquery = "SELECT * FROM departments WHERE dept_no = ?;"
  sqlquery = mysql.format(sqlquery, [req.params.id])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })

}

const getDepartmentByName = (req, res) => {

  let sqlquery = "SELECT * FROM departments WHERE dept_name = ?"
  sqlquery = mysql.format(sqlquery, [req.params.dept_name])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })
}

module.exports = { getDepartment, getDepartmentById, getDepartmentByName }