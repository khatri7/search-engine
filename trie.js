const createNode = () => {
	const node = new Map();
	node.set("results", new Map());
	return node;
};

const root = createNode();

const buildTrie = (files) => {
	const processWord = (fileName, word) => {
		let current = root;

		word.split("").forEach((char) => {
			let occurrence = 0;
			if (!current.has(char)) current.set(char, createNode());
			current = current.get(char);
			if (current.get("results").has(fileName))
				occurrence = current.get("results").get(fileName);
			current.get("results").set(fileName, occurrence + 1);
		});
	};

	const processTextSnippet = (fileName, fileData) => {
		fileData.forEach((word) => {
			processWord(fileName, word);
		});
	};

	files.forEach((file) => {
		processTextSnippet(file.file, file.data);
	});

	return root;
};

const renderSearchResults = (resultMap) => {
	return Object.fromEntries(resultMap);
};

const search = (trieMap, text) => {
	for (const letter of text.toLowerCase()) {
		if (!trieMap.has(letter)) {
			return renderSearchResults(new Set());
		}
		trieMap = trieMap.get(letter);
	}
	return renderSearchResults(trieMap.get("results"));
};

module.exports = {
	buildTrie,
	search,
};
