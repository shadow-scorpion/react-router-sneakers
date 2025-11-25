import styles from "./components/Site.module.css";

import {NavLink, Outlet} from "react-router-dom";

import {S} from "./components/pages/_styles.ts";



export const App = () => {

    const PATH = {
        ADIDAS: '/adidas',
        PUMA: '/puma',
        ABIBAS: '/abibas',
        PRICES: '/prices',
        TIME: '/time',
        CLOCK: '/clock',
        SECOND_TIME: '/second_time',
        EXPERIMENT: '/experiment',
        ERROR: '/error404',
        PROTECTED_PAGE: '/protected_page',
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
                            <NavLink to={PATH.PRICES}>Prices</NavLink>
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
                        <S.NawWrapper>
                            <NavLink to={PATH.PROTECTED_PAGE}>Protected Page</NavLink>
                        </S.NawWrapper>
                    </nav>
                </div>
                <div className={styles.content}>
                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route path='/' element={<Navigate to={PATH.ADIDAS}/>}/>*/}
                    {/*    <Route path={PATH.ADIDAS} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PUMA} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.ABIBAS} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*    <Route path={PATH.TIME} element={<Time/>}/>*/}
                    {/*    <Route path={PATH.CLOCK} element={<Clock/>}/>*/}
                    {/*    <Route path={PATH.SECOND_TIME} element={<SecondTime mode={'analog'}/>}/>*/}
                    {/*    <Route path={PATH.EXPERIMENT} element={<Experiment/>}/>*/}
                    {/*    <Route path={'/:brand/:id'} element={<Model/>}/>*/}
                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


