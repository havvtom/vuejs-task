<template>
	<div>
		<h1 class="display-2 ma-4 d-flex justify-center">{{ user.title + ' ' + user.firstName + ' ' + user.lastName }}</h1>		
		<User :user="user"/>
	</div>
</template>
<script type="text/javascript">
	import { mapState } from 'vuex'
	export default{
		computed: {
			...mapState(['users']),
			user () {
				return this.users.find( v => v.id == this.$route.params.id )
			}
		}

	}
</script>