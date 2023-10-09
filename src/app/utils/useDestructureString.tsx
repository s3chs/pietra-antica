import React from 'react';

export const destructureString = (string: string): JSX.Element[] => {
    return string.split('').map((letter, i) => {
        return letter === ' ' ?
            <span className="animated-letter" key={i}>&nbsp;</span> :
            <span key={i}>{letter}</span>;
    });
};

const useDestructureString = (string: string): JSX.Element[] => {
    return React.useMemo(() => destructureString(string), [string]);
};

export default useDestructureString;
