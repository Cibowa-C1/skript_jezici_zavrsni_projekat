<template>
  <div class="home">
    <HeaderT/>
    <b-container>
      <b-row>
        <b-col cm="6" >
          <EditCD/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EditCD from "@/components/EditCD";
import HeaderT from "@/components/HeaderT";

export default {
  name: 'NewCD',
  components: {
    HeaderT,
    EditCD
  }
}
</script>

<style scoped>

</style>