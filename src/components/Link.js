import React from 'react';

const Link = ({ href, children }) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a className="link-component" onClick={onClick} href={href}>
            {children}
        </a>
    );
};

export default Link;
