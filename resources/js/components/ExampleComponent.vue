<template>
  <ApolloQuery :query="require('../graphql/queries/Categories.gql')">
    <!-- The result will automatically updated -->
    <template slot-scope="{ result: { data, loading } }">
      <!-- Some content -->
      <div v-if="loading">Loading...</div>
      <ul v-else>
        <li v-for="category of data.categories" :key="category.id" class="">
          {{ category.name }}
        </li>
      </ul>
    </template>
  </ApolloQuery>
</template>

<script>
import gql from "graphql-tag";
export default {
  mounted() {
    //   console.log(this.$apollo.getClient())
  },
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
      {
        categories {
          id
          name
        }
      }
    `
  }
};
</script>
