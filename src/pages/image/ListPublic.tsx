import { useEffect, useState } from 'react';
import { ImageCardProps } from '../../components/ImageCard';
import Canvas from '../../components/Canvas';

export interface ImageResponse {
    imageId: string;
    username: string;
    filename: string;
    key: string;
    uploadDate: Date;
    public: boolean;
    contentType: string;
    blob: Blob;
}

export const ListPublic: React.FC = () => {
    const initialImageInfos: ImageResponse[] = [];
    const initialImageCards: ImageCardProps[] = [];
    const [imageInfos, setImageInfos] = useState(initialImageInfos);
    const [imageCards, setImageCards] = useState(initialImageCards);

    // TODO: API should be configurable
    useEffect(() => {
        fetch('http://localhost:8080/v1/jays/images/public', {
            method: 'GET',
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (!res.err) {
                    // Success!
                    setImageInfos(res.result);
                } else {
                    // Error
                    // TODO: add loading page and error page
                }
            });
    }, []);

    useEffect(() => {
        if (imageInfos.length > 0) {
            const downloads = imageInfos.map((image) =>
                fetch(image.key, {
                    method: 'GET',
                    headers: {
                        'Content-Type': image.contentType,
                    },
                })
                    .then(async (response) => response.blob())
                    .then((blob) => {
                        return {
                            imageId: image.imageId,
                            imageName: image.filename,
                            blob: blob,
                            uploader: image.username,
                            alt: "public_image_" + image.filename,
                        }
                    })
                    .catch((error) => {
                        // TODO: error page
                        console.error(
                            `Error downloading image from ${image.key}:`,
                            error,
                        );
                        return null;
                    }),
            );

            Promise.all(downloads)
                .then((images) => {
                    const validImageCards = images.map((img) => {
                        if (img !== null && img.blob) {
                            return {
                                imageId: img.imageId,
                                imageName: img.imageName,
                                imgSrc: URL.createObjectURL(img.blob),
                                uploader: img.uploader,
                                alt: img.alt,
                            };
                        } else {
                            return {
                                imageId: '',
                                imageName: '',
                                imgSrc: '',
                                uploader: '',
                                alt: '',
                            };
                        }
                    });
                    setImageCards(validImageCards);
                })
                .catch((err) => {
                    // TODO: need an error page;
                    console.error(err);
                });
        }
    }, [imageInfos]);

    return <Canvas imageCards={imageCards} />;
};

export default ListPublic;
