'use client';

interface ClientProviderProps {
    render: React.ReactNode;
}

const BaseClientProvider: React.FC<ClientProviderProps> = ({ render }) => {
    return <>{render}</>;
};

export default BaseClientProvider;
