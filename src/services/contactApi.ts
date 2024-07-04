import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TContact } from "../modules/contacts.module";

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        contacts: builder.query<TContact[], void>({
            query: () => "/users",
        }),
        contact: builder.query<TContact, string>({
            query: (id) => `/users/${id}`
        })
    }),
});

export const { useContactsQuery, useContactQuery } = contactsApi;


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { TContact } from "../modules/contacts.module";

// const contactsApi = createApi({
//     reducerPath: 'contactsApi', // Add a unique reducer path
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
//     endpoints: (builder) => ({
//         contacts: builder.query<TContact[], void>({
//             query: () => "/users",
//         }),
//     }),
// });

// export const { useContactsQuery } = contactsApi; // Updated the hook name to match the endpoint
// export default contactsApi.reducer; // Export the reducer to add it to the store
