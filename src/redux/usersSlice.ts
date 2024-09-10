import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";

interface initialState {
  filters: { [key: string]: string };
  users: User[];
  filteredUsers: User[];
}

const initialState: initialState = {
  filters: { name: "", username: "", email: "", phone: "" },
  users: [],
  filteredUsers: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },

    filterUsers: (state, action) => {
      const { name, value } = action.payload;

      state.filters[name] = value;

      const { name: _name, username, email, phone } = state.filters;
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(_name.toLowerCase()) &&
          user.username.toLowerCase().includes(username.toLowerCase()) &&
          user.email.toLowerCase().includes(email.toLowerCase()) &&
          user.phone.toLowerCase().includes(phone.toLowerCase())
      );
    },
  },
});

export const { setUsers, filterUsers } = usersSlice.actions;
export default usersSlice.reducer;
