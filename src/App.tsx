import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";
import Time from "./components/pages/Time.tsx";
import {Clock} from "./components/pages/Clock.tsx";
import {S} from "./components/pages/_styles.ts";
import Model from "./components/pages/Model.tsx";
import SecondTime from "./components/pages/Secondtime/SecondTime.tsx";
import {Experiment} from "./components/pages/Experiment.tsx";


export const App = () => {

    const PATH = {
        ADIDAS: '/adidas',
        PUMA: '/puma',
        ABIBAS: '/abibas',
        TIME: '/time',
        CLOCK: '/clock',
        SECOND_TIME: '/second_time',
        EXPERIMENT: '/experiment',
        ERROR: '/error404',
    } as const

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <nav>
                        <div className={styles.NawWrapper}>
                            <NavLink className={({isActive}) => isActive? styles.active : ''} to={PATH.ADIDAS}>Adidas</NavLink>
                        </div>
                        <S.NawWrapper>
                            <NavLink to={PATH.PUMA}>Puma</NavLink>
                        </S.NawWrapper>
                        <S.NawWrapper>
                            <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
                        </S.NawWrapper>
                        <S.NawWrapper>
                            <NavLink to={PATH.TIME}>Time</NavLink>
                        </S.NawWrapper>
                        <S.NawWrapper>
                            <NavLink to={PATH.CLOCK}>Clock</NavLink>
                        </S.NawWrapper>
                        <S.NawWrapper>
                            <NavLink to={PATH.SECOND_TIME}>SecondClock</NavLink>
                        </S.NawWrapper>
                        <S.NawWrapper>
                            <NavLink to={PATH.EXPERIMENT}>Experiment</NavLink>
                        </S.NawWrapper>
                    </nav>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.ADIDAS}/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={PATH.TIME} element={<Time/>}/>
                        <Route path={PATH.CLOCK} element={<Clock/>}/>
                        <Route path={PATH.SECOND_TIME} element={<SecondTime mode={'analog'}/>}/>
                        <Route path={PATH.EXPERIMENT} element={<Experiment/>}/>
                        <Route path={'/:brand/:id'} element={<Model/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


