<template>
  <div>
    <h1 class="display-2 ma-4 d-flex justify-center">All Users</h1>
    <v-row>
      <v-col v-for="user in users" :key="user.id" sm="12" md="6" lg="4">        
          <User :user="user" class="ma-2" />        
      </v-col>
    </v-row>
    <Paginate :meta="meta" v-on:switched="getUsers"/>
  </div>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex'
  export default {
    data () {
      return { 
        users: [],
      }
    },
    computed: {
        ...mapState(['meta']),
        page(){
          if( this.$route.query.page ){
            return this.$route.query.page
          }else{
            return 0
          }
        }
    },
    methods: {
      async getUsers ( page = this.page ) {
        let users = await this.$axios.get(`user`, { 
          params: {
              page
            }
           })
        this.users = users.data.data 
        if( page != 0 ){
          this.$store.dispatch('setUsers', users.data.data)
        }
        this.$store.dispatch('setMeta', this.page)
      }
    },
    mounted(){
      this.getUsers()
    }
  }
</script>
