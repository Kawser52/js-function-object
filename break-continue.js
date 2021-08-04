// var breakPractise=['Apple', 'Bannaa', 'Orange', 'Angur'];
// if(breakPractise.indexOf('Bannaas')==-1){
//  console.log('It does not exit');
// }else{
//     console.log('It exit');
// }

var i=0;
for(i=0;i<10;i++){
    if(i==5){
     break;
    }
    console.log(i);
}

for(i=0;i<10;i++){
    if(i==5){
     continue;
    }
    console.log(i);
}