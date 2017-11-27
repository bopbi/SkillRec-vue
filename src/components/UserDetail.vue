<template>
  <div class="hello">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <h3>Skills</h3>
    <ul class="skills-list">
      <li v-for="skill in skills"
        class="skill" :key="skill.id">
        <router-link :to="{ name: 'SkillDetail', params: { id: skill.id }}">{{ skill.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'UserDetail',
  data() {
    return {
      user: {},
      skills: [],
    };
  },
  methods: {
    getUserDetail() {
      this.$http.get(`api/users/${this.id}`).then((response) => {
        this.user = response.data;
      });
    },
    getSkillForUser() {
      this.$http.get(`api/users/${this.id}/skills`).then((response) => {
        this.skills = response.data;
      });
    },
  },
  created() {
    this.getUserDetail();
    this.getSkillForUser();
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
