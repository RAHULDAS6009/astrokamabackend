import { Request, Response } from "express";
export declare const adminController: {
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getStudents: (req: Request, res: Response) => Promise<void>;
    approveStudent: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map