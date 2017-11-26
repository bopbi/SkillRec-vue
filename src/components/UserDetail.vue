<template>
  <div class="hello">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'UserDetail',
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.$http.get(`api/users/${this.id}`).then((response) => {
      this.user = response.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
