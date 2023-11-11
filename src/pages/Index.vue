<script setup lang="ts">
const startedWorkOnDate = new Date('06/01/2020')

const calculateExperience = () => {
	var timeDiff = Date.now() - startedWorkOnDate.getMilliseconds()
	var timeDate = new Date(timeDiff)
	return Math.abs(timeDate.getUTCFullYear() - 2020)
}
</script>

<template>
	<div class="container project-container">
		<div class="flex flex-column fill-width">
			<p class="flavor-text heading no-click project-link-text">Hello There!</p>
			<div class="flex flex-column fill-width">
				<p class="content">
					My name is Matthew McPeak. I am a front-end software developer based
					in Kingsport, TN USA. I am a highly efficient Software Engineer with
					over {{ calculateExperience() }}+ years of experience. I am adept in
					design, testing, and maintenance of software systems with a strong
					ability to self-manage and work collaboratively as part of a
					productive team.
				</p>
			</div>
		</div>
	</div>
</template>
