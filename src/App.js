import { Routes, Route } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';

import HomePage from './Page/Home';
import Contacts from './Page/Contacts';
import DetailFilmItem from './Page/DetailFilmItem';
import WatchMovie from './Page/WatchMovie';
import FrameHeader from './Component/FrameHeader';
import Header from './Component/Header';
import Menu from './Component/Menu';
import ScrollLayout from './Component/ScrollLayout';
import FooterPage from './Component/FooterPage';

function App() {
    const [scrollLayout, setScrollLayout] = useState(false);
    const [topFooter, setTopFooter] = useState('2930px');
    const [navSubMenuDisplay, setNavSubMenuDisplay] = useState(false);
    useLayoutEffect(() => {
        window.location.pathname === '/lien-he'
            ? setTopFooter('900px')
            : window.location.pathname === '/phim'
            ? setTopFooter('1980px')
            : window.location.pathname === '/phim/watch'
            ? setTopFooter('2180px')
            : setTopFooter('2930px');
    });
    useEffect(() => {
        document.addEventListener('scroll', (event) => {
            setScrollLayout(window.scrollY);
        });

        return () => {
            document.removeEventListener('scroll', (event) => {
                setScrollLayout(window.scrollY);
            });
        };
    }, [scrollLayout]);

    const srollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setScrollLayout(0);
    };

    const setHoverBarMemu = (e) => {
        console.log(e.target.className);
        if (e.target.className.includes('SubMenu') || e.target.className.includes('NavBar')) {
            setNavSubMenuDisplay(true);
        } else {
            setNavSubMenuDisplay(false);
        }
    };
    return (
        <div className="App" style={{ display: 'flex', 'flex-direction': 'column' }} onClick={setHoverBarMemu}>
            <FrameHeader />
            <Header />
            <Menu display={navSubMenuDisplay} />
            {scrollLayout > 300 && <ScrollLayout onClick={srollToTop} />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lien-he" element={<Contacts />} />
                <Route path="/phim" element={<DetailFilmItem />} />
                <Route path="/phim/watch" element={<WatchMovie />} />
            </Routes>
            <FooterPage topFooter={topFooter} />
        </div>
    );
}

export default App;
