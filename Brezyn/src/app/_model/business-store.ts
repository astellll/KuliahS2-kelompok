import { BusinessSubCategory } from "./business-sub-category";
import { BusinessCategory } from "./business-category";

export class BusinessStore {
    id: string;
    name: string; // nama bisnis    
    businessCategory: BusinessCategory; // categori + sub categori bisnis
    address: string; // full address
    province: string; // provinsi
    city: string; // kota
    area: string; // kecamatan
    village: string; // desa/kelurahan
    street: string; // jalan
    rwNo: string; // rw no
    rtNo: string; // rt no

    description: string; // deskripsi bisnis
    
    contact: string; // kontak 1 bisnis
    contact2: string; // kontak 2 bisnis
    note: string; // keterangan bisnis

    longitude: string; // will be parse to float in back end
    latitude: string; // will be parse to float in back end

    // active: number;
    // sequenceNumber: number;
    // createdBy: string;
    // createdDate: Date; // generate auto in back end service, do not add manualy!
    // updatedBy: string;
    // updatedDate: Date; // generate auto in back end service, do not add manualy!
    // lastUpdatedNote: string;
}
