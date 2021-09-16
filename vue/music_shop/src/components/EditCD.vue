<template>
  <b-container fluid>
    <b-form>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <b-input v-model="newTitle" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Title"></b-input>
        </b-col>

        <b-col sm="2" offset="2">
          <b-input v-model="newArtist" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Artist"></b-input>
        </b-col>
      </b-row>

      <b-row class = "mt-2">
        <b-col sm="2" offset="2">
          <b-input v-model="newLabel" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Label"></b-input>
        </b-col>
      </b-row>

      <b-row class = "mt-2">
        <b-col sm="1">
          <b-button variant="primary" size="lg" @click="addNew">Save</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: "EditCD",
  props: {
    title: {
      type: String,
      default: ''
    },
    artist: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newTitle: '',
      newArtist: '',
      newLabel: ''
    }
  },
  mounted: function () {
    this.newTitle = this.title;
    this.newArtist = this.artist;
    this.newLabel = this.label;
  },
  methods: {
    ...mapActions(['new_cd', 'change_cd']),

    addNew: function() {
      const Joi = require('joi');

      const sema = Joi.object().keys({
        title: Joi.string().trim().required(),
        artist: Joi.string().trim().required(),
        label: Joi.string().trim().required()
      });

      const link = Joi.object().keys({
        id: Joi.number().min(1).max(50).required()
      });
      const cd = JSON.stringify({title: this.newTitle, artist: this.newArtist, label: this.newLabel});
      let { error } = Joi.validate(cd, sema);

      if(error){
        alert(error.details[0].message);
        return;
      }

      if (!this.$route.params.id)
        this.new_cd(cd);
      else
        this.change_cd({id: this.$route.params.id, ceedee: cd});

      this.newTitle = '';
      this.newArtist = '';
      this.newLabel =  '';
    }
  }
}
</script>

<style scoped>

</style>