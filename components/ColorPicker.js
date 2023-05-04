import classnames from 'classnames/bind';
import { useState } from 'react';
import Heading from './Heading';
import Image from 'next/image';
import styles from './colorpicker.module.scss';

let cx = classnames.bind(styles);

const ColorPicker = ({ vehicleColors }) => {
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    return <section className={styles.colorpicker}>
        <Image
            src={vehicleColors[activeColorIndex].image.sourceUrl}
            alt={vehicleColors[activeColorIndex].image.altText}
            width={vehicleColors[activeColorIndex].image.mediaDetails.width}
            height={vehicleColors[activeColorIndex].image.mediaDetails.height}
            className={styles.large_image}
        />
        <div className={styles.swatches}>
            {vehicleColors?.map((vehicleColor, index) => {
                const { swatch, image } = vehicleColor;
                return <Swatch 
                    hexValue={swatch.swatchInformation.hexValue}
                    isActive{index === activeColorIndex ? true : false}
                    clickHandler={() => {
                        setActiveColorIndex(index);
                    }}
                />
            })}
        </div>
        <Heading 
            level={3}
            textAlign="center"
        >
                {vehicleColors[activeColorIndex].swatch.name}</Heading>
    </section>
}
const Swatch = ({ 
    hexValue, 
    clickHandler,
    isActive
}) => {
    let swatchClasses = cx({
        swatch: true,
        active: isActive === true
    });
    return <div 
    className={swatchClasses}
    style={{ backgroundColor: hexValue }}
    onClick={clickHandler}
    ></div>
}
export default ColorPicker;