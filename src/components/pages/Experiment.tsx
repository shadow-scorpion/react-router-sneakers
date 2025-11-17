import {useEffect, useState} from "react";

// export const Experiment = () => {
//     const [count, setCount] = useState(1)
//     useEffect(() => {
//         console.log(count)
//     }, []);
//     return (
//         <div>
//             <p>Try to press bottom and seeing {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// };

export const Experiment = () => {
    const [text, setText] = useState('')

    console.log(`Render with text: ${text}`)

    useEffect(() => {
        const event = (e: KeyboardEvent) => {
            console.log(e.code)
            setText(text + ' ' + e.code)
        }
        window.addEventListener('keypress', event)

            return(() => {
                    console.log('Component deleted')
                    window.removeEventListener('keypress', event)
                }
            )
    }, []);

    const plus = () => {
        setText('New')
    }

    return (
        <>
        <div>
           Press {text}
        </div>
            <button onClick={plus}>+</button>
        </>
    )
}

