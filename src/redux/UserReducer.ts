import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {fetchInfo} from '../utils/FetchLocalStorage'

const userInfo = fetchInfo()


interface User {
    displayname: string;
    email : string;
    password : string
    
    
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: userInfo,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDetail: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            state.user = user;
            console.log(user);
        },
        removeDetail: (state) => {
            state.user = null;
        },
    },
});

export const { setDetail, removeDetail } = userSlice.actions;
export default userSlice.reducer;
