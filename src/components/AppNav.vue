<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
        <div class="navbar-item">
        <router-link :to="{ name: 'Home'}">Home</router-link>
        </div>
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control" v-if=" this.$store.getters.token != 'xyz'">
                        <a class="button" >Log out </a>
                    </p>
                    <p class="control" v-if=" this.$store.getters.token == 'xyz'">
                        <router-link :to="{ name: 'Login'}" class="button">Login</router-link>
                    </p>
                    <p class="control" v-if=" this.$store.getters.token == 'xyz'">
                        <a class="button" >Sign Up</a>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
