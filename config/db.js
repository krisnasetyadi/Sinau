const Pool = require('pg').Pool;

const pool = new Pool({
    user:process.env.NEXT_PUBLIC_USER,
    password:process.env.NEXT_PUBLIC_PASS,
    host:process.env.NEXT_PUBLIC_HOST,
    port:process.env.NEXT_PUBLIC_POR,
    database:process.env.NEXT_PUBLIC_DB
})

module.exports = pool