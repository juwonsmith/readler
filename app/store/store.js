import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  authIsReady: false,
  Logout: () => {
    set((state) => ({
      ...state.user,
      user: null,
    }));
  },
  login: (usercred) => {
    set((state) => ({ ...state.user, user: usercred }));
  },
  authIsReadyfunc: (usercred) => {
    set((state) => ({
      ...state.user,
      user: usercred,
      authIsReady: true,
    }));
  },
}));

const useFireStores = create((set) => ({
  document: null,
  isPending: false,
  error: null,
  success: null,
  isPendingdispatch: () => {
    set(() => ({
      isPending: true,
      document: null,
      success: false,
      error: null,
    }));
  },
  AddedDoc: (payload) => {
    set(() => ({
      isPending: false,
      document: payload,
      success: true,
      error: null,
    }));
  },
  reset: () => {
    set(() => ({
      isPending: false,
      document: null,
      success: null,
      error: null,
    }));
  },
  DeletedDoc: () => {
    set(() => ({
      isPending: false,
      document: null,
      success: true,
      error: null,
    }));
  },
  Error: (payload) => {
    set(() => ({
      isPending: false,
      document: null,
      success: false,
      error: payload,
    }));
  },
  updatedDoc: () => {
    set(() => ({
      isPending: false,
      document: null,
      success: true,
      error: null,
    }));
  },
}));

const useModal = create((set) => ({
  showModal: null,
  isChecked: null,
  bookid: null,
  templesson: [],

  tempprop: null,
  setModalopen: () => {
    set((state) => ({
      ...state,
      showModal: true,
    }));
  },
  setModalClose: () => {
    set((state) => ({
      ...state,
      showModal: false,
    }));
  },
  setisChecked: (payload) => {
    set((state) => ({
      ...state,
      isChecked: payload,
    }));
  },
  setbookid: (payload) => {
    set((state) => ({
      ...state,
      bookid: payload,
    }));
  },
  settemplesson: (payload) => {
    set((state) => ({
      ...state,
      templesson: [...state.templesson, payload],
    }));
  },

  settempprop: (payload) => {
    set((state) => ({
      ...state,
      tempprop: payload,
    }));
  },
}));

export { useFireStores, useModal };
export default useAuthStore;
