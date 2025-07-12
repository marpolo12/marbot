const fs = require('fs');
const Jimp = require('jimp');

async function kirimStickerDariGambar(sock, msg, from) {
    try {
        const mediaMessage = msg.message.imageMessage;
        if (!mediaMessage) {
            await sock.sendMessage(from, { text: 'Tidak ada gambar!' });
            return;
        }

        const stream = await sock.downloadMediaMessage(msg);
        const chunks = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        const image = await Jimp.read(buffer);
        image.resize(512, 512); // resize ke ukuran sticker
        const tempFile = './temp.webp';
        await image.writeAsync(tempFile);

        await sock.sendMessage(from, { sticker: { url: tempFile } });
        fs.unlinkSync(tempFile);
    } catch (err) {
        console.error(err);
        await sock.sendMessage(from, { text: 'Gagal bikin stiker.' });
    }
}

module.exports = { kirimStickerDariGambar };
