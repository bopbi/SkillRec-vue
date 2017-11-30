<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
        <router-link to="/" class="navbar-item"> Skill</router-link>
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a class="button" >Log out </a>
                    </p>
                    <p class="control">
                        <a class="button" >Log In</a>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
