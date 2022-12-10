const fs = require("fs/promises");
const path = require("path");
const textCleaner = require("text-cleaner");
const { htmlToText } = require("html-to-text");
const { removeStopwords } = require("stopword");
const { buildTrie, search } = require("./trie");

const filesDirectory = path.resolve("data");

const readFileData = async (file) => {
	const data = await fs.readFile(path.join(filesDirectory, file), "utf-8");
	const cleanData = removeStopwords(
		textCleaner(htmlToText(data))
			.toLowerCase()
			.removeApostrophes()
			.removeStopWords()
			.removeChars({ exclude: "0123456789", replaceWith: " " })
			.condense()
			.valueOf()
			.split(" ")
	);
	console.log(`✔ ${file}`);
	return cleanData;
};

const readFiles = async (files) => {
	await Promise.all(
		files.map(async (file, index) => {
			const data = await readFileData(file);
			files[index] = {
				file,
				data,
			};
		})
	);
	return files;
};

const main = async () => {
	try {
		console.log(`Reading files from: ${filesDirectory}`);
		let files = await fs.readdir(filesDirectory);
		files = await readFiles(files);
		const trieMap = buildTrie(files);
		const result = search(trieMap, "cristiano");
		console.log();
		console.log("Search Result: ");
		const resultArr = Object.entries(result).map((entry) => ({
			"File Name": entry[0],
			Occurrence: entry[1],
		}));
		console.table(resultArr);
	} catch (err) {
		console.error(err);
	}
};

main();
