<template>
<div>
  <v-card-title class="text--darken-4 text-h2 ma-5"> My Survey Board</v-card-title>
  <br>
  <v-container>
    <v-row class="justify-center-space-around">
      <v-col cols="3" v-for="(item,index) in surveys" :key="index">
    <v-card shaped elevation="10" ripple >
      <v-card-title>{{item.title}}</v-card-title>
      <v-divider></v-divider>
      <v-card-actions >
        <v-card-subtitle  class="d-inline-block text-truncate" style="max-width: 300px;">{{item.desc}}</v-card-subtitle>
      </v-card-actions>
    </v-card>
      </v-col>
      <v-col cols="3"  >
        <v-card shaped class="justify-center pa-5" elevation="10" ripple @click="createSurvey">
          <v-row><v-card-title style="color: teal">Create new Surveys <v-btn color="teal" icon class="justify-center"> <v-icon>mdi-plus</v-icon></v-btn></v-card-title></v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "survey_board",
  data:()=>({
    surveys:[


    ]
  }),
  async created() {

    try {
      const res =await axios.post(`/getSurveys`)
      // console.log(res.data.data)
      this.surveys= res.data.data

    } catch (e) {
      console.log(e);
    }

  },
methods:{
  createSurvey()
  {
    this.$router.push({ name: "FormGenerator" });
  }
}
}
</script>

<style scoped>

</style>