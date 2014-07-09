/*Ask for user DOB*/
var prompt = require('sync-prompt').prompt;
var dob = prompt('DOB (mm/dd/yyyy): ');

/*Use formulas to get today's date and format today's date and DOB to be the same*/
dob = new Date(dob);
var today = new Date();

var birthMonth = dob.getMonth() + 1;
var birthDay = dob.getDate();
var birthYear = dob.getFullYear();

var bd = birthMonth + '/' + birthDay + '/' + today.getFullYear();
bd = new Date(bd);

/*Calculate age*/
var age = today.getFullYear() - dob.getFullYear();

if(today.getTime() < bd.getTime()){
  age-- ;
}

/*Age statement*/
console.log('You are ' + age + ' years old.');

/* If/Else statements to determine zodiac sign */
if((birthMonth === 1 && birthDay<=19) || (birthMonth === 12 && birthDay>=21)){console.log('Your zodiac sign is Capricorn!');
}else if((birthMonth === 2 && birthDay<=18) || (birthMonth === 1 && birthDay>=20)){console.log('Your zodiac sign is Aquarius!');
}else if((birthMonth === 3 && birthDay<=20) || (birthMonth === 2 && birthDay>=19)){console.log('Your zodiac sign is Pisces!');
}else if((birthMonth === 4 && birthDay<=20) || (birthMonth === 3 && birthDay>=21)){console.log('Your zodiac sign is Aries!');
}else if((birthMonth === 5 && birthDay<=20) || (birthMonth === 4 && birthDay>=21)){console.log('Your zodiac sign is Taurus!');
}else if((birthMonth === 6 && birthDay<=21) || (birthMonth === 5 && birthDay>=21)){console.log('Your zodiac sign is Gemini!');
}else if((birthMonth === 7 && birthDay<=22) || (birthMonth === 6 && birthDay>=22)){console.log('Your zodiac sign is Cancer!');
}else if((birthMonth === 8 && birthDay<=22) || (birthMonth === 7 && birthDay>=23)){console.log('Your zodiac sign is Leo!');
}else if((birthMonth === 9 && birthDay<=22) || (birthMonth === 8 && birthDay>=23)){console.log('Your zodiac sign is Virgo!');
}else if((birthMonth === 10 && birthDay<=22) || (birthMonth === 9 && birthDay>=23)){console.log('Your zodiac sign is Libra!');
}else if((birthMonth === 11 && birthDay<=21) || (birthMonth === 10 && birthDay>=23)){console.log('Your zodiac sign is Scorpio!');
}else if((birthMonth === 12 && birtDay<=20) || (birthMonth === 11 && birthDay>=22)){console.log('Your zodiac sign is Sagittarius!');
}









