import React from "react";
import { User } from "../../types/types";

interface Props {
  filteredUsers: User[];
}

const TableBody: React.FC<Props> = ({ filteredUsers }) => {
  return (
    <tbody>
      {filteredUsers?.map((user) => (
        <tr key={user.id} className="border-t text-center hover:bg-gray-100">
          <td className="py-3 px-4">{user.name}</td>
          <td className="py-3 px-4">{user.username}</td>
          <td className="py-3 px-4">{user.email}</td>
          <td className="py-3 px-4">{user.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
