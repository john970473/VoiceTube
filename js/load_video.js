
$(function () {
	//
	var video_url = Array("oWP9Riq-ZBg", "9bAiXJoNdy0" ,"A_DRNbpsU3Q" ,"ivUOBdHu6VE" ,"jKTZAsDVkzs" ,"uSTNyHkde08"); 
	var video_title = Array("How to introduce yourself", "One thing that makes you a better friend",
	 "Why is the 'Mona Lisa' so famous", "Impractical Jokers - Joe the Genie(Punishment)", 
	 "What it means to be pretty?", "Why isn\'t the world covered in poop?")
	for(let i=0; i<6; i++){
		let html="";
		html += "<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">";
		html += "<div class=\"thumbnail\">"
		html += "<div><a href=\"https://john970473.github.io/"+video_url[i]+"/\"><img src=\"http://img.youtube.com/vi/"+video_url[i]+"/sddefault.jpg\"></a></div>";
		html += "<div><a href=\"https://john970473.github.io/"+video_url[i]+"\" title=\"title\">"+video_title[i]+"</a></div>";
		html += "<div ><span class=\"label label-success\">初級</span><span class=\"label label-default\">中文</span><span class=\"label label-warning\">美國腔</span></div>";
		html += "</div>";
		html += "</div>";
		// $("#show2").append("<div class=\"col-xs-6 col-sm-3\">");
		// $("#show2").append("<div class=\"thumbnail\">");
		// $("#show2").append("<div><a href=\"https://www.youtube.com/watch?v="+video_url[i]+"\"><img src=\"http://img.youtube.com/vi/"+video_url[i]+"/sddefault.jpg\"></a></div>");
		// $("#show2").append("<div><a href=\"http://youtube.com/watch?v="+video_url[i]+"\" title=\"title\">title1</a></div>");
		// $("#show2").append("<div class=\"thumbnail_tag\"><span class=\"label label-success\">初級</span><span class=\"label label-default\">中文</span><span class=\"label label-warning\">美國腔</span></div>");
		// $("#show2").append("</div>");
		// $("#show2").append("</div>");
		$("#show2").append(html);
		//$("#show2").append("</li>")
	}
	/*for(let i=0;i<10;i++){
		$("#show2").append("<iframe id=\"existing-iframe-example\"width=\"640\" height=\"360\"src=\"https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1\"frameborder=\"0\"style=\"border: solid 4px #37474F\"></iframe>")
	}*/

})

/*
voicetube_url:
https://john970473.github.io/oWP9Riq-ZBg/
https://john970473.github.io/9bAiXJoNdy0/
https://john970473.github.io/A_DRNbpsU3Q/
https://john970473.github.io/ivUOBdHu6VE/
https://john970473.github.io/jKTZAsDVkzs/
https://john970473.github.io/uSTNyHkde08/
*/