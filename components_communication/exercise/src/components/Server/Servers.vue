<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<li
					class="list-group-item"
					v-for="server in servers">
				Server #{{ server.id }}; Name: {{ server.name }}; Status: {{ server.status }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['servers'],
	}
</script>
