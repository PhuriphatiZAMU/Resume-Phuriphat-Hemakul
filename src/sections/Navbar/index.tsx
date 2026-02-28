import { useState } from 'react';
import { useScrollContext } from '../../hooks/useScrollContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Icons } from '../../components/ui/Icons';

const Navbar = () => {
    const { scrolled } = useScrollContext();
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang, t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">ARM.dev</a>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a></li>
                    <li><a href="#education" onClick={() => setMenuOpen(false)}>{t.nav.education}</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a></li>
                </ul>

                <div className="nav-controls">
                    <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                        {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
                    </button>
                    <button className="lang-toggle" onClick={toggleLang}>
                        {lang === 'th' ? 'EN' : 'TH'}
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <Icons.Close /> : <Icons.Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
