<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>

          <div class="card-body">I'm an example component.</div>
        </div>
      </div>
    </div>
  </div>
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
