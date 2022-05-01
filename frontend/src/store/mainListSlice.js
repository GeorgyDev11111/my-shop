import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getProduct = createAsyncThunk(
  'mainlist/getProduct',
  async function (_,{rejectWithValue,getState}) {
    const {currentPage,limit} = getState().mainList
    // const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      const respons = await fetch(`http://localhost:4000/auth/api/product/${currentPage}/${limit}`, {
        method: 'GET',
        headers: {
          // 'Authorization': `Bearer ${token}`
        }
      })
      if(!respons.ok){
        throw new Error('error with error')
      }
      const data = await respons.json()
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }

  }
)

const mainListSlice = createSlice({
  name:'mainlist',
  initialState: {
    store: [],
    // nostore: [],
    error: null,
    status: null,
    countPage: 1,
    currentPage: 1,
    limit: 6,
    kastilCount: 0,
    serch: ''
  },
  reducers: {
    setCurrent (state, action) {
      state.currentPage = action.payload
    },
    setStore (state,action) {
      state.store = action.payload
    },
    setSerch (state,actio) {
      state.serch = actio.payload
    },
    setLimite (state,action) {
      state.limit = action.payload
    },
    setkastilCount(state,actio) {
      state.kastilCount = actio.payload
    }
  },
  extraReducers: {
    [getProduct.pending] : (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [getProduct.fulfilled] : (state, action) => {
      state.store =  action.payload.data
      state.countPage =  action.payload.length
      state.status =  'resolved'
    },
    [getProduct.rejected] : (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})


export const {setCurrent,setStore,setLimite,setkastilCount,setSerch} = mainListSlice.actions
export default mainListSlice.reducer