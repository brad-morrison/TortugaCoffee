var dropDown = document.getElementById("drop-down-id");
var activeItem = '';
var mouseOnLogo = 0;


function navEnter(item) {
    
    activeItem = item;
    DropDownOpen();
    
}

function DropDownClose() {
    
    dropDown.style.height = "0px";
    ResetNavColors();
    
    document.getElementById("drop2").style.display = "none";
    document.getElementById("drop3").style.display = "none";
    
}

function DropDownOpen()
{
    var elem = null;
    
    switch(activeItem)
    {
        case "home":
            dropDown.style.height = "0px";
            elem = document.getElementById("1");
            //document.getElementById("drop1").style.display = inherit;
            break;

        case "locations":
            dropDown.style.height = "250px";
            elem = document.getElementById("2");
            document.getElementById("drop2").style.display = "block";
            break;

        case "menu":
            dropDown.style.height = "390px";
            elem = document.getElementById("3");
            document.getElementById("drop3").style.display = "block";
            break;
            
        case "careers":
            dropDown.style.height = "400px";
            elem = document.getElementById("4");
            break;
            
        case "rewards":
            dropDown.style.height = "500px";
            elem = document.getElementById("5");
            break;
            
        case "about":
            dropDown.style.height = "600px";
            elem = document.getElementById("6");
            break;
            
        default:
            dropDown.style.height = "100px";
            elem = document.getElementById("1");
            break;
    }
    
    ChangeColor(elem, "#ebb03b");
}

function ChangeColor(obj, color)
{
    obj.style.color = color;
}

function ResetNavColors()
{
    var x = document.getElementsByClassName("menu-item");
    var i;
    
    for (i=0; i < x.length; i++)
    {
        ChangeColor(x[i], "black");
    }
}
