import '../imgblock/img.css'
import logo5 from '../img/logo5.png'
import logo6 from '../img/logo6.png'
import logo7 from '../img/logo7.png'
import logo8 from '../img/logo8.png'
import logo9 from '../img/logo9.png'
import logo10 from '../img/logo10.png'


export default function Img() {
    return (
        <div className='img1'>
            <div className='img2'>
                <h1>Проекты</h1>
            </div>
            <div className='img-block'>
                <img className='imgg' src={logo5} alt="" />
                <img className='imgs' src={logo6} alt="" />
                <img className='img' src={logo7} alt="" />
                <img className='img' src={logo8} alt="" />
                <img className='img' src={logo9} alt="" />
                <img className='img' src={logo10} alt="" />
            </div>
        </div>
    )
}