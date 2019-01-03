function repeator(){
  document.getElementById("word-form").addEventListener("click", function(e){
    e.preventDefault();

    let text = document.querySelector('#text').value;
    let number = document.querySelector('#no').value;
    let output = document.querySelector('#output');

    // input
    if(text == ''){
      swal({
        type: 'error',
        title: 'Empty',
        text: 'Please enter text',
      });    
    } 
    else if(number == ''){
      swal({
        type: 'error',
        title: 'Empty',
        text: 'Please enter a number',
      });       
    } 
    else if(number == 0 || number > 2000){
      swal({
        type: 'error',
        title: 'Range',
        text: 'Please enter in range of (1-2000)',
      });       
    }
    // final output
    else{
      for(var i = 0; i < number; i++){
        document.querySelector('#output').innerHTML += text + '&nbsp;';
      }  
      document.getElementById('count').innerHTML = number;
    }          
  });
}
   
function refresh(){
  document.getElementById('text').value = '';
  document.getElementById('no').value = ''; 
  document.getElementById('output').innerText = '';
} 

function copyText(){
	swal({
    type: 'success',
    title: 'Text Copied',
    showConfirmButton: false,    
  }); 
	var copyText = document.getElementById("output");
	copyText.select();
  document.execCommand("copy");
       	
  refresh();
}
