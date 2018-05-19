<template>
	<div>
		<h3>Some User Details</h3>
		<p>User id: {{ $route.params.id }}</p>
		<router-link tag="button" :to="'/user/' + $route.params.id + '/edit'" class="btn btn-danger">Edit</router-link>
	</div>
</template>