import { NavLink } from 'react-router-dom'
import '../section1/section.scss'
import logo1 from'../img/logo1.png'
import logo2 from '../img/logo2.png'

export default function Section1 () {
    return(
        <div className='section1'>
            <div className='section2'>
                <h2>Эксклюзивная <br/> и нестандартная <br/> мебель для дома</h2>
            </div>
            <div className='section4'>
                <div className='section3'>
                    <p>Мы можем произвести любую мебель для <br/> вашего проекта и найти производственное <br/> решение любой задумки.</p>
                    <img className='logo1' src={logo1} alt="" />
                </div>
                <div className='section5'>
                <NavLink>ЗАКАЗАТЬ  ПРОЕКТ</NavLink>
                    <img src={logo2} alt="" />
                </div>
            </div>
        </div>
    )
}