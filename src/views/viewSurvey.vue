<template>
  <div>
    <v-container fluid class="pa-10">
      <v-card width="60%" class="mx-auto pa-10"  elevation="10" outlined id="cd" v-if="!sts">
        <v-app-bar   height="130" elevation="10">
          <template v-slot:img="{ props }"><v-img v-bind="props" src="" ></v-img>
          </template>
          <v-toolbar-title><v-img :src="require('@/images/logo.png')" width="250" height="60"></v-img></v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </v-app-bar>
        <br>
        <br>
        <v-card    elevation="10" class="pa-5">
          <v-card-title>{{title}}</v-card-title>
          <v-card-subtitle>{{desc}}</v-card-subtitle>
        </v-card>
        <div v-for="(item,i) in qa" :key="i">
          <br><br>
          <v-card shaped elevation="10" class="pa-5">

            {{ item.question }}

            <div v-if="item.type=='Radio Option'">
              <v-card-subtitle> Options </v-card-subtitle>

              <v-radio-group v-model="ans[item.id]">
                <v-row class="ml-5" v-for="(r,ind) in item.option" :key="ind">
                      <v-radio :value="item.option[ind]" :label="item.option[ind]"></v-radio>
                  <br>
                </v-row>
              </v-radio-group>
            </div>
            <div v-else>
              <br>
              <v-text-field  filled v-model="ans[item.id]"></v-text-field>
            </div>
            <br>
          </v-card>
        </div>
        <br>
        <v-card-actions class="justify-center">
          <v-btn class="justify-center" elevation="10" ripple color="primary" @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
      <v-card width="60%" class="mx-auto pa-10"  elevation="10" v-if="sts" outlined id="cd2">
        <div class="justify-center">
          <v-row>
            <v-img src="@/images/tq.png" ></v-img>
          </v-row>
          <v-row class="text-h5 justify-center">Your Response Saved Successfully!</v-row>
        </div>
        <br>
        <v-divider></v-divider>
        <router-link to="/Home"   class="text-decoration-none"> <v-card-actions class="justify-center"> <v-btn elevation="10" id="bt"  ripple>Explore More !</v-btn></v-card-actions></router-link>
      </v-card>
    </v-container>

    <div style="height:100%" v-show="loading">
      <v-overlay :value="true" opacity="0.6">

        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
      </v-overlay>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "viewSurvey",
  data: () => ({
    loading:false,
    formID:"",
    title:"",
    desc:"",

    sts:false,
    qa:[],
    ans:{

    }
  }),
  async created() {
    this.formID=this.$route.params.id
    try {
      const res =await axios.post(`/getQuestions`,{"ID":this.formID})
      var result= res.data.data
      this.title=result.title
      this.desc=result.description
      this.qa=result.qa

    } catch (e) {
      console.log(e);
    }

  },
  methods:{

    async submit ()
    {

      const res =await axios.post(`/submitAnswers`,{"survey_id":this.formID,"Ans":this.ans})
      console.log(res.data.data)
      if(res.data.data)
      {
        this.sts=true
      }

      // submitAnswers
    }
  }
}
</script>
<style scoped>
#cd,#cd2,#bt
{
  background: #ff6e7f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #bfe9ff, #ff6e7f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #bfe9ff, #ff6e7f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>