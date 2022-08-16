import './toggle.css';
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  }
  return (
    <div className="t">
      <img src={Sun} alt='' className='t-icon' />
      <img src={Moon} alt='' className='t-icon' />
      <div className='t-button' style={{ left: theme.state.darkmode ? 25 : 0 }} onClick={handleToggle}></div>
    </div>
  )
}

export default Toggle;