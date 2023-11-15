'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface RoutingContextProviderProps {
    children: ReactNode;
}

export type RoutingContextType = {
    firstRender: boolean;
    setFirstRender: (value: boolean) => void;
    navigateToSection: (id: string) => void;
};

export const RoutingContext = createContext<RoutingContextType | null>(null);

export const useRoutingContext = (): RoutingContextType => {
    const context = useContext(RoutingContext);
    if (!context) {
        throw new Error('useRoutingContext must be used within a RoutingContextProvider');
    }
    return context;
};

export const RoutingContextProvider: React.FC<RoutingContextProviderProps> = ({children}) => {
    const [firstRender, setFirstRender] = useState<boolean>(true);

    function navigateToSection(id: string) {
        const target = document.getElementById(id);

        target?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    const contextValue: RoutingContextType = {
        firstRender,
        setFirstRender,
        navigateToSection,
    };

    return (
        <RoutingContext.Provider value={contextValue}>
            <ReactLenis root>
                {children}
            </ReactLenis>
        </RoutingContext.Provider>
    );
};

export default RoutingContextProvider;
