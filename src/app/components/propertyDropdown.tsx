import React, { useState, useContext } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../context/houseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <AiOutlineHome className="dropdown-icon-primary leading-tight" />
        <div>
          <div className="text-[15px] font-medium">{property}</div>
          <div className="text-[13px]">Select building type </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu ">
        {properties.map((property: string, index: number) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
