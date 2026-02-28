import { useLanguage } from '../../contexts/LanguageContext';
import { Icons } from '../../components/ui/Icons';
import { skills } from '../../data/constants';

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="skills">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">{t.skills.title} <span>{t.skills.titleHighlight}</span></h2>
                    <p className="section-description">{t.skills.description}</p>
                </div>

                <div className="skills-grid">
                    <div className="card fade-in stagger-1">
                        <div className="card-icon">
                            <Icons.Globe />
                        </div>
                        <h3 className="card-title">{t.skills.language.title}</h3>

                        <div className="skill-category">
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span className="skill-name">{t.skills.language.english}</span>
                                    <span className="skill-level">{t.skills.language.englishLevel}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fade-in stagger-2">
                        <div className="card-icon">
                            <Icons.Code />
                        </div>
                        <h3 className="card-title">{t.skills.technical.title}</h3>

                        <div className="skill-category">
                            <div className="skill-category-title">{t.skills.technical.programming}</div>
                            <div className="skill-tags">
                                {skills.programming.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill.name}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <div className="skill-category-title">{t.skills.technical.web}</div>
                            <div className="skill-tags">
                                {skills.web.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill.name}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <div className="skill-category-title">{t.skills.technical.tools}</div>
                            <div className="skill-tags">
                                {skills.tools.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
