import s from '../Time.module.css'
import {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView.tsx";
import {DigitalClockView} from "./DigitalClockView.tsx";

type PropsType = {
    mode?: 'analog' | 'digital'
}

const SecondTime = ({mode}: PropsType) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timeInterval);
            console.log('Таймер остановлен.');
        };
    }, []);

    let view;

    switch (mode) {
        case 'analog':
            view = <AnalogClockView date={time}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={time}/>

    }


    return (
        <div className={s.timeBoardWrap}>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}


export default SecondTime;