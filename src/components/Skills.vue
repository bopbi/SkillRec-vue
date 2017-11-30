<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{ msg }}</h1>
        <ul class="users-list">
          <li v-for="skill in skills"
            class="user" :key="skill.id">
            <router-link :to="{ name: 'SkillDetail', params: { id: skill.id }}">{{ skill.name }}</router-link>
          </li>
        </ul>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      msg: 'Skill List',
      skills: [],
    };
  },
  created() {
    this.$http.get('api/skills').then((response) => {
      this.skills = response.data;
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
