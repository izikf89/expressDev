import { NextFunction } from "express";

const logMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    // return res.send('stop routing')
    // console.log('middleware')
    // console.log('Cookies: ', req.cookies)
    // console.log('Signed Cookies: ', req.signedCookies)
    next()
};

export default logMiddleware as any;