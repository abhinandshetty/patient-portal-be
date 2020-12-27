# patient-portal-be

The app is built using Node JS and Express with MongoDB as the database. For this app, I have used Atlas as the cloud MongoDB provider.


### steps to start the app locally
* create a `.env` file in the project root and add the entries that have been shared in the email I have sent
* `yarn install`
* `yarn run start`

The application will start on port 4000


### The application has 3 endpoints 
* [GET] /api/patients - get the list of all patients in the DB.
* [GET] /api/patients/:patient_id - get the patient profile by the given patient ID.
* [POST] /api/patients - to upload CSV data to the app, process it and save it to DB.


### The app is also hosted on heroku and can be accessible via this url : https://prod-patient-portal.herokuapp.com/
