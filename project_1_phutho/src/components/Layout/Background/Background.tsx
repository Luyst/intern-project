import { useEffect, useState } from 'react';
import { getVideoUrl } from '~/firebase/service';

function Background() {
    const [background, setBackground] = useState<string>('');

    useEffect(() => {
        const getVideoBackground = async (path: string) => {
            const videoUrl = await getVideoUrl(path);
            setBackground(videoUrl || '');
        };

        getVideoBackground('background/header_background.mp4');
    }, []);

    return (
        <div className="background w-dvw fixed -z-20">
            <video className="w-full" src={background} autoPlay loop muted></video>
        </div>
    );
}

export default Background;
