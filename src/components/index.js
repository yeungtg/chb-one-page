import scroll from './scroll'
const components = [
	scroll
]
const install = (Vue) => {
	if (install.installed) {
		return
	}
	components.forEach(component => {
		Vue.component(component.name, component)
	});
}
export default {
	install
}
