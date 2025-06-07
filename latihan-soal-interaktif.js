// Interaktif latihan soal 10 soal
document.addEventListener("DOMContentLoaded", function() {
    // Kunci jawaban 10 soal
    const kunciJawaban = [
        // 1
        (ans) => /x\s*=?\s*3/.test(ans) && /y\s*=?\s*2/.test(ans),
        // 2
        (ans) => (/x\s*=?\s*5300/.test(ans) && /y\s*=?\s*1800/.test(ans)) || /7100/.test(ans) || /5\.300.*1\.800/.test(ans),
        // 3
        (ans) => (/x\s*=?\s*32\s*\/\s*13/.test(ans) && /y\s*=?\s*-?1\s*\/\s*13/.test(ans)) || 
                  (/x\s*=?\s*2[,.]46/.test(ans) && /y\s*=?\s*-?0[,.]07/.test(ans)),
        // 4
        (ans) => /12/.test(ans) && /8/.test(ans),
        // 5
        (ans) => (/panjang\s*=?\s*13/.test(ans) && /lebar\s*=?\s*7/.test(ans)) || 
                 (/p\s*=?\s*13/.test(ans) && /l\s*=?\s*7/.test(ans)) ||
                 (/13.*7/.test(ans)),
        // 6
        (ans) => (/x\s*=?\s*52\s*\/\s*7/.test(ans) && /y\s*=?\s*6\s*\/\s*7/.test(ans)) || 
                 (/x\s*=?\s*7[,.]?42/.test(ans) && /y\s*=?\s*0[,.]?857/.test(ans)),
        // 7
        (ans) => (/buku\s*=?\s*2600/.test(ans) && /pensil\s*=?\s*4000/.test(ans)) ||
                 (/2\.600.*4\.000/.test(ans)) || 
                 (/x\s*=?\s*2600/.test(ans) && /y\s*=?\s*4000/.test(ans)),
        // 8
        (ans) => (/15/.test(ans) && /10/.test(ans)),
        // 9
        (ans) => (/motor\s*=?\s*40/.test(ans) && /mobil\s*=?\s*20/.test(ans)) ||
                 (/40.*20/.test(ans)),
        // 10
        (ans) => (/ayah\s*=?\s*37/.test(ans) && /anak\s*=?\s*9/.test(ans)) ||
                 (/37[.,]3/.test(ans) && /9[.,]3/.test(ans)) ||
                 (/a\s*=?\s*112\s*\/\s*3/.test(ans) && /k\s*=?\s*28\s*\/\s*3/.test(ans))
    ];

    // Loop ke 10 soal
    document.querySelectorAll("#latihan .quiz-question").forEach(function(soal, idx) {
        if (idx > 9) return;

        const btn = soal.querySelector(".check-answer");
        const textarea = soal.querySelector(".essay-answer");
        const feedback = soal.querySelector(".feedback");

        feedback.style.display = "none";
        btn.addEventListener("click", function() {
            const jawaban = textarea.value.replace(/\s+/g,"").replace(/,/g,".").toLowerCase();
            const benar = kunciJawaban[idx](jawaban);

            feedback.style.display = "block";
            let pesan = "";
            if (benar) {
                pesan = `<div style="color:#1a7f37;"><strong>Jawaban kamu benar! 🎉</strong></div>`;
            } else {
                pesan = `<div style="color:#e74c3c;"><strong>Jawabanmu belum tepat, tetap semangat ya! 💪</strong></div>`;
            }
            // Sisipkan pesan sebelum pembahasan
            feedback.innerHTML = pesan + feedback.innerHTML.replace(/<div.*<\/div>/, '');

            textarea.disabled = true;
            btn.disabled = true;
        }, {once: true});
    });
});
