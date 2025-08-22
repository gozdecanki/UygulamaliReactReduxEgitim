import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {faker} from '@faker-js/faker'

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags:['User'],// kaydettiğimiz veriyi ön yüzde güncellemiş olacak
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags:()=>{// eklediğimiz veriyi ön yüzde güncellemiş olacak. providesTags iptal ederek yeniden çekme isteği oluşacak
          return [{type:'User'}]
        },
        query: () => {
          return {
            url: '/users',
            method: 'POST',
            body: {
              name: faker.name.fullName(),
            },
          };
        },
      }),
      removeUser: builder.mutation({
         invalidatesTags:()=>{// sildiğimiz veriyi ön yüzde güncellemiş olacak.providesTags iptal ederek yeniden çekme isteği oluşacak
          return [{type:'User'}]
        },
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;
export { usersApi };
