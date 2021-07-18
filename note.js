var a=0;
var row;
function note(){
    var noteText=document.getElementById("note").value;
    var noteTable=document.getElementById("tbl");
    var cutString=noteText.substr(0,10);
    var sm=document.createElement("button");
    sm.innerHTML="Show more..";
    var sl=document.createElement("button");
    sl.innerHTML="Show less..";
    if(a==0){
      row=noteTable.insertRow(-1);
      var cell0=row.insertCell(0);
      sm.addEventListener("click",function(){
        cell0.innerHTML=noteText;
        cell0.appendChild(sl);
        sl.addEventListener("click",function(){
          cell0.innerHTML=cutString;
          cell0.appendChild(sm);
        })
      });
      cell0.innerHTML=cutString;
      cell0.appendChild(sm);
      a=1;
    }else{
      var cell1=row.insertCell(1);
      sm.addEventListener("click",function(){
        cell1.innerHTML=noteText;
        cell1.appendChild(sl);
        sl.addEventListener("click",function(){
          cell1.innerHTML=cutString;
          cell1.appendChild(sm);
        })
      });
      cell1.innerHTML=cutString;
      cell1.appendChild(sm);
      a=0;
      document.getElementById("note").value=" ";
    }
    
    document.getElementById("note").value=" ";
}