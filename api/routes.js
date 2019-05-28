const Errors  = require('../models/Errors');
const controller = require('./controller');


module.exports = function(app) {
    app.route('/errors').get(controller.getErrors);

    app.route('/errors/:id').get(controller.getErrorById);
    
    app.route('/errors/add').post(controller.addError);
    
    app.route('/errors/update/:id').post(controller.updateError);
    
    app.route('/errors/delete/:id').get(controller.deleteError);
};

