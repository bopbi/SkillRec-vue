<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{ user.name }}</h1>
        <p class="subtitle is-5">{{ user.email }}</p>
      </div>
    </div>
    <hr />
    <div class="columns">
      <div class="column">
        <h2 class="subtitle is-2">Skills</h2>
      </div>
    </div>
    <div class="columns" v-for="skillRecommender in skillRecommenders" :key="skillRecommender.skill.id">
      <div class="column is-2">
        <h3 v-if=" skillRecommender.recommenders.length > 0" class="subtitle is-3">
          <button class="button is-primary">+</button>
          <router-link :to="{ name: 'SkillDetail', params: { id: skillRecommender.skill.id }}">
             {{ skillRecommender.skill.name }} ({{ skillRecommender.recommenders.length }})
          </router-link> 
        </h3>
        <h3 v-if=" skillRecommender.recommenders.length == 0" class="subtitle is-3">
          <button class="button is-primary">+</button>
          <router-link :to="{ name: 'SkillDetail', params: { id: skillRecommender.skill.id }}">
            {{ skillRecommender.skill.name }}
          </router-link> 
        </h3>
      </div>
      <div class="column">
          <ul class="recommenders-list">
            <li v-for="user in skillRecommender.recommenders" class="recommenders" :key="user.id">
              <p class="subtitle is-4">
              <router-link :to="{ name: 'UserDetail', params: { id: user.id }}">
                {{ user.name }}
              </router-link>
              </p>
            </li>
          </ul>
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
