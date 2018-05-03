<template>
	<div>
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<p>Name is: {{ userName }}</p>
		<p>Age is: {{ age }}</p>
		<button @click="changeName">Change User name</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail v-bind:userName="userName"
								 @resetedName="userName = $event"
								 :resetName="resetName"
								 :userAge="age"
				></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit :userAge="age"></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';

	export default {
		data() {
			return {
				userName: 'Alex',
				age: 28
			}
		},
		methods: {
			changeName() {
				this.userName = 'Kristina'
			},
			resetName() {
				this.userName = 'Alex'
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>
<style scoped>
	.row {
		display: flex;
		justify-content: space-between;
	}

	.component {
		background-color: #5c6bc0;
		color: #ffffff;
		padding: 1em 2em;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
	}
</style>
