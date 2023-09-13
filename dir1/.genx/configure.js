/**
 * Signature is `async (data: inquirer.Answers, utils: SeedConfigurationUtils)`
 */
module.exports = async (data, utils) => {
  data.appNameUC = data.appName.toUpperCase();
  // populate additional data fields
};
