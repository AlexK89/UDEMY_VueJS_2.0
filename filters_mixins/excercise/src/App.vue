<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>

				<h5>Exercise 1</h5>
				<p>Build a local Filter which reverses the Text it is applied on </p>
				<p>
					<mark>Before:</mark>
					{{ 'Today is a really hot outside' }}
				</p>
				<p>
					<mark>After:</mark>
					{{ 'Today is a really hot outside' | reverseString }}
				</p>
				<hr>
				<h5>Exercise 2</h5>
				<p>Build a global Filter which counts the length of a word and it appends it</p>
				<p>
					<em>
						<mark>Like this: "Test" => Gets Filtered to => "Test (4)"</mark>
					</em>
				</p>
				<p>
					<mark>Result:</mark>
					{{ 'Today is a really hot outside' | getLength }}
				</p>
				<hr>
				<h5>Exercise 3</h5>
				<p>Do the same as in Exercises 1 & 2, now with Computed Properties</p>
				<p>
					<mark>Reverse Result:</mark>
					{{ reversed }}
				</p>
				<p>
					<mark>Length Result:</mark>
					{{ stringLength }}
				</p>
				<hr>
				<h5>Exercise 4</h5>
				<p>Share the Computed Property rebuilding Exercise 2 via a Mixin</p>
				<p>
					<mark>Length Result:</mark>
					{{ stringLength }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {stringLengthMixin} from './stringLengthMixin.js';

	export default {
		data() {
			return {
				string: 'Today is a really hot outside'
			}
		},
		filters: {
			reverseString(value) {
				return value.split('').reverse().join('');
			}
		},
		computed: {
			reversed() {
				return this.string.split('').reverse().join('');
			},
		},
		mixins: [stringLengthMixin]
	}
</script>

<style>
</style>
