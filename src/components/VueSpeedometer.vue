<template>
	<div
		class="mc-speedometer"
		:class="{'loading': loading}">
		<div class="arc-container">
			<div
				class="arc"
				:style="borderWidthStyle" />
			<div v-if="!loading"
				class="arc-bg"
				:style="[arcDegree, arcColor, borderWidthStyle]" />
			<div
				class="arc-loading-wrap"
				v-if="loading"
				:style="borderWidthStyle">
			    <div
				    class="arc-loading"
				    v-if="loading"
				    :style="[borderWidthStyle, arcLoadingPosition]" />
            </div>
		</div>
       <div v-if="!loading">
         <img src="/needle.jpg" v-if="needle" class="mc-speedometer-needle" :style="needleDegree" />
		<div class="mc-speedometer-value-container" v-else>
			<div
				class="mc-speedometer-value"
				:style="`color: ${color}; font-size: ${calculateWidth}px; line-height: ${calculateWidth}px`">
				{{ modelValue }}
			</div>
		</div>
       </div>
	</div>
</template>

<script>
export default {
	name  : 'McSpeedometer',
	props : {
		/**
		 * @ignore
		 */
		modelValue : {
			type     : Number,
			required : true
		},
		/**
		 * Loading state
		 */
		loading : {
			type     : Boolean,
			required : false,
			default() {
				return false
			}
		},
		/**
		 * Max value of speedometer
		 */
		maxValue : {
			type     : Number,
			required : true
		},
		/**
		 * Custom color
		*/
		color : {
			type     : String,
			required : false,
			default  : ''
		},
        /**
		 * Custom color
		*/
		needle : {
			type     : Boolean,
			required : false,
			default  : false
		}
	},
	data() {
		return {
			arcPrimaryDegree : -45,
			arcAlertDegree   : -45,
			calculateWidth   : 30,
		}
	},
	created() {
		window.addEventListener('resize', this.setBorderWidth)
	},
	destroyed() {
		window.removeEventListener('resize', this.setBorderWidth)
	},
	mounted() {
		this.setCalculateWidth()
        const t = this;
        const resizeObserver = new ResizeObserver(function() {
		    t.setCalculateWidth()
        });
        resizeObserver.observe(this.$el);
	},
	methods : {
        setCalculateWidth(){
            if(this.$el)
            this.calculateWidth = this.$el.offsetWidth / 8
        },
	},
	computed : {
        arcLoadingPosition(){
            return `top: -${this.calculateWidth}px; left: -${this.calculateWidth}px;` 
        },
		borderWidthStyle() {
			return `border-width: ${this.calculateWidth}px;`
		},
		percentage() {
			return (this.modelValue / this.maxValue) * 100
		},
		arcDegree() {
			return `transform: rotate(${Math.round((this.percentage * 180 / 100) - 45)}deg);`
		},
		needleDegree() {
			return `transform: rotate(${Math.round((this.percentage * 180 / 100) - 90)}deg);`
		},
		arcColor() {
			if(this.color) {
				return `border-color: transparent transparent ${this.color} ${this.color};`
			}
			return ''
		}
	}
}
</script>
<style lang="scss" scoped>
.mc-speedometer {
	position: relative;
	aspect-ratio: 2/1;
	width: 100%;
	height: 100%;
}
.mc-speedometer .arc-container {
	width: 100%;
	height: 100%;
	position: relative;
    overflow: hidden;
}
.mc-speedometer .arc,
.mc-speedometer .arc-bg,
.mc-speedometer .arc-loading-wrap {
	width: 75%;
	height: 150%;
	border-radius: 50%;
	transition: 1s transform;
	border: 30px solid;
}


@keyframes skeleton-wave {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.mc-speedometer .arc {
	border-color: #b6b8ba;
}

.mc-speedometer .arc-bg {
	position: absolute;
	top: 0;
	left: 0;
}
.mc-speedometer-value-container {
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	bottom: 0;
}
.mc-speedometer-needle {
	height: 60px;
	position: absolute;
	bottom: 0;
	transform-origin: bottom center;
	transition: 1s transform;
	z-index: 1;
	transform: rotate(0deg);
}
.mc-speedometer-value {
	font-size: 30px;
	font-weight: bold;
	position: absolute;
	transform: translateX(-50%);
	left: 50%;	
	bottom: 0;
}
.mc-speedometer .arc-loading-wrap {
	position: absolute;
	top: 0;
	border-color: #b6b8ba;
}
.mc-speedometer .arc-loading {
	content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%; 
    border: 30px solid transparent; 
    background: linear-gradient(90deg, transparent, hsla(0deg, 0%, 100%, 0.4), transparent) border-box; 
    -webkit-mask:
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
	animation: skeleton-wave 2.5s linear infinite;
}
@keyframes skeleton-wave {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.mc-speedometer-needle {
    postion: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 7vw;
    height: auto;
}
</style>