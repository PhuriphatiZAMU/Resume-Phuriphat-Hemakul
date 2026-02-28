import { useLanguage } from '../../contexts/LanguageContext';
import { Icons } from '../../components/ui/Icons';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">{t.about.title} <span>{t.about.titleHighlight}</span></h2>
                    <p className="section-description">{t.about.description}</p>
                </div>

                <div className="about-grid">
                    <div className="card card-lift fade-in stagger-1">
                        <div className="card-icon icon-bounce">
                            <Icons.MapPin />
                        </div>
                        <h3 className="card-title">{t.about.contact.title}</h3>

                        <div className="contact-item">
                            <div className="contact-icon"><Icons.MapPin /></div>
                            <div className="contact-text">{t.about.contact.address}</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><Icons.Phone /></div>
                            <div className="contact-text">{t.about.contact.phone}</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><Icons.Mail /></div>
                            <div className="contact-text">
                                <a href={`mailto:${t.about.contact.email}`} className="animated-underline">{t.about.contact.email}</a>
                            </div>
                        </div>
                    </div>

                    <div className="card card-lift fade-in stagger-2">
                        <div className="card-icon icon-bounce">
                            <Icons.Heart />
                        </div>
                        <h3 className="card-title">{t.about.interests.title}</h3>
                        <div className="interest-tags">
                            {t.about.interests.items.map((item, i) => (
                                <span key={i} className="interest-tag shake-hover">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
