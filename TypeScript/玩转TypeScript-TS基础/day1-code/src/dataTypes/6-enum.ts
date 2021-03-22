// let gender:number = 1;    // 1：男，2：女
// if(gender==1) {   // 容易忘记1表示的是什么

// }else {}


enum Gender {Male, Female};  // enum Gender {Male=0, Female=1};

if(Gender.Male) {
  console.log("男");
}else {
  console.log("女")
}

// enum Gender {Male=1, Female};   // Female会从2开始