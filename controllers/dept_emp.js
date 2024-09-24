const pool = require('../mysql/connection')
const mysql = require('mysql2')


console.log(process.env.PASSWORD, "asdfadsf")

const getDepartmentEmployee = (req, res) => {

  pool.query("SELECT * FROM dept_emp;", (err, results) => {
    console.log(results)
    if (err) console.log(err)
    return res.json(results)
  })

}  

const getDepartmentEmployeeById = (req, res) => {

  let sqlquery = "SELECT * FROM dept_emp WHERE emp_no = ?;"
  sqlquery = mysql.format(sqlquery, [parseInt(req.params.id)])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })

}

const getDepartmentEmployeeNumberById = (req, res) => {

  let sqlquery = "SELECT * FROM dept_emp WHERE dept_no = ?"
  sqlquery = mysql.format(sqlquery, [req.params.dept_no])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })
}

const getDepartmentEmployeeByFromDate = (req, res) => {

    let sqlquery = "SELECT * FROM dept_emp WHERE from_date = ?;"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

  const getDepartmentEmployeeByToDate = (req, res) => {

    let sqlquery = "SELECT * FROM dept_emp WHERE to_date = ?;"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

module.exports = { getDepartmentEmployee, getDepartmentEmployeeById, getDepartmentEmployeeNumberById, getDepartmentEmployeeByFromDate, getDepartmentEmployeeByToDate }