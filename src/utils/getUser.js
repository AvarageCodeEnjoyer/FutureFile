// Import necessary functions from Firebase Firestore and UploadImage
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import { getImageURL } from './UploadImage';

// Async function to get user data from Firestore
async function getUser(Id, firebase) {
    // Get Firestore instance
    const db = getFirestore();
    // Get reference to user data collection
    const myCollection = collection(db, 'userData');
    
    try {
        // Get document reference for the provided user ID
        const docRef = doc(myCollection, Id);
        // Get document snapshot asynchronously
        const docSnapshot = await getDoc(docRef);
    
        // Check if user data exists
        if (docSnapshot.exists()) {
            // Retrieve user data
            const data = docSnapshot.data();
            // Fetch profile picture URLs
            let Pictures = {
                ProfilePicture: await getImageURL('Profiles', data.profileIcon, firebase),
                BackPicture: await getImageURL('ProfileBackGrounds', data.profileBackground, firebase),
            };
            // Return user data along with profile pictures
            return {
                userData: { ...data},
                ...Pictures
            }
        } else {
            // Return error if user not found
            return {error: "No User Found"}
        }
    } catch (err) {
        // Return null if an error occurs during the process
        return null
    }
}

// Export the getUser function
export default getUser;