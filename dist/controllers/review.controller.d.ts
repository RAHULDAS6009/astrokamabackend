import { Request, Response } from "express";
export declare const reviewController: {
    createStudentReview: (req: Request, res: Response) => Promise<void>;
    createClientReview: (req: Request, res: Response) => Promise<void>;
    getPending: (req: Request, res: Response) => Promise<void>;
    approveOrReject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=review.controller.d.ts.map