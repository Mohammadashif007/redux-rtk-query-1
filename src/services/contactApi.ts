import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TContact } from "../modules/contacts.module";

export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Contact"],
    endpoints: (builder) => ({
        contacts: builder.query<TContact[], void>({
            query: () => "/users",
            providesTags: ["Contact"],
        }),
        contact: builder.query<TContact, number>({
            query: (id) => `/users/${id}`,
            providesTags: ["Contact"],
        }),
        addContact: builder.mutation<void, TContact>({
            query: (contact) => ({
                url: "/users",
                method: "POST",
                body: contact,
            }),
            invalidatesTags: ["Contact"],
        }),
        updateContact: builder.mutation<void, TContact>({
            query: ({ id, ...rest }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ["Contact"],
        }),
        deleteContact: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contact"],
        }),
    }),
});

export const {
    useContactsQuery,
    useContactQuery,
    useAddContactMutation,
    useUpdateContactMutation,
    useDeleteContactMutation,
} = contactApi;
