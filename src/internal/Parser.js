import Papa from "papaparse";

let parseData = (path, callback) => {
  Papa.parse(path, {
    download: true,
    delimiter: "\t",
    newline: "\n",
    quotes: false,
    fastMode: true,
    skipEmptyLines: true,
    complete: callback
  });
};

let now = () => {
	return typeof window.performance !== 'undefined'
			? window.performance.now()
			: 0;

}

export {parseData, now} ;
