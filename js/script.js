$(document).ready(function(){

	$(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

    $(function () {
 	 $('[data-toggle="popover"]').popover()
	});

    $("#video").click(function(){
      $("#Vid").each(function(){
        this.pause();
      });
    });

  $("[class$='Read']:eq(0)").click(function(){
  	$("li[id$='Genesis']").fadeIn();
  	$("div.col-md-8 li[id!='Genesis']").hide();
  });

  $("[class$='Read']:eq(1)").click(function(){
  	$("li[id$='Exodus']").fadeIn();
  	$("div.col-md-8 li[id!='Exodus']").hide();
  });

  $("[class$='Read']:eq(2)").click(function(){
    $("li[id$='Leviticus']").fadeIn();
  	$("div.col-md-8 li[id!='Leviticus']").hide();

  });

  $("[class$='Read']:eq(3)").click(function(){
    $("li[id$='Numbers']").fadeIn();
  	$("div.col-md-8 li[id!='Numbers']").hide();
  });

  $("[class$='Read']:eq(4)").click(function(){
    $("li[id$='Deuteronomy']").fadeIn();
  	$("div.col-md-8 li[id!='Deuteronomy']").hide();
  });

  $("[class$='Read']:eq(5)").click(function(){
    $("li[id$='Joshua']").fadeIn();
  	$("div.col-md-8 li[id!='Joshua']").hide();
  });

  $("[class$='Read']:eq(6)").click(function(){
    $("li[id$='Judges']").fadeIn();
  	$("div.col-md-8 li[id!='Judges']").hide();
  });

  $("[class$='Read']:eq(7)").click(function(){
    $("li[id$='Ruth']").fadeIn();
  	$("div.col-md-8 li[id!='Ruth']").hide();
  });

  $("[class$='Read']:eq(8)").click(function(){
    $("li[id$='I Samuel']").fadeIn();
  	$("div.col-md-8 li[id!='I Samuel']").hide();
  });

  $("[class$='Read']:eq(9)").click(function(){
    $("li[id$='II Samuel']").fadeIn();
  	$("div.col-md-8 li[id!='II Samuel']").hide();
  });

  $("[class$='Read']:eq(10)").click(function(){
    $("li[id$='I Kings']").fadeIn();
  	$("div.col-md-8 li[id!='I Kings']").hide();
  });

  $("[class$='Read']:eq(11)").click(function(){
    $("li[id$='II Kings']").fadeIn();
  	$("div.col-md-8 li[id!='II Kings']").hide();
  });

  $("[class$='pRead']:eq(0)").click(function(){
    $("li[id$='Matthew']").fadeIn();
  	$("div.col-md-8 li[id!='Matthew']").hide();
  });

  $("[class$='pRead']:eq(1)").click(function(){
    $("li[id$='Mark']").fadeIn();
  	$("div.col-md-8 li[id!='Mark']").hide();
  });

  $("[class$='pRead']:eq(2)").click(function(){
    $("li[id$='Luke']").fadeIn();
  	$("div.col-md-8 li[id!='Luke']").hide();
  });

  $("[class$='pRead']:eq(3)").click(function(){
    $("li[id$='John']").fadeIn();
  	$("div.col-md-8 li[id!='John']").hide();
  });


  $("[class$='pRead']:eq(4)").click(function(){
    $("li[id$='Romans']").fadeIn();
  	$("div.col-md-8 li[id!='Romans']").hide();
  });


  $("[class$='pRead']:eq(5)").click(function(){
    $("li[id$='Acts(of the Apostles)']").fadeIn();
  	$("div.col-md-8 li[id!='Acts(of the Apostles)']").hide();
  });

  $("[class$='pRead']:eq(6)").click(function(){
    $("li[id$='I Corinthians']").fadeIn();
  	$("div.col-md-8 li[id!='I Corinthians']").hide();
  });

  $("[class$='pRead']:eq(7)").click(function(){
    $("li[id$='II Corinthians']").fadeIn();
  	$("div.col-md-8 li[id!='II Corinthians']").hide();
  });

  $("[class$='pRead']:eq(8)").click(function(){
    $("li[id$='Galatians']").fadeIn();
  	$("div.col-md-8 li[id!='Galatians']").hide();
  });

  $("[class$='pRead']:eq(9)").click(function(){
    $("li[id$='Ephesians']").fadeIn();
  	$("div.col-md-8 li[id!='Ephesians']").hide();
  });

  $("[class$='pRead']:eq(10)").click(function(){
    $("li[id$='Philippians']").fadeIn();
  	$("div.col-md-8 li[id!='Ephesians']").hide();
  });

  $("[class$='pRead']:eq(11)").click(function(){
    $("li[id$='Colossians']").fadeIn();
  	$("div.col-md-8 li[id!='Colossians']").hide();
  });

});