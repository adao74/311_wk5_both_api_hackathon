const mysql = require('mysql2')

console.log(
    process.env.HOST,
    process.env.USERNAME,
    process.env.DATABASE,
    process.env.PASSWORD
)

const connection = mysql.createConnection({
    host: process.env.HOST,
    // user: process.env.USERNAME,
    user: "admin",
    database: process.env.DATABASE,
    // port: 3306,
    password: process.env.PASSWORD,
  });

  connection.addListener('error', (err) => {
      console.log(err, 'sql errorr*********');
    });

module.exports = connection
// const singleton = mysql.createConnection({
//     // connectionLimit: 100,
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// })

  
  
// const singleton = () => {
//     if (!this.pool) {
//         console.log('creating connection...')
//         this.pool = mysql.createPool({
//             connectionLimit: 100,
//             host: process.env.HOST,
//             user: process.env.USER,
//             password: process.env.PASSWORD,
//             database: process.env.DATABASE
//         })

//         return this.pool
//     }
//     return this.pool
// }
// module.exports = singleton