import { useSelector, useDispatch } from 'react-redux';
import { changeFont, selectFont, changeTextStyle, selectText } from '../canvas/canvaSlicer';
import styles from './Canvas.module.css';

const Font = () => {
    const font = useSelector(selectFont);
    const text = useSelector(selectText)
    const dispatch = useDispatch();

    return (
        <div className={styles.font}>
            <h2>Font</h2>
            <p>
                <span style={{ fontSize: `${font}px`, fontFamily: text }}>
                    Redux Tool Kit(RTK) is the modern way to
                    learn Redux. Let's start with the basics.
                </span>
            </p>
            <input
                type="range"
                min="10"
                max="30"
                value={font}
                onChange={(e) => dispatch(changeFont(e.target.value))} />
            <p>{font}px</p>
            <h2>Font Styles</h2>
            <div className='buttons'>
                <button
                    className={styles.btn}
                    onClick={() => dispatch(changeTextStyle('"Bruno Ace", cursive'))}
                >
                    Bruno Ace
                </button>
                <button
                    className={styles.btn}
                    onClick={() => dispatch(changeTextStyle('"Times New Roman", Times, serif'))}
                >
                    Times New Roman
                </button>
                <button
                    className={styles.btn}
                    onClick={() => dispatch(changeTextStyle('"Nova Mono", monospace'))}
                >
                   Nova Mono
                </button>

            </div>
        </div>
    );
};

export default Font;