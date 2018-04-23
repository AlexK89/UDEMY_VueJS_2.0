<template>
	<div class="container">
		<form>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<!-- Exercise 1 -->
					<!-- Create a Signup Form where you retrieve the following Information -->
					<!-- Full Name (First Name + Last Name) -->
					<!-- Mail -->
					<!-- Password -->
					<!-- Store Data? Yes/No -->
					<form action="#">
						<app-full-name v-model="userData.fullName"></app-full-name>
						<input v-model="userData.email" type="email" placeholder="Email">
						<input v-model="userData.password" type="password" placeholder="Password">
						<div class="store-data">
							<p>Store data?</p>
							<label for="storeDataYes">
								Yes
								<input v-model="storeData" id="storeDataYes" type="radio" value="yes" placeholder="yes">
							</label>
							<label for="storeDataNo">
								No
								<input v-model="storeData" id="storeDataNo" type="radio" value="no">
							</label>
						</div>
						<input type="submit" value="Submit" @click.prevent="submitForm">
					</form>

					<!-- Exercise 2 -->
					<!-- Only display the Form if it has NOT been submitted -->
					<!-- Display the Data Summary ONCE the Form HAS been submitted -->

					<!-- Exercise 3 -->
					<!-- Edit the Example from above and create a custom "Full Name" Control -->
					<!-- which still holds the First Name and Last Name Input Field -->
				</div>
			</div>
		</form>
		<hr>
		<div class="row" v-if="showForm">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>Your Data</h4>
					</div>
					<div class="panel-body">
						<p>Full Name: {{ userData.fullName }}</p>
						<p>Mail: {{ userData.email }}</p>
						<p>Password: {{ userData.password }}</p>
						<p>Store in Database?: {{ storeData }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import FullName from './components/FullName.vue';

	export default {
		data() {
			return {
				userData: {
					fullName: '',
					email: '',
					password: ''
				},
				storeData: 'yes',
				showForm: false
			}
		},
		methods: {
			submitForm() {
				this.showForm = true;
			}
		},
		components: {
			appFullName: FullName
		}
	}
</script>

<style>
</style>
