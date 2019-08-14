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

  var content1 = "من الوسائل الالكترونية المساعدة في تسويق الذات ما يلي";
  var sulotion1 ="الاشتراك في شركات التوظيف الموجودة على شبكات وبرامج الانترنت";
  var op11 ="الاشتراك في شركات التوظيف الموجودة على شبكات وبرامج الانترنت";
  var op21 ="الاشتراك في المجموعات البريدية الخاصة بالباحثين عن وظائف";
  var op31 ="متابعة الصحف والمواقع والمجلات لتتبع الشركات التي تبحث عن موظفين";
  var op41 ="التوجه الى الشركات وتقديم سيرتك الذاتية حتى وإن لم تكن طالبه وظائف الآن";

  var content2 = "تسويقك ذاتك من خلال التسويق عبر محركات البحث , تكون كلها من الناحية المالية";
  var sulotion2="بعضها مجانى والبعض الآخر مدفوع الآجر";
  var op12 ="مجانية كلها";
  var op22 ="بعضها مجانى والبعض الآخر مدفوع الآجر";
  var op32 ="مدفوعة الأجر كلها";
  var op42 ="تحقق لك عائد";

  var content3 = "تعتبر .......................... من أوائل منصات التجارة الالكترونية للمستخدمين العرب والتي تهدف لمساعدتهم على تحقيق دخل من ابتكاراتهم";
  var sulotion3 ="منصة إسناد";
  var op13 = "Guru "+"موقع";
  var op23 ="موقع خمسات";
  var op33 ="منصة إسناد";
  var op43 ="موقع خدمتي";



  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);

  const questions = [q1 , q2 , q3 ];
