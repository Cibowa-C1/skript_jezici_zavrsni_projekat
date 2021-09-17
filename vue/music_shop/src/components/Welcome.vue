<template>
  <div>
    <b-jumbotron header="Welcome!" :lead="'Login or register if you don\'t have an account!'">
    </b-jumbotron>
    <b-row class="mt-2">
      <b-col sm="1" offset="5">
        <b-button variant="secondary" size="lg" @click="login">Login</b-button>
      </b-col>

      <b-col sm="1" offset="0">
        <b-button variant="secondary" size="lg" @click="register">Register</b-button>
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