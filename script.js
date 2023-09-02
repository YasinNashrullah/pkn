// Mendapatkan elemen-elemen yang dibutuhkan
const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const result = document.getElementById("result");

// Membuat fungsi untuk mengubah nama menjadi angka
function nameToNumber(name) {
  name = name.replace(/\s/g, "").toUpperCase();
  return name.length;
}

function generateQuestions(total) {
  let questions = [];
  let number = 1;
  // Melakukan perulangan sebanyak 16 kali
  for (let i = 0; i < 14; i++) {
    let question = {};
    switch (number) {
      case 1:
        question.question = "Apa itu pelanggaran kesepakatan? Jelaskan pengertian dan contoh konkret yang terjadi di Indonesia! Kemudian, jelaskan dampak positif dan negatif dari pelanggaran kesepakatan bagi pihak-pihak yang terlibat dan masyarakat secara umum! Selanjutnya, jelaskan cara mengukur atau menilai dampak positif dan negatif dari pelanggaran kesepakatan! Terakhir, jelaskan ukuran atau kriteria yang dapat digunakan untuk mengukur atau menilai dampak positif dan negatif dari pelanggaran kesepakatan!";
        break;
      case 2:
        question.question = "Jelaskan pengadilan HAM internasional, apa saja fungsi dan kewenangannya. Bagaimana cara membentuk, mengorganisir atau mengoperasikan pengadilan HAM internasional. Sebutkan dan jelaskan pihak yang dapat mengajukan, menerima atau menangani perkara di pengadilan HAM internasional. Syarat-syarat apa saja yang harus dipenuhi untuk mengajukan, menerima attau menangani perkara di pengadilan HAM internasional.";
        break;
      case 3:
        question.question = "Perdamaian dunia adalah kondisi di mana tidak ada konflik bersenjata atau kekerasan antara negara-negara atau kelompok-kelompok di dunia. Jelaskan apa saja faktor-faktor yang mempengaruhinya! Kemudian, tunjukkanlah bagaimana cara menciptakan, mempertahankan, atau meningkatkan perdamaian dunia. Selanjutnya, sebutkan dan jelaskan pihak-pihak yang berkepentingan dalam perdamaian dunia. Terakhir, analisislah manfaat dan tantangan dari perdamaian dunia.";
        break;
      case 4:
        question.question = "Kesepakatan damai adalah perjanjian yang dibuat oleh pihak-pihak yang terlibat dalam konflik bersenjata atau kekerasan untuk mengakhiri permusuhan dan menciptakan perdamaian. Jelaskan apa saja syarat-syarat yang harus dipenuhi untuk membuat kesepakatan damai. Kemudian, tunjukkanlah bagaimana cara mencapai, menjaga, atau memperkuat kesepakatan damai. Selanjutnya, sebutkan dan jelaskan pihak-pihak yang terlibat dalam kesepakatan damai. Terakhir, jelaskan peran dan tanggung jawab pihak-pihak itu dalam kesepakatan damai.";
        break;
      case 5:
        question.question = "APEC (Asia-Pacific Economic Cooperation) adalah forum kerjasama ekonomi antar negara-negara di kawasan Asia Pasifik. Jelaskan apa saja tujuan, kegiatan, dan manfaatnya! Kemudian, tunjukkanlah bagaimana cara menjadi anggota, keluar, atau dihapus dari APEC. Selanjutnya, sebutkan dan jelaskan pihak-pihak yang memiliki hak suara, veto, atau pengaruh dalam APEC. Terakhir, analisislah prestasi dan kritik terhadap APEC. Juga, analisislah dampak APEC terhadap Indonesia dan negara-negara lain di kawasan Asia Pasifik.";
        break;
      case 6:
        question.question = "Pengadilan HAM internasional adalah lembaga peradilan yang dibentuk untuk menangani perkara-perkara yang berkaitan dengan pelanggaran HAM secara internasional. Jelaskan apa saja fungsi dan kewenangannya. Kemudian, tunjukkanlah bagaimana cara membentuk, mengorganisir, atau mengoperasikan pengadilan HAM internasional. Selanjutnya, sebutkan dan jelaskan pihak-pihak yang dapat mengajukan, menerima, atau menangani perkara di pengadilan HAM internasional. Terakhir, sebutkan dan jelaskan syarat-syarat yang harus dipenuhi untuk mengajukan, menerima, atau menangani perkara di pengadilan HAM internasional.";
        break;
      case 7:
        question.question = "Apa itu kesepakatan internasional? Jelaskan jenis-jenis kesepakatan internasional! Kemudian, jelaskan cara membuat, mengubah, atau mengakhiri kesepakatan internasional! Selanjutnya, jelaskan pihak-pihak yang berwenang untuk membuat, mengubah, atau mengakhiri kesepakatan internasional! Terakhir, jelaskan syarat-syarat yang harus dipenuhi untuk membuat, mengubah, atau mengakhiri kesepakatan internasional!";
        break;
      case 8:
        question.question = "Apa itu hukum internasional? Jelaskan pengertian dan contoh konkret yang terjadi di Indonesia! Kemudian, jelaskan sumber-sumber hukum internasional! Selanjutnya, jelaskan pihak-pihak yang berwenang untuk membuat, mengubah, atau mengakhiri hukum internasional! Terakhir, jelaskan syarat-syarat yang harus dipenuhi untuk membuat, mengubah, atau mengakhiri hukum internasional!";
        break;
      case 9:
        question.question = "Dalam membuat kesepakatan, ada beberapa prinsip dasar yang harus diperhatikan. Sebutkan dan jelaskan prinsip-prinsip tersebut. Kemudian, jelaskan mengapa prinsip-prinsip itu penting untuk diikuti. Selanjutnya, tunjukkanlah bagaimana cara mewujudkan prinsip-prinsip itu dalam kenyataan. Terakhir, berikan contoh konkret yang menunjukkan penerapan prinsip-prinsip itu dalam membuat kesepakatan!";
        break;
      case 10:
        question.question = "PBB (Perserikatan Bangsa-Bangsa) adalah organisasi internasional yang dibentuk untuk menjaga perdamaian dan keamanan dunia, serta kerjasama antar negara-negara dalam bidang politik, ekonomi, sosial, budaya, dan kemanusiaan. Jelaskan apa saja tujuan, struktur, dan fungsi-fungsinya! Kemudian, tunjukkanlah bagaimana cara menjadi anggota, keluar, atau dihapus dari PBB. Selanjutnya, sebutkan dan jelaskan pihak-pihak yang memiliki hak suara, veto, atau pengaruh dalam PBB. Terakhir, analisislah prestasi dan kritik terhadap PBB.";
        break;
      case 11:
        question.question = "Proses penyelesaian kasus pelanggaran HAM internasional adalah proses hukum yang dilakukan oleh pengadilan HAM internasional untuk menentukan kebenaran dan keadilan dari kasus pelanggaran HAM yang melibatkan subjek-subjek hukum internasional. Jelaskan apa saja tahapan atau langkah-langkah yang harus dilalui dalam proses penyelesaian kasus pelanggaran HAM internasional. berikan contoh nyata yang pernah ditangani oleh pengadilan HAM internasional. Selanjutnya, analisislah apa saja kendala atau tantangan yang dihadapi dalam proses penyelesaian kasus pelanggaran HAM internasional. Juga, analisislah bagaimana cara mengatasi atau mengantisipasi kendala atau tantangan itu. Terakhir, berikan pendapat Anda, apakah Anda puas dengan hasil penyelesaian kasus pelanggaran HAM internasional yang pernah ditangani oleh pengadilan HAM internasional?";
        break;
      case 12:
        question.question = "Pelanggaran kesepakatan dapat memberikan dampak positif dan negatif bagi pihak-pihak yang terlibat dan masyarakat secara umum. Jelaskan apa saja dampak positif dan negatif tersebut. Kemudian, tunjukkanlah bagaimana cara mengukur atau menilai dampak positif dan negatif tersebut. Selanjutnya, sebutkan dan jelaskan ukuran atau kriteria yang dapat digunakan untuk mengukur atau menilai dampak positif dan negatif tersebut. Terakhir, berikan contoh konkret yang menunjukkan dampak positif dan negatif dari pelanggaran kesepakatan! Berikan pendapat Anda, apakah dampak positif dari pelanggaran kesepakatan dapat melebihi dampak negatifnya?";
        break;
      case 13:
        question.question = "ASEAN (Association of Southeast Asian Nations) adalah organisasi kerjasama antar negara-negara di kawasan Asia Tenggara. Jelaskan apa saja tujuan, prinsip, dan kerjasamanya! Kemudian, tunjukkanlah bagaimana cara menjadi anggota, keluar, atau dihapus dari ASEAN. Selanjutnya, sebutkan dan jelaskan pihak-pihak yang memiliki hak suara, veto, atau pengaruh dalam ASEAN. Terakhir, analisislah prestasi dan kritik terhadap ASEAN. Juga, analisislah dampak ASEAN terhadap Indonesia dan negara-negara lain di kawasan Asia Tenggara.";
        break;
      case 14:
        question.question = "Apa itu kesepakatan dan norma? Jelaskan perbedaan dan persamaan antara keduanya! Kemudian, jelaskan pengaruh kesepakatan dan norma terhadap sikap dan perilaku individu dan kelompok dalam masyarakat dan sekolah! Selanjutnya, berikan argumen Anda tentang apakah kesepakatan dan norma itu bersifat absolut atau relatif, serta berikan alasan dan contoh untuk mendukung argumen Anda!";
        break;
      //   case 15:
      //     question.question = "";
      //     break;
      //   case 16:
      //     question.question = "";
      //     break;
    }

    questions.push(question);
    number++;
    // Jika nomor soal melebihi 16, maka kembali ke 1
    if (i >= 14) {
      i %= 14;
    }
  }
  return questions;
}

