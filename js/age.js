$("#country li").each(function()
{
	$(this).click(function(){
		var val_get = $(this).data("url")
		$("#image").attr("src",val_get)
	})
})