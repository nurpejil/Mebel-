import logo12 from '../img/logo12.png'
import '../section5/section.css'
import { FaGooglePlay, FaApple } from "react-icons/fa";


export default function Section5() {
    return (
        <div className='item1'>
            <div className='item4'>
                <div className='item2'>
                    <img src={logo12} alt="" />
                </div>
                <div className='item3'>
                    <h1>Хотите заказать проект?</h1>
                    <p>Оставьте заявку, и мы вам перезвоним</p>
                    <div className='input'>
                        <input type="text" placeholder='Имя' />
                    </div>
                    <div className='input'>
                        <input type="email" name="" id="" placeholder='E-mail' />
                    </div>
                    <div className='input'>
                        <input type="number" placeholder='Телефон' />
                    </div>
                    <div>
                        <button className='btn'>
                            Отправить заявку
                        </button>
                        <div className='btn2'>
                            <a href="https://www.apple.com/app-store/"> <button className='btn4' style={{width: '121px'}}>
                            <FaApple size={25} />
                                <div>
                                    <p> Загрузите в</p>
                                    <h1>App Store</h1>
                                </div>
                            </button></a>
                            <a href="https://play.google.com/store/apps?hl=ru&gl=US">
                                <button className='btn4'>
                                    <FaGooglePlay size={25} />
                                    <div>
                                        <p> ДОСТУПНО В</p>
                                        <h1> Google PLay</h1>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}