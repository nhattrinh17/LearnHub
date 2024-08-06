import { createSlice } from '@reduxjs/toolkit';

export interface DocumentItem {
  id: number;
  name: string;
  author: string;
  description: string;
  image: string;
  stars: number;
  price: number;
  link: string;
}

interface DocumentState {
  document: DocumentItem[];
  page: number;
  limit: number;
  search: string;
  fetchData: boolean;
}

export const documentSlice = createSlice({
  name: 'document',
  initialState: {
    document: [],
    fetchData: true,
    limit: 10,
    page: 1,
    search: '',
  } as DocumentState,
  reducers: {
    addDocument: (
      state,
      action: {
        payload: {
          data: DocumentItem[];
          page: number;
          limit: number;
        };
      },
    ) => {
      state.document = [...state.document, ...action.payload.data];
      state.fetchData = false;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
    updateSearch: (state, action: { payload: string }) => {
      state.search = action.payload;
      state.fetchData = true;
    },
    setLimitOrPage(
      state,
      action: {
        payload: {
          limit: number;
          page: number;
        };
      },
    ) {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
    },
    resetDataDocument(state) {
      state.document = [];
      state.fetchData = true;
      state.limit = 10;
      state.page = 1;
    },
  },
});

export const { addDocument, setLimitOrPage, updateSearch, resetDataDocument } = documentSlice.actions;

export default documentSlice.reducer;
