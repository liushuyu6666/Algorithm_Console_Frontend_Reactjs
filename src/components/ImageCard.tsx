export interface ImageCardProps {
    imageId: string;
    imageName: string;
    imgSrc: string;
    alt: string;
    labels: string[];
}

const ImageCard = ({
    imageId,
    imageName,
    imgSrc,
    alt,
    labels
}: ImageCardProps): JSX.Element => {
    const date = new Date();

    let lengthOfChar = 0;

    console.log(imgSrc);
    return (
        <div
            className="card"
            style={{
                height: '220px',
                width: '300px',
                backgroundColor: 'white',
            }}
        >
            <img
                id={imageId}
                src={`${imgSrc}`}
                className="card-img-top"
                alt={alt}
                style={{ height: '160px', width: '300px', cursor: 'pointer' }}
            />
            <div className="card-body" style={{ padding: '0 0 0 3px' }}>
                <label
                    id={imageId}
                    style={{
                        margin: '3px 0 6px 3px',
                        fontFamily: 'Michroma',
                        fontSize: '23px',
                        cursor: 'pointer',
                    }}
                >
                    {imageName}
                </label>
                <div
                    className={'homepage-tags-container'}
                    style={{ margin: '0 0 0 3px', fontSize: '15px' }}
                >
                    {(labels || []).map((item, i) => {
                        lengthOfChar += item.length;
                        if (i < 3 && lengthOfChar <= 30) {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        backgroundColor: randomColor(),
                                        padding: '0 2px',
                                        color: 'white',
                                        textAlign: 'center',
                                    }}
                                >
                                    {item}
                                </div>
                            );
                        } else return null;
                    })}
                </div>
            </div>
        </div>
    );
};

const randomColor = () => {
    const beautifulColor =
        ["#e52165",
        "#0d1137",
        "#077b8a",
        "#a2d5c6",
        "#ff6e40",
        "#ecc19c",
        "#87ac34",
        "#123456",
        "#b9925e",
        "#4203c9"]
    return beautifulColor[Math.floor(Math.random() * 10)];
}

export default ImageCard;
