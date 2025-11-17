import {ClockViewPropsType} from "./SecondTime.tsx";

const getCorrectClockNum = (num: number) => {
    return num < 10 ? '0' + num : num
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <div>
            <span>{date.getHours()}</span>
            :
            <span>{getCorrectClockNum(date.getMinutes())}</span>
            :
            <span>{getCorrectClockNum(date.getSeconds())}</span>
        </div>
    )
}