import { useEffect, useState } from 'react';

// const usePreloadImage = (src) => {
//     const [isLoading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         let isCancelled = false;
//         if (src) {
//             setLoading(true);
//             const img = new Image();
//             img.onload = () => {
//                 if (isCancelled) return;
//                 setLoading(false);
//             };
//             img.onerror = (e) => {
//                 if (isCancelled) return;
//                 setLoading(false);
//                 setError(e.message || 'failed to load image');
//             };
//             img.src = src;
//         } else {
//             setLoading(false);
//         }
//         return () => {
//             isCancelled = true;
//         };
//     }, [src]);

//     return { src: src ? src : undefined, isLoading, isError: !!error };
// };

export const usePreloadImages = (srcArray) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        let loaded = [];

        setLoading(true);
        srcArray.forEach((src) => {
            const img = new Image();
            img.onload = () => {
                loaded.push(src);
                if (!cancelled && loaded.length === srcArray.length) {
                    setImages(loaded);
                    setLoading(false);
                }
            };
            img.onerror = () => {
                loaded.push(undefined); // keep index alignment
                if (!cancelled && loaded.length === srcArray.length) {
                    setImages(loaded);
                    setLoading(false);
                }
            };
            img.src = src;
        });

        return () => {
            cancelled = true;
        };
    }, [srcArray]);

    // match original return shape so PicCarousel still works
    return images.map((src) => ({
        src,
        isLoading: loading,
        isError: !src,
    }));
};
