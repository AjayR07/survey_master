<template>
  <div >
<v-container fluid class="pa-0">
  <v-card>
    <v-app-bar  absolute color="deep-purple accent-4">
      <template v-slot:img="{ props }"><v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title><v-img :src="require('@/images/logo.png')" width="250" height="50"></v-img></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary id="drawer">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <router-link to="/Home"  class="text-decoration-none">   <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item></router-link>

          <router-link to="/survey_board"   class="text-decoration-none"> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Survey Board</v-list-item-title>
          </v-list-item></router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
<br><br>
        <v-sheet id="sheet" height="570px">
          <v-container class="pt-md-16">
            <v-row  class="justify-center align-center">
              <v-col cols="6"  class="text-center">
                <div class="mt-10"></div>
                <h1 class="display-1 font-weight-medium mb-4">
                  Survey Master
                </h1>
                <h4 class="subheading">
                  Create and share your forms!
                </h4>
                <br>
                <v-btn ripple rounded elevation="5" dark  @click="createSurvey">Explore</v-btn>
              </v-col>
              <v-col cols="6">
                <v-spacer></v-spacer>
                <v-img :src="require('../images/survey.png')"  ></v-img>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>



        <v-footer dark padless>
          <v-card class="flex" flat tile>
            <v-card-title class="teal">
              <strong class="subheading">Get connected with us on social networks!</strong>

              <v-spacer></v-spacer>

              <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
              {{ new Date().getFullYear() }} — <strong>Survey Master</strong>
            </v-card-text>
          </v-card>
        </v-footer>
  </v-card>
</v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {

  },
  components: {

  },
methods:
{
  createSurvey()
  {
    this.$router.push({ name: "survey_board" });
  }
},
  data: ()=>({
    drawer: false,

    group: null,
    collapseOnScroll: true,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  })
}
</script>

<style>
#sheet,#drawer
{

  background: #c31432;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
