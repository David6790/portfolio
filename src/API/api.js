import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "db.json",
    }),
    // Dans le cas d'une api relle. Ma base de données est un fichier db.json statique, ce qui signifie que je ne peux pas interroger directement un projet spécifique par son ID comme je le ferrais avec une API REST typique.
    getProjectById: builder.query({
      query: (id) => `db.json/projects/${id}`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectByIdQuery } = api;
export default api;
