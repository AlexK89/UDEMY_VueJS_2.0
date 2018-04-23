<template>
	<!-- Exercise 1 -->
	<!-- Create a Signup Form where you retrieve the following Information -->
	<!-- Full Name (First Name + Last Name) -->
	<!-- Mail -->
	<!-- Password -->
	<!-- Store Data? Yes/No -->
	<!-- Exercise 2 -->
	<!-- Only display the Form if it has NOT been submitted -->
	<!-- Display the Data Summary ONCE the Form HAS been submitted -->

	<!-- Exercise 3 -->
	<!-- Edit the Example from above and create a custom "Full Name" Control -->
	<!-- which still holds the First Name and Last Name Input Field -->

	<div class="app">
		<div class="form-wrapper">
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
				<button type="submit" @click.prevent="submitForm">Submit</button>
			</form>
		</div>

		<div class="user-profile-wrapper">
			<div class="user-profile">
				<h4>Your Data</h4>
				<div class="user-profile__details" v-if="showForm" :class="{visible: showForm}">
					<p>Full Name: {{ userData.fullName }}</p>
					<p>Mail: {{ userData.email }}</p>
					<p>Password: {{ userData.password }}</p>
					<p>Store in Database?: {{ storeData }}</p>
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

<style lang="sass">

	@keyframes slideIn {
		0 {
			top: 100%;
		}
		100% {
			top: 10%;
		}
	}
	.app {
		display: flex;
		justify-content: space-between;
		width: 90%;
		max-width: 1000px;
		margin: 5em auto;

		.form-wrapper {
			width: 45%;
			box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

			form {
				padding: 3em 2em;
				display: flex;
				flex-direction: column;
				align-items: center;


				.full-name {
					width: 100%;
				}

				input,
				.full-name input {
					display: block;
					width: 100%;
					margin-bottom: 1em;
					outline: none;
					border: none;
					border-bottom: 2px solid #00bfa5;
					padding: 10px 5px;
				}

				.store-data {
					width: 100%;
				}

				button {
					width: 90%;
					max-width: 200px;
					margin: 0 auto;
					height: 40px;
					border: none;
					background-color: #00bfa5;
					color: #ffffff;
					outline: none;
					box-shadow: 0 1px 3px rgba(0,0,0,0.12),
								0 1px 2px rgba(0,0,0,0.24);
					transition: all 0.3s cubic-bezier(.25,.8,.25,1);

					&:hover {
						box-shadow: 0 14px 28px rgba(0,0,0,0.25),
									0 10px 10px rgba(0,0,0,0.22);
					}

					&:active {
						box-shadow: 0 1px 3px rgba(0,0,0,0.12),
									0 1px 2px rgba(0,0,0,0.24);
					}
				}
			}
		}

		.user-profile-wrapper {
			position: relative;
			width: 45%;
			box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			overflow: hidden;

			.user-profile {

				width: 100%;
				padding: 3em 2em;

				&__details {
					position: absolute;
					top: 100%;
					left: 0;
					transition: 0.3s;
					padding: 3em 2em;

					&.visible {
						animation: slideIn 0.3s forwards;
					}
				}
			}
		}
	}
</style>
