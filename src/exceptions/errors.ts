class AuthenticationError extends Error {
    readonly message: string = "Authentication failed";
    readonly name: string = "AuthenticationError";
}

export default AuthenticationError;
