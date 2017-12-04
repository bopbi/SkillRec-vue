<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
        <div class="navbar-item">
        <router-link :to="{ name: 'Home'}" class="title is-3">Skill Recommender</router-link>
        </div>
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control" v-if=" this.$store.getters.token != ''">
                        <a class="button" @click="logout">Log out </a>
                    </p>
                    <p class="control" v-if=" this.$store.getters.token == ''">
                        <router-link :to="{ name: 'Login'}" class="button">Login</router-link>
                    </p>
                    <p class="control" v-if=" this.$store.getters.token == ''">
                        <router-link :to="{ name: 'Signup'}" class="button">Sign Up</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'app-nav',
  data() {
    return {
      token: this.$store.getters.token,
    };
  },
  methods: {
    logout() {
      this.$store.commit('setToken', '');
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
