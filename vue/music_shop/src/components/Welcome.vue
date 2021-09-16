<template>
  <div>
    <b-jumbotron header="Welcome!" :lead="'Login or register if you don\'t have an account!'">
    </b-jumbotron>
    <b-row class="mt-2">
      <b-col sm="2" offset="2">
        <b-button variant="primary" size="lg" @click="login">Login</b-button>
      </b-col>

      <b-col sm="2" offset="2">
        <b-button variant="primary" size="lg" @click="register">Register</b-button>
      </b-col>
    </b-row>


  </div>
</template>

<script>
import router from "@/router";

export default {
name: "Welcome",
  methods: {
    login: function () {
      router.push('/login');
    },

    register: function () {
      router.push('/register');
    },
  }
}

</script>

<style scoped>

</style>