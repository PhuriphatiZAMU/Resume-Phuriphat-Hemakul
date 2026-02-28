import { useLanguage } from '../../contexts/LanguageContext';
import { Icons } from '../../components/ui/Icons';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <section id="projects">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">{t.projects.title} <span>{t.projects.titleHighlight}</span></h2>
                    <p className="section-description">{t.projects.description}</p>
                </div>

                <div className="projects-grid">
                    {t.projects.list.map((project, i) => (
                        <div key={i} className={`project-card fade-in stagger-${(i % 4) + 1}`}>
                            <div
                                className="project-image"
                                style={{
                                    background: `linear-gradient(135deg, ${['#0d5c72', '#1a9aa8', '#7eb8b8', '#0d5c72'][i % 4]} 0%, ${['#1a9aa8', '#7eb8b8', '#0d5c72', '#1a9aa8'][i % 4]} 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'white'
                                }}
                            >
                                <Icons.Code />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    {t.projects.viewCode} <Icons.ExternalLink />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
