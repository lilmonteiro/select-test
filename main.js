var textObj, selText

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".start-btn").addEventListener("click", function() {
        console.log("botao")
        document.addEventListener('mouseup', function() {
            getTextEventHandler();

        })
        document.querySelector(".change-color-btn").addEventListener("click", changeColor)
    })

})

var getTextEventHandler = function() {
    textObj = window.getSelection() // objeto de texto
    selText = textObj.toString() // texto selecionado
    console.log(selText)
        // selObj = window.getSelection()
        // selectedText = selObj.toString()
}

var changeColor = function(event) {
    var parentClassName = textObj.focusNode.parentElement.className
    var className='.'+ parentClassName;
    var parent= document.querySelector(className.toString())
    parent.style.color = "magenta";
    console.log(className, parent)
}

// var selObj=window.getSelection()
// var selectedText = selObj.toString()
// selObj=window.getSelection()
// selectedText = selObj.toString()
// selObj=window.getSelection()
// Selection {anchorNode: text, anchorOffset: 44, focusNode: text, focusOffset: 40, isCollapsed: false, …}
// selectedText = selObj.toString()
// "empty string ("") or using Selection.toString(), this object returns the text selected."



// window.document.addEventListener('onselect', function(){console.log(1)})
//-----------//
// function getSelectedText() {
//     var text = "";
//     if (typeof window.getSelection != "undefined") {
//         text = window.getSelection().toString();
// if(text==""){
// alert("hey")}
//     } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
//         text = document.selection.createRange().text;
//     }
//     return text;
// }

// function doSomethingWithSelectedText() {
//     var selectedText = getSelectedText();
//     if (selectedText) {
//         alert("Got selected text " + selectedText);
//     }
// }

// document.onmouseup = doSomethingWithSelectedText;
// document.onkeyup = doSomethingWithSelectedText;
