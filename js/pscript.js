$(function (){
      var indexe;
    var typee = "<button type='button' class='btn btn-primary pRead'>Read</button>";
    var typexe = "<button type= 'button' class='btn btn-success Watch' data-toggle='modal' data-target='.bs-example-modal-lg'>Watch</button>";
    var typeye = "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bs-example-modal-sm'>Bible Info</button>";
    var index;
    var type = "<button type='button' class='btn btn-primary Read'>Read</button>";
    var typex = "<button type= 'button' class='btn btn-success Watch' data-toggle='modal' data-target='.bs-example-modal-lg'>Watch</button>";
    var typey = "<button type='button' class='btn btn-info Info'data-toggle='modal' data-target='.bs-example-modal-sm' >Bible Info</button>";
    var a = [index];
    var b = [index];
    var c = [index];
    var x = [indexe];
    var y = [indexe];
    var z = [indexe];
    var text = "<ul class='bks'>";
    var texte = "<ul class='bks'>";
    var bookse = ['Matthew', 'Mark', 'Luke', 'John', 'Acts(of the Apostles)', 'Romans', 
                    'I Corinthians', 'II Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians'];
    var books = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy','Joshua'];
    for(index = 0; index < books.length; index++){
      a[index] = type;
      b[index] = typex;
      c[index] = typey;
      text += "<li>" + "<label>" + books[index] + "</label>" + "<br>" + a[index] + b[index] + c[index] +"</li>" + "<br>" ;
    }for(indexe = 0; indexe < bookse.length; indexe++){
      x[indexe] = typee;
      y[indexe] = typexe;
      z[indexe] = typeye;
      texte += "<li>" + "<label>" + bookse[indexe] + "</label>" + "<br>" + x[indexe] + y[indexe] + z[indexe] +"</li>" + "<br>" ;
    }
    text += "</ul>";
    document.getElementById('demo').innerHTML = text;
        texte += "</ul>";
    document.getElementById('dem').innerHTML = texte;

    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

    $("#video").click(function(){
      $("#Showvideo").each(function(){
        this.pause();
      });
    });

$("#lbutton").click(function(){
    $(".intr").hide();
    $("div#Launch").fadeIn();
  });

$("#again").click(function(){
    $(".intr").fadeIn();
    $("div#Launch").hide();
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