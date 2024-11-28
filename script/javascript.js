
function validateForm(e) {
  e.preventDefault()
 let fName = document.getElementById('f_name').value
 let lName = document.getElementById('l_name').value
 let lNamee = document.getElementById('l_name').value
 let lNamet = document.getElementById('l_name').value
 let lNames = document.getElementById('l_name').value
 let account = document.getElementById('account').value
 let loan = document.getElementById('loan')
 

  f_name_err = document.getElementById('f_name_err')
  l_name_err = document.getElementById('l_name_err')
  l_name_err = document.getElementById('l_name_err')
  l_name_err = document.getElementById('l_name_err')
  l_name_err = document.getElementById('l_name_err')
  account = document.getElementById('account')

 let isValid = true
 let points = 0

 if (fName === '') {
   f_name_err.textContent ="Current Amout is requried"
   isValid = false
 
  } else if (fName === '30,000' ){
  points += 10
  console.log(points)
 }
 
 if (lName === '') {
   l_name_err.textContent ="Credit History is requried"
  isValid = false
}
else if (lName === 'good' ){
  points += 10
  console.log(points)
 }
 

 if (lNamee === '') {
  l_name_err.textContent ="Last Deposit is requried"
 isValid = false
}
else if (lNamee === 'date' ){
 points += 5
 console.log(points)
}

if (lNamet === '') {
  l_name_err.textContent ="Loan Collection is requried"
 isValid = false
}
else if (lNamet === '' ){
 points += 10
 console.log(points)
}

if (lNames === '') {
  l_name_err.textContent ="Payment period is requried"
 isValid = false
}
else if (lNames === 'date' ){
 points += 5
 console.log(points)
}



if (account === '') {
  account.textContent ="account is requried"
  isValid = false
}
if(isValid && points >= 20) {
  loan.textContent = "Congratulations! "
  console.log(points)

}else{

  loan.textContent = "better luck next time"
}
}

