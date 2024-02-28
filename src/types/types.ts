export type formValues = {
    email: string;
    password: string;
    remember?: boolean;
}
export type Itoken= {
    accessToken: string;
}

export type IEmail= {
    email: string;
}

export type IConfirmEmail= {
    email: string;
    code: string;
}

export type IConfirmEmailResponse= {
    email: string;
    message: string;
}

export type IcheckEmailResponse= {
    statusCode?: number;
    error: string;
    message: string;
}

export type IChangePassword= {
    password: string;
    confirmPassword: string;
}

export type IChangePasswordResponse= {
    message: string;
}