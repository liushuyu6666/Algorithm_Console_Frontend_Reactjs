import shrinkStringByDots from "../utils/shrinkStringByDots";

export interface ImageCardProps {
    imageId: string;
    imageName: string;
    imgSrc: string;
    uploader: string;
    alt: string;
}

const ImageCard = ({
    imageId,
    imageName,
    imgSrc,
    uploader,
    alt,
}: ImageCardProps): JSX.Element => {
    return (
        <div className="image-card" id={imageId}>
            <img
                src={imgSrc}
                className="image-card-top"
                alt={alt}
            />
            <div className="image-card-bottom">
                <label className="image-name" >{shrinkStringByDots(imageName, 20)}</label>
                <label className="image-uploader">{shrinkStringByDots(uploader, 20)}</label>
            </div>
        </div>
    );
};

const randomColor = () => {
    const beautifulColor = [
        '#e52165',
        '#0d1137',
        '#077b8a',
        '#a2d5c6',
        '#ff6e40',
        '#ecc19c',
        '#87ac34',
        '#123456',
        '#b9925e',
        '#4203c9',
    ];
    return beautifulColor[Math.floor(Math.random() * 10)];
};

export default ImageCard;
