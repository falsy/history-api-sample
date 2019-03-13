document.getElementById('push-state').addEventListener('click', () => {
	history.pushState({data: 'pushState'}, '', '/push-state');
});