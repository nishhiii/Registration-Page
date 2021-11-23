document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
const elements = document.getElementsByTagName('input')
const errorElement = document.getElementById('error');
const name=document.getElementsByName('name')[0];
const emailLogin=document.getElementsByName('emailLogin')[0];
const passwordLogin=document.getElementsByName('passwordLogin')[0];
const emailSignUp=document.getElementsByName('emailSignUp')[0];
const passwordSignUp=document.getElementsByName('passwordSignUp')[0];
const formLogin=document.getElementById('formLogin');
const formSignUp=document.getElementById('formSignUp');
const cPassword=document.getElementsByName('cPassword')[0];

formLogin.addEventListener('submit' , (e) => {
	console.log('form', emailLogin, passwordLogin)
	e.preventDefault()
	let messageL=[];
	if(emailLogin.value === "" || emailLogin.value == null || passwordLogin.value === "" || passwordLogin.value == null)
	{
		messageL.push('Please Enter Complete Credentials  ');
	}
	else if(emailLogin.value!='nishi@gmail.com' || passwordLogin.value!='142001')
	{
		messageL.push('Wrong Credentials ! ');
	}
	if(messageL.length){
		alert(messageL)
		return false
	}
	formLogin.submit()
})

formSignUp.addEventListener('submit' , (e) => {
	console.log('form',passwordSignUp.value,cPassword.value)
	e.preventDefault()
	let messageS=[];
	if(passwordSignUp.value!==cPassword.value)
	{
		messageS.push('Passwords Do Not Match');
	}
	else if(emailSignUp.value === "" || emailSignUp.value == null || passwordSignUp.value === "" || passwordSignUp.value == null||name.value===""||name.value==null)
	{
		messageS.push('Please Enter Complete Details  ');
	}
	
	if(messageS.length){
		alert(messageS)
		return false
	}
	formSignUp.submit()
})