import mysql from 'mysql2'

const bd = await mysql.createConnection({
	host:  '212.76.129.200', /* 'localhost',*/
	user: 'nm_root',
	password: 'NanoMagicRoot',
	database: 'nm_site',
	connectionLimit: 0,
	queueLimit: 0
}).promise()


export { bd }