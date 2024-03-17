function stringChop(str, size) {
  let arr = []
	let s = ""
	for(let i=0;i<str.length;i++){
		s += str[i]
		if(s.length == size || i == str.length-1){
			arr.push(s)
			s = ""
		}
	}
	return arr
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
