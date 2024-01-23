interface AddressType {
    city: string;
    street: string;
    streetNumber: number;
    areaNum: number;
    longitude?: number;
    latitude?: number;
  }
  
  interface FullDate {
    hebrewDate: string;
    gregorianDate: string;
    time: string;
  }
  
  export interface DonorType {
    _id: string;
    title: string;
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    address: AddressType;
    generateDate: FullDate;
  }
  