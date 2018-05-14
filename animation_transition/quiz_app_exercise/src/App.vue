<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1 class="text-center">The Super Quiz</h1>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<transition name="slide" mode="out-in">
					<component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import Question from './components/Question.vue';
	import Answer from './components/Answer.vue';

	export default {
		data() {
			return {
				mode: 'app-question'
			}
		},
		methods: {
			answered(isCorrect) {
				if (isCorrect) {
					this.mode = 'app-answer';
				} else {
					this.mode = 'app-question';
					alert('Wrong, try again!');
				}
			}
		},
		components: {
			appQuestion: Question,
			appAnswer: Answer
		}
	}
</script>
<style>
	/*Animations*/
	@keyframes slideIn {
		0% {
			transform: translateY(40px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slideOut {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(100px);
			opacity: 0;
		}
	}

	.slide-enter-active {
		animation: slideIn .5s forwards;
	}
	
	.slide-leave-active {
		animation: slideOut .5s forwards;
	}
</style>
