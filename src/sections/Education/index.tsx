import { useLanguage } from '../../contexts/LanguageContext';
import { Icons } from '../../components/ui/Icons';

const Education = () => {
    const { t } = useLanguage();

    return (
        <section id="education">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">{t.education.title} <span>{t.education.titleHighlight}</span></h2>
                    <p className="section-description">{t.education.description}</p>
                </div>

                <div className="education-grid">
                    <div className="card fade-in stagger-1">
                        <div className="card-icon">
                            <Icons.GraduationCap />
                        </div>
                        <span className="edu-period">
                            <Icons.Calendar /> {t.education.university.period}
                        </span>
                        <h3 className="card-title">{t.education.university.degree}</h3>
                        <p className="card-subtitle">{t.education.university.name}</p>
                        <p className="card-text">{t.education.university.faculty}</p>
                        <p className="card-text">{t.education.university.major}</p>
                        <div className="edu-gpa">
                            <Icons.Award /> {t.education.university.gpa}
                        </div>
                    </div>

                    <div className="card fade-in stagger-2">
                        <div className="card-icon">
                            <Icons.GraduationCap />
                        </div>
                        <span className="edu-period">
                            <Icons.Calendar /> {t.education.highschool.period}
                        </span>
                        <h3 className="card-title">{t.education.highschool.degree}</h3>
                        <p className="card-subtitle">{t.education.highschool.name}</p>
                        <p className="card-text">{t.education.highschool.program}</p>
                        <div className="edu-gpa">
                            <Icons.Award /> {t.education.highschool.gpa}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
