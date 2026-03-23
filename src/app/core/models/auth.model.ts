export interface RegistrationRequest{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: 'agent' | 'admin';
}

export interface UserResponse{
    message: string;
}