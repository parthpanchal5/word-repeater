function repeator(){
  document.getElementById("word-form").addEventListener("click", function(e){
    e.preventDefault();

    let text = document.querySelector('#text').value;
    let number = document.querySelector('#no').value;
    let output = document.querySelector('#output');

    // input
    if(text == ''){
      alert('Please enter your text');
    } 
    else if(number == ''){
      alert('Please enter a number (1-2000)');
    } 
    else if(number == 0){
      alert('Enter a non-zero positive integer');
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
  window.location.reload();
} 

function copyText(){
	var copyText = document.getElementById("output");
	copyText.select();
	document.execCommand("copy");
	alert('Text copied to clipboard');	
	refresh();
}


