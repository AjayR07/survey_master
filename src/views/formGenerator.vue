<template>
  <div>
    <v-container fluid class="pa-10">
        <v-card width="50%" class="mx-auto pa-10" rounded  elevation="10" outlined id="cd">
          <v-app-bar   height="130" elevation="10">
            <template v-slot:img="{ props }"><v-img v-bind="props" src="" ></v-img>
            </template>
            <v-toolbar-title><v-img :src="require('@/images/logo.png')" width="250" height="60"></v-img></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon color="primary"><v-icon>mdi-share</v-icon></v-btn>
<!--            <v-btn icon color="purple"><v-icon>mdi-settings</v-icon></v-btn>-->
            <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
          </v-app-bar>
          <br>
          <br>
          <v-card    elevation="10" class="pa-5">
            <v-text-field label="Survey Title" filled v-model="title"></v-text-field>
            <br>
            <v-textarea filled name="input-7-4" label="Survey Description" v-model="desc"></v-textarea>
          </v-card>
          <div v-for="(item,i) in qa" :key="i">
            <br><br>
            <v-card shaped elevation="10" class="pa-5">

             <v-row class="justify-md-space-between">
              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Question " filled v-model="item.question"></v-text-field>
              </v-col>
               <v-col cols="12" sm="12" md="6">
                 <v-combobox clearable filled persistent-hint label="Type" :items="types" v-model="item.type" @click="addRadio(item.option)"></v-combobox>
               </v-col>
              </v-row>
              <div v-if="item.type=='Radio Option'">
                <v-card-subtitle> Options </v-card-subtitle>
              <br>
                <v-radio-group v-model="item.ans">
                  <v-row class="ml-5" v-for="(r,ind) in item.option" :key="ind">
                    <v-col cols="8">
                      <v-row>
                      <v-radio></v-radio><v-text-field label="option" v-model="item.option[ind]" filled></v-text-field>
                      </v-row>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                      <v-btn icon color="primary" ripple @click="addRadio(item.option)" ><v-icon>mdi-plus</v-icon></v-btn>
                    </v-col>
                  </v-row>
                </v-radio-group>
</div>

              <br>

            </v-card>
          </div>

          <br>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn color="pink" dark bottom right fab @click="AddQuestion"><v-icon>mdi-plus</v-icon></v-btn>
          </v-row>
          <br>
          <v-card-actions class="justify-center">
            <v-btn class="justify-center" elevation="10" ripple color="primary" @click="createSurvey">Finalize</v-btn>
          </v-card-actions>


        </v-card>




    </v-container>
    <div style="height:100%" v-show="loading">
      <v-overlay :value="true" opacity="0.6">
        <br>
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
      </v-overlay>
    </div>
    <v-dialog transition="dialog-top-transition" v-model="successMod" persistent max-width="600">

        <v-card>
          <v-toolbar id="mod" dark>Survey Created Successfully!</v-toolbar>
          <v-card-text class="text-center">
            <div class="text-h4 pa-12">Share the link below <v-icon color="primary">mdi-share</v-icon></div>

           <div class="text-h6 pa-4"><a :href="sharablelink"  target="_blank" >Click to Share</a></div>

          </v-card-text>
          <v-card-actions class="justify-end">
            <router-link to="/survey_board"><v-btn text @click="successMod = false">Close</v-btn></router-link>
          </v-card-actions>
        </v-card>

    </v-dialog>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "FormGenerator",
  data: () => ({
    title:"",
    successMod:false,
    desc:"",
    qa:[],
    types:['Short Text','Radio Option'],
    loading: false,
    sharablelink:"http://localhost:8080/survey_master/viewSurvey/"
  }),
  methods:{
    AddQuestion()
    {
      var map={
        id:this.qa.length+1,
        question:"",
        type:"",
        option:[]
      }
      this.qa.push(map);
      console.log(this.qa);
    },
    addRadio(opt)
    {
        opt.push("")
    },
    createSurvey() {

      var payload={
        surveyID:new Date().getTime(),
        title:this.title,
        desc:this.desc,
        qa:this.qa,
        createSurvey:true

      }
      console.log(payload);

this.sharablelink+=payload.surveyID;
      axios.post('/createSurvey', payload)
          .then(function (response) {
            console.log(response)

          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {



          });
      this.successMod=true;
    }
  }
}
</script>

<style scoped>
#cd,#mod
{
  background: #ff6e7f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #bfe9ff, #ff6e7f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #bfe9ff, #ff6e7f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
