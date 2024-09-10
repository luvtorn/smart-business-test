import React from "react";
import Input from "../ui/input";

const usersColumns = [
  { id: 0, name: "Name", type: "name" },
  { id: 1, name: "Username", type: "username" },
  { id: 2, name: "Email", type: "email" },
  { id: 3, name: "Phone", type: "phone" },
];

interface TableHeadProps {
  filters: { [key: string]: string };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHead: React.FC<TableHeadProps> = ({ filters, onChange }) => {
  return (
    <thead className="bg-black/50 text-white">
      <tr>
        {usersColumns.map((column) => (
          <th className="py-3 px-4" key={column.id}>
            <Input
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
