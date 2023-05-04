import styles from './colorpicker.module.scss';

const ColorPicker = ({ vehicleColors }) => {
    return <section className={styles.colorpicker}>
        Large image goes here.<br />
        {vehicleColors.map((vehicleColor, index) => {
            const { swatch, image } = vehicleColor;
            return <Swatch 
                hexValue={swatch.swatchInformation.hexValue}
            />
        })}
    </section>
}
const Swatch = ({hexValue}) => {
    return <div className={styles.swtach}></div>
}
export default ColorPicker;