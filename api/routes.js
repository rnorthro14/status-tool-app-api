const Errors  = require('../models/Errors');
const controller = require('./controller');


module.exports = function(app) {
    app.route('/errors').get(controller.getErrors);

    app.route('/errors/:id').get(controller.getErrorById);
    
};

