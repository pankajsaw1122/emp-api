const express = require('express');
// const authCheck = require('../middleware/auth-token');
const empController = require('../controller/empController');
const router = express.Router();

router.post('/add-emp', empController.addEmployee);
router.put('/edit-emp', empController.editEmployee);
router.delete('/delete-emp', empController.deleteEmployee);
router.get('/list-emp', empController.listEmployee);
router.get('/emp-byid', empController.employeeById);
router.get('/dept-list', empController.departmentList);
router.get('/design-list', empController.designationList);

module.exports = router;
