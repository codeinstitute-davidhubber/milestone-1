$( document )
			.ready( function() {
			var image = 1;
			while ( image <= 20 ) {
				$( '#fancybox' )
					.append( '<div id="albumArtGallery" class="col-lg-3 col-md-4 col-6 p-2 d-inline-block"> <a data-fancybox="gallery" class="fancybox" href="assets/img/gallery/monkees-' + image + '.jpg" rel="ligthbox"><img alt="Album Art" class="img-fluid border-yellow rounded shadows" src="assets/img/gallery/monkees-' + image + '.jpg"><\/a><\/div>' );
				image++;
			}
		} )
			, $( ".fancybox" )
			.fancybox( {
			openEffect: "none"
			, closeEffect: "none"
		} );// JavaScript Document