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

  var content1 = "تتمثل الخطوة الأولى من خطوات تطوير القدرات والمهارات في";
  var sulotion1 ="التعود على كثرة القراءة";
  var op11 ="عدم القراءة";
  var op21 ="التقليل من القراءة";
  var op31 ="التعود على كثرة القراءة";
  var op41 ="عدم الاهتمام بالقراءة";

  var content2 = "من مؤشرات نجاح عملية تطوير الذات والقدرات ما يلي";
  var sulotion2="زيادة الثقة بالنفس";
  var op12 ="زيادة الثقة بالنفس";
  var op22 ="ضعف الثقة بالنفس";
  var op32 ="عدم الثقة بالنفس";
  var op42 ="انعدام الثقة بالنفس";

  var content3 = "من ضمن المهارات التي يجب أن تتعرف عليها وتكتبها أثناء عملية اكتشاف الذات ما يلي";
  var sulotion3 ="كل ما سبق";
  var op13 ="مهارات التواصل";
  var op23 ="مهارات حل المشكلات";
  var op33 ="كل ما سبق";
  var op43 ="مهارات التفكير والإبداع والتخطيط";

  var content4 =  "من ضمن طرق تطوير النفس والقدرات ما يلي";
  var sulotion4 = "الانتشار بين الناس والتعامل معهم";
  var op14 ="الانتشار بين الناس والتعامل معهم";
  var op24 ="الانعزال عن الناس";
  var op34 ="تجنب التعامل مع الناس";
  var op44 ="التعامل مع الناس في أضيق الحدود الممكنة";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

