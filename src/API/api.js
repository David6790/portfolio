import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "db.json",
    }),
  }),
});

export const { useGetProjectsQuery } = api;
export default api;
