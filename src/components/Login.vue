<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <form @submit.prevent="doLogin">
        <br />
        <h1 class="title is-3">{{ msg }}</h1>
        <div class="field">
          <label class="label">Name</label>
          <input 
              type="text"
              data-id="user.name" 
              placeholder="Enter your email"
              v-model="credentials.email"
              class="input is-2">
        </div>
        <div class="field">
          <label class="label">Email</label>
          <input 
              type="text"
              data-id="user.email" 
              placeholder="Enter your email"
              v-model="credentials.email"
              class="input is-2">
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input
              type="password"
              placeholder="Enter your password"
              v-model="user.password"
              class="input">
        </div>
        <br />
        <button type="submit"
        class="button is-link">Sign up</button>
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
      user: {
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
