import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from "../../utils/interfaces/profile";
import {Status} from "../../utils/interfaces/status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertProfile} from "../../utils/profile/insertProfile";
const mailgun = require("mailgun-js");

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupProfileController(request: Request, response: Response) {
    try {

        const {profileEmail, profilePassword, profileDisplayName} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const profileAvatar = "https://cdn.pixabay.com/photo/2014/04/03/10/21/tree-310207_960_720.png"
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Welcome to National Camping Adventure.</h2>
            <p>In order to save parks to your profile, you must confirm your account </p>
            <p><a href="${basePath}">${basePath}</a></p>
            `

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: "Are you ready to activate your account?",
            text: 'Test email text',
            html: message
        }

        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileAvatar,
            profileDisplayName,
            profileEmail,
            profileHash,
        };

        const result = await insertProfile(profile)

        if (result) {
            const status: Status = {
                status: 200,
                message: "Profile successfully created. Please check your email to activate!",
                data: null
            };

            // const emailComposer: MailComposer = new MailComposer(mailgunMessage)
            //
            // emailComposer.compile().build((error: any, message: Buffer) => {
            //     const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
            //
            //     console.log(message.toString("ascii"))
            //     const compiledEmail = {
            //         to: profileEmail,
            //         message: message.toString("ascii")
            //     }

            //     mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
            //         if (sendError) {
            //             console.log(sendError);
            //             return;
            //         }
                      return response.json(status);
            //     });
            //
            //
            // })

        } else {
            const status: Status = {
                status: 403,
                message: "Profile already exists. Do you need to activate your account?",
                data: null
            };

            return response.json(status);
        }



    } catch (error) {
        const status: Status = {
            status: 400,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}