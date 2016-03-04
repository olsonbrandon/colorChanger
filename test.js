
function inverse(theString)
{
  if(theString.length<6||theString.length>6){
    window.alert('You Must Enter a six digit color code');
    document.rin.reset();
    return false;
  }
  var a=theString.slice(0,2);
  var b=theString.slice(2,4);
  var c=theString.slice(4,6);
  var a1=16*giveHex(a.slice(0,1));
  var a2=giveHex(a.slice(1,2));
  a=a1+a2;
  var b1=16*giveHex(b.slice(0,1));
  var b2=giveHex(b.slice(1,2));
  b=b1+b2;
  var c1=16*giveHex(c.slice(0,1));
  var c2=giveHex(c.slice(1,2));
  c=c1+c2;
  var newColor=DecToHex(255-a)+""+DecToHex(255-b)+""+DecToHex(255-c);
  return newColor;
}
var hexbase="0123456789ABCDEF";
function DecToHex(number) {
  return hexbase.charAt((number>> 4)& 0xf)+ hexbase.charAt(number& 0xf);
}
function giveHex(s){
  s=s.toUpperCase();
  return parseInt(s,16);
}

function doClear(theText) {
  if (theText.value == theText.defaultValue) {
  theText.value = "";
  }
}
