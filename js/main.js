// AOS.init(
// 	{
// 		// Global settings:
// 		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
// 		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
// 		initClassName: 'aos-init', // class applied after initialization
// 		animatedClassName: 'aos-animate', // class applied on animation
// 		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
// 		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
// 		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
// 		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		
	  
// 		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
// 		offset: 120, // offset (in px) from the original trigger point
// 		delay: 0, // values from 0 to 3000, with step 50ms
// 		duration: 400, // values from 0 to 3000, with step 50ms
// 		easing: 'ease', // default easing for AOS animations
// 		once: false, // whether animation should happen only once - while scrolling down
// 		mirror: false, // whether elements should animate out while scrolling past them
// 		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	  
// 	  }
// );

window.onload = function() {
	let preloader = document.getElementById('preloader')
	preloader.style.display = 'none'
}


jQuery(document).ready(function( $ ) {

	if($('#canvas').length) {

		var doughnutData = [{
        value: 70,
        color: "#f85c37"
      },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas2').length) {
		var doughnutData = [{
				value: 90,
				color: "#f85c37"
			},
			{
				value: 10,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas3').length) {
		var doughnutData = [{
				value: 55,
				color: "#f85c37"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas4').length) {
		var doughnutData = [{
				value: 55,
				color: "#f85c37"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
	}


	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
	   
		$('html, body').animate({
		  scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	  });

	  $('#pricesBtn').click(() => {
		$('.modal').animate({
			scrollTop: $('#prices').offset().top
		}, 500);
	});

	
});




