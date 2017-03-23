

function Create(e){
    
    return document.createElement(e);
    
}

function SetID(e,val){    

    if (e) { e.setAttribute("id",val); }

}

function Set(e,atr,val){    
    var t=document.getElementById(e);
    if (t)  { t.setAttribute(atr,val);  } 
}

function Get(e){ 
    
    var a = document.getElementById(e)
    if ( a  ) { 
        return a; 
    } else { 
        return 0;
    }
}

function StoreSet(a,b){ 
    window.localStorage.setItem(a,b); 
}

function StoreGet(a) { 
    var e=window.localStorage.getItem(a); 
    if ( e ) {
        return e; 
    }else { 
        return ""; 
    }
}

function SessSet(a,b){
    
    window.sessionStorage.setItem(a,b);
    
}

function SessGet(a){
    
    var e=window.sessionStorage.getItem(a); 
    if ( e ) {
        return e; 
    }else { 
        return ""; 
    }
    
}
 
 
// Create element with setted type,id and class
 
function Create(e,id,cls){    
 
    var a = document.createElement(e);
    if (id !="" && id != " " && id != "undefined" && id != null ) {a.setAttribute("id",id);}
    if (cls !="" && cls != " " && cls != "undefined" && cls != null ) {a.setAttribute("class",cls);}    
     return a;
    
}

// Set element attribute

function Set(e,atr,val){    
    var t=document.getElementById(e); 
    if (t)  { t.setAttribute(atr,val);  } 
}

// Get element 

function Get(e){ 
    var a = document.getElementById(e);
    if ( a  ) { return a; }
    else { return 0;}
}

// Delete element 

function Del(e){
    var a = Get(e);
    
    var p = a.parentNode;
    console.log("DEL child " + a.id + " fom : parent " + p.id );
    
    p.removeChild(a);
    
}

// Set focus 

function FocusSet(elm){ var t = Get(elm); t.focus(); }

// Local and Sessions Store

function StoreSet(a,b){ window.localStorage.setItem(a,b); }

function StoreGet(a) { 
    var e=window.localStorage.getItem(a);
    if (e) {return e; }else { return ""; }
}

function SessSet(a,b){   
    
    window.sessionStorage.setItem(a,b);
    
}

function SessGet(a){ 
    var e=window.sessionStorage.getItem(a);
    if (e) {return e; }else { return ""; }
}