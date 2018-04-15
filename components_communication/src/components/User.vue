<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<p>Name is: {{ userName }}</p>
		<button @click="changeName">Change User name</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail v-bind:userName="userName" @resetedName="userName = $event" :resetName = 'resetName'></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit></app-user-edit>
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
				userName: 'Alex'
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
</style>
