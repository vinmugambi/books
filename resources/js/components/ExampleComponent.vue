<template>
  <ApolloQuery :query="require('../graphql/queries/Categories.gql')">
    <!-- The result will automatically updated -->
    <template slot-scope="{ result: { data, loading },isLoading }">
      <!-- Some content -->
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <a href="" v-for="category of data.categories" :key="category.id" class="link-margin">
         {{category.id}}. {{ category.name }}
        </a>
      </div>
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

<style>
.link-margin{
  margin-right: 24px;
}
</style>
