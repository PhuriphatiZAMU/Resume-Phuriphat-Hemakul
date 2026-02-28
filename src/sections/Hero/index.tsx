import { useLanguage } from '../../contexts/LanguageContext';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Icons } from '../../components/ui/Icons';

const Hero = () => {
    const { t } = useLanguage();
    const { typedText, isTyping } = useTypingEffect(t.hero.subtitle, 50);

    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>

                <div className="hero-content">
                    <div className="hero-image fade-in">
                        <div className="profile-image-wrapper glow">
                            <img
                                src="https://avatars.githubusercontent.com/u/154404689?v=4"
                                alt="Profile"
                                className="profile-image"
                            />
                        </div>
                    </div>

                    <div className="hero-text">
                        <h1 className="fade-in stagger-1">
                            <span className="wave">👋</span> {t.hero.greeting}<br />
                            <span className="gradient-text-animated">{t.hero.name}</span>
                        </h1>
                        <p className="hero-subtitle fade-in stagger-2">
                            {typedText}
                            {isTyping && <span className="typing-cursor"></span>}
                        </p>
                        <p className="hero-description fade-in stagger-3">{t.hero.description}</p>

                        <div className="hero-badges fade-in stagger-3">
                            <span className="badge">
                                <Icons.Star />
                                {t.hero.badges.gpa}
                            </span>
                            <span className="badge">
                                <Icons.GraduationCap />
                                {t.hero.badges.university}
                            </span>
                            <span className="badge">
                                <Icons.Calendar />
                                {t.hero.badges.year}
                            </span>
                        </div>

                        <div className="hero-cta fade-in stagger-4">
                            <a href="#projects" className="btn btn-primary ripple glow">
                                <Icons.Code />
                                {t.hero.viewProjects}
                            </a>
                            <a href="mailto:phuriphathem@gmail.com" className="btn btn-secondary ripple">
                                <Icons.Mail />
                                {t.hero.downloadCV}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
