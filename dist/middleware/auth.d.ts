import { Request, Response, NextFunction } from "express";
interface JwtPayload {
    id: number;
    role: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}
export declare const auth: {
    admin: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
    student: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
    any: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
};
export {};
//# sourceMappingURL=auth.d.ts.map