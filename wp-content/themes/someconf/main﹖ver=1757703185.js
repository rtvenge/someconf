(() => {
	const tableRows = document.querySelectorAll(".wp-block-table tr");

	tableRows.forEach((row) => {
		const cells = row.querySelectorAll("td");

		if (cells[2]?.textContent.trim() === "") {
			// add colspan
			cells[1].setAttribute("colspan", "2");
			cells[2].remove();
		}
	});
})();
