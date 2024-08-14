import { storage, ref, getDownloadURL } from './firebaseConfig';

const getVideoUrl = async (path: string) => {
    try {
        const videoRef = ref(storage, path);
        const url = await getDownloadURL(videoRef);
        return url;
    } catch (error) {
        console.error('Error fetching video URL:', error);
    }
};

export { getVideoUrl };
