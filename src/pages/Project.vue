<script setup lang="ts">
import { ref } from 'vue'
import { handleLink } from '../assets/ts/functions'

interface Props {
	project: Project
}

const props = defineProps<Props>()

const linkName = ref(props.project.linkName.toLowerCase())
</script>
<template>
	<Transition mode="out-in">
		<div class="container project-container">
			<div class="flex flex-column fill-width">
				<div class="flex flex-column fill-width">
					<p
						class="flavor-text heading project-link-text"
						@click="handleLink(linkName)"
					>
						{{ props.project.title }}
					</p>
					<p class="subtitle">{{ props.project.subtitle }}</p>
				</div>
				<p class="content">
					{{ props.project.content }}
				</p>
			</div>
		</div>
	</Transition>
</template>
