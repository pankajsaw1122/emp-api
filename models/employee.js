const db = require("../config/db");
const moment = require('moment');

exports.insert = (data) => {
  let gross_sal = parseFloat(data.basic) + parseFloat(data.hra);
  let total_deduct = parseFloat(data.pf) + parseFloat(data.esi);
  return db.execute(
    'INSERT INTO emp_data (fname, lname, designation_id, department_id, basic, hra, gross_salary, pf, esi, total_deduct, net_salary, hire_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [data.fname, data.lname, data.designation_id, data.department_id, data.basic, data.hra, gross_sal, data.pf, data.esi, total_deduct, (gross_sal - total_deduct), moment(data.hiring_date).format('YYYY-MM-DD hh:mm:ss'), !data.end_date ? null : moment(data.end_date).format('YYYY-MM-DD hh:mm:ss')]
  );
};

exports.update = (data) => {
  let gross_sal = parseFloat(data.basic) + parseFloat(data.hra);
  let total_deduct = parseFloat(data.pf) + parseFloat(data.esi);
  return db.execute(
    'UPDATE emp_data SET fname = ?, lname = ?, designation_id = ?, department_id = ?, basic = ?, hra = ?, gross_salary = ?, pf = ?, esi = ?, total_deduct = ?, net_salary = ?, hire_date = ?, end_date = ? WHERE id = ?',
    [data.fname, data.lname, data.designation_id, data.department_id, data.basic, data.hra, gross_sal, data.pf, data.esi, total_deduct, (gross_sal - total_deduct), moment(data.hiring_date).format('YYYY-MM-DD hh:mm:ss'), !data.end_date ? null : moment(data.end_date).format('YYYY-MM-DD hh:mm:ss'), data.id]
  );
};


exports.checkExist = (id) => {
  return db.execute('SELECT id FROM emp_data WHERE id = ?', [id]);
};

exports.delete = (id) => {
  return db.execute('DELETE FROM emp_data WHERE id = ?', [id]);
};


exports.select = (query, data) => {
  return db.execute(query, data);
};