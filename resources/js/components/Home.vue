<template>
  <div>
    <!-- hero -->
    <div class="hero bg-gray-100 mb-24">
      <div class="container flex items-center justify-between py-10">
        <div>
          <h1 class="w-3/4 text-3xl mb-4">Book recommendation site built with GraphQL</h1>
          <p
            class="w-3/4 text-xl leading-normal mb-4"
          >Built with Laravel (Lighthouse GraphQL), Vue.js (vue-apollo) and Tailwind css.</p>
          <div class="flex items center">
            <a href class="bg-purple-700 text-white rounded p-2 mr-4">View books</a>
            <a href class="border-purple-700 text-purple-700 rounded p-2">View screencast</a>
          </div>
        </div>
        <div class="hero">
          <img src="/img/hero.svg" alt="hero" />
        </div>
      </div>
    </div>
    <!-- categories -->
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/4 px-4 mb-12">
          <ApolloQuery :query="categoriesQuery">
            <template slot-scope="{ result: { data, loading }, isLoading }">
              <div v-if="isLoading">Loading...</div>
              <ul v-else class="list-reset text-lg">
                <li class="mb-6">
                  <a
                    href="#"
                    class="text-black hover:text-grey-darkest"
                    @click.prevent="selectCategory('all')"
                  >All</a>
                </li>
                <li class="mb-6">
                  <a
                    href="#"
                    class="text-black hover:text-grey-darkest"
                    @click.prevent="selectCategory('featured')"
                  >Featured</a>
                </li>
                <li v-for="category of data.categories" :key="category.id" class="mb-6">
                  <a
                    href="#"
                    class="text-black hover:text-grey-darkest"
                    @click.prevent="selectCategory(category.id)"
                  >{{ category.name }}</a>
                </li>
                <li class="mb-6">
                  <router-link to="/books/add" class="text-black hover:text-grey-darkest">Add a book</router-link>
                </li>
              </ul>
            </template>
          </ApolloQuery>
        </div>
        <div class="w-full lg:w-3/4 px-4 mb-12">
          <div>
            <ApolloQuery :query="query" v-if="selectedCategory === 'all'">
              <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else class="flex flex-wrap">
                  <div v-for="book of data.books" :key="book.id" class="w-full lg:w-1/3 px-4 mb-12">
                    <book-listing :book="book"></book-listing>
                  </div>
                </div>
              </template>
            </ApolloQuery>

            <ApolloQuery
              :query="query"
              :variables="{ featured: true }"
              v-else-if="selectedCategory === 'featured'"
            >
              <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else class="flex flex-wrap">
                  <div
                    v-for="book of data.booksByFeatured"
                    :key="book.id"
                    class="w-full lg:w-1/3 px-4 mb-12"
                  >
                    <book-listing :book="book"></book-listing>
                  </div>
                </div>
              </template>
            </ApolloQuery>

            <ApolloQuery :query="query" :variables="{ id: selectedCategory }" v-else>
              <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else class="flex flex-wrap">
                  <div
                    v-for="book of data.category.books"
                    :key="book.id"
                    class="w-full lg:w-1/3 px-4 mb-12"
                  >
                    <book-listing :book="book"></book-listing>
                  </div>
                </div>
              </template>
            </ApolloQuery>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryQuery from "../graphql/queries/Category.gql";
import categoriesQuery from "../graphql/queries/Categories.gql";

import booksQuery from "../graphql/queries/Books.gql";
import booksFeaturedQuery from "../graphql/queries/BooksFeatured.gql";

import BookListing from "./BookListing"

export default {
  mounted() {
    //   console.log(this.$apollo.getClient())
  },
  components: {BookListing},
  data() {
    return {
      booksQuery,
      categoryQuery,
      categoriesQuery,
      booksFeaturedQuery,
      categories: [],
      selectedCategory: "all",
      query: booksQuery
    };
  },
  methods: {
    selectCategory(category) {
      if (category === "all") {
        this.query = booksQuery;
      } else if (category === "featured") {
        this.query = booksFeaturedQuery;
      } else {
        this.query = categoryQuery;
      }
      this.selectedCategory = category;
    }
  }
};
</script>
