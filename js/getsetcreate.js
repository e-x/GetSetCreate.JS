//  GetSetCreate 
/*
 Author      : e-x @ github
 */

// Create element with setted type,id and class
 
function Create(e,id,cls){    
 
    var a = document.createElement(e);
    if (id !="" && id != " " && id != "undefined" && id != null ) {a.setAttribute("id",id);}
    if (cls !="" && cls != " " && cls != "undefined" && cls != null ) {a.setAttribute("class",cls);}    
    return a;
    
}

function Set(e,atr,val){    
    var t=Get(e); 
    if (t) { t.setAttribute(atr,val);  } 
}

// Get element by ID

function Get(e){ 
    var a = document.getElementById(e);
    if ( a ) { return a; }
    else { 
        console.error("Cant Get element " + a);
        return "";
    }
 
}

// Delete element by ID

function Del(e){
    var a = Get(e); 
    if ( a ) {
        var p = a.parentNode;
        p.removeChild(a);
    }  
}

// Set focus by ID

function FocusSet(elm){ var t = Get(elm); if ( t ) { t.focus(); } }

// Simple cookie, Local and Sessions Store

function CookieSet(a){
    document.cookie = a;
}
function CookieGet(){
    var a = document.cookie;
    
    return a;
}
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

// Fade animation
function FadeIn(e){
    var a = document.getElementById(e);
    var c = a.getAttribute("class");
    var q = c.replace("transparent","untransparent");
    a.setAttribute("class",q);
}

function FadeOut(e){
    var a = document.getElementById(e);
    var c = a.getAttribute("class");
    var q = c.replace("untransparent","transparent");
    a.setAttribute("class",q);
}
