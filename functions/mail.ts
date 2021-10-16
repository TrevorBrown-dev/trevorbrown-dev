import admin from 'firebase-admin';
import functions from 'firebase-functions';
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
});
