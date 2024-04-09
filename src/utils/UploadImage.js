// Importing necessary functions from Firebase storage and a UUID library
import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import uuid from 'react-native-uuid';

// Async function to get the URL of an image from a specified directory in Firebase storage
async function getImageURL(directoryPath, imageName, firebase) {
    // Get the storage reference using the provided Firebase configuration
    const storage = getStorage(firebase);
    // Create a reference to the specified directory
    const directoryRef = ref(storage, directoryPath);
  
    try {
        // List all items (files) in the specified directory
        const fileList = await listAll(directoryRef);
        // Find the file with the specified name in the directory
        const matchingFile = fileList.items.find(item => item.name === imageName);
  
        if (matchingFile) {
            // If the file is found, get its download URL and return it as a URI
            const url = await getDownloadURL(matchingFile);
            return { uri: url };
        } else {
            // If the file is not found, return null
            return null;
        }
    } catch (error) {
        // Handle errors and log them
        console.error('Error retrieving image URL:', error);
        return null;
    }
}

// Export the two functions for use in other modules
export { getImageURL };