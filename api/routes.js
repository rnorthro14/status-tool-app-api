import Issue  from '../models/Issue';
import controller from './controller';


module.exports = function(app) {
    app.route('/issues').get(controller.getIssues);

    app.route('/issues/:id').get(controller.getIssueById);
    
    app.route('/issues/add').post(controller.addIssue);
    
    app.route('/issues/update/:id').post(controller.updateIssue);
    
    app.route('/issues/delete/:id').get(controller.deleteIssue);
};

