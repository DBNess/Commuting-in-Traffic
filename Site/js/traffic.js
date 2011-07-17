


HHH = {};
HHH.Data = {};
///URL


//Object Methods

HHH.LoadGame = function(){
	HHH.PopulatePage(1);	
}

HHH.OptionClick = function(){
	
}


HHH.GetData = function(){
	$.ajax({
		url: "http://izzycjohnston.com/gdihhh/php/cit_json.php",
		dataType: "json",
		crossDomain: "true",
		success: function(data){
			HHH.Data = data;
			console.log(data);
			HHH.LoadGame();
		}
	}) 
}();



//Page Utils

HHH.MouseOverQuestion = function(){

	$("#question").children("button").mouseover(function()
	{
		$(this).toggleClass("highlight");
	});
}

HHH.MouseOverMenu = function(){

	$(".heading").children("button").mouseover(function()
	{
		$(this).toggleClass("menu-highlight");
	});
}

HHH.Transition = function(){
//Transition animation
	$(".photo").fadeOut();
	$(".photo").attr("src", "new url");
	$(".photo").fadeIn();
}


HHH.PopulatePage = function(questionID){

}


HHH.LoadQuestion = function(questionID){
	var question = jlinq.from(HHH.Data.questions)
	.equals("ID", questionID)
	.select();
	$("#question").append('<div class="inside clearfix"><p class="large heading">' + question.question_heading + "</p><p>" + question.content + "</p></div>");
}

HHH.LoadOptions = function(questionID){
	var options = jlinq.from(HHH.Data.options)
	.equals("option_question", questionID)
	.select();
	for(i=0; i < options.length; i++)
	{
		$("#question").append("<option>"+ question.options[i] + "</option>");
	}
}
HHH.LoadFact = function(questionID){
	var fact = jlinq.from(HHH.Data.facts)
	.equals("fact_question", questionID)
	.select();
}











