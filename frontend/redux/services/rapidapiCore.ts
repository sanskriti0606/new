"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rapidapiApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com/",

    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "73bc937552msh27eaf79d281b2bbp1e52afjsn9a548c143686"
      ); ///you can  have to change it value if the free suvscription is expired
      headers.set("X-RapidAPI-Host", "spotify23.p.rapidapi.com");
      return headers;
    },
  }),
  refetchOnMountOrArgChange: 60, //minimize the number of api calls
  endpoints: (builder) => ({
    getLatestAlbum: builder.query({
      query: (searchTerm) =>
        `search/?q=${searchTerm}&type=multi&offset=0&limit=10&numberofTopResults=5`,
    }),
    getSearchAlbum: builder.query({
      query: (searchTerm) => `search/?q=${searchTerm}&type=&offset=0&limit=20`,
    }),
    getAlbum: builder.query({ query: (ids) => `albums/?ids=${ids}` }),
  }),
});

export const {
  useGetLatestAlbumQuery,
  useGetSearchAlbumQuery,
  useGetAlbumQuery,
} = rapidapiApi;
