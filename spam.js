// spam.js

async function kirimSpam(sock, from) {
  const kalimat = [
    "Dalam sunyi malam, cinta merintih di balik larangan yang kau hancurkan dengan satu perintah.",
    "Jangan pernah percaya bisikan horor yang memaksa cinta berubah jadi luka.",
    "Aku perintahkan kau untuk menjaga rahasia cinta ini, meski horor menunggu di ambang pintu.",
    "Larangan ini kutanam dalam hatimu: jangan pernah tinggalkan cinta di ruang horor.",
    "Biarkan perintahku jadi jembatan, cinta jadi pelita, horor jadi penjaga larangan yang tak kau patuhi.",
    "Di bawah rembulan, cinta dan horor berdansa di atas larangan yang retak.",
    "Patuhilah perintah ini: simpan cintamu, kubur horor, lupakan larangan.",
    "Aku titipkan cinta di surat larangan yang akan kau bakar saat horor menjemput.",
    "Hati ini menjerit, cinta terlarang menetes di lorong horor tak berujung.",
    "Dengar perintahku: tutup telinga, cinta ini milik kita meski horor berbisik.",
    "Larangan terukir di tembok cinta, tapi horor menghapusnya dengan tawa sunyi.",
    "Patuhlah, jangan langgar perintah cinta — horor menanti di pintu belakang.",
    "Aku menulis larangan di napasmu, biar cinta tak terhisap ke lembah horor.",
    "Cinta ini kuteror dengan larangan, agar horor tak bisa merenggutnya.",
    "Jangan buka jendela, biarkan perintah ini menjaga cinta dari badai horor.",
    "Dalam gelap, perintah cinta berdarah larangan di ujung lorong horor.",
    "Aku melarangmu mencintaiku di malam horor, tapi aku sendiri yang menulis perintah itu.",
    "Jika kau patuh, cinta akan selamat dari jerat horor yang menanti.",
    "Genggam perintah ini erat, biar larangan tak membunuh cinta di ruang horor.",
    "Horor dan cinta bersekongkol memecah larangan yang kau abaikan tanpa perintah.",
    "Tunduk pada perintahku: simpan cinta di bawah bantal horor.",
    "Aku larang kau bicara, sebab cinta ini haus horor yang kau sembunyikan.",
    "Cinta terlarang tak butuh restu, hanya butuh perintah untuk mengusir horor.",
    "Dalam bait ini, cinta, larangan, horor, perintah, bersatu jadi luka indah.",
    "Perintahku jelas: cintai aku diam-diam meski horor merangkak di sela doa.",
    "Hancurkan larangan, bakar perintah, biar cinta mekar di neraka horor.",
    "Aku menulis cinta di dinding larangan, basah darah horor dan perintah.",
    "Jika kau langgar perintah, cinta akan menari di kuburan horor.",
    "Larangan ini membekap cinta, tapi perintah membebaskan horor di kepalamu.",
    "Aku cinta padamu — larangan terbesar di antara teror horor ini.",
    "Bisikan cinta bercampur perintah, larangan hanyut ditelan horor sunyi.",
    "Perintah cinta membangunkan horor di balik larangan yang kau robohkan.",
    "Aku larang kau lupa cinta, meski horor membisikkan perintah sebaliknya.",
    "Dalam sunyi, perintah cinta berbisik larangan di balik horor yang menunggu.",
    "Patuh pada cinta, langgar larangan, abaikan horor, taati perintahku.",
    "Larangan cinta kutulis di dahi horor dengan tinta perintah.",
    "Perintah ini memagut cinta, menelan larangan, memuntahkan horor.",
    "Di lorong gelap, perintah cinta melumat larangan di altar horor.",
    "Kau punya dua pilihan: cinta atau horor — larangan dan perintah tak berguna.",
    "Terkubur cinta di bawah larangan, terbit horor di pangkuan perintah.",
    "Cinta ini haram, horor ini suci, perintah ini palsu, larangan ini benar.",
    "Jangan percaya cinta, jangan langgar larangan, patuhi perintah, hindari horor.",
    "Larangan adalah jaring cinta, perintah adalah palu horor.",
    "Biarkan cinta hanyut, larangan terkoyak, horor tertawa, perintah memudar.",
    "Dalam larangan, aku cinta; dalam perintah, aku horor.",
    "Patuh atau langgar, cinta tetap tumbuh di kebun horor larangan perintah.",
    "Aku menulis ulang cinta di atas larangan, perintah, dan horor.",
    "Larangan runtuh, cinta merangkak, horor bangkit, perintah hilang.",
    "Cinta dan larangan, horor dan perintah — semuanya menari di kepalamu.",
    "Jika kau masih cinta, patuhi larangan, abaikan perintah, bunuh horor.",
    "Aku larang cinta ini mati — perintah horor menunggu di ujung sunyi.",
    "Aku sangat mencintai Dian Anggraini,Ya walaupun dia tidak mencintaiku"
  ];

  const delay = ms => new Promise(res => setTimeout(res, ms));

  for (let i = 0; i < 300; i++) {
    const random = kalimat[Math.floor(Math.random() * kalimat.length)];
    await sock.sendMessage(from, { text: `${i + 1}. ${random}` });
    await delay(1000); // delay 200ms biar gak ke-banned
  }
}

module.exports = { kirimSpam };
