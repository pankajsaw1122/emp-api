# emp-api
Test API of Employee management with basic CRUD operation

API Document for 

Reference:-

Department id and name

#id,  name
1,   Human Resource
2,   Project
3,   Development

Designation id and name

# id, department_id, name
1,    1,             Human Resource Manager
2,    2,             Project Manager Head
3,    3,             Senior Developer
4,    3,             Junior Developer
5,    3,             Graphics Designer
6,    3,             Tester
7,    3,             Team Leader
8,    2,             Assistant Project Manager



1. API to insert employee data

URL: localhost:8080/employee/add-emp
TYPE: POST

Note:- Please use x-www-form-urlencoded in postman to easy copy paste


Sample data example:-

Paramters: 

fname // Employee first name
lname  // Employee last name
designation // Employee designation id
department // Employee department id
basic // Basic salary
hra // HRA
pf // PF deduction of employee
esi // esi of employee
hiring_date // On date employee hired
end_date // If employee left company then give a date else empty

Sample data:-

fname:Pankaj
lname:saw
designation:4
department:1
basic:8000
hra:2000
pf:500
esi:50
hiring_date:2020-02-23 16:18:00
end_date:

2. API to update employee data

URL: localhost:8080/employee/edit-emp
TYPE: PUT

Note:- Please use x-www-form-urlencoded in postman to easy copy paste

Paramters: 

id // id of employee
fname // Employee first name
lname  // Employee last name
designation // Employee designation id
department // Employee department id
basic // Basic salary
hra // HRA
pf // PF deduction of employee
esi // esi of employee
hiring_date // On date employee hired
end_date // If employee left company then give a date else empty

Sample data:-

id: 4,
fname:Pankaj
lname:saw
designation:4
department:1
basic:8000
hra:2000
pf:500
esi:50
hiring_date: 2020-02-23 16:18:00
end_date: 2021-02-23 16:18:00


3. API to delete employee data

URL: localhost:8080/employee/delete-emp
TYPE: Delete

Note:- Please use x-www-form-urlencoded in postman to easy copy paste

Sample data example:-

Paramters: 

id // id of employee

Sample data:-

id: 4


4. API to get list of employees

URL: localhost:8080/employee/list-emp
TYPE: GET


5. API to get data of employee by id

URL: localhost:8080/employee/emp-byid
TYPE: GET

Paramters: 

id // id of departments

Sample data:-

id: 3


6.  API to get list of departments

URL: localhost:8080/employee/dept-list
TYPE: GET

7. API to get list of designations as per departments

URL: localhost:8080/employee/design-list
TYPE: GET

Paramters: 

id // id of departments

Sample data:-

id: 3
