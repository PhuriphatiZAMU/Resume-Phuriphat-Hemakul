import { useScrollContext } from '../../hooks/useScrollContext';
import { Icons } from '../ui/Icons';

const ScrollToTop = () => {
    const { showScrollTop, scrollToTop } = useScrollContext();

    return (
        <button
            className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <Icons.ArrowUp />
        </button>
    );
};

export default ScrollToTop;
