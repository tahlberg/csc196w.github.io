function bigger(){ //increases font size
    document.getElementById("textbox").style.fontSize = "24px";
}

function fancify(){ //adds bold, blue color, and underline effects to text
    if(document.getElementById("fancy").checked){ //verify button is checked
        document.getElementById("boring").checked = false; //make sure we're not boring
        var element = document.getElementById("textbox");
        element.style.fontWeight = "bold";
        element.style.color = "blue";
        element.style.textDecoration = "underline";
    }
}

function boring(){ //removes effects from text
    if(document.getElementById("boring").checked){ //verify button is checked
        if(document.getElementById("fancy").checked){ //only remove effects if already fancy
            document.getElementById("fancy").checked = false; //remove fancy status
            var element = document.getElementById("textbox");
            element.style.fontWeight = "normal";
            element.style.color = "black";
            element.style.textDecoration = "none";
        }
    }
}

function moo(){
    var element = document.getElementById("textbox");
    element.style.textTransform = "uppercase";
    var text_str = element.value;
    str_parts = text_str.split(".");
    text_str = str_parts.join("-Moo.");
    element.value = text_str;
}

