const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Set up your email sending service credentials and email details
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

exports.sendEmails = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated if necessary
  // if (!context.auth) {
  //   throw new functions.https.HttpsError(
  //     "unauthenticated",
  //     "You need to be signed in to use this feature"
  //   );
  // }

  const snapshot = await admin.firestore().collection("customers").get();
  const emails = snapshot.docs.map((doc) => doc.data().email);
  const mailOptions = {
    from: "your-email@gmail.com",
    to: emails.join(","),
    subject: "Update Your Personal Info",
    text: "Please update your personal information at https://blue-star-mothers.web.app/",
  };
  try {
    await transporter.sendMail(mailOptions);
    return {success: true};
  } catch (error) {
    console.error("There was an error while sending the email:", error);
    return {success: false};
  }
});
