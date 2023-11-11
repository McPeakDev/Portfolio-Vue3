import Index from '../pages/Index.vue'
import Project from '../pages/Project.vue'
export const useRouter = () => {
	const routeMap = {
		Index,
		TerraTax: Project,
		Inventory: Project,
		Kiosk: Project,
		VTRS: Project,
	}

	const getComponentByName = (componentName: string) => {
		return routeMap[componentName as keyof typeof routeMap] ?? Index
	}

	return {
		getComponentByName,
	}
}
