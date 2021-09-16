<template>
  <div id="register">
    <h1> Registration </h1>
    <input type="text" name="username" v-model="username" placeholder="Username" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button type="button"  @click="addNew">Register</button>
  </div>
</template>

<script>
const  Joi = require('joi');
import {mapActions} from "vuex";
const userSema = Joi.object().keys({
  username : Joi.string().min(5).max(40).required(),
  password : Joi.string().min(5).max(15).required()
})
export default {
  name: 'Register',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(['newUser']),
    addNew: function() {
      const msg = JSON.stringify({username: this.username, password: this.password});
      const {error, value} = userSema.validate({username: this.username, password: this.password});
      if(error){
        console.log(error);
        alert(error);
      }else{
        this.newUser(msg);
      }
    }
  }
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>