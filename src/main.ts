import App from './App.svelte';
import "../node_modules/materialize-css/dist/css/materialize.min.css";

const app = new App({
	target: document.body,
	props: {
		name: 'Dru'
	}
});

export default app;