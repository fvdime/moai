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