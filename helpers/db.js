const mariadb = require('mariadb');

const root = 'root';
const local = 'localhost';

const pool = mariadb.createPool({
    host: local,
    user: root,
    password: 'hWQOa69pMW',
    database: 'qatest_db',
    connectionLimit: 5
});

pool.getConnection((err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connection');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }
    if(connection) connection.release();

    return;
});

module.exports = pool;