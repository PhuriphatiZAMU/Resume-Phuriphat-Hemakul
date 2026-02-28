import { useScrollContext } from '../../hooks/useScrollContext';

const ScrollProgress = () => {
    const { scrollProgress } = useScrollContext();
    return <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>;
};

export default ScrollProgress;
