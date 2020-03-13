<template>
  <div>
    <ApolloQuery
      :query="require('../graphql/queries/Book.gql')"
      :variables="{id: $route.params.id}"
    >
      <template slot-scope="{ result: { data, loading },isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="data">
          <div>{{data.book.title}}</div>
          <div>{{data.book.author}}</div>
          <img :src="data.book.image" :alt="'cover for '+ data.book.title" />
          <div class="mt-4">
            <router-link
              :to="`/books/${data.book.id}/edit`"
              class="bg-green-700 rounded p-2 text-white"
            >Edit book</router-link>
            <a href="#" class="bg-red-700 rounded p-2 text-white">Delete Book</a>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>