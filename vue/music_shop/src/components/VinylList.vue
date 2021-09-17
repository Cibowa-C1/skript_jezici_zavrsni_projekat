<template>
    <table class="table table-dark table-striped">
        <thead style="background: black">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
         <th scope="col">Label</th>
         <th scope="col"></th>
       </tr>
      </thead>

        <tbody>
        <tr v-for="vinyl in vinyls" >         
            <td @click="editVinyl(vinyl)">
              {{ vinyl.title }}
            </td>
          <td @click="editVinyl(vinyl)">
            {{ vinyl.artist }}
          </td>
          <td @click="editVinyl(vinyl)">
            {{ vinyl.label }}
          </td>
          <td>
            <button v-if="admin==true" @click="delete_vinyl(vinyl.id)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
</template>

<script>
    import router from "@/router";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "VinylList",
        computed: {
            ...mapState(['vinyls','admin'])
        },
        data() {
            return {
                fields: [
                    { key: 'title' },
                    { key: 'artist' },
                    { key: 'label' }
                ]
            }
        },
        methods: {
            ...mapActions(['delete_vinyl']),

            editVinyl: function (item, index, event) {
                //if(this.admin == true){
                  router.push({path: `/vinyl/${item.id}`});
                //}

            }
        }
    }
</script>

<style>
    tr:hover td{
        background: aqua;
    }
</style>