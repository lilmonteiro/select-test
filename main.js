document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".start-btn").addEventListener("click", function() {
        console.log("botao")
        document.addEventListener('mousedown', function() {
            console.log("SELECIONADO start")
        })
        document.addEventListener('mouseup', function() {
            console.log("SELECIONADO end")
        })
    })

})


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