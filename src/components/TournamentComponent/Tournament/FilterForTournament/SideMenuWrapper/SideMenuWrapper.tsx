import FilterDropdown from '@/components/ui/FilterDropdown/FilterDropdown';
import React from 'react';

const filterOptions = {
  teamSize: [
    { id: 1, name: "1v1", products_count: 10 },
    { id: 2, name: "2v2", products_count: 8 },
    { id: 3, name: "3v3", products_count: 6 },
  ],
  categories: [
    { id: 1, name: "Ray-Ban", products_count: 24 },
    { id: 2, name: "Oakley", products_count: 15 },
    { id: 3, name: "Gucci", products_count: 18 },
  ],
  skillLevel: [
    { id: 1, name: "Beginner", products_count: 30 },
    { id: 2, name: "Intermediate", products_count: 20 },
    { id: 3, name: "Advanced", products_count: 10 },
  ],
  regions: [
    { id: 1, name: "NA", products_count: 25 },
    { id: 2, name: "EU", products_count: 15 },
    { id: 3, name: "APAC", products_count: 8 },
  ],
};

const SideMenuWrapper = () => {
  return (
    <div>
      <FilterDropdown title="Team Size" items={filterOptions.teamSize} />
      <FilterDropdown title="Categories" items={filterOptions.categories} />
      <FilterDropdown title="Skill Level" items={filterOptions.skillLevel} />
      <FilterDropdown title="Regions" items={filterOptions.regions} />
    </div>
  );
};

export default SideMenuWrapper;
