import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useGetUsersQuery } from "../../services/users";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TableHead from "./tableHead";
import { useActions } from "../../hooks/useActions";
import TableBody from "./tableBody";

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
    <div className="p-6 bg-gray-700 min-h-screen overflow-x-auto">
      {isLoading ? (
        <p className="text-purple-500 text-3xl font-bold text-center">
          Loading...
        </p>
      ) : (
        <table className="w-1/2 mx-auto table-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <TableHead
            filters={filters}
            onChange={(e) => handleFilterChange(e)}
          />

          <TableBody filteredUsers={filteredUsers} />
        </table>
      )}
    </div>
  );
}

export default Table;
