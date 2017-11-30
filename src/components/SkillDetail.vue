<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{ skill.name }}</h1>
        <hr />
        <h3>User with {{ skill.name }} skill:</h3>
        <ul class="users-list subtitle is-3">
          <li v-for="user in users"
            class="user subtitle is-4" :key="user.id">
            <router-link :to="{ name: 'UserDetail', params: { id: user.id }}">{{ user.name }}</router-link>
          </li>
        </ul>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'SkillDetail',
  methods: {
    getSkillDetail() {
      this.$http.get(`api/skills/${this.id}`).then((response) => {
        this.skill = response.data;
      });
    },
    getUserForSkill() {
      this.$http.get(`api/skills/${this.id}/users`).then((response) => {
        this.users = response.data;
      });
    },
  },
  data() {
    return {
      skill: {},
      users: [],
    };
  },
  created() {
    this.getSkillDetail();
    this.getUserForSkill();
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
