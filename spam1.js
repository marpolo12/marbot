$ node .
Using Baileys Version: 2,3000,1023223821, isLatest: true
✅ Bot is connected & ready!
📥 Pesan masuk dari 6282121588338@s.whatsapp.net: Gas spam
/data/data/com.termux/files/home/marbot/bot.js:53
    await jalankanSpam(sock);
          ^

TypeError: jalankanSpam is not a function
    at EventEmitter.<anonymous> (/data/data/com.termux/files/home/marbot/bot.js:53:11)
    at EventEmitter.emit (node:events:507:28)
    at EventEmitter.<anonymous> (/data/data/com.termux/files/home/marbot/node_modules/@whiskeysockets/baileys/lib/Utils/event-buffer.js:40:16)
    at EventEmitter.emit (node:events:507:28)
    at Object.flush (/data/data/com.termux/files/home/marbot/node_modules/@whiskeysockets/baileys/lib/Utils/event-buffer.js:73:16)
    at processNodeWithBuffer (/data/data/com.termux/files/home/marbot/node_modules/@whiskeysockets/baileys/lib/Socket/messages-recv.js:816:12)

Node.js v24.3.0
~/marbot $
