// ملف الأسئلة - questions.js
// يحتوي على دالة إنشاء الأسئلة

function generateQuestions() {
    const coord = (x, y) => `<span class="math-text">(${x}, ${y})</span>`;
    const qArr = [];
    for (let i = 0; i < 40; i++) {
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        qArr.push({
            t: `ما صورة النقطة ${coord(x, y)} بالانعكاس حول محور x؟`,
            o: [coord(x, -y), coord(-x, y), coord(-x, -y), coord(y, x)],
            c: coord(x, -y)
        });
        qArr.push({
            t: `دوران النقطة ${coord(x, y)} بزاوية 180 درجة حول الأصل يعطي:`,
            o: [coord(-x, -y), coord(-y, x), coord(y, -x), coord(x, -y)],
            c: coord(-x, -y)
        });
    }
    // أسئلة نظرية
    qArr.push({ t: "تركيب انعكاسين حول مستقيمين متوازيين يكافئ:", o: ["إزاحة", "دوران", "تمدد", "انعكاس"], c: "إزاحة" });
    qArr.push({ t: "مقدار التماثل الدوراني للمربع يساوي:", o: ["90", "180", "45", "360"], c: "90" });

    return qArr.sort(() => Math.random() - 0.5).slice(0, 30);
}
