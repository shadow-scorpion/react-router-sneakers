import s from './Clock.module.css'
import {useEffect, useState} from "react";

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(()=> {
            setTime(new Date())
        }, 1000)

        return ()=> {
            clearInterval(interval)
            console.log('Clock was stop')
        }
    }, []);

    const get2DigitalString = (number: number) => {
        return number < 10 ? '0' + number : number
    }

    const hours = get2DigitalString(time.getHours()) % 12
    const minutes = get2DigitalString(time.getMinutes())
    const seconds = get2DigitalString(time.getSeconds())

    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const secondDegrees = (seconds / 60) * 360

    const secondHandStyle = {
        transform: `rotate(${secondDegrees}deg)`
    };
    const minuteHandStyle = {
        transform: `rotate(${minutesDegrees}deg)`
    };
    const hourHandStyle = {
        transform: `rotate(${hoursDegrees}deg)`
    }


    return (
        <div className={s.timeBoardWrap}>
            <div className={s.timeBoard}>
                <span className={s.hourHand} style={hourHandStyle}></span>
                <span className={s.minuteHand} style={minuteHandStyle}></span>
                <span className={s.secondHand} style={secondHandStyle}></span>
            </div>
        </div>
    );
};
