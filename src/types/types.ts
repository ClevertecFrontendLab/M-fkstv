export type CardProps = {
    bookmark?: number;
    liked?: number;
    title: string;
    desc: string;
    category: string;
    image: string;
};

export type UserType = {
    imageURL: string;
    name: string;
    email: string;
    margin?: string;
};
