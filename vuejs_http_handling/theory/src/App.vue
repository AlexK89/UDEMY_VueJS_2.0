<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Http</h1>
                <div class="form-group">
					<label for="name">User name</label>
					<input type="text" class="form-control" id="name" v-model="user.userName">
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" class="form-control" id="email" v-model="user.userEmail">
				</div>
				<button class="btn btn-primary" @click="submitForm">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					userName: '',
					userEmail: ''
				}
			}
		},
		methods: {
			submitForm() {
				console.log(this.user);
			}
		}
	}
</script>

<style>
</style>
