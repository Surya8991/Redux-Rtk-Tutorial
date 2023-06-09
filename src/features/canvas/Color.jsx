import { useSelector, useDispatch } from "react-redux";
import { changeColor, selectColor ,changeOpacity , selectOpacity ,paintColorAsync ,selectColorStatus} from "../canvas/canvaSlicer";

import styles from './Canvas.module.css';
import logo from '../../logo.svg';

const Color = () => {
  const color = useSelector(selectColor);
  const opacity=useSelector(selectOpacity)
  const dispatch = useDispatch();
  const isLoading=useSelector(selectColorStatus)
  return(
    <div className={styles.colors}>
      <div className="canvas">
      
      <div 
        className={styles.circle} 
        style={{backgroundColor: color,opacity:opacity}}>
          <img src={logo} className="App-logo" alt="logo" style={{width: '100%', height: 'auto'}}/>
      </div>
      <h2>Colors{isLoading ==="Loading"? "(Loading...)":null}</h2>
      <div className="buttons">
        <button 
          className={styles.btn} 
          onClick={(color) => dispatch(changeColor('#FFFFFF'))}>
            White
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('orange'))}>
            Orange
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('yellow'))}>
            Yellow
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('pink'))}>
            Pink
        </button>
      </div>
      <h2>Opacity</h2>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.05"
        value={opacity} 
        onChange={(e) => dispatch(changeOpacity(e.target.value))}/>
    <p>Opacity: {opacity}</p>
    <button 
          className={styles.btn}
          onClick={(color) => dispatch(paintColorAsync())}>
           Random Color
        </button>
    </div>
    </div>
  )
};

export default Color;