<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <form @submit.prevent="doLogin">
        <h1 class="title is-1">{{ msg }}</h1>
        <div class="form-group">
          <input 
              type="text"
              data-id="login.email" 
              placeholder="Enter your username"
              v-model="credentials.email">
        </div>
        <div class="form-group">
          <input
              type="password"
              placeholder="Enter your password"
              v-model="credentials.password">
        </div>
        <button type="submit"
        class="button">Login</button>
        <br />
        Don’t have an account? &nbsp;<a href="#">Sign up here.</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Please Login',
      credentials: {
        email: '',
        password: '',
      },
      loggingIn: false,
      errors: {},
    };
  },
  methods: {
    doLogin() {
      // this.$store.commit('setToken', this.credentials.email);
      // this.loggingIn = true;
      const formData = new FormData();
      formData.append('email', this.credentials.email);
      formData.append('password', this.credentials.password);

      this.$http.post('api/login', formData).then((response) => {
        this.loggingIn = true;
        this.$store.commit('setToken', response.data.token);
        this.$router.push({ name: 'Home'});
      });
    },
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
