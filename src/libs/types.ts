export type ErrorParams = {
    statusCode: number;
    message?: string;
    error?: any;
    errCode?: string;
};

export type UserParams = {
    id: string
    username: string
    fullName?: string | null
    bio?: string | null
    email: string
    profileImage?: string | null
    createdAt: Date
}

export type PostParams = {
    id: string;
    title: string;
    body: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    published: boolean;
    hashtags: string[];
}