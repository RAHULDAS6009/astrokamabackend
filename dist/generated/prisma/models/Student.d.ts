import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Student
 *
 */
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentAvgAggregateOutputType = {
    id: number | null;
    batchId: number | null;
};
export type StudentSumAggregateOutputType = {
    id: number | null;
    batchId: number | null;
};
export type StudentMinAggregateOutputType = {
    id: number | null;
    studentId: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    batchId: number | null;
    fatherName: string | null;
    courseMode: string | null;
    courseDetails: string | null;
    communicationAddress: string | null;
    permanentAddress: string | null;
    mobileNumber: string | null;
    dateOfBirth: string | null;
    placeOfBirth: string | null;
    educationalQualification: string | null;
    extraExperience: string | null;
    astrologicalExperience: string | null;
    occupation: string | null;
    photoUrl: string | null;
    certificateUrl: string | null;
    idProofUrl: string | null;
    createdAt: Date | null;
};
export type StudentMaxAggregateOutputType = {
    id: number | null;
    studentId: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    batchId: number | null;
    fatherName: string | null;
    courseMode: string | null;
    courseDetails: string | null;
    communicationAddress: string | null;
    permanentAddress: string | null;
    mobileNumber: string | null;
    dateOfBirth: string | null;
    placeOfBirth: string | null;
    educationalQualification: string | null;
    extraExperience: string | null;
    astrologicalExperience: string | null;
    occupation: string | null;
    photoUrl: string | null;
    certificateUrl: string | null;
    idProofUrl: string | null;
    createdAt: Date | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    studentId: number;
    name: number;
    email: number;
    password: number;
    batchId: number;
    fatherName: number;
    courseMode: number;
    courseDetails: number;
    communicationAddress: number;
    permanentAddress: number;
    mobileNumber: number;
    dateOfBirth: number;
    placeOfBirth: number;
    educationalQualification: number;
    extraExperience: number;
    astrologicalExperience: number;
    occupation: number;
    photoUrl: number;
    certificateUrl: number;
    idProofUrl: number;
    createdAt: number;
    _all: number;
};
export type StudentAvgAggregateInputType = {
    id?: true;
    batchId?: true;
};
export type StudentSumAggregateInputType = {
    id?: true;
    batchId?: true;
};
export type StudentMinAggregateInputType = {
    id?: true;
    studentId?: true;
    name?: true;
    email?: true;
    password?: true;
    batchId?: true;
    fatherName?: true;
    courseMode?: true;
    courseDetails?: true;
    communicationAddress?: true;
    permanentAddress?: true;
    mobileNumber?: true;
    dateOfBirth?: true;
    placeOfBirth?: true;
    educationalQualification?: true;
    extraExperience?: true;
    astrologicalExperience?: true;
    occupation?: true;
    photoUrl?: true;
    certificateUrl?: true;
    idProofUrl?: true;
    createdAt?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    name?: true;
    email?: true;
    password?: true;
    batchId?: true;
    fatherName?: true;
    courseMode?: true;
    courseDetails?: true;
    communicationAddress?: true;
    permanentAddress?: true;
    mobileNumber?: true;
    dateOfBirth?: true;
    placeOfBirth?: true;
    educationalQualification?: true;
    extraExperience?: true;
    astrologicalExperience?: true;
    occupation?: true;
    photoUrl?: true;
    certificateUrl?: true;
    idProofUrl?: true;
    createdAt?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    studentId?: true;
    name?: true;
    email?: true;
    password?: true;
    batchId?: true;
    fatherName?: true;
    courseMode?: true;
    courseDetails?: true;
    communicationAddress?: true;
    permanentAddress?: true;
    mobileNumber?: true;
    dateOfBirth?: true;
    placeOfBirth?: true;
    educationalQualification?: true;
    extraExperience?: true;
    astrologicalExperience?: true;
    occupation?: true;
    photoUrl?: true;
    certificateUrl?: true;
    idProofUrl?: true;
    createdAt?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: Prisma.StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: number;
    studentId: string;
    name: string;
    email: string | null;
    password: string;
    batchId: number | null;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience: string | null;
    astrologicalExperience: string | null;
    occupation: string;
    photoUrl: string | null;
    certificateUrl: string | null;
    idProofUrl: string | null;
    createdAt: Date;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.IntFilter<"Student"> | number;
    studentId?: Prisma.StringFilter<"Student"> | string;
    name?: Prisma.StringFilter<"Student"> | string;
    email?: Prisma.StringNullableFilter<"Student"> | string | null;
    password?: Prisma.StringFilter<"Student"> | string;
    batchId?: Prisma.IntNullableFilter<"Student"> | number | null;
    fatherName?: Prisma.StringFilter<"Student"> | string;
    courseMode?: Prisma.StringFilter<"Student"> | string;
    courseDetails?: Prisma.StringFilter<"Student"> | string;
    communicationAddress?: Prisma.StringFilter<"Student"> | string;
    permanentAddress?: Prisma.StringFilter<"Student"> | string;
    mobileNumber?: Prisma.StringFilter<"Student"> | string;
    dateOfBirth?: Prisma.StringFilter<"Student"> | string;
    placeOfBirth?: Prisma.StringFilter<"Student"> | string;
    educationalQualification?: Prisma.StringFilter<"Student"> | string;
    extraExperience?: Prisma.StringNullableFilter<"Student"> | string | null;
    astrologicalExperience?: Prisma.StringNullableFilter<"Student"> | string | null;
    occupation?: Prisma.StringFilter<"Student"> | string;
    photoUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    certificateUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    idProofUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    batch?: Prisma.XOR<Prisma.BatchNullableScalarRelationFilter, Prisma.BatchWhereInput> | null;
    fees?: Prisma.FeeListRelationFilter;
    consultations?: Prisma.ConsultationListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    batchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fatherName?: Prisma.SortOrder;
    courseMode?: Prisma.SortOrder;
    courseDetails?: Prisma.SortOrder;
    communicationAddress?: Prisma.SortOrder;
    permanentAddress?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    educationalQualification?: Prisma.SortOrder;
    extraExperience?: Prisma.SortOrderInput | Prisma.SortOrder;
    astrologicalExperience?: Prisma.SortOrderInput | Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    certificateUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    idProofUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    batch?: Prisma.BatchOrderByWithRelationInput;
    fees?: Prisma.FeeOrderByRelationAggregateInput;
    consultations?: Prisma.ConsultationOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    studentId?: string;
    email?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    name?: Prisma.StringFilter<"Student"> | string;
    password?: Prisma.StringFilter<"Student"> | string;
    batchId?: Prisma.IntNullableFilter<"Student"> | number | null;
    fatherName?: Prisma.StringFilter<"Student"> | string;
    courseMode?: Prisma.StringFilter<"Student"> | string;
    courseDetails?: Prisma.StringFilter<"Student"> | string;
    communicationAddress?: Prisma.StringFilter<"Student"> | string;
    permanentAddress?: Prisma.StringFilter<"Student"> | string;
    mobileNumber?: Prisma.StringFilter<"Student"> | string;
    dateOfBirth?: Prisma.StringFilter<"Student"> | string;
    placeOfBirth?: Prisma.StringFilter<"Student"> | string;
    educationalQualification?: Prisma.StringFilter<"Student"> | string;
    extraExperience?: Prisma.StringNullableFilter<"Student"> | string | null;
    astrologicalExperience?: Prisma.StringNullableFilter<"Student"> | string | null;
    occupation?: Prisma.StringFilter<"Student"> | string;
    photoUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    certificateUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    idProofUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    batch?: Prisma.XOR<Prisma.BatchNullableScalarRelationFilter, Prisma.BatchWhereInput> | null;
    fees?: Prisma.FeeListRelationFilter;
    consultations?: Prisma.ConsultationListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
}, "id" | "studentId" | "email">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    batchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fatherName?: Prisma.SortOrder;
    courseMode?: Prisma.SortOrder;
    courseDetails?: Prisma.SortOrder;
    communicationAddress?: Prisma.SortOrder;
    permanentAddress?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    educationalQualification?: Prisma.SortOrder;
    extraExperience?: Prisma.SortOrderInput | Prisma.SortOrder;
    astrologicalExperience?: Prisma.SortOrderInput | Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    certificateUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    idProofUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _avg?: Prisma.StudentAvgOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
    _sum?: Prisma.StudentSumOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Student"> | number;
    studentId?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    batchId?: Prisma.IntNullableWithAggregatesFilter<"Student"> | number | null;
    fatherName?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    courseMode?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    courseDetails?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    communicationAddress?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    permanentAddress?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    mobileNumber?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    dateOfBirth?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    placeOfBirth?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    educationalQualification?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    extraExperience?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    astrologicalExperience?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    occupation?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    certificateUrl?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    idProofUrl?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
};
export type StudentCreateInput = {
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    batch?: Prisma.BatchCreateNestedOneWithoutStudentsInput;
    fees?: Prisma.FeeCreateNestedManyWithoutStudentInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    batchId?: number | null;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    fees?: Prisma.FeeUncheckedCreateNestedManyWithoutStudentInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.BatchUpdateOneWithoutStudentsNestedInput;
    fees?: Prisma.FeeUpdateManyWithoutStudentNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fees?: Prisma.FeeUncheckedUpdateManyWithoutStudentNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    batchId?: number | null;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
};
export type StudentUpdateManyMutationInput = {
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    fatherName?: Prisma.SortOrder;
    courseMode?: Prisma.SortOrder;
    courseDetails?: Prisma.SortOrder;
    communicationAddress?: Prisma.SortOrder;
    permanentAddress?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    educationalQualification?: Prisma.SortOrder;
    extraExperience?: Prisma.SortOrder;
    astrologicalExperience?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    certificateUrl?: Prisma.SortOrder;
    idProofUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    fatherName?: Prisma.SortOrder;
    courseMode?: Prisma.SortOrder;
    courseDetails?: Prisma.SortOrder;
    communicationAddress?: Prisma.SortOrder;
    permanentAddress?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    educationalQualification?: Prisma.SortOrder;
    extraExperience?: Prisma.SortOrder;
    astrologicalExperience?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    certificateUrl?: Prisma.SortOrder;
    idProofUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    fatherName?: Prisma.SortOrder;
    courseMode?: Prisma.SortOrder;
    courseDetails?: Prisma.SortOrder;
    communicationAddress?: Prisma.SortOrder;
    permanentAddress?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    educationalQualification?: Prisma.SortOrder;
    extraExperience?: Prisma.SortOrder;
    astrologicalExperience?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    certificateUrl?: Prisma.SortOrder;
    idProofUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
};
export type StudentListRelationFilter = {
    every?: Prisma.StudentWhereInput;
    some?: Prisma.StudentWhereInput;
    none?: Prisma.StudentWhereInput;
};
export type StudentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type StudentNullableScalarRelationFilter = {
    is?: Prisma.StudentWhereInput | null;
    isNot?: Prisma.StudentWhereInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StudentCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutBatchInput, Prisma.StudentUncheckedCreateWithoutBatchInput> | Prisma.StudentCreateWithoutBatchInput[] | Prisma.StudentUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutBatchInput | Prisma.StudentCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.StudentCreateManyBatchInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUncheckedCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutBatchInput, Prisma.StudentUncheckedCreateWithoutBatchInput> | Prisma.StudentCreateWithoutBatchInput[] | Prisma.StudentUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutBatchInput | Prisma.StudentCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.StudentCreateManyBatchInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutBatchInput, Prisma.StudentUncheckedCreateWithoutBatchInput> | Prisma.StudentCreateWithoutBatchInput[] | Prisma.StudentUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutBatchInput | Prisma.StudentCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutBatchInput | Prisma.StudentUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.StudentCreateManyBatchInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutBatchInput | Prisma.StudentUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutBatchInput | Prisma.StudentUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutBatchInput, Prisma.StudentUncheckedCreateWithoutBatchInput> | Prisma.StudentCreateWithoutBatchInput[] | Prisma.StudentUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutBatchInput | Prisma.StudentCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutBatchInput | Prisma.StudentUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.StudentCreateManyBatchInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutBatchInput | Prisma.StudentUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutBatchInput | Prisma.StudentUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentCreateNestedOneWithoutFeesInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutFeesInput, Prisma.StudentUncheckedCreateWithoutFeesInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutFeesInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutFeesNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutFeesInput, Prisma.StudentUncheckedCreateWithoutFeesInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutFeesInput;
    upsert?: Prisma.StudentUpsertWithoutFeesInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutFeesInput, Prisma.StudentUpdateWithoutFeesInput>, Prisma.StudentUncheckedUpdateWithoutFeesInput>;
};
export type StudentCreateNestedOneWithoutConsultationsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutConsultationsInput, Prisma.StudentUncheckedCreateWithoutConsultationsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutConsultationsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutConsultationsInput, Prisma.StudentUncheckedCreateWithoutConsultationsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutConsultationsInput;
    upsert?: Prisma.StudentUpsertWithoutConsultationsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutConsultationsInput, Prisma.StudentUpdateWithoutConsultationsInput>, Prisma.StudentUncheckedUpdateWithoutConsultationsInput>;
};
export type StudentCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutReviewsInput, Prisma.StudentUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutReviewsInput, Prisma.StudentUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.StudentUpsertWithoutReviewsInput;
    disconnect?: Prisma.StudentWhereInput | boolean;
    delete?: Prisma.StudentWhereInput | boolean;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutReviewsInput, Prisma.StudentUpdateWithoutReviewsInput>, Prisma.StudentUncheckedUpdateWithoutReviewsInput>;
};
export type StudentCreateWithoutBatchInput = {
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    fees?: Prisma.FeeCreateNestedManyWithoutStudentInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutBatchInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    fees?: Prisma.FeeUncheckedCreateNestedManyWithoutStudentInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutBatchInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutBatchInput, Prisma.StudentUncheckedCreateWithoutBatchInput>;
};
export type StudentCreateManyBatchInputEnvelope = {
    data: Prisma.StudentCreateManyBatchInput | Prisma.StudentCreateManyBatchInput[];
    skipDuplicates?: boolean;
};
export type StudentUpsertWithWhereUniqueWithoutBatchInput = {
    where: Prisma.StudentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentUpdateWithoutBatchInput, Prisma.StudentUncheckedUpdateWithoutBatchInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutBatchInput, Prisma.StudentUncheckedCreateWithoutBatchInput>;
};
export type StudentUpdateWithWhereUniqueWithoutBatchInput = {
    where: Prisma.StudentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutBatchInput, Prisma.StudentUncheckedUpdateWithoutBatchInput>;
};
export type StudentUpdateManyWithWhereWithoutBatchInput = {
    where: Prisma.StudentScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyWithoutBatchInput>;
};
export type StudentScalarWhereInput = {
    AND?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    OR?: Prisma.StudentScalarWhereInput[];
    NOT?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    id?: Prisma.IntFilter<"Student"> | number;
    studentId?: Prisma.StringFilter<"Student"> | string;
    name?: Prisma.StringFilter<"Student"> | string;
    email?: Prisma.StringNullableFilter<"Student"> | string | null;
    password?: Prisma.StringFilter<"Student"> | string;
    batchId?: Prisma.IntNullableFilter<"Student"> | number | null;
    fatherName?: Prisma.StringFilter<"Student"> | string;
    courseMode?: Prisma.StringFilter<"Student"> | string;
    courseDetails?: Prisma.StringFilter<"Student"> | string;
    communicationAddress?: Prisma.StringFilter<"Student"> | string;
    permanentAddress?: Prisma.StringFilter<"Student"> | string;
    mobileNumber?: Prisma.StringFilter<"Student"> | string;
    dateOfBirth?: Prisma.StringFilter<"Student"> | string;
    placeOfBirth?: Prisma.StringFilter<"Student"> | string;
    educationalQualification?: Prisma.StringFilter<"Student"> | string;
    extraExperience?: Prisma.StringNullableFilter<"Student"> | string | null;
    astrologicalExperience?: Prisma.StringNullableFilter<"Student"> | string | null;
    occupation?: Prisma.StringFilter<"Student"> | string;
    photoUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    certificateUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    idProofUrl?: Prisma.StringNullableFilter<"Student"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
};
export type StudentCreateWithoutFeesInput = {
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    batch?: Prisma.BatchCreateNestedOneWithoutStudentsInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutFeesInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    batchId?: number | null;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutFeesInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutFeesInput, Prisma.StudentUncheckedCreateWithoutFeesInput>;
};
export type StudentUpsertWithoutFeesInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutFeesInput, Prisma.StudentUncheckedUpdateWithoutFeesInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutFeesInput, Prisma.StudentUncheckedCreateWithoutFeesInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutFeesInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutFeesInput, Prisma.StudentUncheckedUpdateWithoutFeesInput>;
};
export type StudentUpdateWithoutFeesInput = {
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.BatchUpdateOneWithoutStudentsNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutFeesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutConsultationsInput = {
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    batch?: Prisma.BatchCreateNestedOneWithoutStudentsInput;
    fees?: Prisma.FeeCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutConsultationsInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    batchId?: number | null;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    fees?: Prisma.FeeUncheckedCreateNestedManyWithoutStudentInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutConsultationsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutConsultationsInput, Prisma.StudentUncheckedCreateWithoutConsultationsInput>;
};
export type StudentUpsertWithoutConsultationsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutConsultationsInput, Prisma.StudentUncheckedUpdateWithoutConsultationsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutConsultationsInput, Prisma.StudentUncheckedCreateWithoutConsultationsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutConsultationsInput, Prisma.StudentUncheckedUpdateWithoutConsultationsInput>;
};
export type StudentUpdateWithoutConsultationsInput = {
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.BatchUpdateOneWithoutStudentsNestedInput;
    fees?: Prisma.FeeUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutConsultationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fees?: Prisma.FeeUncheckedUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutReviewsInput = {
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    batch?: Prisma.BatchCreateNestedOneWithoutStudentsInput;
    fees?: Prisma.FeeCreateNestedManyWithoutStudentInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutReviewsInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    batchId?: number | null;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
    fees?: Prisma.FeeUncheckedCreateNestedManyWithoutStudentInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutReviewsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutReviewsInput, Prisma.StudentUncheckedCreateWithoutReviewsInput>;
};
export type StudentUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutReviewsInput, Prisma.StudentUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutReviewsInput, Prisma.StudentUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutReviewsInput, Prisma.StudentUncheckedUpdateWithoutReviewsInput>;
};
export type StudentUpdateWithoutReviewsInput = {
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.BatchUpdateOneWithoutStudentsNestedInput;
    fees?: Prisma.FeeUpdateManyWithoutStudentNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fees?: Prisma.FeeUncheckedUpdateManyWithoutStudentNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyBatchInput = {
    id?: number;
    studentId: string;
    name: string;
    email?: string | null;
    password: string;
    fatherName: string;
    courseMode: string;
    courseDetails: string;
    communicationAddress: string;
    permanentAddress: string;
    mobileNumber: string;
    dateOfBirth: string;
    placeOfBirth: string;
    educationalQualification: string;
    extraExperience?: string | null;
    astrologicalExperience?: string | null;
    occupation: string;
    photoUrl?: string | null;
    certificateUrl?: string | null;
    idProofUrl?: string | null;
    createdAt?: Date | string;
};
export type StudentUpdateWithoutBatchInput = {
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fees?: Prisma.FeeUpdateManyWithoutStudentNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutBatchInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fees?: Prisma.FeeUncheckedUpdateManyWithoutStudentNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutStudentNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateManyWithoutBatchInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fatherName?: Prisma.StringFieldUpdateOperationsInput | string;
    courseMode?: Prisma.StringFieldUpdateOperationsInput | string;
    courseDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    communicationAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    permanentAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    educationalQualification?: Prisma.StringFieldUpdateOperationsInput | string;
    extraExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    astrologicalExperience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idProofUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type StudentCountOutputType
 */
export type StudentCountOutputType = {
    fees: number;
    consultations: number;
    reviews: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fees?: boolean | StudentCountOutputTypeCountFeesArgs;
    consultations?: boolean | StudentCountOutputTypeCountConsultationsArgs;
    reviews?: boolean | StudentCountOutputTypeCountReviewsArgs;
};
/**
 * StudentCountOutputType without action
 */
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StudentCountOutputType without action
 */
export type StudentCountOutputTypeCountFeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeWhereInput;
};
/**
 * StudentCountOutputType without action
 */
export type StudentCountOutputTypeCountConsultationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultationWhereInput;
};
/**
 * StudentCountOutputType without action
 */
