import admin from 'firebase-admin';
import functions from 'firebase-functions';
import nodemailer from 'nodemailer';
admin.initializeApp();
interface ContactInfo {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
}
export const emailContactInfo = functions.firestore.document('/contact/{documentId}').onCreate((snap, context) => {
    //Get the message
    const { email, firstName, lastName, message } = snap.data() as ContactInfo;
    //email me the message
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });
});
