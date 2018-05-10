<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<hr>
				<select name="animation" id="animation-type" v-model="animation">
					<option value="" selected disabled>Choose animation</option>
					<option value="slide">Slide</option>
					<option value="fade">Fade</option>
				</select>
				<br><br>
				<transition :name="animation">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<hr>
                <button class="btn btn-primary" @click="switcher">Show alert</button>
				<br>
				<br>
				<!--<transition name="fade">-->
					<!--<div class="alert alert-info" v-show="show">This is some info</div>-->
				<!--</transition>-->
				<transition name="slide">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<!--show element on-load-->
				<transition name="slide" appear>
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<!--add few classes on different stage-->
				<transition
						enter-active-class="animated bounce"
						leave-active-class="animated shake"
						appear>
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<hr>
				<p>Switch between elements</p>
				<transition name="slide" mode="out-in">
					<!--We need to add unique key for each element to make them work with animations-->
					<div class="alert alert-info" v-if="show" key="info">This is some info</div>
					<div class="alert alert-warning" v-else key="warning">This is some warning</div>
				</transition>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h2>Transition JS Hooks</h2>
				<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
				<br>
				<br>
				<transition
					@before-enter="beforeEnter"
					@enter="enter"
					@after-enter="afterEnter"
					@enter-cancelled="enterCancelled"

					@before-leave="beforeLeave"
					@leave="leave"
					@after-leave="afterLeave"
					@leave-cancelled="leaveCancelled"
					:css="false" >
					<div style="width: 0; height: 100px; background-color: #76ff7e" v-if="load"></div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				load: false,
				animation: '',
				elementWidth: 0
			}
		},
		methods: {
			switcher() {
				return this.show = !this.show
			},
			beforeEnter(el) {
				console.log('beforeEnter');
				this.elementWidth = 0;
				el.style.width = this.elementWidth + 'px';
			},
			enter(el, done) {
				console.log('Enter');
				let round = 1;
				let interval = setInterval(() => {
					el.style.width = (this.elementWidth + round * 10) + 'px';
					round++;
					if (round > 30) {
						console.log(el.style.width);
						clearInterval(interval);
						// We need to execute 'done' to tell VueJS that animation has been finished
						done();
					}
				}, 20);

			},
			afterEnter(el) {
				console.log('afterEnter');
			},
			enterCancelled(el) {
				console.log('enterCancelled');
			},
			beforeLeave(el) {
				console.log('beforeLeave');
				this.elementWidth = 300;
				el.style.width = this.elementWidth + 'px';
			},
			leave(el, done) {
				console.log('Leave');
				let round = 1;
				let interval = setInterval(() => {
					el.style.width = (this.elementWidth - round * 10) + 'px';
					round++;
					if (round > 30) {
						clearInterval(interval);
						// We need to execute 'done' to tell VueJS that animation has been finished
						done();
					}
				}, 20);
			},
			afterLeave(el) {
				console.log('afterLeave');
			},
			leaveCancelled(el) {
				console.log('Leave cancelled');
			}
		}
	}
</script>

<style>
	.fade-enter {
		 opacity: 0;
	 }

	.fade-enter-active {
		transition: .3s;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave-active {
		transition: .3s;
		opacity: 0;
	}

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
			transform: translateY(40px);
			opacity: 0;
		}
	}
	.slide-enter {

	}

	.slide-enter-active {
		animation: slideIn .7s forwards;
	}

	.slide-leave {

	}

	.slide-leave-active {
		animation: slideOut .7s forwards;
	}
</style>
