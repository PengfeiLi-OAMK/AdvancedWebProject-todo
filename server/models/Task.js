import {pool} from '../helpers/db.js';
const selectAllTask = async () => {
	return await pool.query('SELECT * FROM task');
}

const insertTask = async (description) => {
	return await pool.query('insert into task (description) values ($1) returning *', [description]);
}
export {selectAllTask, insertTask};