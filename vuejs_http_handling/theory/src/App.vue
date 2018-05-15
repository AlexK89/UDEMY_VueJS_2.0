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
				<hr>
				<button class="btn btn-primary" @click="fetchData">Get data</button>
				<br><br>
				<ul class="list-group">
					<li class="list-group-item" v-for="user in users">Name: {{ user.userName }}, Email: {{user.userEmail}}</li>
				</ul>
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
				},
				users: []
			}
		},
		methods: {
			submitForm() {
				this.$http.post('https://vuejs-udemy-ca814.firebaseio.com/users.json', this.user)
					.then(response => {
						console.log(response);
					}, error => {
						console.log(error);
					})
			},
			fetchData() {
				this.$http.get('https://vuejs-udemy-ca814.firebaseio.com/users.json')
					.then(response => {
						return response.json();
					})
					.then(data => {
						const usersDB = [];

						for (let key in data) {
							usersDB.push(data[key]);
						}
						this.users = usersDB;
					})
			}
		}
	}
</script>

<style>
</style>
