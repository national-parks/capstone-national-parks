import express, {Application, Errback, ErrorRequestHandler, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
// const cookieParser = require('cookie-parsar');
const session = require("express-session")
const MemoryStore = require("memorystore")(session)

// Routes
import {indexRoutes} from './routes/index.route';
import {campgroundRoute} from "./routes/campground.route";
import {profileRoute} from "./routes/profile.route";
import {parkStatusRoutes} from './routes/parkStatus.route'
import passport from "passport";
import {SignupRouter} from "./routes/sign-up.route";
import {parkRoute} from "./routes/park.route";
import {ParkImageRoute} from "./routes/parkImage.route";
import {SignInRouter} from "./routes/sign-in.route";
import {ParkAmenityRoute} from "./routes/parkAmenity.route";


//import {MemoryStore} from "express-session";
// The following class creates the app and instantiates the server
export class App {

    app: Application;

    constructor (
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }


    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () {
        this.app.use(morgan('dev'));
        this.app.use(express.json());

        const sessionConfig = {
            store: new MemoryStore({
                checkPeriod: 10800,
            }),
            secret: process.env.sessionSecret,
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        }

        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        // this.app.use(cookieParser())
        // this.app.use(csrf({cookie: {key:"XSRF-TOKEN", maxAge:3600}}))
        // this.app.use(function (err : any, req: any, res: any, next: any) {
        //
        //   if (err.code !== 'EBADCSRFTOKEN') return next(err)
        //
        //   // handle CSRF token errors here
        //   res.status(403)
        //   res.send('you done fucked up aaaron')
        // })
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
        this.app.use("/apis", indexRoutes);
        this.app.use("/apis/campground", campgroundRoute);
        this.app.use("/apis/profile", profileRoute);
        this.app.use("/apis/sign-in", SignInRouter);
        this.app.use("/apis/sign-up", SignupRouter);
        this.app.use("/apis/parkStatus", parkStatusRoutes);
        this.app.use("/apis/park", parkRoute);
        this.app.use("/apis/parkImage", ParkImageRoute)
        this.app.use("/apis/amenity", ParkAmenityRoute)
    }

// starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}