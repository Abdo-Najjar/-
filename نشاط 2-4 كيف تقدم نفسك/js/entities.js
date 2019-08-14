  "use strict"
  class Question{
    constructor(content , sulotion , op1 , op2 , op3 , op4){
      this.content = content;
      this.sulotion= sulotion;
      this.op1 = op1;
      this.op2 = op2;
      this.op3 = op3;
      this.op4 = op4;
    }
  }

 

  var content2 = "من ضمن منصات العمل الحر العربية والتي يمكنك من خلالها تسويق نفسك ما يلي";
  var sulotion2="كل ما سبق";
  var op12 ="موقع خمسات";
  var op22 ="موقع أي خدمة";
  var op32 ="كل ما سبق";
  var op42 ="موقع خدمتي";

  var content3 = "من ضمن منصات العمل الحر الاجنبية والتي يمكنك من خلالها تسويق نفسك ما يلي ";
  var sulotion3 ="كل ما سبق";
  var op13 =" Elance موقع";
  var op23 =" FreeLancer موقع";
  var op33 ="كل ما سبق";
  var op43 =" PeoplePerHour موقع";

  var content4 =  "يقوم موقع أي خدمة بعرض وطلب الخدمات بين المستقلين والأفراد مقابل مبلغ من المال في حدود المظهر ولغة الجسد فقط";
  var sulotion4 = "من 5 إلى 25 دولار";
  var op14 ="من 15 إلى 40 دولار";
  var op24 ="من 50 إلى 150 دولار";
  var op34 ="من 5 إلى 25 دولار";
  var op44 ="من 30 إلى 60 دولار";


  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q2 , q3 ,q4];

