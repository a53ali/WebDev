$(document).ready(function () {
    var output = $("#output");    
    var template = $("#test1").html();
    //render date
    data1 = new Date();
    var html = Mustache.render(template, data1);
    output.append(html);
	
	
	
	(function ($) {
		
		
		$('#buy-me a').live('click',function() {
        $(this).clone()
               .find('span').remove().end()
               .appendTo($("#cart-list"));
		});

        $('#filter').live('keyup',function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.products li').hide();
            $('.products li').filter(function () {
                return rex.test($(this).text());
            }).show();
        });
		
		$('.searchable tr').live('hover',function () {
				//alert("Yo");
		});
		
		
		
		
	
		
		$("#home").live('click', function() {
                 var output = $("#output");    
				 var template = $("#test1").html();
				 var data1 = '<div class="input-group"> <span class="input-group-addon">Filter</span><input id="filter" type="text" class="form-control" placeholder="Type here..."></div><table class="table">    <thead>        <tr>            <th>Position</th>            <th>Name</th>            <th>Win</th>            <th>Lost</th>			<th>Best Laptime</th>        </tr>    </thead>    <tbody class="searchable">        <tr>            <td>1</td>            <td>Max</td>            <td>10</td>            <td>2</td>			<td>2:11.793</td>   </tr>        <tr>            <td>2</td>            <td>Irene</td>            <td>10</td>            <td>3</td>			<td>2:12.793</td>        </tr>        <tr>		    <td>3</td>            <td>Victor</td>            <td>10</td>            <td>5</td>			<td>2:13.793</td>        </tr>        <tr>            <td>4</td>            <td>Adil</td>            <td>10</td>            <td>6</td>			<td>2:14.793</td>        </tr>    </tbody></table>';
				// var t = Mustache.render(template, data1);
				 $("#output").html(data1);
           });
    }(jQuery));
	
	
	
	
});



