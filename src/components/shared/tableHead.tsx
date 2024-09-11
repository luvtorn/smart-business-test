import React from "react";
import Input from "../ui/input";
import { usersColumns } from "../../constants/constants";

interface TableHeadProps {
  filters: { [key: string]: string };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHead: React.FC<TableHeadProps> = ({ filters, onChange }) => {
  return (
    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <tr>
        {usersColumns.map((column) => (
          <th
            className="py-3 px-4 text-xs sm:text-sm md:text-base lg:text-lg"
            key={column.id}
          >
            <Input
              placeholder={column.name}
              name={column.name.toLowerCase()}
              value={filters[column.type]}
              onChange={(e) => onChange(e)}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
