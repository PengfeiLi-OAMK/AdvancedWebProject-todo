import pkg from 'pg'
import dotenv from 'dotenv'
const enviroment = process.env.NODE_ENV 
dotenv.config()
const { Pool } = pkg

const openDb = () => {
	const pool = new Pool({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.NODE_ENV === 'development' ? process.env.DB_NAME : process.env.TEST_DB_NAME,
		//database: process.env.NODE_ENV === 'test' ? process.env.TEST_DB_NAME : process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT
	})
	return pool
  }
  
  const pool = openDb()
  export{pool}