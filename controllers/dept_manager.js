const pool = require('../mysql/connection')
const mysql = require('mysql2')


console.log(process.env.PASSWORD, "asdfadsf")

const getDepartmentManager = (req, res) => {

  pool.query("SELECT * FROM dept_manager", (err, results) => {
    console.log(results)
    if (err) console.log(err)
    return res.json(results)
  })

}  

const getDepartmentManagerById = (req, res) => {

  let sqlquery = "SELECT * FROM dept_manager WHERE emp_no = ?"
  sqlquery = mysql.format(sqlquery, [parseInt(req.params.id)])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })

}

const getDepartmentManagerNumberById = (req, res) => {

  let sqlquery = "SELECT * FROM dept_manager WHERE dept_no = ?"
  sqlquery = mysql.format(sqlquery, [req.params.dept_no])

  pool.query(sqlquery, (err, results) => {
    return res.json(results)
  })
}

const getDepartmentManagerByFromDate = (req, res) => {

    let sqlquery = "SELECT * FROM dept_manager WHERE from_date = ?"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

  const getDepartmentManagerByToDate = (req, res) => {

    let sqlquery = "SELECT * FROM dept_manager WHERE to_date = ?"
    sqlquery = mysql.format(sqlquery, req.params.id)
  
    pool.query(sqlquery, (err, results) => {
      return res.json(results)
    })
  
  }

module.exports = { getDepartmentManager, getDepartmentManagerById, getDepartmentManagerNumberById, getDepartmentManagerByFromDate, getDepartmentManagerByToDate }