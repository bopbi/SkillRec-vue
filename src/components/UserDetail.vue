<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <h1>{{ user.name }}</h1>
        <p>{{ user.email }}</p>
        <hr />
        <h2>Skills</h2>
        <div v-for="skillRecommender in skillRecommenders" class="skills" :key="skillRecommender.skill.id">
          <router-link :to="{ name: 'SkillDetail', params: { id: skillRecommender.skill.id }}">{{ skillRecommender.skill.name }} ({{ skillRecommender.recommenders.length }})</router-link>
          <button>Promote</button>
          <div>
            <ul class="recommenders-list">
              <li v-for="user in skillRecommender.recommenders" class="recommenders" :key="user.id">
                <router-link :to="{ name: 'UserDetail', params: { id: user.id }}">* {{ user.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
    getDetail() {
      this.getUserDetail();
      this.getSkillRecommenderForUser();
    },
  },
  watch: {
    // call again the method if the route changes
    $route: 'getDetail',
  },
  created() {
    this.getDetail();
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
