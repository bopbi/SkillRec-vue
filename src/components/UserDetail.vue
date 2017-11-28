<template>
  <div class="hello">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <hr />
    <h3>Skills</h3>
    <ul class="skills-list">
      <li v-for="skillRecommender in skillRecommenders" class="skills" :key="skillRecommender.skill.id">
        <div>
          <router-link :to="{ name: 'SkillDetail', params: { id: skillRecommender.skill.id }}">{{ skillRecommender.skill.name }}</router-link>
        </div>
        <div>
          <ul class="recommenders-list">
            <li v-for="user in skillRecommender.recommenders" class="recommenders" :key="user.id">
              <router-link :to="{ name: 'UserDetail', params: { id: user.id }}">* {{ user.name }}</router-link>
            </li>
          </ul>
        </div>
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
      skillRecommenders: [],
    };
  },
  methods: {
    getUserDetail() {
      this.$http.get(`api/users/${this.id}`).then((response) => {
        this.user = response.data;
      });
    },
    getSkillRecommenderForUser() {
      this.$http.get(`api/users/${this.id}/recommenders`).then((response) => {
        this.skillRecommenders = response.data;
      });
    },
  },
  created() {
    this.getUserDetail();
    this.getSkillRecommenderForUser();
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
li.recommenders {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
