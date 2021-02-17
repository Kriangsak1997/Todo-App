<template>
 <div id="todo">
  <v-card>
    <v-toolbar
      color="teal lighten-3"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Better-Todo </v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
      <v-btn @click.prevent="logOut"> Log Out </v-btn>
    </v-toolbar>
  </v-card>
  <v-container pa-3
    class="grey lighten-5">
    <v-row no-gutters
        justify="center">
        <v-col md="4">
            <tl-add-task></tl-add-task>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters
        justify="center">
        <v-col md="12">
            <tl-tasks-list></tl-tasks-list>
        </v-col>
    </v-row>
</v-container>
<v-text-field v-model="description"
    label="Add New Task"
    filled
    outlined
    shaped
    dense
    append-icon="mdi-view-grid-plus-outline"
    @click:append="addNewTask"
    @keyup.enter="addNewTask">
  </v-text-field>

    <!-- <v-subheader>Todo</v-subheader>
    <v-simple-table class="grey lighten-5">
        <template v-slot:default>
            <tbody>
                <tr v-for="task in tasks">
                    <td width="1%">
                        <v-checkbox v-model="task.isCompleted"
                            @change="completeTask(task.isCompleted,task)"></v-checkbox>
                    </td>
                    <td width="99%"><span
                            :style=" task.isCompleted ? 'text-decoration:line-through' : ''">{{ task.description }}</span>
                    </td>
                    <td>
                        <v-btn icon
                            color="grey"
                            @click="removeTask(task.id)">
                            <v-icon>mdi-delete-circle-outline</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table> -->
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

</style>
