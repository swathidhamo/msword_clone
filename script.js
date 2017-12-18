    var a = 0;
    a++;
   
    window.onload = function(){
     	editor.document.designMode = "on";
     }

      function setHighlight(){
     	var color = document.getElementById('color').value;
     	editor.document.execCommand('backcolor',false,color);
      
     	
     }

      function setfont(){
      var color = document.getElementById('color').value;
      editor.document.execCommand('foreColor',false,color);
      
      
     }
 
 
     function set(arg){
      editor.document.execCommand(arg,false,null);
      var STRING = window.frames["editor"].document.body.innerHTML;
      console.log(STRING);
     }
   
      function setImage(){
      var url = "https://";
      var image = prompt("Enter the path",url);
      editor.document.execCommand('insertImage',false,image);
      editor.document.execCommand('enableObjectResizing',false,null);
     }
       
     function changeFont(){
      var font_family = document.getElementById("font_family").value;
      editor.document.execCommand('fontName',false,font_family);
     }
     function setFontSize(){
      var font_size = document.getElementById("font_size").value;
      editor.document.execCommand('fontSize',false,font_size);
     }

    