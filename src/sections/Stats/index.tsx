import { useLanguage } from '../../contexts/LanguageContext';
import { getStats } from '../../data/constants';

const Stats = () => {
    const { lang } = useLanguage();
    const stats = getStats(lang);

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
