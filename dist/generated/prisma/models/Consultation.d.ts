import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Consultation
 *
 */
export type ConsultationModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsultationPayload>;
export type AggregateConsultation = {
    _count: ConsultationCountAggregateOutputType | null;
    _avg: ConsultationAvgAggregateOutputType | null;
    _sum: ConsultationSumAggregateOutputType | null;
    _min: ConsultationMinAggregateOutputType | null;
    _max: ConsultationMaxAggregateOutputType | null;
};
export type ConsultationAvgAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    onlineFee: number | null;
    offlineFee: number | null;
    bookingAmount: number | null;
};
export type ConsultationSumAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    onlineFee: number | null;
    offlineFee: number | null;
    bookingAmount: number | null;
};
export type ConsultationMinAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    consultationType: string | null;
    preferredMode: string | null;
    consultationDate: Date | null;
    timeSlot: string | null;
    fullName: string | null;
    gender: string | null;
    dateOfBirth: Date | null;
    timeOfBirth: string | null;
    placeOfBirth: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    pinCode: string | null;
    phoneNumber: string | null;
    emailAddress: string | null;
    careerGuidance: boolean | null;
    loveLife: boolean | null;
    marriageLife: boolean | null;
    healthWellbeing: boolean | null;
    financialCondition: boolean | null;
    business: boolean | null;
    spiritualGrowth: boolean | null;
    others: string | null;
    consultedBefore: boolean | null;
    specificQuestions: string | null;
    openToRemedies: string | null;
    declarationAccepted: boolean | null;
    signature: string | null;
    declarationDate: Date | null;
    onlineFee: number | null;
    offlineFee: number | null;
    bookingAmount: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type ConsultationMaxAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    consultationType: string | null;
    preferredMode: string | null;
    consultationDate: Date | null;
    timeSlot: string | null;
    fullName: string | null;
    gender: string | null;
    dateOfBirth: Date | null;
    timeOfBirth: string | null;
    placeOfBirth: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    pinCode: string | null;
    phoneNumber: string | null;
    emailAddress: string | null;
    careerGuidance: boolean | null;
    loveLife: boolean | null;
    marriageLife: boolean | null;
    healthWellbeing: boolean | null;
    financialCondition: boolean | null;
    business: boolean | null;
    spiritualGrowth: boolean | null;
    others: string | null;
    consultedBefore: boolean | null;
    specificQuestions: string | null;
    openToRemedies: string | null;
    declarationAccepted: boolean | null;
    signature: string | null;
    declarationDate: Date | null;
    onlineFee: number | null;
    offlineFee: number | null;
    bookingAmount: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type ConsultationCountAggregateOutputType = {
    id: number;
    studentId: number;
    consultationType: number;
    preferredMode: number;
    consultationDate: number;
    timeSlot: number;
    fullName: number;
    gender: number;
    dateOfBirth: number;
    timeOfBirth: number;
    placeOfBirth: number;
    country: number;
    state: number;
    city: number;
    pinCode: number;
    phoneNumber: number;
    emailAddress: number;
    careerGuidance: number;
    loveLife: number;
    marriageLife: number;
    healthWellbeing: number;
    financialCondition: number;
    business: number;
    spiritualGrowth: number;
    others: number;
    consultedBefore: number;
    specificQuestions: number;
    openToRemedies: number;
    declarationAccepted: number;
    signature: number;
    declarationDate: number;
    onlineFee: number;
    offlineFee: number;
    bookingAmount: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type ConsultationAvgAggregateInputType = {
    id?: true;
    studentId?: true;
    onlineFee?: true;
    offlineFee?: true;
    bookingAmount?: true;
};
export type ConsultationSumAggregateInputType = {
    id?: true;
    studentId?: true;
    onlineFee?: true;
    offlineFee?: true;
    bookingAmount?: true;
};
export type ConsultationMinAggregateInputType = {
    id?: true;
    studentId?: true;
    consultationType?: true;
    preferredMode?: true;
    consultationDate?: true;
    timeSlot?: true;
    fullName?: true;
    gender?: true;
    dateOfBirth?: true;
    timeOfBirth?: true;
    placeOfBirth?: true;
    country?: true;
    state?: true;
    city?: true;
    pinCode?: true;
    phoneNumber?: true;
    emailAddress?: true;
    careerGuidance?: true;
    loveLife?: true;
    marriageLife?: true;
    healthWellbeing?: true;
    financialCondition?: true;
    business?: true;
    spiritualGrowth?: true;
    others?: true;
    consultedBefore?: true;
    specificQuestions?: true;
    openToRemedies?: true;
    declarationAccepted?: true;
    signature?: true;
    declarationDate?: true;
    onlineFee?: true;
    offlineFee?: true;
    bookingAmount?: true;
    status?: true;
    createdAt?: true;
};
export type ConsultationMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    consultationType?: true;
    preferredMode?: true;
    consultationDate?: true;
    timeSlot?: true;
    fullName?: true;
    gender?: true;
    dateOfBirth?: true;
    timeOfBirth?: true;
    placeOfBirth?: true;
    country?: true;
    state?: true;
    city?: true;
    pinCode?: true;
    phoneNumber?: true;
    emailAddress?: true;
    careerGuidance?: true;
    loveLife?: true;
    marriageLife?: true;
    healthWellbeing?: true;
    financialCondition?: true;
    business?: true;
    spiritualGrowth?: true;
    others?: true;
    consultedBefore?: true;
    specificQuestions?: true;
    openToRemedies?: true;
    declarationAccepted?: true;
    signature?: true;
    declarationDate?: true;
    onlineFee?: true;
    offlineFee?: true;
    bookingAmount?: true;
    status?: true;
    createdAt?: true;
};
export type ConsultationCountAggregateInputType = {
    id?: true;
    studentId?: true;
    consultationType?: true;
    preferredMode?: true;
    consultationDate?: true;
    timeSlot?: true;
    fullName?: true;
    gender?: true;
    dateOfBirth?: true;
    timeOfBirth?: true;
    placeOfBirth?: true;
    country?: true;
    state?: true;
    city?: true;
    pinCode?: true;
    phoneNumber?: true;
    emailAddress?: true;
    careerGuidance?: true;
    loveLife?: true;
    marriageLife?: true;
    healthWellbeing?: true;
    financialCondition?: true;
    business?: true;
    spiritualGrowth?: true;
    others?: true;
    consultedBefore?: true;
    specificQuestions?: true;
    openToRemedies?: true;
    declarationAccepted?: true;
    signature?: true;
    declarationDate?: true;
    onlineFee?: true;
    offlineFee?: true;
    bookingAmount?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type ConsultationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Consultation to aggregate.
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultations to fetch.
     */
    orderBy?: Prisma.ConsultationOrderByWithRelationInput | Prisma.ConsultationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConsultationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Consultations
    **/
    _count?: true | ConsultationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ConsultationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ConsultationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMaxAggregateInputType;
};
export type GetConsultationAggregateType<T extends ConsultationAggregateArgs> = {
    [P in keyof T & keyof AggregateConsultation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsultation[P]> : Prisma.GetScalarType<T[P], AggregateConsultation[P]>;
};
export type ConsultationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultationWhereInput;
    orderBy?: Prisma.ConsultationOrderByWithAggregationInput | Prisma.ConsultationOrderByWithAggregationInput[];
    by: Prisma.ConsultationScalarFieldEnum[] | Prisma.ConsultationScalarFieldEnum;
    having?: Prisma.ConsultationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsultationCountAggregateInputType | true;
    _avg?: ConsultationAvgAggregateInputType;
    _sum?: ConsultationSumAggregateInputType;
    _min?: ConsultationMinAggregateInputType;
    _max?: ConsultationMaxAggregateInputType;
};
export type ConsultationGroupByOutputType = {
    id: number;
    studentId: number;
    consultationType: string;
    preferredMode: string;
    consultationDate: Date;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date;
    timeOfBirth: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress: string | null;
    careerGuidance: boolean;
    loveLife: boolean;
    marriageLife: boolean;
    healthWellbeing: boolean;
    financialCondition: boolean;
    business: boolean;
    spiritualGrowth: boolean;
    others: string | null;
    consultedBefore: boolean;
    specificQuestions: string | null;
    openToRemedies: string | null;
    declarationAccepted: boolean;
    signature: string | null;
    declarationDate: Date | null;
    onlineFee: number | null;
    offlineFee: number | null;
    bookingAmount: number | null;
    status: string;
    createdAt: Date;
    _count: ConsultationCountAggregateOutputType | null;
    _avg: ConsultationAvgAggregateOutputType | null;
    _sum: ConsultationSumAggregateOutputType | null;
    _min: ConsultationMinAggregateOutputType | null;
    _max: ConsultationMaxAggregateOutputType | null;
};
type GetConsultationGroupByPayload<T extends ConsultationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsultationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsultationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsultationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsultationGroupByOutputType[P]>;
}>>;
export type ConsultationWhereInput = {
    AND?: Prisma.ConsultationWhereInput | Prisma.ConsultationWhereInput[];
    OR?: Prisma.ConsultationWhereInput[];
    NOT?: Prisma.ConsultationWhereInput | Prisma.ConsultationWhereInput[];
    id?: Prisma.IntFilter<"Consultation"> | number;
    studentId?: Prisma.IntFilter<"Consultation"> | number;
    consultationType?: Prisma.StringFilter<"Consultation"> | string;
    preferredMode?: Prisma.StringFilter<"Consultation"> | string;
    consultationDate?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    timeSlot?: Prisma.StringFilter<"Consultation"> | string;
    fullName?: Prisma.StringFilter<"Consultation"> | string;
    gender?: Prisma.StringFilter<"Consultation"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    timeOfBirth?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    placeOfBirth?: Prisma.StringFilter<"Consultation"> | string;
    country?: Prisma.StringFilter<"Consultation"> | string;
    state?: Prisma.StringFilter<"Consultation"> | string;
    city?: Prisma.StringFilter<"Consultation"> | string;
    pinCode?: Prisma.StringFilter<"Consultation"> | string;
    phoneNumber?: Prisma.StringFilter<"Consultation"> | string;
    emailAddress?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    careerGuidance?: Prisma.BoolFilter<"Consultation"> | boolean;
    loveLife?: Prisma.BoolFilter<"Consultation"> | boolean;
    marriageLife?: Prisma.BoolFilter<"Consultation"> | boolean;
    healthWellbeing?: Prisma.BoolFilter<"Consultation"> | boolean;
    financialCondition?: Prisma.BoolFilter<"Consultation"> | boolean;
    business?: Prisma.BoolFilter<"Consultation"> | boolean;
    spiritualGrowth?: Prisma.BoolFilter<"Consultation"> | boolean;
    others?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    consultedBefore?: Prisma.BoolFilter<"Consultation"> | boolean;
    specificQuestions?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    openToRemedies?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    declarationAccepted?: Prisma.BoolFilter<"Consultation"> | boolean;
    signature?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    declarationDate?: Prisma.DateTimeNullableFilter<"Consultation"> | Date | string | null;
    onlineFee?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    offlineFee?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    bookingAmount?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    status?: Prisma.StringFilter<"Consultation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type ConsultationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    consultationType?: Prisma.SortOrder;
    preferredMode?: Prisma.SortOrder;
    consultationDate?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    timeOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    pinCode?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    emailAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    careerGuidance?: Prisma.SortOrder;
    loveLife?: Prisma.SortOrder;
    marriageLife?: Prisma.SortOrder;
    healthWellbeing?: Prisma.SortOrder;
    financialCondition?: Prisma.SortOrder;
    business?: Prisma.SortOrder;
    spiritualGrowth?: Prisma.SortOrder;
    others?: Prisma.SortOrderInput | Prisma.SortOrder;
    consultedBefore?: Prisma.SortOrder;
    specificQuestions?: Prisma.SortOrderInput | Prisma.SortOrder;
    openToRemedies?: Prisma.SortOrderInput | Prisma.SortOrder;
    declarationAccepted?: Prisma.SortOrder;
    signature?: Prisma.SortOrderInput | Prisma.SortOrder;
    declarationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    onlineFee?: Prisma.SortOrderInput | Prisma.SortOrder;
    offlineFee?: Prisma.SortOrderInput | Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type ConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ConsultationWhereInput | Prisma.ConsultationWhereInput[];
    OR?: Prisma.ConsultationWhereInput[];
    NOT?: Prisma.ConsultationWhereInput | Prisma.ConsultationWhereInput[];
    studentId?: Prisma.IntFilter<"Consultation"> | number;
    consultationType?: Prisma.StringFilter<"Consultation"> | string;
    preferredMode?: Prisma.StringFilter<"Consultation"> | string;
    consultationDate?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    timeSlot?: Prisma.StringFilter<"Consultation"> | string;
    fullName?: Prisma.StringFilter<"Consultation"> | string;
    gender?: Prisma.StringFilter<"Consultation"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    timeOfBirth?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    placeOfBirth?: Prisma.StringFilter<"Consultation"> | string;
    country?: Prisma.StringFilter<"Consultation"> | string;
    state?: Prisma.StringFilter<"Consultation"> | string;
    city?: Prisma.StringFilter<"Consultation"> | string;
    pinCode?: Prisma.StringFilter<"Consultation"> | string;
    phoneNumber?: Prisma.StringFilter<"Consultation"> | string;
    emailAddress?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    careerGuidance?: Prisma.BoolFilter<"Consultation"> | boolean;
    loveLife?: Prisma.BoolFilter<"Consultation"> | boolean;
    marriageLife?: Prisma.BoolFilter<"Consultation"> | boolean;
    healthWellbeing?: Prisma.BoolFilter<"Consultation"> | boolean;
    financialCondition?: Prisma.BoolFilter<"Consultation"> | boolean;
    business?: Prisma.BoolFilter<"Consultation"> | boolean;
    spiritualGrowth?: Prisma.BoolFilter<"Consultation"> | boolean;
    others?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    consultedBefore?: Prisma.BoolFilter<"Consultation"> | boolean;
    specificQuestions?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    openToRemedies?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    declarationAccepted?: Prisma.BoolFilter<"Consultation"> | boolean;
    signature?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    declarationDate?: Prisma.DateTimeNullableFilter<"Consultation"> | Date | string | null;
    onlineFee?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    offlineFee?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    bookingAmount?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    status?: Prisma.StringFilter<"Consultation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id">;
export type ConsultationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    consultationType?: Prisma.SortOrder;
    preferredMode?: Prisma.SortOrder;
    consultationDate?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    timeOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    pinCode?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    emailAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    careerGuidance?: Prisma.SortOrder;
    loveLife?: Prisma.SortOrder;
    marriageLife?: Prisma.SortOrder;
    healthWellbeing?: Prisma.SortOrder;
    financialCondition?: Prisma.SortOrder;
    business?: Prisma.SortOrder;
    spiritualGrowth?: Prisma.SortOrder;
    others?: Prisma.SortOrderInput | Prisma.SortOrder;
    consultedBefore?: Prisma.SortOrder;
    specificQuestions?: Prisma.SortOrderInput | Prisma.SortOrder;
    openToRemedies?: Prisma.SortOrderInput | Prisma.SortOrder;
    declarationAccepted?: Prisma.SortOrder;
    signature?: Prisma.SortOrderInput | Prisma.SortOrder;
    declarationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    onlineFee?: Prisma.SortOrderInput | Prisma.SortOrder;
    offlineFee?: Prisma.SortOrderInput | Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ConsultationCountOrderByAggregateInput;
    _avg?: Prisma.ConsultationAvgOrderByAggregateInput;
    _max?: Prisma.ConsultationMaxOrderByAggregateInput;
    _min?: Prisma.ConsultationMinOrderByAggregateInput;
    _sum?: Prisma.ConsultationSumOrderByAggregateInput;
};
export type ConsultationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsultationScalarWhereWithAggregatesInput | Prisma.ConsultationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsultationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsultationScalarWhereWithAggregatesInput | Prisma.ConsultationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Consultation"> | number;
    studentId?: Prisma.IntWithAggregatesFilter<"Consultation"> | number;
    consultationType?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    preferredMode?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    consultationDate?: Prisma.DateTimeWithAggregatesFilter<"Consultation"> | Date | string;
    timeSlot?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    gender?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    dateOfBirth?: Prisma.DateTimeWithAggregatesFilter<"Consultation"> | Date | string;
    timeOfBirth?: Prisma.StringNullableWithAggregatesFilter<"Consultation"> | string | null;
    placeOfBirth?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    country?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    state?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    pinCode?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    emailAddress?: Prisma.StringNullableWithAggregatesFilter<"Consultation"> | string | null;
    careerGuidance?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    loveLife?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    marriageLife?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    healthWellbeing?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    financialCondition?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    business?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    spiritualGrowth?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    others?: Prisma.StringNullableWithAggregatesFilter<"Consultation"> | string | null;
    consultedBefore?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    specificQuestions?: Prisma.StringNullableWithAggregatesFilter<"Consultation"> | string | null;
    openToRemedies?: Prisma.StringNullableWithAggregatesFilter<"Consultation"> | string | null;
    declarationAccepted?: Prisma.BoolWithAggregatesFilter<"Consultation"> | boolean;
    signature?: Prisma.StringNullableWithAggregatesFilter<"Consultation"> | string | null;
    declarationDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Consultation"> | Date | string | null;
    onlineFee?: Prisma.FloatNullableWithAggregatesFilter<"Consultation"> | number | null;
    offlineFee?: Prisma.FloatNullableWithAggregatesFilter<"Consultation"> | number | null;
    bookingAmount?: Prisma.FloatNullableWithAggregatesFilter<"Consultation"> | number | null;
    status?: Prisma.StringWithAggregatesFilter<"Consultation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Consultation"> | Date | string;
};
export type ConsultationCreateInput = {
    consultationType: string;
    preferredMode: string;
    consultationDate: Date | string;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date | string;
    timeOfBirth?: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress?: string | null;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: string | null;
    consultedBefore: boolean;
    specificQuestions?: string | null;
    openToRemedies?: string | null;
    declarationAccepted: boolean;
    signature?: string | null;
    declarationDate?: Date | string | null;
    onlineFee?: number | null;
    offlineFee?: number | null;
    bookingAmount?: number | null;
    status?: string;
    createdAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutConsultationsInput;
};
export type ConsultationUncheckedCreateInput = {
    id?: number;
    studentId: number;
    consultationType: string;
    preferredMode: string;
    consultationDate: Date | string;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date | string;
    timeOfBirth?: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress?: string | null;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: string | null;
    consultedBefore: boolean;
    specificQuestions?: string | null;
    openToRemedies?: string | null;
    declarationAccepted: boolean;
    signature?: string | null;
    declarationDate?: Date | string | null;
    onlineFee?: number | null;
    offlineFee?: number | null;
    bookingAmount?: number | null;
    status?: string;
    createdAt?: Date | string;
};
export type ConsultationUpdateInput = {
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutConsultationsNestedInput;
};
export type ConsultationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultationCreateManyInput = {
    id?: number;
    studentId: number;
    consultationType: string;
    preferredMode: string;
    consultationDate: Date | string;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date | string;
    timeOfBirth?: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress?: string | null;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: string | null;
    consultedBefore: boolean;
    specificQuestions?: string | null;
    openToRemedies?: string | null;
    declarationAccepted: boolean;
    signature?: string | null;
    declarationDate?: Date | string | null;
    onlineFee?: number | null;
    offlineFee?: number | null;
    bookingAmount?: number | null;
    status?: string;
    createdAt?: Date | string;
};
export type ConsultationUpdateManyMutationInput = {
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultationListRelationFilter = {
    every?: Prisma.ConsultationWhereInput;
    some?: Prisma.ConsultationWhereInput;
    none?: Prisma.ConsultationWhereInput;
};
export type ConsultationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConsultationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    consultationType?: Prisma.SortOrder;
    preferredMode?: Prisma.SortOrder;
    consultationDate?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    timeOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    pinCode?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    emailAddress?: Prisma.SortOrder;
    careerGuidance?: Prisma.SortOrder;
    loveLife?: Prisma.SortOrder;
    marriageLife?: Prisma.SortOrder;
    healthWellbeing?: Prisma.SortOrder;
    financialCondition?: Prisma.SortOrder;
    business?: Prisma.SortOrder;
    spiritualGrowth?: Prisma.SortOrder;
    others?: Prisma.SortOrder;
    consultedBefore?: Prisma.SortOrder;
    specificQuestions?: Prisma.SortOrder;
    openToRemedies?: Prisma.SortOrder;
    declarationAccepted?: Prisma.SortOrder;
    signature?: Prisma.SortOrder;
    declarationDate?: Prisma.SortOrder;
    onlineFee?: Prisma.SortOrder;
    offlineFee?: Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsultationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    onlineFee?: Prisma.SortOrder;
    offlineFee?: Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrder;
};
export type ConsultationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    consultationType?: Prisma.SortOrder;
    preferredMode?: Prisma.SortOrder;
    consultationDate?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    timeOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    pinCode?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    emailAddress?: Prisma.SortOrder;
    careerGuidance?: Prisma.SortOrder;
    loveLife?: Prisma.SortOrder;
    marriageLife?: Prisma.SortOrder;
    healthWellbeing?: Prisma.SortOrder;
    financialCondition?: Prisma.SortOrder;
    business?: Prisma.SortOrder;
    spiritualGrowth?: Prisma.SortOrder;
    others?: Prisma.SortOrder;
    consultedBefore?: Prisma.SortOrder;
    specificQuestions?: Prisma.SortOrder;
    openToRemedies?: Prisma.SortOrder;
    declarationAccepted?: Prisma.SortOrder;
    signature?: Prisma.SortOrder;
    declarationDate?: Prisma.SortOrder;
    onlineFee?: Prisma.SortOrder;
    offlineFee?: Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsultationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    consultationType?: Prisma.SortOrder;
    preferredMode?: Prisma.SortOrder;
    consultationDate?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    timeOfBirth?: Prisma.SortOrder;
    placeOfBirth?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    pinCode?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    emailAddress?: Prisma.SortOrder;
    careerGuidance?: Prisma.SortOrder;
    loveLife?: Prisma.SortOrder;
    marriageLife?: Prisma.SortOrder;
    healthWellbeing?: Prisma.SortOrder;
    financialCondition?: Prisma.SortOrder;
    business?: Prisma.SortOrder;
    spiritualGrowth?: Prisma.SortOrder;
    others?: Prisma.SortOrder;
    consultedBefore?: Prisma.SortOrder;
    specificQuestions?: Prisma.SortOrder;
    openToRemedies?: Prisma.SortOrder;
    declarationAccepted?: Prisma.SortOrder;
    signature?: Prisma.SortOrder;
    declarationDate?: Prisma.SortOrder;
    onlineFee?: Prisma.SortOrder;
    offlineFee?: Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsultationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    onlineFee?: Prisma.SortOrder;
    offlineFee?: Prisma.SortOrder;
    bookingAmount?: Prisma.SortOrder;
};
export type ConsultationCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.ConsultationCreateWithoutStudentInput, Prisma.ConsultationUncheckedCreateWithoutStudentInput> | Prisma.ConsultationCreateWithoutStudentInput[] | Prisma.ConsultationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ConsultationCreateOrConnectWithoutStudentInput | Prisma.ConsultationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.ConsultationCreateManyStudentInputEnvelope;
    connect?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
};
export type ConsultationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.ConsultationCreateWithoutStudentInput, Prisma.ConsultationUncheckedCreateWithoutStudentInput> | Prisma.ConsultationCreateWithoutStudentInput[] | Prisma.ConsultationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ConsultationCreateOrConnectWithoutStudentInput | Prisma.ConsultationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.ConsultationCreateManyStudentInputEnvelope;
    connect?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
};
export type ConsultationUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultationCreateWithoutStudentInput, Prisma.ConsultationUncheckedCreateWithoutStudentInput> | Prisma.ConsultationCreateWithoutStudentInput[] | Prisma.ConsultationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ConsultationCreateOrConnectWithoutStudentInput | Prisma.ConsultationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.ConsultationUpsertWithWhereUniqueWithoutStudentInput | Prisma.ConsultationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.ConsultationCreateManyStudentInputEnvelope;
    set?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    disconnect?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    delete?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    connect?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    update?: Prisma.ConsultationUpdateWithWhereUniqueWithoutStudentInput | Prisma.ConsultationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.ConsultationUpdateManyWithWhereWithoutStudentInput | Prisma.ConsultationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.ConsultationScalarWhereInput | Prisma.ConsultationScalarWhereInput[];
};
export type ConsultationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultationCreateWithoutStudentInput, Prisma.ConsultationUncheckedCreateWithoutStudentInput> | Prisma.ConsultationCreateWithoutStudentInput[] | Prisma.ConsultationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.ConsultationCreateOrConnectWithoutStudentInput | Prisma.ConsultationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.ConsultationUpsertWithWhereUniqueWithoutStudentInput | Prisma.ConsultationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.ConsultationCreateManyStudentInputEnvelope;
    set?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    disconnect?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    delete?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    connect?: Prisma.ConsultationWhereUniqueInput | Prisma.ConsultationWhereUniqueInput[];
    update?: Prisma.ConsultationUpdateWithWhereUniqueWithoutStudentInput | Prisma.ConsultationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.ConsultationUpdateManyWithWhereWithoutStudentInput | Prisma.ConsultationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.ConsultationScalarWhereInput | Prisma.ConsultationScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ConsultationCreateWithoutStudentInput = {
    consultationType: string;
    preferredMode: string;
    consultationDate: Date | string;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date | string;
    timeOfBirth?: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress?: string | null;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: string | null;
    consultedBefore: boolean;
    specificQuestions?: string | null;
    openToRemedies?: string | null;
    declarationAccepted: boolean;
    signature?: string | null;
    declarationDate?: Date | string | null;
    onlineFee?: number | null;
    offlineFee?: number | null;
    bookingAmount?: number | null;
    status?: string;
    createdAt?: Date | string;
};
export type ConsultationUncheckedCreateWithoutStudentInput = {
    id?: number;
    consultationType: string;
    preferredMode: string;
    consultationDate: Date | string;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date | string;
    timeOfBirth?: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress?: string | null;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: string | null;
    consultedBefore: boolean;
    specificQuestions?: string | null;
    openToRemedies?: string | null;
    declarationAccepted: boolean;
    signature?: string | null;
    declarationDate?: Date | string | null;
    onlineFee?: number | null;
    offlineFee?: number | null;
    bookingAmount?: number | null;
    status?: string;
    createdAt?: Date | string;
};
export type ConsultationCreateOrConnectWithoutStudentInput = {
    where: Prisma.ConsultationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultationCreateWithoutStudentInput, Prisma.ConsultationUncheckedCreateWithoutStudentInput>;
};
export type ConsultationCreateManyStudentInputEnvelope = {
    data: Prisma.ConsultationCreateManyStudentInput | Prisma.ConsultationCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type ConsultationUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.ConsultationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultationUpdateWithoutStudentInput, Prisma.ConsultationUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.ConsultationCreateWithoutStudentInput, Prisma.ConsultationUncheckedCreateWithoutStudentInput>;
};
export type ConsultationUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.ConsultationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultationUpdateWithoutStudentInput, Prisma.ConsultationUncheckedUpdateWithoutStudentInput>;
};
export type ConsultationUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.ConsultationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultationUpdateManyMutationInput, Prisma.ConsultationUncheckedUpdateManyWithoutStudentInput>;
};
export type ConsultationScalarWhereInput = {
    AND?: Prisma.ConsultationScalarWhereInput | Prisma.ConsultationScalarWhereInput[];
    OR?: Prisma.ConsultationScalarWhereInput[];
    NOT?: Prisma.ConsultationScalarWhereInput | Prisma.ConsultationScalarWhereInput[];
    id?: Prisma.IntFilter<"Consultation"> | number;
    studentId?: Prisma.IntFilter<"Consultation"> | number;
    consultationType?: Prisma.StringFilter<"Consultation"> | string;
    preferredMode?: Prisma.StringFilter<"Consultation"> | string;
    consultationDate?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    timeSlot?: Prisma.StringFilter<"Consultation"> | string;
    fullName?: Prisma.StringFilter<"Consultation"> | string;
    gender?: Prisma.StringFilter<"Consultation"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
    timeOfBirth?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    placeOfBirth?: Prisma.StringFilter<"Consultation"> | string;
    country?: Prisma.StringFilter<"Consultation"> | string;
    state?: Prisma.StringFilter<"Consultation"> | string;
    city?: Prisma.StringFilter<"Consultation"> | string;
    pinCode?: Prisma.StringFilter<"Consultation"> | string;
    phoneNumber?: Prisma.StringFilter<"Consultation"> | string;
    emailAddress?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    careerGuidance?: Prisma.BoolFilter<"Consultation"> | boolean;
    loveLife?: Prisma.BoolFilter<"Consultation"> | boolean;
    marriageLife?: Prisma.BoolFilter<"Consultation"> | boolean;
    healthWellbeing?: Prisma.BoolFilter<"Consultation"> | boolean;
    financialCondition?: Prisma.BoolFilter<"Consultation"> | boolean;
    business?: Prisma.BoolFilter<"Consultation"> | boolean;
    spiritualGrowth?: Prisma.BoolFilter<"Consultation"> | boolean;
    others?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    consultedBefore?: Prisma.BoolFilter<"Consultation"> | boolean;
    specificQuestions?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    openToRemedies?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    declarationAccepted?: Prisma.BoolFilter<"Consultation"> | boolean;
    signature?: Prisma.StringNullableFilter<"Consultation"> | string | null;
    declarationDate?: Prisma.DateTimeNullableFilter<"Consultation"> | Date | string | null;
    onlineFee?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    offlineFee?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    bookingAmount?: Prisma.FloatNullableFilter<"Consultation"> | number | null;
    status?: Prisma.StringFilter<"Consultation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Consultation"> | Date | string;
};
export type ConsultationCreateManyStudentInput = {
    id?: number;
    consultationType: string;
    preferredMode: string;
    consultationDate: Date | string;
    timeSlot: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date | string;
    timeOfBirth?: string | null;
    placeOfBirth: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    phoneNumber: string;
    emailAddress?: string | null;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: string | null;
    consultedBefore: boolean;
    specificQuestions?: string | null;
    openToRemedies?: string | null;
    declarationAccepted: boolean;
    signature?: string | null;
    declarationDate?: Date | string | null;
    onlineFee?: number | null;
    offlineFee?: number | null;
    bookingAmount?: number | null;
    status?: string;
    createdAt?: Date | string;
};
export type ConsultationUpdateWithoutStudentInput = {
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultationUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultationUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    consultationType?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredMode?: Prisma.StringFieldUpdateOperationsInput | string;
    consultationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    placeOfBirth?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    pinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    emailAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careerGuidance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    loveLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marriageLife?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    healthWellbeing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    financialCondition?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    business?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    spiritualGrowth?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    others?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consultedBefore?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificQuestions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openToRemedies?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    signature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declarationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    onlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    offlineFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    bookingAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    consultationType?: boolean;
    preferredMode?: boolean;
    consultationDate?: boolean;
    timeSlot?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    timeOfBirth?: boolean;
    placeOfBirth?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    pinCode?: boolean;
    phoneNumber?: boolean;
    emailAddress?: boolean;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: boolean;
    consultedBefore?: boolean;
    specificQuestions?: boolean;
    openToRemedies?: boolean;
    declarationAccepted?: boolean;
    signature?: boolean;
    declarationDate?: boolean;
    onlineFee?: boolean;
    offlineFee?: boolean;
    bookingAmount?: boolean;
    status?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consultation"]>;
export type ConsultationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    consultationType?: boolean;
    preferredMode?: boolean;
    consultationDate?: boolean;
    timeSlot?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    timeOfBirth?: boolean;
    placeOfBirth?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    pinCode?: boolean;
    phoneNumber?: boolean;
    emailAddress?: boolean;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: boolean;
    consultedBefore?: boolean;
    specificQuestions?: boolean;
    openToRemedies?: boolean;
    declarationAccepted?: boolean;
    signature?: boolean;
    declarationDate?: boolean;
    onlineFee?: boolean;
    offlineFee?: boolean;
    bookingAmount?: boolean;
    status?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consultation"]>;
export type ConsultationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    consultationType?: boolean;
    preferredMode?: boolean;
    consultationDate?: boolean;
    timeSlot?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    timeOfBirth?: boolean;
    placeOfBirth?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    pinCode?: boolean;
    phoneNumber?: boolean;
    emailAddress?: boolean;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: boolean;
    consultedBefore?: boolean;
    specificQuestions?: boolean;
    openToRemedies?: boolean;
    declarationAccepted?: boolean;
    signature?: boolean;
    declarationDate?: boolean;
    onlineFee?: boolean;
    offlineFee?: boolean;
    bookingAmount?: boolean;
    status?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consultation"]>;
export type ConsultationSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    consultationType?: boolean;
    preferredMode?: boolean;
    consultationDate?: boolean;
    timeSlot?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    timeOfBirth?: boolean;
    placeOfBirth?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    pinCode?: boolean;
    phoneNumber?: boolean;
    emailAddress?: boolean;
    careerGuidance?: boolean;
    loveLife?: boolean;
    marriageLife?: boolean;
    healthWellbeing?: boolean;
    financialCondition?: boolean;
    business?: boolean;
    spiritualGrowth?: boolean;
    others?: boolean;
    consultedBefore?: boolean;
    specificQuestions?: boolean;
    openToRemedies?: boolean;
    declarationAccepted?: boolean;
    signature?: boolean;
    declarationDate?: boolean;
    onlineFee?: boolean;
    offlineFee?: boolean;
    bookingAmount?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type ConsultationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "consultationType" | "preferredMode" | "consultationDate" | "timeSlot" | "fullName" | "gender" | "dateOfBirth" | "timeOfBirth" | "placeOfBirth" | "country" | "state" | "city" | "pinCode" | "phoneNumber" | "emailAddress" | "careerGuidance" | "loveLife" | "marriageLife" | "healthWellbeing" | "financialCondition" | "business" | "spiritualGrowth" | "others" | "consultedBefore" | "specificQuestions" | "openToRemedies" | "declarationAccepted" | "signature" | "declarationDate" | "onlineFee" | "offlineFee" | "bookingAmount" | "status" | "createdAt", ExtArgs["result"]["consultation"]>;
export type ConsultationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type ConsultationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type ConsultationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $ConsultationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Consultation";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        studentId: number;
        consultationType: string;
        preferredMode: string;
        consultationDate: Date;
        timeSlot: string;
        fullName: string;
        gender: string;
        dateOfBirth: Date;
        timeOfBirth: string | null;
        placeOfBirth: string;
        country: string;
        state: string;
        city: string;
        pinCode: string;
        phoneNumber: string;
        emailAddress: string | null;
        careerGuidance: boolean;
        loveLife: boolean;
        marriageLife: boolean;
        healthWellbeing: boolean;
        financialCondition: boolean;
        business: boolean;
        spiritualGrowth: boolean;
        others: string | null;
        consultedBefore: boolean;
        specificQuestions: string | null;
        openToRemedies: string | null;
        declarationAccepted: boolean;
        signature: string | null;
        declarationDate: Date | null;
        onlineFee: number | null;
        offlineFee: number | null;
        bookingAmount: number | null;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["consultation"]>;
    composites: {};
};
export type ConsultationGetPayload<S extends boolean | null | undefined | ConsultationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsultationPayload, S>;
export type ConsultationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsultationCountAggregateInputType | true;
};
export interface ConsultationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Consultation'];
        meta: {
            name: 'Consultation';
        };
    };
    /**
     * Find zero or one Consultation that matches the filter.
     * @param {ConsultationFindUniqueArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsultationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Consultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationFindUniqueOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Consultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsultationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Consultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultation.findMany()
     *
     * // Get first 10 Consultations
     * const consultations = await prisma.consultation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const consultationWithIdOnly = await prisma.consultation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConsultationFindManyArgs>(args?: Prisma.SelectSubset<T, ConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Consultation.
     * @param {ConsultationCreateArgs} args - Arguments to create a Consultation.
     * @example
     * // Create one Consultation
     * const Consultation = await prisma.consultation.create({
     *   data: {
     *     // ... data to create a Consultation
     *   }
     * })
     *
     */
    create<T extends ConsultationCreateArgs>(args: Prisma.SelectSubset<T, ConsultationCreateArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Consultations.
     * @param {ConsultationCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConsultationCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Consultations and returns the data saved in the database.
     * @param {ConsultationCreateManyAndReturnArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConsultationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsultationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Consultation.
     * @param {ConsultationDeleteArgs} args - Arguments to delete one Consultation.
     * @example
     * // Delete one Consultation
     * const Consultation = await prisma.consultation.delete({
     *   where: {
     *     // ... filter to delete one Consultation
     *   }
     * })
     *
     */
    delete<T extends ConsultationDeleteArgs>(args: Prisma.SelectSubset<T, ConsultationDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Consultation.
     * @param {ConsultationUpdateArgs} args - Arguments to update one Consultation.
     * @example
     * // Update one Consultation
     * const consultation = await prisma.consultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConsultationUpdateArgs>(args: Prisma.SelectSubset<T, ConsultationUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Consultations.
     * @param {ConsultationDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConsultationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConsultationUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Consultations and returns the data updated in the database.
     * @param {ConsultationUpdateManyAndReturnArgs} args - Arguments to update many Consultations.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsultationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsultationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Consultation.
     * @param {ConsultationUpsertArgs} args - Arguments to update or create a Consultation.
     * @example
     * // Update or create a Consultation
     * const consultation = await prisma.consultation.upsert({
     *   create: {
     *     // ... data to create a Consultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultation we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationUpsertArgs>(args: Prisma.SelectSubset<T, ConsultationUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsultationClient<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultation.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCountArgs>(args?: Prisma.Subset<T, ConsultationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsultationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultationAggregateArgs>(args: Prisma.Subset<T, ConsultationAggregateArgs>): Prisma.PrismaPromise<GetConsultationAggregateType<T>>;
    /**
     * Group by Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ConsultationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsultationGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsultationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Consultation model
     */
    readonly fields: ConsultationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Consultation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConsultationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Consultation model
 */
export interface ConsultationFieldRefs {
    readonly id: Prisma.FieldRef<"Consultation", 'Int'>;
    readonly studentId: Prisma.FieldRef<"Consultation", 'Int'>;
    readonly consultationType: Prisma.FieldRef<"Consultation", 'String'>;
    readonly preferredMode: Prisma.FieldRef<"Consultation", 'String'>;
    readonly consultationDate: Prisma.FieldRef<"Consultation", 'DateTime'>;
    readonly timeSlot: Prisma.FieldRef<"Consultation", 'String'>;
    readonly fullName: Prisma.FieldRef<"Consultation", 'String'>;
    readonly gender: Prisma.FieldRef<"Consultation", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Consultation", 'DateTime'>;
    readonly timeOfBirth: Prisma.FieldRef<"Consultation", 'String'>;
    readonly placeOfBirth: Prisma.FieldRef<"Consultation", 'String'>;
    readonly country: Prisma.FieldRef<"Consultation", 'String'>;
    readonly state: Prisma.FieldRef<"Consultation", 'String'>;
    readonly city: Prisma.FieldRef<"Consultation", 'String'>;
    readonly pinCode: Prisma.FieldRef<"Consultation", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Consultation", 'String'>;
    readonly emailAddress: Prisma.FieldRef<"Consultation", 'String'>;
    readonly careerGuidance: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly loveLife: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly marriageLife: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly healthWellbeing: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly financialCondition: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly business: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly spiritualGrowth: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly others: Prisma.FieldRef<"Consultation", 'String'>;
    readonly consultedBefore: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly specificQuestions: Prisma.FieldRef<"Consultation", 'String'>;
    readonly openToRemedies: Prisma.FieldRef<"Consultation", 'String'>;
    readonly declarationAccepted: Prisma.FieldRef<"Consultation", 'Boolean'>;
    readonly signature: Prisma.FieldRef<"Consultation", 'String'>;
    readonly declarationDate: Prisma.FieldRef<"Consultation", 'DateTime'>;
    readonly onlineFee: Prisma.FieldRef<"Consultation", 'Float'>;
    readonly offlineFee: Prisma.FieldRef<"Consultation", 'Float'>;
    readonly bookingAmount: Prisma.FieldRef<"Consultation", 'Float'>;
    readonly status: Prisma.FieldRef<"Consultation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Consultation", 'DateTime'>;
}
/**
 * Consultation findUnique
 */
export type ConsultationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Consultation to fetch.
     */
    where: Prisma.ConsultationWhereUniqueInput;
};
/**
 * Consultation findUniqueOrThrow
 */
export type ConsultationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Consultation to fetch.
     */
    where: Prisma.ConsultationWhereUniqueInput;
};
/**
 * Consultation findFirst
 */
export type ConsultationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Consultation to fetch.
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultations to fetch.
     */
    orderBy?: Prisma.ConsultationOrderByWithRelationInput | Prisma.ConsultationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Consultations.
     */
    cursor?: Prisma.ConsultationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consultations.
     */
    distinct?: Prisma.ConsultationScalarFieldEnum | Prisma.ConsultationScalarFieldEnum[];
};
/**
 * Consultation findFirstOrThrow
 */
export type ConsultationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Consultation to fetch.
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultations to fetch.
     */
    orderBy?: Prisma.ConsultationOrderByWithRelationInput | Prisma.ConsultationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Consultations.
     */
    cursor?: Prisma.ConsultationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consultations.
     */
    distinct?: Prisma.ConsultationScalarFieldEnum | Prisma.ConsultationScalarFieldEnum[];
};
/**
 * Consultation findMany
 */
export type ConsultationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Consultations to fetch.
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultations to fetch.
     */
    orderBy?: Prisma.ConsultationOrderByWithRelationInput | Prisma.ConsultationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Consultations.
     */
    cursor?: Prisma.ConsultationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultations.
     */
    skip?: number;
    distinct?: Prisma.ConsultationScalarFieldEnum | Prisma.ConsultationScalarFieldEnum[];
};
/**
 * Consultation create
 */
export type ConsultationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Consultation.
     */
    data: Prisma.XOR<Prisma.ConsultationCreateInput, Prisma.ConsultationUncheckedCreateInput>;
};
/**
 * Consultation createMany
 */
export type ConsultationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: Prisma.ConsultationCreateManyInput | Prisma.ConsultationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Consultation createManyAndReturn
 */
export type ConsultationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: Prisma.ConsultationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Consultation
     */
    omit?: Prisma.ConsultationOmit<ExtArgs> | null;
    /**
     * The data used to create many Consultations.
     */
    data: Prisma.ConsultationCreateManyInput | Prisma.ConsultationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Consultation update
 */
export type ConsultationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Consultation.
     */
    data: Prisma.XOR<Prisma.ConsultationUpdateInput, Prisma.ConsultationUncheckedUpdateInput>;
    /**
     * Choose, which Consultation to update.
     */
    where: Prisma.ConsultationWhereUniqueInput;
};
/**
 * Consultation updateMany
 */
export type ConsultationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: Prisma.XOR<Prisma.ConsultationUpdateManyMutationInput, Prisma.ConsultationUncheckedUpdateManyInput>;
    /**
     * Filter which Consultations to update
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * Limit how many Consultations to update.
     */
    limit?: number;
};
/**
 * Consultation updateManyAndReturn
 */
export type ConsultationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: Prisma.ConsultationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Consultation
     */
    omit?: Prisma.ConsultationOmit<ExtArgs> | null;
    /**
     * The data used to update Consultations.
     */
    data: Prisma.XOR<Prisma.ConsultationUpdateManyMutationInput, Prisma.ConsultationUncheckedUpdateManyInput>;
    /**
     * Filter which Consultations to update
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * Limit how many Consultations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Consultation upsert
 */
export type ConsultationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Consultation to update in case it exists.
     */
    where: Prisma.ConsultationWhereUniqueInput;
    /**
     * In case the Consultation found by the `where` argument doesn't exist, create a new Consultation with this data.
     */
    create: Prisma.XOR<Prisma.ConsultationCreateInput, Prisma.ConsultationUncheckedCreateInput>;
    /**
     * In case the Consultation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConsultationUpdateInput, Prisma.ConsultationUncheckedUpdateInput>;
};
/**
 * Consultation delete
 */
export type ConsultationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Consultation to delete.
     */
    where: Prisma.ConsultationWhereUniqueInput;
};
/**
 * Consultation deleteMany
 */
export type ConsultationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: Prisma.ConsultationWhereInput;
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number;
};
/**
 * Consultation without action
 */
export type ConsultationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Consultation.d.ts.map