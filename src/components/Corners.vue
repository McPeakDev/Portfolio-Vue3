<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	hover: false,
})

const hoverClass = computed(() => {
	if (props.hover) {
		return 'hover'
	}
	return null
})
</script>
<template>
	<svg width="300" height="300" class="overflow">
		<defs>
			<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0" :class="['gradient1', hoverClass]"></stop>
				<stop offset=".5" :class="['gradient2', hoverClass]"></stop>
				<stop offset="1" :class="['gradient1', hoverClass]"></stop>
			</linearGradient>
		</defs>
		<path
			fill="url('#grad1')"
			d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
		></path>
	</svg>
</template>

<style scoped>
.gradient1.hover {
	stop-color: var(--gradient-2);
}
.gradient1 {
	stop-color: var(--gradient-1);
	transition: all 0.3s ease-in-out;
}

.gradient2.hover {
	stop-color: var(--gradient-1);
}
.gradient2 {
	stop-color: var(--gradient-2);
	transition: all 0.3s ease-in-out;
}

.overflow {
	overflow: visible;
	height: 50px;
}
</style>
