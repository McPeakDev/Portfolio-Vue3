<script setup lang="ts">
import { computed, ref } from 'vue'

const hover = ref(false)
const emit = defineEmits(['changeProject'])

const hoveringClass = computed(() => {
	if (hover.value) {
		return 'hover'
	}
	return null
})

const handleLink = (componentName: string) => {
	emit('changeProject', componentName)
}

const handleMouseOver = (isOverElement: boolean) => {
	hover.value = isOverElement
}
</script>

<template>
	<div
		class="flex flex-column flex-center"
		@mouseenter="handleMouseOver(true)"
		@mouseleave="handleMouseOver(false)"
	>
		<div :class="['border-left', hoveringClass]">
			<div class="background inner-div flex flex-column">
				<span
					@click="handleLink('TerraTax')"
					class="flavor-text project-link-text"
					>Terra Tax</span
				>
				<span
					@click="handleLink('Inventory')"
					class="flavor-text project-link-text"
					>Inventory (i2)</span
				>
				<span @click="handleLink('Kiosk')" class="flavor-text project-link-text"
					>Kiosk</span
				>
				<span @click="handleLink('VTRS')" class="flavor-text project-link-text"
					>VTRS</span
				>
			</div>
		</div>
	</div>
</template>

<style scoped>
.project-link-text {
	margin: 0px 0 10px 15px;
	font-size: 25px;
	position: relative;
	width: fit-content;
	cursor: pointer;
	height: 30px;
}

.inner-div {
	height: 275px;
	justify-content: space-around;
	border-top-left-radius: 7px;
	padding-left: 10px;
	padding-top: 20px;
}

.border-left {
	position: relative;
}

.border-left.hover::after {
	opacity: 1;
}
.border-left.hover::before {
	opacity: 0;
}
.border-left::after {
	background: linear-gradient(
		135deg,
		var(--gradient-2) 0%,
		var(--gradient-1) 50%,
		var(--gradient-2) 100%
	);
	content: ' ';
	width: 90px;
	height: 90px;
	opacity: 0;
	border-top-left-radius: 8px;
	transition: all 0.3s ease-in-out;
	position: absolute;
	top: -6px;
	bottom: 0;
	left: -6px;
	z-index: -1;
}

.border-left::before {
	background: linear-gradient(
		135deg,
		var(--gradient-1) 0%,
		var(--gradient-2) 50%,
		var(--gradient-1) 100%
	);
	content: ' ';
	width: 90px;
	height: 90px;
	opacity: 1;
	border-top-left-radius: 8px;
	transition: all 0.3s ease-in-out;
	position: absolute;
	top: -6px;
	bottom: 0;
	left: -6px;
	z-index: -1;
}
</style>
