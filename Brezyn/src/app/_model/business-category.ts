import { BusinessSubCategory } from "./business-sub-category";

export class BusinessCategory {
    id: string;
    name: string;
    code: string;

    businessSubCategory: BusinessSubCategory;

    // active: number;
    // sequenceNumber: number;
    // createdBy: string;
    // createdDate: Date; // generate auto in back end service, do not add manualy!
    // updatedBy: string;
    // updatedDate: Date; // generate auto in back end service, do not add manualy!
    // lastUpdatedNote: string;
}
