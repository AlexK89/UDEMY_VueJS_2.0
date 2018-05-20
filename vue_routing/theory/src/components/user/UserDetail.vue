<template>
	<div>
		<h3>Some User Details</h3>
		<p>User id: {{ $route.params.id }}</p>
		<router-link tag="button"
					 :to="link"
					 class="btn btn-danger">Edit
		</router-link>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				link: {
					name: 'userEdit',
					params: {
						id: this.$route.params.id
					},
					query: {
						locale: 'en',
						q: 100
					},
					//to jump directly to element with id
					hash: '#data'
				}
			}
		},
		//pre-build method
		beforeRouteEnter(to, from, next) {
			// let to go or block
			(true) ? next() : next(false);
		}
	}
</script>