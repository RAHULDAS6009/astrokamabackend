import { Request, Response } from "express";
export declare const feeController: {
    getAllFees: (req: Request, res: Response) => Promise<void>;
    getStudentFees: (req: Request, res: Response) => Promise<void>;
    payFee: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=fee.controller.d.ts.map