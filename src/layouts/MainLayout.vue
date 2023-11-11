<script setup lang="ts">
import { shallowRef, ref } from 'vue'
import Corners from '../components/Corners.vue'
import SocialLinks from '../components/SocialLinks.vue'
import ProjectLinks from '../components/ProjectLinks.vue'
import { useRouter } from '../composables/router'
import Projects from '../assets/data/projects.json'

const router = useRouter()
const hover = ref(false)
const projects = ref<Project[]>(Projects)

const pageName = ref<string>('Index')
const selectedProjectPage = shallowRef<any>(router.getComponentByName('Index'))
const selectedProject = ref<Project | null>()

const handleMouseOver = (isOverElement: boolean) => {
	hover.value = isOverElement
}

const handleProjectChange = (componentName: string) => {
	pageName.value = componentName
	selectedProjectPage.value = router.getComponentByName(componentName)
	selectedProject.value = projects.value.find(
		(project) => project.linkName === componentName,
	)
}
</script>
<template>
	<div class="container fill-height">
		<div
			class="card flex flex-column"
			@mouseenter="handleMouseOver(true)"
			@mouseleave="handleMouseOver(false)"
		>
			<Corners :hover="hover" />
			<div class="flex flex-column flex-between card-padding fill-height">
				<div class="flex flex-row flex-between flex-center-items">
					<p
						class="flavor-text heading project-link-text"
						@click="handleProjectChange('Index')"
					>
						McPeakDev
					</p>
					<SocialLinks />
				</div>
				<div class="flex flex-row flex-between fill-height">
					<Transition mode="out-in">
						<component
							:key="pageName"
							class="fill-width"
							:is="selectedProjectPage"
							:project="selectedProject"
						/>
					</Transition>
					<ProjectLinks
						class="project-links"
						@changeProject="handleProjectChange"
					/>
				</div>
				<div class="flex flex-row flex-between">
					<p class="flavor-text flex-end">©2023 McPeakDev</p>
				</div>
			</div>
			<Corners :hover="hover" class="flex-end bottom-corner" />
		</div>
	</div>
</template>

<style scoped>
.heading {
	cursor: pointer;
}

.flex-end {
	margin: 0 0 0 auto;
}

.bottom-corner {
	rotate: 180deg;
	margin: auto 0 0 auto;
}

.card-padding {
	padding: 0px 50px;
}

.project-links {
	min-width: 30%;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
