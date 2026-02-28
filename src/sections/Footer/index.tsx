import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollContext } from '../../hooks/useScrollContext';
import { Icons } from '../../components/ui/Icons';

const Footer = () => {
    const { t } = useLanguage();
    const { scrollToTop } = useScrollContext();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-social">
                    <a href="https://github.com/PhuriphatiZAMU" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Icons.GitHub />
                    </a>
                    <a href="mailto:phuriphathem@gmail.com" className="social-link">
                        <Icons.Mail />
                    </a>
                </div>
                <p className="footer-text">
                    © {new Date().getFullYear()} ภูริพัฒน์ เหมกุล • {t.footer.madeWith}
                </p>
                <a href="#" className="footer-text" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                    ↑ {t.footer.backToTop}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
