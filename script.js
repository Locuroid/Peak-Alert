let fetchStat = fetch('https://peakalertapi.locuroid.repl.co/status');

fetchStat
.then(res => res.json())
.then(data => { 
  document.getElementById('statText').innerHTML = data.status
  if(data.status == 'On Peak') {
    document.body.style.backgroundColor = "#d52b1e";
  } else {
    document.body.style.backgroundColor = "#1b9d44";
  }
})