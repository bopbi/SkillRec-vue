<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <br />
        <h1 class="title is-3">{{ msg }}</h1>
        <form @submit.prevent="createUser">
        <br />
        <h1 class="title is-3">{{ msg }}</h1>
        <div class="field">
          <label class="label">Email</label>
          <input 
              type="text"
              data-id="login.email" 
              placeholder="Enter your email"
              v-model="credentials.email"
              class="input is-2">
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input
              type="password"
              placeholder="Enter your password"
              v-model="credentials.password"
              class="input">
        </div>
        <br />
        <button type="submit"
        class="button is-link">Login</button>
        <br />
        Don’t have an account? &nbsp;<a href="#">Sign up here.</a>
        </form>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sign up',
  data() {
    return {
      msg: 'User List',
      users: [],
    };
  },
  methods: {
    createUser() {
      const formData = new FormData();
      formData.append('name', this.credentials.name);
      formData.append('email', this.credentials.email);
      formData.append('password', this.credentials.password);
      this.$http.post('api/users', formData).then((response) => {
        doLogin();
      });
    },
    doLogin() {
      // this.$store.commit('setToken', this.credentials.email);
      // this.loggingIn = true;
      const formData = new FormData();
      formData.append('email', this.credentials.email);
      formData.append('password', this.credentials.password);

      this.$http.post('api/login', formData).then((response) => {
        this.$store.commit('setToken', response.data.token);
        this.$router.push({ name: 'Home' });
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
