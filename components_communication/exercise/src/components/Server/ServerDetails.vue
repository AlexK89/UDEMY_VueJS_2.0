<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <div v-else>
            <p>Server ID: {{server.id}}</p>
            <p>Server Name: {{server.name}}</p>
            <p>Server status: {{server.status}}</p>
            <button @click="resetStatus">Reset Status</button>
        </div>
    </div>

</template>

<script>
	import { serverBus } from '../../main';

	export default {
		data() {
			return {
				server: null
            }
        },
        created() {
			serverBus.$on('serverSelected', (response) => {
				this.server = response;
            })
        },
        methods: {
			resetStatus() {
				this.server.status = 'good';
            }
        }
    }
</script>

<style>

</style>
