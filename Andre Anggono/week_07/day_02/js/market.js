$(document).ready(() => {
	ozCrypto.updateMarket();
	$("#showAll").on("click", function (e) {
		e.preventDefault();
		ozCrypto.totalMarket();
	});

	$("#search-form").on("submit", (e) => {
		e.preventDefault();
		$result = $("#result");

		$input = $("#marketSearchBox");
		const query = $input.val().toUpperCase();

		const searchResult = Object.keys(ozCrypto.marketID).filter((id) => id.includes(query));
		$input.val("");
		$result.empty();
		if (searchResult.length > 1) ozCrypto.multiMarket(query, searchResult);
		else if (searchResult.length === 1) ozCrypto.singleMarket(searchResult[0], ozCrypto.marketID[query]);
		else {
			$result.append($("<h3></h3>").text(`No results matching "${query}"`));
		}
	});
});

const formatter = new Intl.NumberFormat("en-AU", {
	style: "currency",
	currency: "AUD",
	minimumFractionDigits: 2,
});

const ozCrypto = {
	marketID: {},
	updateMarket() {
		$.ajax("https://api.btcmarkets.net/v3/markets").done((report) => {
			for (let market of report) {
				this.marketID[market.marketId] = market.quoteAssetName;
			}
		});
	},
	totalMarket() {
		const allMarketIds = Object.keys(this.marketID).sort();
		$result = $("#result");
		$result.empty();
		$result.append($("<h2></h2>").text("All Australian Market"));
		for (let market of allMarketIds) {
			this.singleMarket(market, this.marketID[market]);
		}
	},
	singleMarket(marketID, baseCurrency) {
		$.ajax(`https://api.btcmarkets.net/v3/markets/${marketID}/ticker`).done((report) => {
			$result = $("#result");
			formattedLastPrice = baseCurrency === "BTC" ? `${report.lastPrice} BTC` : `${formatter.format(report.lastPrice)} AUD`;
			$result.append($("<h3></h3>").text(marketID));
			$result.append($("<p></p>").html(`<strong>Last Price : </strong> ${formattedLastPrice}`));
		});
	},
	multiMarket(query, marketArr) {
		$result = $("#result");
		$result.append($("<h2></h2>").text(`All results matching "${query}"`));
		for (let market of marketArr) {
			this.singleMarket(market, this.marketID[market]);
		}
	},
};
