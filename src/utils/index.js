const patientTableSchema = [
  {
    width: '25%',
    name: 'name',
    displayName: 'Name',
    cellType: 'AVATAR_WITH_TEXT',
  }, {
    width: '25%',
    name: 'age',
    displayName: 'Age',
  }, {
    width: '25%',
    name: 'gender',
    displayName: 'Gender',
  }, {
    width: '25%',
    name: 'contact',
    displayName: 'Contact',
  }
];

const ERROR_MESSAGE = {
  GET_ALL_PATIENTS: 'Something went wrong while getting all patients.',
  GET_PATIENT_BY_ID: 'Something went wrong patient by id.',
  UPLOAD_PATIENTS: 'Something went wrong while saving patient records.'
}

const getSortDirection = (fieldString='') => {
  if(!fieldString) return {};

  return fieldString
    .split('~~')
    .reduce((acc, current) => {
      const [key, value] = current.split('=');
      return {
        ...acc, 
        [key] : value}
      }, {});
}

module.exports = {
  patientTableSchema,
  ERROR_MESSAGE,
  getSortDirection
}
