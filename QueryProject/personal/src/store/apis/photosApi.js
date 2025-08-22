import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {faker} from '@faker-js/faker'

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    fetchFn: async (...args) => {// 1 sn arayla istek atmasını sağlıyoruz
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
       providesTags:(result,error,album) =>{
        const tags = result.map((photo)=>{
          return {type:'Photo', id:photo.id}
        });
        tags.push({type:'AlbumPhoto', id:album.id});
        return tags;
       },// kaydettiğimiz veriyi ön yüzde güncellemiş olacak
        query: (album) => {
          return {
            url: '/photos',
            method: 'GET',
            params: {
                albumId: album.id
            }
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags:(result, error, album)=>{// eklediğimiz veriyi ön yüzde güncellemiş olacak. providesTags iptal ederek yeniden çekme isteği oluşacak
           
          return [{type:'AlbumPhoto',id:album.id}]
        },
        query: (album) => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
                albumId: album.id,
                url: faker.image.url({ width: 150 , height: 150})
            },
          };
        },
      }),
      removePhoto: builder.mutation({
         invalidatesTags:(result,error,photo)=>{// sildiğimiz veriyi ön yüzde güncellemiş olacak.providesTags iptal ederek yeniden çekme isteği oluşacak
          return [{type:'Photo', id: photo.id}]
        },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };
