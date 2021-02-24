const Joi = require('joi');

const empDataSchema = Joi.object().keys({
    First_name: Joi.string().required(),
    Last_name: Joi.string().required(),
    Designation: Joi.number().required(),
    Department: Joi.number().required(),
    Basic: Joi.number().required(),
    HRA: Joi.number().required(),
    PF: Joi.number().required(),
    ESI: Joi.number().required(),
    Hiring_date: Joi.date().iso().required(),
})

exports.empDataCheck = (data) => {
    return empDataSchema.validate({
        First_name: data.fname,
        Last_name: data.lname,
        Designation: data.designation_id,
        Department: data.department_id,
        Basic: data.basic,
        HRA: data.hra,
        PF: data.pf,
        ESI: data.esi,
        Hiring_date: new Date(data.hiring_date)
    });
}
