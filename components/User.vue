<template>
  <v-card width="full" hover :to="{ name: 'users-id', params: { id: user.id } }">
		<v-img :src="user.picture"></v-img>
				
          <div>
            <v-card-title>{{ user.title + ' ' + user.firstName + ' ' + user.lastName }}</v-card-title>
            <v-card-text>
              <p>{{ user.description }}</p>
            </v-card-text>
          </div>
        
	</v-card>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		},
		props: {
			user: {
				type: Object,
				required: true
			}
		},
	}
</script>
<style scoped> 
   
</style>