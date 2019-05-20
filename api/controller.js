import Issue  from '../models/Issue';

const controllers = {
    getIssues(req, res) {
        Issue.find((err, issues) => {
            if (err) {
                console.log(err)
            } else {
                res.json(issues);
            }
        });
    },
    getIssueById(req, res) {
        Issue.findById(req.params.id, (err, issue) => {
            if (err) {
                console.log(`cannot get issue: ${err}`);
            } else {
                res.json(issue);
            }
        });
    },
    addIssue(req, res) {
        let issue = new Issue(req.body);
        issue.save()
            .then(issue => {
                res.status(200).json({'issue': 'Added successfully'});
            })
            .catch(err => {
                res.status(400).send('Failed to create a new record');
            })
    },
    updateIssue(req, res) {
        Issue.findById(req.params.id, (err, issue) => {
            if (!issue)
                return next(new Error('Could not load document'));
            else {
                issue.title = req.body.title;
                issue.responsible = req.body.responsible;
                issue.description = req.body.description;
                issue.severity = req.body.severity;
                issue.status = req.body.status;
    
                issue.save().then(issue => {
                    res.json('Update done');
                }).catch(err => {
                    res.status(400).send('Update failed');
                });
            }
        });
    },
    deleteIssue(req, res) {
        Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Remove successfully');
            }
        });
    }
};

module.exports = controllers;
