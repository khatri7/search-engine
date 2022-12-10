const fs = require("fs/promises");
const path = require("path");
const textCleaner = require("text-cleaner");
const { htmlToText } = require("html-to-text");
const { removeStopwords } = require("stopword");

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
		let files = await fs.readdir(filesDirectory);
		files = await readFiles(files);
	} catch (err) {
		console.error(err);
	}
};

main();
