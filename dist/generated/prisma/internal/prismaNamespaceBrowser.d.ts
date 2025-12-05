import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Admin: "Admin";
    readonly Student: "Student";
    readonly Batch: "Batch";
    readonly StudyMaterial: "StudyMaterial";
    readonly Fee: "Fee";
    readonly Consultation: "Consultation";
    readonly Review: "Review";
    readonly CMS: "CMS";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly batchId: "batchId";
    readonly fatherName: "fatherName";
    readonly courseMode: "courseMode";
    readonly courseDetails: "courseDetails";
    readonly communicationAddress: "communicationAddress";
    readonly permanentAddress: "permanentAddress";
    readonly mobileNumber: "mobileNumber";
    readonly dateOfBirth: "dateOfBirth";
    readonly placeOfBirth: "placeOfBirth";
    readonly educationalQualification: "educationalQualification";
    readonly extraExperience: "extraExperience";
    readonly astrologicalExperience: "astrologicalExperience";
    readonly occupation: "occupation";
    readonly photoUrl: "photoUrl";
    readonly certificateUrl: "certificateUrl";
    readonly idProofUrl: "idProofUrl";
    readonly createdAt: "createdAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const BatchScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly timing: "timing";
    readonly monthlyFee: "monthlyFee";
};
export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum];
export declare const StudyMaterialScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly type: "type";
    readonly url: "url";
    readonly batchId: "batchId";
    readonly createdAt: "createdAt";
};
export type StudyMaterialScalarFieldEnum = (typeof StudyMaterialScalarFieldEnum)[keyof typeof StudyMaterialScalarFieldEnum];
export declare const FeeScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly month: "month";
    readonly year: "year";
    readonly amount: "amount";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type FeeScalarFieldEnum = (typeof FeeScalarFieldEnum)[keyof typeof FeeScalarFieldEnum];
export declare const ConsultationScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly consultationType: "consultationType";
    readonly preferredMode: "preferredMode";
    readonly consultationDate: "consultationDate";
    readonly timeSlot: "timeSlot";
    readonly fullName: "fullName";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly timeOfBirth: "timeOfBirth";
    readonly placeOfBirth: "placeOfBirth";
    readonly country: "country";
    readonly state: "state";
    readonly city: "city";
    readonly pinCode: "pinCode";
    readonly phoneNumber: "phoneNumber";
    readonly emailAddress: "emailAddress";
    readonly careerGuidance: "careerGuidance";
    readonly loveLife: "loveLife";
    readonly marriageLife: "marriageLife";
    readonly healthWellbeing: "healthWellbeing";
    readonly financialCondition: "financialCondition";
    readonly business: "business";
    readonly spiritualGrowth: "spiritualGrowth";
    readonly others: "others";
    readonly consultedBefore: "consultedBefore";
    readonly specificQuestions: "specificQuestions";
    readonly openToRemedies: "openToRemedies";
    readonly declarationAccepted: "declarationAccepted";
    readonly signature: "signature";
    readonly declarationDate: "declarationDate";
    readonly onlineFee: "onlineFee";
    readonly offlineFee: "offlineFee";
    readonly bookingAmount: "bookingAmount";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly rating: "rating";
    readonly feedback: "feedback";
    readonly status: "status";
    readonly studentId: "studentId";
    readonly clientId: "clientId";
    readonly createdAt: "createdAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const CMSScalarFieldEnum: {
    readonly id: "id";
    readonly section: "section";
    readonly content: "content";
    readonly imageUrl: "imageUrl";
    readonly updatedAt: "updatedAt";
};
export type CMSScalarFieldEnum = (typeof CMSScalarFieldEnum)[keyof typeof CMSScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map