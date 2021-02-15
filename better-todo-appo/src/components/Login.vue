/* eslint-disable vue/no-parsing-error */
<template>
<div id="appo">
  <!-- <v-app> -->
    <!-- <v-content> -->
      <v-container>
        <v-card class="mx-auto my-12 outer-card"
            max-width="374">
         <v-card-title>
           <v-card class="v-header py-2 mx-auto my-n12" max-width="364" raised>
             <v-card-title>
               <v-row justify="center" color="white">
                 <h4>Welcome to Better-Todo</h4>
               </v-row>
             </v-card-title>
             <v-card-actions >
               <v-row justify="center" color="white">
               <v-btn @click="googleLogin" icon color="white">
                 <v-icon>mdi-google-plus</v-icon>
               </v-btn>
               </v-row>
               </v-card-actions>
               </v-card >
         </v-card-title><br/>
         <v-form @submit.prevent="goLogin">
         <v-card-title>
           <v-card-text class="my-4">
             <v-text-field label="Email Address"
              prepend-icon="mdi-face"
              color="purple" v-model="email"></v-text-field>
             <v-text-field type= "password" label="Password"
               prepend-icon="mdi-lock-outline"
               color="purple" v-model="password"></v-text-field>
               </v-card-text>
            </v-card-title>
           <v-card-actions>
            <v-row justify="center">
              <v-alert v-if="error"
                border="left"
                color="red"
                dense
                center
                elevation="2"
                type="error"
            >{{error}}</v-alert>
            <v-btn to="/Register" normal text color="success">               REGISTER
            </v-btn>
            <v-btn type="submit" normal text color="success">               Login
            </v-btn>
              </v-row>
           </v-card-actions>
          </v-form>
        </v-card>
      </v-container>
    <!-- </v-content> -->
  <!-- </v-app> -->
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    goLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          this.$router.replace({ name: 'Todo' });
        })
        .catch(() => {
          this.error = 'Invalid password or email address';
        });
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // eslint-disable-next-line no-unused-vars
      firebase.auth().signInWithPopup(provider).then((data) => {
        this.$store.dispatch('fetchUser', data);
        this.$router.replace({ name: 'Todo' });
      }).catch((err) => {
        alert(`Error. ${err.message}`);
      });
    },
  },

};
</script>

<style scoped>
.v-header{
  background-image:linear-gradient(60deg,#66bb6a,#388e3c);
  text-align: center;
  width: 100%;
  margin-top: -40px;
}
h4{
  font-family: "Times New Roman", Times, serif;
  color: white;
}
.outer-card{
  border-radius: 8px !important;
}
.v-input__icon--prepend .v-icon {
    color: black;
}
</style>
