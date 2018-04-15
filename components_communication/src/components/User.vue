<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome {{userName}}!</p>
		<button @click="changeName">Change User name</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail></app-user-detail>
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
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>

<style scoped>
	button {
		padding: 1em 2em;
		border: none;
		background-color: #5c6bc0;
		color: #ffffff;
		outline: none;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
	}

	button:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.22);
	}

	button:hover:active {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
	}
</style>
