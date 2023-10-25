var first_dz = document.getElementById('first_dz');
var sec_dz = document.getElementById('sec_dz');
var first_tb = document.getElementsByClassName('table-cell');
var sec_tb = document.getElementsByClassName('table-cell-alternate');

var Is_sec_img_gel = false;

var first_button = document.getElementsByClassName('bt_niz')[0];
var sec_button = document.getElementsByClassName('bt_niz')[1];

var first_img = document.getElementsByClassName('image')[0];
var sec_img = document.getElementsByClassName('image')[1];
var third_img = document.getElementsByClassName('image')[2];

first_dz.addEventListener("mouseover",
function() 
{
  first_dz.style.color = "red";
  first_dz.style.fontSize = "30px";
});
first_dz.addEventListener("mouseout",
function() 
{
  first_dz.style.color = "black";
  first_dz.style.fontSize = "15px";
});


sec_dz.addEventListener("mouseover",
function() 
{
  sec_dz.style.paddingRight = "3cm";
  sec_dz.style.textIndent = "2.5cm";
});
sec_dz.addEventListener("mouseout",
function() 
{
  sec_dz.style.paddingRight = "0cm";
  sec_dz.style.textIndent = "0cm";
});


first_tb[0].addEventListener("mouseover",
function() 
{
  first_tb[0].style.backgroundColor= "red";
});
first_tb[0].addEventListener("mouseout",
function() 
{
  first_tb[0].style.backgroundColor = "green";
});
first_tb[1].addEventListener("mouseover",
function() 
{
  first_tb[1].style.backgroundColor= "red";
});
first_tb[1].addEventListener("mouseout",
function() 
{
  first_tb[1].style.backgroundColor = "green";
});
first_tb[2].addEventListener("mouseover",
function() 
{
  first_tb[2].style.backgroundColor= "red";
});
first_tb[2].addEventListener("mouseout",
function() 
{
  first_tb[2].style.backgroundColor = "green";
});


sec_tb[0].addEventListener("mouseover",
function() 
{
  sec_tb[0].style.backgroundColor= "purple";
});
sec_tb[0].addEventListener("mouseout",
function() 
{
  sec_tb[0].style.backgroundColor = "yellow";
});
sec_tb[1].addEventListener("mouseover",
function() 
{
  sec_tb[1].style.backgroundColor= "purple";
});
sec_tb[1].addEventListener("mouseout",
function() 
{
  sec_tb[1].style.backgroundColor = "yellow";
});
sec_tb[2].addEventListener("mouseover",
function() 
{
  sec_tb[2].style.backgroundColor= "purple";
});
sec_tb[2].addEventListener("mouseout",
function() 
{
  sec_tb[2].style.backgroundColor = "yellow";
});

first_button.addEventListener("click",
function() 
{
  if(Is_sec_img_gel==false)
  {
    Is_sec_img_gel = true;
    sec_img.style.display = "none";
    first_button.textContent = "Показать";
    third_img.style.setProperty('--left-stile','30.25%');
    
  }
  else 
  {
    Is_sec_img_gel = false;
    sec_img.style.display = "inline";
    first_button.textContent = "Спрятать"
    third_img.style.setProperty('--left-stile','0%');
  }
});

sec_button.addEventListener("click",
function() 
{
  var Prom = first_img.style.zIndex;
  first_img.style.zIndex= third_img.style.zIndex;
  third_img.style.zIndex = Prom;
});


let _Colors = [255];
let colInx = 0;
var _bool = false;
var body = document.querySelector('body');
for(var i =0; i<255;i++)
{
  _Colors[i] = 'rgb(255,0,' + i.toString()+')';
}
(function changeColor()
{
  if(colInx==254)
  {
    _bool = true;
  }
  if(colInx==0)
  {
    _bool=false;
  }
  if(_bool==false)
  {
    body.style.setProperty('--main-color',_Colors[(colInx++)%255]);
  }
  else
  {
    body.style.setProperty('--main-color',_Colors[(colInx--)%255]);
  }
setTimeout(changeColor, 0.01);
})();