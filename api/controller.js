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
    },
    addError(req, res) {
        let error = new Errors(req.body);
        error.save()
            .then(error => {
                res.status(200).json({'error': 'Added successfully'});
            })
            .catch(err => {
                res.status(400).send('Failed to create a new record');
            })
    },
    updateError(req, res) {
        Errors.findById(req.params.id, (err, error) => {
            if (!error)
                return next(new Errors('Could not load document'));
            else {
                error.sg_id = req.body.sg_id;
                error.sg_name = req.body.sg_name;
                error.esrm_errors = req.body.esrm_errors;
                error.peak_start_date = req.body.peak_start_date;
                error.peak_start_date = req.body.peak_start_date;
                error.vod_peak = req.body.vod_peak;
    
                error.save().then(error => {
                    res.json('Update done');
                }).catch(err => {
                    res.status(400).send('Update failed');
                });
            }
        });
    },
    deleteError(req, res) {
        Errors.findByIdAndRemove({_id: req.params.id}, (err, error) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Error Remove successfully');
            }
        });
    }
};

module.exports = controllers;
