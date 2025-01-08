/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { Accordion, AccordionItem } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

interface Item {
  id: number;
  name: string;
  count?: number;
}

interface FilterDropdownProps {
  items: Item[];
  title: string;
  isSearchable?: boolean;
  onSelectionChange?: (items: number[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ items, title, isSearchable = true, onSelectionChange }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { register, watch } = useForm();
  const searchQuery = watch("search");

  const filteredItems = items.filter((item) => 
    item.name.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  useEffect(() => {
    const selectedValues = searchParams.getAll(title.toLowerCase()) as string[];
    if (selectedValues) {
      setSelectedItems(selectedValues.map((value) => parseInt(value, 10)));
    }
  }, [searchParams, title]);

  const handleCheckboxChange = (key: number) => {
    const isSelected = selectedItems.includes(key);
    const updatedSelections = isSelected
      ? selectedItems.filter((item) => item !== key)
      : [...selectedItems, key];

    const newParams = new URLSearchParams(searchParams);
    newParams.delete(title.toLowerCase());
    updatedSelections.forEach((item) => newParams.append(title.toLowerCase(), item.toString()));

    window.history.replaceState({}, "", `${pathname}?${newParams.toString()}`);
    setSelectedItems(updatedSelections);
  };

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedItems);
    }
  }, [selectedItems, onSelectionChange]);

  return (
    <div className="w-full rounded-sm">
      <div className="border-b-[1px]">
        <Accordion defaultExpandedKeys={'1'}>
          <AccordionItem
            key="1"
            aria-label={title}
            indicator={<FaChevronDown />}
         
            title={
              <p className={`ps-2 font-inter text-base font-medium leading-normal ${selectedItems.length > 0 ? "text-primary" : "text-white"}`}>
                {title}
              </p>
            }
          >
            <div>
              {isSearchable && (
                <input
                  type="text"
                  placeholder="Search..."
                  {...register("search")}
                  className="w-full rounded-sm border text-white border-[#00000040] bg-slate-800 p-2 mb-2"
                  aria-label={`Search in ${title}`}
                />
              )}

              <div className="max-h-[308px] overflow-hidden overflow-y-auto sidebar-scroll-control">
                {filteredItems.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center cursor-pointer gap-3 text-white font-inter text-sm font-normal leading-normal w-fit h-min ms-1 mb-3"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(item.id)}
                        className={`rounded h-4 w-4 ${selectedItems.includes(item.id) ? "bg-primary-light " : "bg-white"} text-white border border-primary-light appearance-none`}
                        checked={selectedItems.includes(item.id)}
                      />
                      {selectedItems.includes(item.id) && <BsCheck size={16} className="absolute top-0 text-white" />}
                    </div>
                    {item.name} {item.count ? <span>({item.count})</span> : null}
                  </label>
                ))}
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterDropdown;
