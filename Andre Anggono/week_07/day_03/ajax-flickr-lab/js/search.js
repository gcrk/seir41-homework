$(document).ready(function () {
	$("#search").on("submit", function (e) {
		e.preventDefault();
		currentPage = 1;
		const searchTerms = $("#query").val();
		$("#images").empty();
		searchFlickr(searchTerms, currentPage);
	});

	$(window).on("scroll", function () {
		const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
		if (scrollBottom < 700 && currentPage < totalPages) {
			throttled();
		}
	});
});

let totalPages, currentPage;

const searchFlickr = (keywords, page) => {
	const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?"; // JSONP
	$.getJSON(flickrURL, {
		method: "flickr.photos.search",
		api_key: "2f5ac274ecfac5a455f38745704ad084",
		text: keywords,
		format: "json",
		page: page
	})
		.done(showImages)
		.done((info) => {
			totalPages = info.photos.pages;
			console.log(info);
			// console.log(info.photos.pages);
		});
};

const showImages = (results) => {
	_(results.photos.photo).each((photo) => {
		const thumbnailURL = generateURL(photo);
		const $img = $("<img></img>", { src: thumbnailURL, class: "col-lg-4 col-sm-6 rounded" }); // .attr('src', thumnailURL)
		$img.appendTo("#images"); // $('#images').append($img)
	});
};

const generateURL = (p) => ["http://farm", p.farm, ".static.flickr.com/", p.server, "/", p.id, "_", p.secret, "_q.jpg"].join("");

const infiniteScroll = () => {
	const searchTerms = $("#query").val();
	currentPage++;
	searchFlickr(searchTerms, currentPage);
};

const throttled = _(infiniteScroll).throttle(500, { trailing: false });
