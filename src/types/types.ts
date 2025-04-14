export type CardProps = {
    bookmark?: number;
    liked?: number;
    title: string;
    desc: string;
    category: string;
    image: string;
    recomendations?: {
        name: string;
        imageURL: string;
    };
};

export type UserType = {
    imageURL: string;
    name: string;
    email: string;
    margin?: string;
};
