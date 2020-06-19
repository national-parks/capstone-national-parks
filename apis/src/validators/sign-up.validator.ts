export const signupValidator = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        isLength: {
            errorMessage: 'Email too long.',
            options: { max: 128}
        },
        // normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be between 8-32 characters',
            options: { min: 8,
                max: 32}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Passwords do not match.',
            options: { min: 8,
                        max: 32}
        },
        trim: true,
        escape: true
    },
    profileDisplayName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Display name must be less than 16 characters.',
            options: { max: 16 }
        },
    }
};