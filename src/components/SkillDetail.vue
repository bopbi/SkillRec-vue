<template>
  <div class="hello">
    <h1>{{ skill.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'SkillDetail',
  data() {
    return {
      skill: {},
    };
  },
  created() {
    this.$http.get(`api/skills/${this.id}`).then((response) => {
      this.skill = response.data;
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
