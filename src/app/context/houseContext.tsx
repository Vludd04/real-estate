import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import { IHouseContextProps } from "../interfaces/house";
import api from "../api";

export const HouseContext = createContext<IHouseContextProps | any>(null);

const HouseContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [houses, setHouses] = useState(api.houses.fetchAll());
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = [
      "Location (any)",
      ...allCountries.filter(
        (value, index, array) => array.indexOf(value) === index
      ),
    ];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = [
      "Location (any)",
      ...allProperties.filter(
        (value, index, array) => array.indexOf(value) === index
      ),
    ];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str: string) => {
      return str.split(" ").includes("(any)");
    };

    const removeCommas = price.replaceAll(",", "");
    const minPrice = parseInt(removeCommas.split(" ")[0]);
    const maxPrice = parseInt(removeCommas.split("-")[1]);

    const newHouses = api.houses.fetchAll().filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(property) && isDefault(country) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
