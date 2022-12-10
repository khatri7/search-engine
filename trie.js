const createNode = () => {
	const node = new Map();
	node.set("results", new Set());
	return node;
};

const root = createNode();

const buildTrie = () => {
	const processWord = (index, word) => {
		let current = root;
		for (const letter of word.toLowerCase()) {
			if (!current.has(letter)) {
				current.set(letter, createNode());
			}
			current = current.get(letter);
			current.get("results").add(index);
		}
	};

	const processTextSnippet = (index, textSnippet) => {
		words = textSnippet.split(" ");
		for (const word of words) {
			processWord(index, word);
		}
	};

	for (let i = 0; i < textSnippets.length; i++) {
		processTextSnippet(i, textSnippets[i]);
	}
};

module.exports = {
	buildTrie,
};
