

function Create(e){
    
    return document.createElement(e);
    
}

function SetID(e,atr,val){    

    if (e) { e.setAttribute(atr,val); }

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

function Drop(){}
