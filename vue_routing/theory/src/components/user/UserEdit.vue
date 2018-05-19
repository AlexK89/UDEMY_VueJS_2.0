<template>
	<div>
		<h3>Edit the User</h3>
		<hr>
		<p>Number: {{$route.query.q}}</p>
		<p>Language: {{$route.query.locale}}</p>
		<hr>
		<div style="height: 1000px; background-color: cornflowerblue"></div>
		<p id="data">Some data</p>
	</div>
</template>