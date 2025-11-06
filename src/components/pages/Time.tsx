
import s from './Time.module.css'
import {useEffect, useState} from "react";

const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(()=> {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timeInterval);
            console.log('Таймер остановлен.');
        };
    }, []);

    const obj = {
        hour: time.getHours(),
        minutes: ()=> {
            if(time.getMinutes() < 10) {
                return '0' +  time.getMinutes()
            } else {
                return time.getMinutes()}
        },
        seconds: ()=> {
            const seconds = time.getSeconds()
            if(seconds< 10) {
                return '0' + time.getSeconds()
            } else {
                return  seconds
            }
        }
    }

    return (
        <div className={s.timeBoardWrap}>
            <div className={s.timeBoard}>
                    <span>{obj.hour}</span> : <span>{obj.minutes()}</span> : <span>{obj.seconds()}</span>
            </div>
        </div>
    );
};

export default Time;