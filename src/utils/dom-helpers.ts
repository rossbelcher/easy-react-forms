export function getIndex(element: { parentNode: { children: any; }; }) {
	const siblings = element.parentNode.children;
	let index = 0;

	for (let i=0; i<siblings.length; i++) {
		if (siblings[i]==element) return index;
		index++;
	}

	return -1;
}

export function isAppleSafari(userAgent: string) {
  let iPhone = userAgent.match(/iPhone/i) !== null;
  let Mac = userAgent.match(/Mac/i) !== null;
  let iPod = userAgent.match(/iPod/i) !== null;
  let iOS = userAgent.match(/iOS/i) !== null;
  let Safari = userAgent.match(/Safari/i) !== null;
  return Safari && (iPhone || Mac || iPod || iOS);
}
