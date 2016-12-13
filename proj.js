// prompt for proj
exports.prompts = [
  {
    name: 'libraries',
    type: 'confirm',
    message: 'Generate a customized UI libraries?',
    default: false,
  },
  {
    name: 'SPA',
    type: 'confirm',
    message: 'Do you want SPA feature?',
    default: false,
  },
  {
    name: 'i18n',
    type: 'confirm',
    message: 'Do you want i18n feature?',
    default: true,
  },
  {
    name: 'approveflow',
    type: 'confirm',
    message: 'Do you want approve-flow component?',
    default: false,
  }
];

exports.filter = function(source, data) {
  var flag = true;
  if(!data.SPA) {
    flag = !/routes|error/.test(source);
  }
  if (flag !== false && !data.i18n) {
    flag = !/i18n/.test(source);
  }
  return flag ;
};
