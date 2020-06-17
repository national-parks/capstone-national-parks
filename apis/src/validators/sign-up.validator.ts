export const signupValidator = {
    profileId: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileId must be valid',
            options: { min: 7, max: 32 }
        }
    },
    profileActivationToken: {
        isEmail: {
            errorMessage: 'Check e-mail for activation token'
        },
        normalizeEmail: true,
        trim: true
    },
    profileAvatar: {
        isLength: {
            errorMessage: '',
            options: { max: 255 }
        },
        trim: true,
        escape: true
    },
    profileDisplayName: {
        isLength: {
            errorMessage: 'Display Name limited to 16 characters',
            options: { max: 16 }
        },
        trim: true,
        escape: true
    },
    profileEmail: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Email max length is 128 characters',
            options: { max: 128 },
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    profileHash: {
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        }
    }
};