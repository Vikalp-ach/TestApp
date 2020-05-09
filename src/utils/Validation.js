
export function phoneValidation(props){
	var mobileLength = props.mobileLength;
	var currentLength = props.phone
	let { phoneErrorMsg, phoneError, error }  = false;
	if(currentLength === ''){
		phoneError = true;
		phoneErrorMsg = `Mobile number can't be blank`;
	}else if(mobileLength !== currentLength.length){
		phoneError = true;
		phoneErrorMsg = `Mobile number length should be ${mobileLength}`;
	}else{
		phoneError = false
		phoneErrorMsg = false
	}

	return{
		phoneError: phoneError,
		phoneErrorMsg: phoneErrorMsg
	}
}

export function passwordValidation(password){
	let passLength = password.length;
	let {passwordErrorMsg, passwordError, error }  = false;
	if(passLength >= 8 && passLength <= 15){
		passwordError = false;
		passwordErrorMsg = false
	}else{
		passwordError = true;
		passwordErrorMsg = 'Password length should be between 8 to 15 characters';
	}

	return{
		passwordError: passwordError,
		passwordErrorMsg: passwordErrorMsg
	}
}


export function emailValidation(email){
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
	if(reg.test(email) === false){
		return 'Invalid email format'
	}else{
		return 'success'
	}
}