export type StudentCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    batchId?: boolean;
    fatherName?: boolean;
    courseMode?: boolean;
    courseDetails?: boolean;
    communicationAddress?: boolean;
    permanentAddress?: boolean;
    mobileNumber?: boolean;
    dateOfBirth?: boolean;
    placeOfBirth?: boolean;
    educationalQualification?: boolean;
    extraExperience?: boolean;
    astrologicalExperience?: boolean;
    occupation?: boolean;
    photoUrl?: boolean;
    certificateUrl?: boolean;
    idProofUrl?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.Student$batchArgs<ExtArgs>;
    fees?: boolean | Prisma.Student$feesArgs<ExtArgs>;
    consultations?: boolean | Prisma.Student$consultationsArgs<ExtArgs>;
    reviews?: boolean | Prisma.Student$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    batchId?: boolean;
    fatherName?: boolean;
    courseMode?: boolean;
    courseDetails?: boolean;
    communicationAddress?: boolean;
    permanentAddress?: boolean;
    mobileNumber?: boolean;
    dateOfBirth?: boolean;
    placeOfBirth?: boolean;
    educationalQualification?: boolean;
    extraExperience?: boolean;
    astrologicalExperience?: boolean;
    occupation?: boolean;
    photoUrl?: boolean;
    certificateUrl?: boolean;
    idProofUrl?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.Student$batchArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    batchId?: boolean;
    fatherName?: boolean;
    courseMode?: boolean;
    courseDetails?: boolean;
    communicationAddress?: boolean;
    permanentAddress?: boolean;
    mobileNumber?: boolean;
    dateOfBirth?: boolean;
    placeOfBirth?: boolean;
    educationalQualification?: boolean;
    extraExperience?: boolean;
    astrologicalExperience?: boolean;
    occupation?: boolean;
    photoUrl?: boolean;
    certificateUrl?: boolean;
    idProofUrl?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.Student$batchArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    batchId?: boolean;
    fatherName?: boolean;
    courseMode?: boolean;
    courseDetails?: boolean;
    communicationAddress?: boolean;
    permanentAddress?: boolean;
    mobileNumber?: boolean;
    dateOfBirth?: boolean;
    placeOfBirth?: boolean;
    educationalQualification?: boolean;
    extraExperience?: boolean;
    astrologicalExperience?: boolean;
    occupation?: boolean;
    photoUrl?: boolean;
    certificateUrl?: boolean;
    idProofUrl?: boolean;
    createdAt?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "name" | "email" | "password" | "batchId" | "fatherName" | "courseMode" | "courseDetails" | "communicationAddress" | "permanentAddress" | "mobileNumber" | "dateOfBirth" | "placeOfBirth" | "educationalQualification" | "extraExperience" | "astrologicalExperience" | "occupation" | "photoUrl" | "certificateUrl" | "idProofUrl" | "createdAt", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.Student$batchArgs<ExtArgs>;
    fees?: boolean | Prisma.Student$feesArgs<ExtArgs>;
    consultations?: boolean | Prisma.Student$consultationsArgs<ExtArgs>;
    reviews?: boolean | Prisma.Student$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.Student$batchArgs<ExtArgs>;
};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.Student$batchArgs<ExtArgs>;
};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        batch: Prisma.$BatchPayload<ExtArgs> | null;
        fees: Prisma.$FeePayload<ExtArgs>[];
        consultations: Prisma.$ConsultationPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        studentId: string;
        name: string;
        email: string | null;
        password: string;
        batchId: number | null;
        fatherName: string;
        courseMode: string;
        courseDetails: string;
        communicationAddress: string;
        permanentAddress: string;
        mobileNumber: string;
        dateOfBirth: string;
        placeOfBirth: string;
        educationalQualification: string;
        extraExperience: string | null;
        astrologicalExperience: string | null;
        occupation: string;
        photoUrl: string | null;
        certificateUrl: string | null;
        idProofUrl: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     */
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     */
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Student model
     */
    readonly fields: StudentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Student.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    batch<T extends Prisma.Student$batchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$batchArgs<ExtArgs>>): Prisma.Prisma__BatchClient<runtime.Types.Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    fees<T extends Prisma.Student$feesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$feesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consultations<T extends Prisma.Student$consultationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Student$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Student model
 */
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'Int'>;
    readonly studentId: Prisma.FieldRef<"Student", 'String'>;
    readonly name: Prisma.FieldRef<"Student", 'String'>;
    readonly email: Prisma.FieldRef<"Student", 'String'>;
    readonly password: Prisma.FieldRef<"Student", 'String'>;
    readonly batchId: Prisma.FieldRef<"Student", 'Int'>;
    readonly fatherName: Prisma.FieldRef<"Student", 'String'>;
    readonly courseMode: Prisma.FieldRef<"Student", 'String'>;
    readonly courseDetails: Prisma.FieldRef<"Student", 'String'>;
    readonly communicationAddress: Prisma.FieldRef<"Student", 'String'>;
    readonly permanentAddress: Prisma.FieldRef<"Student", 'String'>;
    readonly mobileNumber: Prisma.FieldRef<"Student", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Student", 'String'>;
    readonly placeOfBirth: Prisma.FieldRef<"Student", 'String'>;
    readonly educationalQualification: Prisma.FieldRef<"Student", 'String'>;
    readonly extraExperience: Prisma.FieldRef<"Student", 'String'>;
    readonly astrologicalExperience: Prisma.FieldRef<"Student", 'String'>;
    readonly occupation: Prisma.FieldRef<"Student", 'String'>;
    readonly photoUrl: Prisma.FieldRef<"Student", 'String'>;
    readonly certificateUrl: Prisma.FieldRef<"Student", 'String'>;
    readonly idProofUrl: Prisma.FieldRef<"Student", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Student", 'DateTime'>;
}
/**
 * Student findUnique
 */
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where: Prisma.StudentWhereUniqueInput;
};
/**
 * Student findUniqueOrThrow
 */
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where: Prisma.StudentWhereUniqueInput;
};
/**
 * Student findFirst
 */
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where?: Prisma.StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Students.
     */
    cursor?: Prisma.StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Students.
     */
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
/**
 * Student findFirstOrThrow
 */
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where?: Prisma.StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Students.
     */
    cursor?: Prisma.StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Students.
     */
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
/**
 * Student findMany
 */
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Students to fetch.
     */
    where?: Prisma.StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Students.
     */
    cursor?: Prisma.StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
