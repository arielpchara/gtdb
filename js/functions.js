$(document).ready(function(){

	function closeModal(){
		$("#modalOverlay").fadeOut("fast",function(){
			$("#girlsToAppend").html("");
			$("#modalOverlay").find("form").find(".form-vote").removeClass("hidden");
			$("#modalOverlay").find("form").find(".form-votted").addClass("hidden");
		});
		$(document).unbind("keydown");
	}

	$(document).on("click tap","#closeModal",function(e){
		e.preventDefault();
		closeModal();
	});

	$(document).on("click tap","#modalOverlay",function(e){
		if($(e.target).hasClass("overlay-modal-vote")){
			closeModal();
		}
	});

	$(document).on("click tap",".choose-her",function(e){
		e.preventDefault();
		var girl = $(this).find("a").html();
		
		$(document).on("keydown",function(e){
			if(e.which==27){
				closeModal()
			}
		})

		$("#girlsToAppend").html(girl);
		$("#modalOverlay").fadeIn("fast");
	});


})