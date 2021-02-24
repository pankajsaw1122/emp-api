const validation = require('../common/validation');
const sendResponse = require('../common/sendresponse');
const empModel = require('../models/employee');

exports.addEmployee = (req, res, next) => {
    console.log(req.body);
    let valid = validation.empDataCheck(req.body);
    if (valid.error) {
        console.error(valid.error);
        sendResponse.validationError(valid.error.details[0].message, next);
    } else {
        empModel.insert(req.body).then(data => {
            sendResponse.sendResponseData({ message: 'Data inserted successfully', insertId: data[0].insertId }, res);
        }).catch(error => {
            console.error(error);
            sendResponse.errorResponse(error, next);
        })
    }
}

exports.editEmployee = (req, res, next) => {
    console.log(req.body);
    let valid = validation.empDataCheck(req.body);
    if (valid.error) {
        console.error(valid.error);
        sendResponse.validationError(valid.error.details[0].message, next);
    } else if (!req.body.id) {
        sendResponse.validationError('Id is missing', next);
    } else {
        return empModel.checkExist(req.body.id).then(data => {
            if (data[0].length) {
                return empModel.update(req.body);
            } else {
                sendResponse.throwError(400, 'Data not found');
            }
        }).then(data => {
            sendResponse.sendResponseData({ message: 'Data updated successfully' }, res);
        }).catch(error => {
            console.error(error);
            sendResponse.errorResponse(error, next);
        })
    }
}

exports.deleteEmployee = (req, res, next) => {
    console.log(req.query);
    if (!req.query.id) {
        sendResponse.validationError('Id is missing', next);
    } else {
        return empModel.checkExist(req.query.id).then(data => {
            if (data[0].length) {
                return empModel.delete(req.query.id);
            } else {
                sendResponse.throwError(400, 'Data not found');
            }
        }).then(data => {
            sendResponse.sendResponseData({ message: 'Data deleted successfully' }, res);
        }).catch(error => {
            console.error(error);
            sendResponse.errorResponse(error, next);
        })
    }
}

exports.listEmployee = (req, res, next) => {
    empModel.select('SELECT ed.id, ed.fname, ed.lname, department.name as depart_name, designations.name as design_name, ed.basic, ed.hra, ed.gross_salary, ed.pf, ed.esi, ed.total_deduct, ed.net_salary, ed.hire_date, ed.end_date from emp_data ed LEFT JOIN department ON ed.department_id = department.id LEFT JOIN designations ON ed.designation_id = designations.id order by ed.id desc', []).then(data => {
        sendResponse.sendResponseData(data[0], res);
    }).catch(error => {
        console.error(error);
        sendResponse.errorResponse(error, next);
    })
}

exports.employeeById = (req, res, next) => {
    if (!req.query.id) {
        sendResponse.validationError('Id is missing', next);
    } else {
        empModel.select('SELECT ed.id, ed.fname, ed.lname, ed.department_id, ed.designation_id, ed.basic, ed.hra, ed.gross_salary, ed.pf, ed.esi, ed.total_deduct, ed.net_salary, ed.hire_date, ed.end_date from emp_data ed where id = ?', [req.query.id]).then(data => {
            sendResponse.sendResponseData(data[0][0], res);
        }).catch(error => {
            console.error(error);
            sendResponse.errorResponse(error, next);
        });
    }

}


exports.departmentList = (req, res, next) => {
    empModel.select('SELECT id, name from department', []).then(data => {
        sendResponse.sendResponseData(data[0], res);
    }).catch(error => {
        console.error(error);
        sendResponse.errorResponse(error, next);
    })
}

exports.designationList = (req, res, next) => {
    if (!req.query.id) {
        sendResponse.validationError('Id is missing', next);
    } else {
        empModel.select('SELECT id, name from designations where department_id = ?', [req.query.id]).then(data => {
            sendResponse.sendResponseData(data[0], res);
        }).catch(error => {
            console.error(error);
            sendResponse.errorResponse(error, next);
        });
    }
}