// $(document).ready(function(){
//
//
// 	$('a[href^="#"]').click(function(e){
//
// 		e.preventDefault();
//
// 		var the_id = this.hash;
//
// 		$('html, body').animate({
// 			scrollTop:$(the_id).offset().top
// 		}
// 		, 'slow'
// 		,function (){
// 			location.hash = the_id;
// 		});
//
// 	});
// });

$(document).ready(
	function () {

		$('a[href^="#"]').click(
			function (e) {
				e.preventDefault();

				var the_id = this.hash;

				$('html, body').animate(
					{
						scrollTop: $(the_id).offset().top
					}
					, 1200
					, function () {
						location.hash = the_id;
					}
				);
			}
		);
	}
);
