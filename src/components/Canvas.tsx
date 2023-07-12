import ImageCard, { ImageCardProps } from "./ImageCard";

export interface CanvasProps {
    imageCards: ImageCardProps[];
}

const Canvas = ({
    imageCards
}: CanvasProps): JSX.Element => {
    return (
        <div className="canvas-container">
            {
                (imageCards || []).map((image, i) => (
                    <ImageCard
                        key={i}
                        imageId={image.imageId}
                        imageName={image.imageName}
                        imgSrc={image.imgSrc}
                        uploader={image.uploader}
                        alt={image.alt}
                    />
                ))
            }
        </div>
    );
};

export default Canvas;
