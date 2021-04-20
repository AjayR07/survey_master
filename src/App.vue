
<template>
<v-app>
      <v-container fluid class="pa-0">
      <router-view></router-view>
      </v-container>
</v-app>
</template>


<script>
export default {

    components: {
    },
    data () {
        return {
          drawer: false,

          group: null,
          collapseOnScroll: true,
        }
    },
    methods: {
      closeWin(){
        console.log('Inside Close Win');
        window.close();
        // window.open('location', '_self', '');
        // window.close();
      }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

/* Refers the whole setup */
::-webkit-scrollbar
{
  width: 10px;
  background-color: #F5F5F5;
}

/* Refers tracking path */
::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
}

/* Refers Draggable Bar */
::-webkit-scrollbar-thumb
{
  background-color: #555555;
  border: 2px solid #555555;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #434A54;
}
</style>
