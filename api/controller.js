const Errors  = require('../models/Errors');

const controllers = {
    getErrors(req, res) {
        Errors.find((err, errors) => {
            if (err) {
                console.log(err)
            } else {
                res.json(errors);
            }
        });
    },
    getErrorById(req, res) {
        Errors.findById(req.params.id, (err, error) => {
            if (err) {
                console.log(`cannot get issue: ${err}`);
            } else {
                res.json(error);
            }
        });
    }
};

module.exports = controllers;
