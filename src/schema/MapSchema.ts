interface MapSchema {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        titulo: string;
        name: string;
        url: string;
    };
}

export default MapSchema;
