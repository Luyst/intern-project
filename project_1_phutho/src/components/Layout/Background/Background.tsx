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
        <div className="background w-dvw h-dvh fixed -z-20 overflow-hidden">
            <video className="h-full w-full object-cover" src={background} autoPlay loop muted></video>
        </div>
    );
}

export default Background;
