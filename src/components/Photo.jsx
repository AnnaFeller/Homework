import { useState } from 'react';

const Photo = ({ picture, pos }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    let styles = 'w-full p-1 cursor-pointer transition-transform  ease-in-out';
    if (pos === 7) styles += ' rounded-bl-3xl';
    if (pos === 9) styles += ' rounded-br-3xl';
    if (isZoomed) { // если увеличиваем то оно будет таких размеров
        styles += ' scale-175 z-10 relative'; //scale=маштаб
    }

    const click = () => { // был true станет false и наоборот
        setIsZoomed(!isZoomed);
    };

    return (
        <img
            className={styles}
            src={picture}
            alt=""
            onClick={click}
        />
    );
};

export default Photo;