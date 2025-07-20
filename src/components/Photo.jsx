const Photo = ({picture, isZoomed, onClick}) => {
    let styles = 'w-full h-auto p-1 cursor-pointer transition-all duration-300 ease-in-out';

    if (isZoomed) {
        styles = ' w-full h-full justify-center';
    }

    return (
        <img
            className={styles}
            src={picture}
            alt=""
            onClick={onClick}
        />
    );
};

export default Photo;