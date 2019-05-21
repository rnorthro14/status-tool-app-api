# status-tool-app-api
NodeJS, status update using express, mongoDB

Clone repository
```
$ cd status-tool-app-api
$ npm install
```
If you don't have it installed already, install nodemon globally
``` $ npm install -g nodemon ```

You'll need data to run app. Make sure you have MongoDB installed on your system. The data schema looks like this:
```
{
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    }, 
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
}
```
Once you have data in place, you can run the app:
```
$ npm run dev
```
Test in browser or an API utility like [Postman](https://www.getpostman.com/)
http://localhost:4000/issues
