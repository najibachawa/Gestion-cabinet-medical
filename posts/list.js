filterSelection("all");
function filterSelection(c){
  var x ,i;
  x=document.getElementsByClassName("filterDiv");
  if(c=="all")
    c="";
  for(i=0;i<x.length;i++){
w3RemoveClass(x[i],"show");
  }

}
function w3ddClass(element,name){
  var i,arr1,arr2;
  arr1=element.ClassName.split(" ");
  arr2=name.split(" ");
  for(i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i])==-1){
      element.ClassName +=" "+arr2[i];
    }
  }
}
function w3RemoveClass(element,name){
  var i,arr1,arr2;
  arr1=element.ClassName.split(" ");
  arr2=name.split(" ");
  for(i=0;i<arr2.length;i++){
    while(arr1.indexOf(arr2[i])>-1){
      arr1.splice(arr1.indexOf(arr2[i]),1);
    } 
  }
  element.ClassName=arr1.join(" ")
}