<template>
 <div id="todo">
    <h1>Todo-doo-dos</h1>
    <v-btn @click.prevent="logOut"> Log Out </v-btn>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';

export default {
  name: 'Todo',
  computed: {
    // map this.user to this.$store.getters.user
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Login',
          });
        });
    },
  },
};
</script>
<style scoped>
/* this is just to see how stupid and sleepy I can be */
</style>
