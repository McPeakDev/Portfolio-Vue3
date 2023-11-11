<script setup lang="ts">
import Button from 'primevue/button'
import { handleLink } from '../assets/ts/functions'
</script>

<template>
	<div class="flex flex-row flex-between">
		<Button
			class="button"
			v-tooltip.bottom="'Email Me'"
			text
			rounded
			@click="handleLink('mail')"
		>
			<i class="icon pi pi-envelope"></i>
		</Button>
		<Button
			class="button"
			v-tooltip.bottom="'GitHub'"
			text
			rounded
			@click="handleLink('github')"
		>
			<i class="icon pi pi-github"></i>
		</Button>
		<Button
			class="button"
			v-tooltip.bottom="'LinkedIn'"
			text
			rounded
			@click="handleLink('linkedin')"
		>
			<i class="icon pi pi-linkedin"></i>
		</Button>
		<Button
			class="button"
			v-tooltip.bottom="'Resume'"
			text
			rounded
			@click="handleLink('resume')"
		>
			<i class="icon pi pi-briefcase"></i>
		</Button>
	</div>
</template>

<style scoped>
.icon {
	font-size: 35px;
	color: var(--surface-200);
	transition: all 0.1s ease-in-out;
}

.p-button.p-button-text:enabled:focus {
	background-color: unset;
}
.button:hover {
	background-color: #ffffff17 !important;
}
</style>
