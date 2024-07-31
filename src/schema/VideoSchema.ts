interface VideoSchema {
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

export default VideoSchema;
