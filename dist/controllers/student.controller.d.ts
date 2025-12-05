import { Request, Response } from "express";
export declare const studentController: {
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getProfile: (req: Request, res: Response) => Promise<void>;
    updateProfile: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=student.controller.d.ts.map