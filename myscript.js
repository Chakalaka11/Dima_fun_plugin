var i=0;
$(document).ready(
	function()
	{	

		$(".im_editable").keypress(function( event ) {

			if(event.keyCode == 32 )
			{
				if(i==2)
				{
					$(".im_editable").append(" Я ничего не понимаю!");

					i=0;
				}
				i++;
			}

	
			else
			i=1;
			
		});
	});