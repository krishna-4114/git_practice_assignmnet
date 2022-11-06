function checkPrime(num){
	let count=0;
	for(let i=1;i<=num-1;i++){
		if(num%2==0){
			count++;
		}
	}
	if (count==2){
		console.log(num,"is prime");
	}
	else{
		console.log(num,"is not prime")
	}

}