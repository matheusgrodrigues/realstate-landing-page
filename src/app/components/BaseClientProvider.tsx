'use client';

interface ClientProviderProps {
    render: React.ReactNode;
}

export default function BaseClientProvider({ render }: ClientProviderProps) {
    return <>{render}</>;
}
