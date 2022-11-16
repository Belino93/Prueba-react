import { configureStore } from '@reduxjs/toolkit';
import characterSlice from '../components/CharactersReq/characterSlice';
import userSlice from '../containers/User/userSlice';

export default configureStore({
    reducer: {
        character: characterSlice,
        user: userSlice
    }
})