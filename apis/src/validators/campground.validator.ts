export const campgroundValidator = {
    campgroundContent: {
        isLength: {
            errorMessage: "Campground content is to long",
            options: {max: 255}
        },
        trim: true,
        escape: true
    },
    campgroundSubmitter: {
        isLength: {
            errorMessage: "the name provided for submitter of the campground is to long",
            options: {max:64}
        },
        trim: true,
        escape: true
    },
    campgroundAttribution: {
        isLength: {
            errorMessage: "the name provided for the attribution of the campground is to long",
            options: {max:64}
        },
        trim: true,
        escape: true
    }
}