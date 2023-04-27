import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserName = createAsyncThunk(
    'fetchUser',
    async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data[Math.floor(Math.random()*10)].name;
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        name:'Dummy'
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchUserName.pending, (state) => {
        state.name = "...loading Name!"
        }),
        builder.addCase(fetchUserName.fulfilled , (state, action) => {
         state.name = action.payload;
        }),
        builder.addCase(fetchUserName.rejected, (state) => {
            state.name = "Try again !"
        })
    }
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;