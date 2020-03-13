<template>
  <div>
    <!-- categories -->
    <ApolloQuery :query="categoriesQuery">
      <template slot-scope="{ result: { data, loading },isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <a href="#" class="link-margin" @click.prevent="selectCategory('all')">All</a>
          <a href="#" class="link-margin" @click.prevent="selectCategory('featured')">Featured</a>
          <a
            href="#"
            v-for="category of data.categories"
            :key="category.id"
            class="link-margin"
            @click.prevent="selectCategory(category.id)"
          >{{category.id}}. {{ category.name }}</a>
        </div>
      </template>
    </ApolloQuery>
    <!-- All books -->
    <div v-if="selectedCategory === 'all'">
      <ApolloQuery :query="query">
        <template slot-scope="{ result: { data, loading },isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-for="book of data.books" :key="book.id">
              <router-link
                :to="`/books/${book.id}`"
                class="link-margin block"
              >{{book.id}}. {{ book.title }}</router-link>
              <div>{{book.author}}</div>
              <img :src="book.image" alt="cover-image" />
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>
    <!-- Featured books -->
    <div v-else-if="selectedCategory==='featured'">
      <ApolloQuery :query="query">
        <template slot-scope="{ result: { data, loading },isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-for="book of data.featuredBooks" :key="book.id">
              <router-link
                :to="'/books/'+book.id"
                class="link-margin block"
              >{{book.id}}. {{ book.title }}</router-link>
              <div>{{book.author}}</div>
              <img :src="book.image" alt="cover-image" />
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>
    <!-- Books in the selected category -->
    <div>
      <ApolloQuery :query="query" :variables="{id: Number(selectedCategory)}">
        <template slot-scope="{ result: { data, error },isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else-if="error" class="error apollo">An error occurred</div>
          <div v-else-if="data">
            <!-- <div v-for="book of data.category.books" :key="book.id">
              <router-link
                :to="`/books/${book.id}`"
                class="link-margin block"
              >{{book.id}}. {{ book.title }}</router-link>
              <div>{{book.author}}</div>
              <img :src="book.image" alt="cover-image" />
            </div> -->
            <pre>{{data}}</pre>
          </div>
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import categoryQuery from "../graphql/queries/Category.gql";
import categoriesQuery from "../graphql/queries/Categories.gql";

import booksQuery from "../graphql/queries/Books.gql";
import booksFeaturedQuery from "../graphql/queries/BooksFeatured.gql";

export default {
  mounted() {
    //   console.log(this.$apollo.getClient())
  },
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

<style>
.link-margin {
  margin-right: 24px;
}
</style>
