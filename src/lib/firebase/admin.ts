import * as admin from "firebase-admin";
import path from "path";


const serviceAccount = path.resolve(process.cwd(), "secrets", "sdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


export const adminAuth = admin.auth();
export const adminDb = admin.firestore();