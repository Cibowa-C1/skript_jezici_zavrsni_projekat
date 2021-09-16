<template>
  <div>
    <b-table
        hover v-if="cds.length"
        sticky-header="800px"
        :items="cds"
        :fields="fields"
        head-variant="light"
        @row-clicked="editCD">
      <template v-if="admin==true" v-slot:cell(delete)="row">
          <b-button variant="danger" @click="delete_cd(row.item.id)">Delete</b-button>
      </template>
    </b-table>
    <h1 v-else>No CDs to show</h1>
  </div>
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
        { key: 'label' }
      ]
    }
  },
  methods: {
    ...mapActions(['delete_cd']),

    editCD: function (item, index, event) {
      if(this.admin == true){
        router.push({path: `/cd/${item.id}`});
      }

    }
  }
}
</script>

<style>
tr:hover td{
  background: goldenrod;
}
</style>