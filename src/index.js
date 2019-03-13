document.getElementById('state').innerText = JSON.stringify(history.state);

document.getElementById('push-state1').addEventListener('click', () => {
	history.pushState({data: 'pushState1'}, '', '/push-state1');
});
document.getElementById('push-state2').addEventListener('click', () => {
	history.pushState({data: 'pushState2'}, '', '/push-state2');
});
document.getElementById('push-state3').addEventListener('click', () => {
	history.pushState({data: 'pushState3'}, '', '/push-state3');
});
document.getElementById('replace-state').addEventListener('click', () => {
	history.replaceState({data: 'replaceState'}, '', '/replace-state');
});
window.addEventListener('popstate', () => {
  document.getElementById('state').innerText = JSON.stringify(history.state);
});