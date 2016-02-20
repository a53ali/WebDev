$(document).ready(function () {
            $('.results > li').hide();

            $('div.tags').find('input:checkbox').live('click', function () {
                $('.pricing >.container > div').hide();
                $('div.tags').find('input:checked').each(function () {
                    $('.pricing > .container > div.' + $(this).attr('rel')).show();
                });
            });
        
		
		$('#filter').live('keyup',function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.products li').hide();
            $('.products li').filter(function () {
                return rex.test($(this).text());
            }).show();
        });
		
		
		
		});      