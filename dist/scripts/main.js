$(document).ready(start);

function start(){

	var $red = $('#red');
	var $blue = $('#blue');
	var $green = $('#green');
	var $redContent = $('#red-content');
	var $blueContent = $('#blue-content');
	var $greenContent = $('#green-content');
	var $content = $('.content');
	var $tab = $('.tab');

	$red.on('click', showRed);
	$blue.on('click', showBlue);
	$green.on('click', showGreen);


	function showRed(e){


		$blueContent.hide();
		$greenContent.hide();
		$redContent.show();
		highlight(e);
	}

	function showBlue(e){

		$blueContent.show();
		$greenContent.hide();
		$redContent.hide();
		highlight(e);
	}
	function showGreen(e){

		$blueContent.hide();
		$greenContent.show();
		$redContent.hide();
		highlight(e);
	}

	function highlight(e){

		if($(e.target).parent().hasClass('tab')){

			$tab.css('background-color','white');
			$(e.target).parent().css('background-color', '#ccc');

		}else{

			$tab.css('background-color','white');
			$(e.target).css('background-color', '#ccc')
		}

		
	}



}