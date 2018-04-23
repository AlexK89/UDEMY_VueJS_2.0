<template>
	<div class="full-name">
		<input :value="firstName" type="text" placeholder="First Name" @input="nameChanged(true, $event)">
		<input :value="lastName" type="text" placeholder="Last Name" @input="nameChanged(false, $event)">
	</div>
</template>

<script>
	export default {
		name: "FullName",
		props: ['value'],
		methods: {
			nameChanged(isFirst, event) {
				console.log(event.target.value);
				let name = '';
				if (isFirst) {
					name = `${event.target.value} ${this.lastName}`;
				} else {
					name = `${this.firstName} ${event.target.value}`;
				}

				this.value = name;
				this.$emit('input', this.value);
			}
		},
		computed: {

			firstName() {
				if (this.value.split(' ')[0]) {
					return this.value.split(' ')[0];
				} else {
					return '';
				}
			},
			lastName() {
				if (this.value.split(' ')[1]) {
					return this.value.split(' ')[1];
				} else {
					return '';
				}
			}
		}
	}
</script>

<style scoped>

</style>