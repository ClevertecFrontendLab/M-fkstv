export interface Ierror {
    status: number | string;
    data: {
        error: string;
        message: string;
        statusCode: number;
    };
}