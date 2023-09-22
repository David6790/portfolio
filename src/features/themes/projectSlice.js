import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, payload) => {
      state.projects = payload.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;

export const works = (state) => state.projects.projects;
