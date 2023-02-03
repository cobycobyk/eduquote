const admin = require("firebase-admin");

exports.addUser = async function addUser(req, res) {
  const user = await admin.auth().createUser({
    email: req.body.formData.email,
    emailVerified: true,
    password: req.body.formData.password,
    displayName: req.body.formData.firstName,
    disabled: false,
  });
  return res.send(user);
};
