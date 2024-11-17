class ArticleModel {
    constructor() {
        this.articles = [{ id: 1, title: `Збереження номера під час продажу авто`, content: `Багато власників транспортного засобу хочуть залишити собі старий номер під час продажу авто. Особливе значення або таємнича магія, цифри, що запам'ятовуються, або удачливі ініціали номерних знаків змушують автовласника знайти спосіб і людей для вирішення даної проблеми. Сьогодні ця абсолютно послуга законна, тому цілком легально можна залишити собі свій державний номер під час продажу автомобіля.

Щоб зберегти номер під час продажу авто, можна виконати дії, що рекомендуються сервісним центром, самостійно або звернутися до нас. Наша компанія «Autopark» допоможе в оформленні документів, проконсультує чи самостійно виконає всю роботу за вас, заощаджуючи ваш дорогоцінний час. Звертайтесь до нас і ваші номери залишаться з вами!

Що потрібно зробити, щоб залишити свій номер під час продажу авто?
Якщо ви хочете продати свого залізного коня, а пізніше купити нову або вживану машину іншої марки, при цьому залишити свої номери – будь ласка. Для збереження номера під час продажу автомобіля слід зробити таке:

при знятті авто з обліку в сервісному центрі МРЕВ продавець (тепер уже колишній власник) повинен написати заяву спеціальної форми, в якій зазначено необхідність зберегти номерний знак за людиною, а не за транспортним засобом;
після цього номер потрапляє на зберігання в цьому самому центрі. Послуга зберігання знака платна, тому чим швидше ви заберете його, тим менше буде плата. Термін зберігання не обмежений. Про вартість послуги зберігання можна уточнити у сервісному центрі під час написання заяви або на сайті МРЕВ;
номерний знак зберігається до покупки нового автомобіля. Коли авто ставиться на облік, ви вимагаєте видати вам старі номерні знаки. І не потрібно платити за нові.
Послуга доступна всім громадянам, які мають транспортний засіб. Але якщо з номерів була стерта фарба, пластик лопнув, є вм'ятини або інші дефекти, які спровокували втрату первісного вигляду, або вони старого зразка вам можуть відмовити. У такому випадку вам потрібно буде виготовити дублікат або табличку нового зразка, а потім - відправити на зберігання до сервісного центру. Продаж машини може бути з будь-якої з причин – утилізація, зняття з обліку, перепродаж.

Куди звертатися за допомогою?
Autopark.ua пропонує свої послуги, щоб ви змогли залишити державний номер під час продажу авто. Ми виконаємо всю роботу, зберігаючи ваш дорогоцінний час, підготуємо потрібний пакет документів, подбаємо про надійне збереження номерних знаків.

Ціна на послугу у нас невисока, точну вартість можна дізнатися на сайті або зателефонувавши нам. Ми цінуємо вашу довіру та цінуємо свою репутацію.` }];
    }

    getAllArticles() {
        return this.articles;
    }

    addArticle(article) {
        this.articles.push(article);
    }
}

module.exports = new ArticleModel();
