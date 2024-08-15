import { db, storage, ref, getDownloadURL } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const getAllDocuments = async (collectionName: string) => {
    try {
        const colRef = collection(db, collectionName);

        const snapshot = await getDocs(colRef);
        console.log(snapshot.docs);
        const documents = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return documents;
    } catch (error) {
        console.error('Error fetching documents:', error);
        return [];
    }
};

const getVideoUrl = async (path: string) => {
    try {
        const videoRef = ref(storage, path);
        const url = await getDownloadURL(videoRef);
        return url;
    } catch (error) {
        console.error('Error fetching video URL:', error);
    }
};

export { getVideoUrl, getAllDocuments };
