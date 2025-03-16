import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  profession: string;
  birthDate: string;
  gender: string;
  bio: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [
    {
      id: "1",
      firstName: "Muhammadrasul",
      lastName: "Gulomjonov",
      profession: "Frontend Developer",
      birthDate: "09.01.2006",
      gender: "Male",
      bio: "Loves coding",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<User, "id">>) => {
      state.users.push({ id: nanoid(), ...action.payload });
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
