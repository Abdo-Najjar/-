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

  var content1 = "مهارات اللبس الهادف ومهارات الوقوف المتزن والتوافق العقلي والجسدي , تعتبر جميعها من ضمن الصفات الخاصة بـ ................... كأحد مهارات تقديم العروض المرئية وقت التقديم للوظيفة فقط ";
  var sulotion1 ="الكاريزما";
  var op11 ="مهارات إدارة الوقت أثناء العرض";
  var op21 ="مهارات التقديم أثناء العرض";
  var op31 ="الكاريزما";
  var op41 ="مهارات الاتصال الفعال";

  var content2 = "من ضمن عوامل نجاح العروض المرئية ما يلي";
  var sulotion2="اختيار برنامج العرض المناسب لما تقدمه وأن تجيد التعامل معه";
  var op12 ="اختيار برنامج العرض المناسب لما تقدمه وأن تجيد التعامل معه";
  var op22 ="اختيار أحدث البرامج حتى لو كنت لا تجيد التعامل معها";
  var op32 ="اختيار احدث برامج العرض حتى لو كانت غير مناسبة لمحتوى العرض";
  var op42 ="اختيار برامج غير مناسبة ويصعب التعامل معها";

  var content3 = "تتمثل محتويات العرض المرئي الجيد فيما يلي";
  var sulotion3 ="كلمات وصور واصوات وفيديوهات";
  var op13 ="كلمات فقط";
  var op23 ="صور فقط";
  var op33 ="أصوات وفيديوهات فقط";
  var op43 ="كلمات وصور واصوات وفيديوهات";

  var content4 =  "من بين المهارات الواجب توفرها لتقديم العروض المرئية ما يلي ................";
  var sulotion4 = "كل ما سبق";
  var op14 ="التغلب على رهبة المسرح أو المنصة";
  var op24 ="التخطيط للعرض التقديم";
  var op34 ="كل ما سبق";
  var op44 ="الطلاقة اللفظية وفنون اللغة والإلقاء";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

