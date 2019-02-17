function repeator(){
  document.getElementById("word-form").addEventListener("submit", function(e){
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
        text: 'Please enter number',
      });       
    } 
    else if(number == 0 || number > 2000){
      swal({
        type: 'error',
        title: 'Range',
        text: 'Please enter from range (1-2000)',
      });       
    }
    // final output
    else{
      document.querySelector('#output').innerHTML = '';
      for(var i = 0; i < number; i++){
        document.querySelector('#output').innerHTML += text + '&nbsp;';
      }  
      document.getElementById('count').innerHTML = number;
    }          
  });
}
function copyText(){
	var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
  swal({
    type: 'success',
    title: 'Text Copied',
  });  
  document.getElementById('count').innerHTML = '';
  document.querySelector('#output').innerHTML = '';
  document.getElementById("word-form").reset();
}
