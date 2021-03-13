export function clearContent(element) {
	while(element.firstElementChild){
		element.firstElementChild.remove();
	}
}