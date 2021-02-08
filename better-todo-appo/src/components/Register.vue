/* eslint-disable vue/no-parsing-error */
<template>
<div id="app">
  <!-- <v-app> -->
    <v-content>
      <v-container>
        <v-card class="mx-auto my-12 outer-card"
            max-width="374">
         <v-card-title>
           <v-card class="v-header py-2 mx-auto my-n12" max-width="364" raised>
             <v-card-title>
               <v-row justify="center" color="white">
                 <h4>Register</h4>
               </v-row>
             </v-card-title>
             <v-card-actions>
               <v-row justify="center" color="white">
               <v-btn icon color="white">
                 <v-icon>mdi-google-plus</v-icon>
               </v-btn>
               </v-row>
               </v-card-actions>
               </v-card >
         </v-card-title><br/>
         <v-form @submit.prevent="submitRegister">
         <v-card-title>
           <v-card-text class="my-4">
             <v-text-field label="Username"
              prepend-icon="mdi-face"
              color="purple" v-model="username"></v-text-field>
             <v-text-field label="Email"
               prepend-icon="mdi-email"
               color="purple" v-model="email"></v-text-field>
             <v-text-field type="password" label="Password"
               prepend-icon="mdi-lock-outline"
               color="purple" v-model="password"></v-text-field>
            <v-text-field type="password" label="Retype Password"
               prepend-icon="mdi-lock-outline"
               color="purple" v-model="retypedpassword"></v-text-field>
               </v-card-text>
                <!-- need to center this shit -->
            <v-alert v-if="error"
                border="left"
                color="red"
                dense
                center
                elevation="2"
                type="error"
            >{{error}}</v-alert>
            </v-card-title>
           <v-card-actions>
            <v-row justify="center">
            <v-btn normal text color="success" type="submit">               Register
            </v-btn>
              </v-row>
           </v-card-actions>
        </v-form>
        </v-card>
      </v-container>
    </v-content>
  <!-- </v-app> -->
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Register',

  data() {
    return {
      username: '',
      email: '',
      password: '',
      retypedpassword: '',
      error: '',
    };
  },
  methods: {
    submitRegister() {
    //   if (!(this.password === this.retypedpassword)) {
    //     this.error = 'Password unmatched';
    //   } else {

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.username,
            })
            .then(() => {
              this.$router.replace({ name: 'Login' });
            });
        })
        .catch((err) => {
          console.log(err.message);
          this.error = 'Invalid/existing email address otherwise invalid input format';
        });
    },
    // },
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
