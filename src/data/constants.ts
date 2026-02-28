export const skills = {
    programming: [
        { name: 'Java', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'C#', level: 65 },
        { name: 'JavaScript', level: 60 },
    ],
    web: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'React', level: 55 },
        { name: 'Bootstrap', level: 75 },
    ],
    database: [
        { name: 'MySQL', level: 65 },
    ],
    tools: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'VS Code', level: 85 },
        { name: 'IntelliJ IDEA', level: 70 },
    ],
};

export const getStats = (lang: string) => [
    { number: '15+', label: lang === 'th' ? 'โปรเจกต์' : 'Projects' },
    { number: '3.58', label: 'GPA' },
    { number: '4+', label: lang === 'th' ? 'ภาษาโปรแกรม' : 'Languages' },
    { number: '2', label: lang === 'th' ? 'ปีการศึกษา' : 'Year' },
];
