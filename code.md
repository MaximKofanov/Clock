<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Clock</title>
</head>
<style>
  section.timeClock{
    text-align: center;
  }
  section.timeClock > .wrapperClock{
    border: 1px solid #999;
    border-radius: 4px;
    display: inline-block;
    padding: 0 4px;
    background-color: #FBFFC7;
  }
  .blockNumber{
    min-width: 60px;
    margin: 6px 0;
    padding: 0 12px;
    border: 1px solid #999;
    display: inline-block;
    font-size: 60px;
    line-height: 1.3;
    border-radius: 4px;
    background-color: #fff;
    color: #444;   
  }
</style>
<body>
  <section class="timeClock">
    <div class="wrapperClock" >
      <div class="hour blockNumber">00</div>
      <div class="minutes blockNumber">00</div>
      <div class="seconds blockNumber">00</div>
    </div>
  </section>
  
<script>
  
  var arrayColorTime = ['#D7D8FF','#D7A6FF','#A0A6FF','#7AFFBF','#7A7DBF','#DCDF6E'];

  function getRandomColor(){
    return rand = Math.floor(0 + Math.random() * (arrayColorTime.length + 1 - 0));
  }
  
  var timerId = setTimeout(function tick(){
    var today = new Date;
    var hour = document.getElementsByClassName('hour')[0];
    var minutes = document.getElementsByClassName('minutes')[0];
    var seconds = document.getElementsByClassName('seconds')[0];
    
    hour.innerHTML = today.getHours();
      if(hour.innerHTML.length == 1){hour.innerHTML = '0' + today.gethours();}
    
    minutes.innerHTML = today.getMinutes();
      if(minutes.innerHTML.length == 1){minutes.innerHTML = '0' + today.getMinutes();}
    
    seconds.innerHTML = today.getSeconds(); 
      if(seconds.innerHTML.length == 1){seconds.innerHTML = '0' + today.getSeconds();}
    
    document.getElementsByClassName('wrapperClock')[0].style.backgroundColor = arrayColorTime[getRandomColor()];
    timerId = setTimeout(tick, 1000); 
  }, 0); 

</script>
  
</body>
</html>
