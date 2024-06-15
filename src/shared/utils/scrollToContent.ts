import { MouseEvent } from 'react';

export const scrollToContent = (e: MouseEvent<HTMLAnchorElement>, contentId: string) => {
    e.preventDefault();

    const content = document.getElementById(contentId);

    if (content) {
        content.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}