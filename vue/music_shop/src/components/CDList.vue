<template>
    <table class="table table-dark table-striped">
        <thead style="background: black">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
         <th scope="col">Rating /100</th>
         <th scope="col"></th>
       </tr>
      </thead>

        <tbody>
        <tr v-for="cd in cds" >         
            <td @click="editCD(cd)">
              {{ cd.title }}
            </td>
          <td @click="editCD(cd)">
            {{ cd.artist }}
          </td>
          <td @click="editCD(cd)">
            {{ cd.rating }}
          </td>
          <td>
            <button v-if="admin==true" @click="delete_cd(cd.id)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
</template>

<script>
import router from "@/router";
import { mapState, mapActions } from 'vuex';

export default {
  name: "CDList",
  computed: {
    ...mapState(['cds','admin'])
  },
  data() {
    return {
      fields: [
        { key: 'title' },
        { key: 'artist' },
        { key: 'rating' }
      ]
    }
  },
  methods: {
    ...mapActions(['delete_cd']),

    editCD: function (item) {
      //if(this.admin == true){
          router.push({path: `/cd/${item.id}`});
      //}
    
    }
  }
}
</script>

<style>
tr:hover td{
  background: goldenrod;
}
</style>