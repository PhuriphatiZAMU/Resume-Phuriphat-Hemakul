import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 50) => {
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        setTypedText('');
        setIsTyping(true);

        const typingInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                setTypedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return { typedText, isTyping };
};
