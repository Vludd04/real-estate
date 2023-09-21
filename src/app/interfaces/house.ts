import { Dispatch, SetStateAction } from "react";

export interface IHouse {
  id: number;
  type: string;
  name: string;
  description: string;
  image: string;
  imageLg: string;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  year: string;
  price: string;
  displayedPrice: string;
  agent: {
    image: string;
    name: string;
    phone: string;
  };
}

export interface IHouseContextProps {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  countries: string[];
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
  properties: string[];
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  houses: IHouse[];
  loading: boolean;
}
