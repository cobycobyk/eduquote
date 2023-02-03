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

exports.getUserUID = async function getUserUID(req, res) {
  const info = req.body.formData;
  const userRecord = await admin.auth().getUserByEmail(req.body.formData.email);
  const uid = userRecord.toJSON();
  const newDate = new Date()
  const userDocRef = admin.firestore().doc(`/users/${uid.uid}`);
  await admin.firestore().collection("users").doc(`/${uid.uid}`).update({
    updatedAt: newDate,
    updatedBy: req.body.currentUserInfo.email,
    firstName: info.firstName,
    lastName: info.lastName,
    email: info.email,
    institution: info.institution,
    phoneNumber: info.phoneNumber,
    salesperson: info.salesperson,
    role: info.role,
  });
  return res.send(userDocRef);
};

exports.deleteUser = async function deleteUser(req, res) {
  const userRecord = await admin.auth().getUserByEmail(req.body.formData.email);
  const uid = userRecord.toJSON();
  await admin.auth().deleteUser(uid.uid);
  await admin.firestore().collection("users").doc(`/${uid.uid}`).delete();
  return res.send(uid.uid);
};
