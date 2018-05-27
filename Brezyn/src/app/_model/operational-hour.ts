import { BusinessStore } from "./business-store";

export class OperationalHour {
    id: string;
    businessStore: BusinessStore;
    day: string;
    hour: string; // 00:00 ~ 23:59

    // active: number;
    // sequenceNumber: number;
    // createdBy: string;
    // createdDate: Date; // generate auto in back end service, do not add manualy!
    // updatedBy: string;
    // updatedDate: Date; // generate auto in back end service, do not add manualy!
    // lastUpdatedNote: string;
}
