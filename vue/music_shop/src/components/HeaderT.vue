<template>
  <div>



    <b-jumbotron header="CD showcase" :lead="'Currently available: ' + cds.length">
    </b-jumbotron>


  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Header",
  computed: {
    ...mapState(['cds'])
  }
}
</script>

<style scoped>

</style>