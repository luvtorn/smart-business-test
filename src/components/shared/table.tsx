import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useGetUsersQuery } from "../../services/users";
import { useDispatch, useSelector } from "react-redux";
import { filterUsers, setUsers } from "../../redux/usersSlice";
import { RootState } from "../../redux/store";
import TableHead from "./tableHead";
import { useActions } from "../../hooks/useActions";

const usersColumns = [
  { id: 0, name: "Name", type: "name" },
  { id: 1, name: "Username", type: "username" },
  { id: 2, name: "Email", type: "email" },
  { id: 3, name: "Phone", type: "phone" },
];

function Table() {
  const { data: users, isLoading } = useGetUsersQuery();

  const { setUsers, filterUsers } = useActions();

  useEffect(() => {
    if (users) setUsers(users);
  }, [users]);

  const filters = useSelector((state: RootState) => state.users.filters);
  const filteredUsers = useSelector(
    (state: RootState) => state.users.filteredUsers
  );

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    filterUsers({ name, value });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {isLoading ? (
        <p className="text-blue-500 text-xl text-center">Loading...</p>
      ) : (
        <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md mt-4">
          <TableHead
            filters={filters}
            onChange={(e) => handleFilterChange(e)}
          />

          <tbody>
            {filteredUsers?.map((user) => (
              <tr
                key={user.id}
                className="border-t text-center hover:bg-gray-100"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
