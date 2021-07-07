import { createSlice } from '@reduxjs/toolkit'

export interface SidebarMenuItem {
    id: string;
    title: string;
    slug: string;
}

export interface SidebarmenuState {
    data: Array<SidebarMenuItem>
}

const initialState: SidebarmenuState = {
    data: [
        { id: 'p1', title: 'Trade', slug: '/' },
        { id: 'p2', title: 'Balances', slug: '/balances' },
        { id: 'p3', title: 'Accounts', slug: '/accounts' },
        { id: 'p4', title: 'Prices', slug: '/prices' }
    ],
}

export const sidebarMenuSlice = createSlice({
    name: 'sidebarMenu',
    initialState,
    reducers: {}
})

export default sidebarMenuSlice.reducer