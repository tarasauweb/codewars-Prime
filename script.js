function isPrime(num) {
	let result = true;
	if(num>1){
		for(let i = 2 , maxNum = Math.sqrt(num) ; i<=maxNum;i++){
			if(num% i === 0){
			result = false
			}
		
		}

	}
	else if(num <=0 || num === 1 ) {
		result = false
	}
	else {
		return err
	}
	return result
}
isPrime(1)