import '../section4/section.css'
import { BiSolidQuoteRight } from "react-icons/bi";

export default function Section4() {
    return (
        <div className='block1'>
            <div className='block2'>
                <h1>Отзывы</h1>
            </div>
            <div className='block3'>
                <div className='block4'>
                    <BiSolidQuoteRight size={50} />
                    <h1>Игорь Антонов</h1>
                    <p>Обратилась к Aveji по рекомендации. Команда<br /> сразу поняла, какой дизайн я хочу.<br /> Предоставили несколько вариантов<br /> и в течение недели сделали наброски. Итог<br /> понравился, все на высшем уровне.</p>
                </div>
                <div className='block4'>
                    <BiSolidQuoteRight size={50} />
                    <h1>Ольга Иванова</h1>
                    <p>После пары заказов у компании Aveji<br /> убедилась, что за мебелью теперь только<br /> к ним. Абсолютно любые решения, в любых<br /> размерах и форм-факторе, то что нужно!</p>
                </div>
                <div className='block4'>
                    <BiSolidQuoteRight size={50} />
                    <h1>Аркадий Макаров</h1>
                    <p>Aveji — настоящие профессионалы своего дела.<br/> Быстро поняли мою задумку, сделали дизайн,<br/> согласовали и изготовили мебель. А потом еще<br/> и бесплатно все собрали на месте. Большое<br/> спасибо!</p>
                </div>
            </div>
        </div>
    )
}