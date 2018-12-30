function repeator(){
  document.getElementById("word-form").addEventListener("click", function(e){
    e.preventDefault();
    let text = document.querySelector('#text').value;
    let number = document.querySelector('#no').value;
    let output = document.querySelector('#output');

    // input
    if(text === ''){
      alert('Please enter your text');
    }else if(number === ''){
      alert('Please enter a number');
    } 
    // final output
    else{
      for(var i = 0; i < number; i++){
        console.log(number[i]);
        output = text;
        document.querySelector('#output').innerHTML += text + '&nbsp;';
      }
      
      document.getElementById('text').value = '';
      document.getElementById('no').value = '';      
      document.getElementById('count').innerHTML = number;
    }      
  });
}