/**
 * Student create
 */
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Student.
     */
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
/**
 * Student createMany
 */
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Student createManyAndReturn
 */
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * The data used to create many Students.
     */
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Student update
 */
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Student.
     */
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    /**
     * Choose, which Student to update.
     */
    where: Prisma.StudentWhereUniqueInput;
};
/**
 * Student updateMany
 */
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    /**
     * Filter which Students to update
     */
    where?: Prisma.StudentWhereInput;
    /**
     * Limit how many Students to update.
     */
    limit?: number;
};
/**
 * Student updateManyAndReturn
 */
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * The data used to update Students.
     */
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    /**
     * Filter which Students to update
     */
    where?: Prisma.StudentWhereInput;
    /**
     * Limit how many Students to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Student upsert
 */
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: Prisma.StudentWhereUniqueInput;
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
/**
 * Student delete
 */
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
    /**
     * Filter which Student to delete.
     */
    where: Prisma.StudentWhereUniqueInput;
};
/**
 * Student deleteMany
 */
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: Prisma.StudentWhereInput;
    /**
     * Limit how many Students to delete.
     */
    limit?: number;
};
/**
 * Student.batch
 */
export type Student$batchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: Prisma.BatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Batch
     */
    omit?: Prisma.BatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BatchInclude<ExtArgs> | null;
    where?: Prisma.BatchWhereInput;
};
/**
 * Student.fees
 */
export type Student$feesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: Prisma.FeeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fee
     */
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where?: Prisma.FeeWhereInput;
    orderBy?: Prisma.FeeOrderByWithRelationInput | Prisma.FeeOrderByWithRelationInput[];
    cursor?: Prisma.FeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeScalarFieldEnum | Prisma.FeeScalarFieldEnum[];
};
/**
 * Student.consultations
 */
export type Student$consultationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: Prisma.ConsultationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consultation
     */
    omit?: Prisma.ConsultationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultationInclude<ExtArgs> | null;
    where?: Prisma.ConsultationWhereInput;
    orderBy?: Prisma.ConsultationOrderByWithRelationInput | Prisma.ConsultationOrderByWithRelationInput[];
    cursor?: Prisma.ConsultationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultationScalarFieldEnum | Prisma.ConsultationScalarFieldEnum[];
};
/**
 * Student.reviews
 */
export type Student$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * Student without action
 */
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: Prisma.StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Student.d.ts.map