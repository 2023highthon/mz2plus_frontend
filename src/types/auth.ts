export interface LoginParams {
    id: string;
    password: string;
}

export interface RegisterParams {
    id: string;
    password: string;
    name: string;
    birth: Date;
    profile_img: string;
}
