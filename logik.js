
  'use strict';   
    function Change()
{
  var Produkti = document.getElementById('produkts');
  var elements = Produkti.getElementsByTagName('input');
  
  var i = 0;
  
  var PE;
  var input;
  function Ret()
  {
	  var result;
  while(i < 6){
	input = elements[i];
    PE = input.checked;
	if(PE == true)
	{
		result = i;
	}
i++;	
  }
  return result;
  }
  
  var Produkt_Ret = Ret();
  var Produkt_Colori;
  if(Produkt_Ret == 0)
  {
	  Produkt_Colori = 214;
  }
  if(Produkt_Ret == 1)
  {
	  Produkt_Colori = 110;
  }
  if(Produkt_Ret == 2)
  {
	  Produkt_Colori = 20;
  }
  if(Produkt_Ret == 3)
  {
	  Produkt_Colori = 90;
  }
  if(Produkt_Ret == 4)
  {
	  Produkt_Colori = 42;
  }
  if(Produkt_Ret == 5)
  {
	  Produkt_Colori = 123;
  }
  
  var W = document.getElementById('man');
  var M = W.getElementsByTagName('input');
    //ves = ves-0;
   
    var input = M[1];
   var MW = input.checked;
   
    var ves = document.getElementById('vesa').value;
    ves = ves-0;
  if(ves<20){
    document.getElementById('vesa').value = 20;
  }
  if(ves > 230){
    document.getElementById('vesa').value =230;
  }
    var calori;
    var vosrast = document.getElementById('vosrast').value;
    vosrast = vosrast-0;
  if(vosrast<7){
    document.getElementById('vosrast').value = 7;
  }
  if(vosrast > 145){
    document.getElementById('vosrast').value =145;
  }
	var gramm = document.getElementById('gramm').value;
    gramm = gramm-0;
    var result_product = document.getElementById('resultat_1').firstChild.nodeValue = (gramm*Produkt_Colori)/100;
  if(MW==true){
      calori=document.getElementById('resultat_2').firstChild.nodeValue = 10*ves+6.25*158-5*vosrast-161;
    }
  else{
      
    calori=document.getElementById('resultat_2').firstChild.nodeValue = 10*ves+6.25*175-5*vosrast+5;
  }
  
  
}