let lastQuestionNumber = null;
let usedQuestionNumbers = []; // Menyimpan nomor-nomor soal yang sudah muncul


// Membuat fungsi untuk menampilkan soal-soal
function displayQuestions(questions) {
  result.innerHTML = "";
  result.style.display = "block";

  // Mendapatkan total dari input1, input2, dan input3
  let total = Math.ceil((Number(input1.value) + nameToNumber(input2.value) + Number(input3.value)) / 3);

  // Menampilkan hanya satu soal berdasarkan total
  let i = total - 1; // Mengurangi satu karena indeks array dimulai dari nol

  // Menghitung nomor soal yang benar jika lebih dari 16
  if (i >= 14) {
    i %= 14;
  }

  // Mencari nomor soal yang belum muncul sebelumnya
  while (usedQuestionNumbers.includes(i)) {
    i = (i + 1) % 14;
  }

  // Menandai nomor soal ini sebagai sudah muncul
  usedQuestionNumbers.push(i);

  // Simpan nomor soal terakhir
  lastQuestionNumber = i;

  // Membuat elemen p untuk menampilkan nomor soal dan pertanyaan
  let p = document.createElement("p");
  p.textContent = `Soal ${i + 1}: ${questions[i].question}`;

  result.appendChild(p);
}

function processInput(event) {
  event.preventDefault();
  result.innerHTML = "";
  let value1 = Number(input1.value);
  let value2 = nameToNumber(input2.value);
  let value3 = Number(input3.value);
  let total = Math.ceil((value1 + value2 + value3) / 3);
  let questions = generateQuestions(total);
  displayQuestions(questions);
}

// Menambahkan event listener untuk form
form.addEventListener("submit", processInput)