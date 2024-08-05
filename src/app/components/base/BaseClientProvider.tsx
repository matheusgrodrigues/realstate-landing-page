'use client';

interface ClientProviderProps {
    render: React.ReactNode;
}

const BaseClientProvider: React.FC<ClientProviderProps> = ({ render }) => <>{render}</>;

export default BaseClientProvider;
