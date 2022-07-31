
const days = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


  let dayArr = document.getElementsByClassName('day')
  let bars = document.querySelectorAll('.bar')
  function displayChart(){
    for (let i = 0;i<bars.length;i++){
      bars[i].style.height = days[i].amount *2.5+'px'
      bars[i].addEventListener('mouseover',function showAmount(){
          let amount = '$'+days[i].amount
          let amountDisplay = document.createElement('div')
          amountDisplay.classList.add('amount')
          amountDisplay.innerText = amount
          dayArr[i].prepend(amountDisplay)
          removeAmountDisplay(amountDisplay)
      })
    }
  }
  
  displayChart()

  function removeAmountDisplay(amountDisplay){
    for (let i = 0;i<bars.length;i++){
        bars[i].addEventListener('mouseout',function removeAmount(){
          amountDisplay.style.display = 'none'
        })
      }
  }
  
  function showActive(){
    let date = new Date
    let currentDay = date.getDay()
    currentDay==0?currentDay+=6:currentDay-=1
    bars[currentDay].classList.remove('bar')
    bars[currentDay].classList.add('active')
  }
  
  showActive()


  