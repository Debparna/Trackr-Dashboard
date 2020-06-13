const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function joninfo(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.company_name = !isEmpty(data.company_name) ? data.company_name : "";

  // Email checks
  if (Validator.isEmpty(data.company_name)) {
    errors.company_name = "Company field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
