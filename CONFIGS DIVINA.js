const fs = require("fs")
const chalk = require("chalk")

//｡☆✼★━━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡
//Tenha Cuidado ao Alterar as Coisas
//Nunca apague os " " 
//Se Apagar, Coloque Denovo
//Caso Contrário, O Bot Não Irá Ligar 
//Caso Tenha Interesse em Ter o Bot Original 
//Chama no WhatsApp ai: wa.me/553175416530
//Caso Tenha Ideias de Comandos, Chama Ai
//Caso Tenha Dúvidas, Chama Ai

//｡☆✼★━━━━━━━ IMAGENS DOS MENUS ━━━━━━━━━━★✼☆｡
global.bvapi = "Seja Bem Vindo Ao Grupo, Espero que se Divirta Aqui\nNao se Esqueça de fazer seu Login, so Clicar no Botão Abaixo."

global.byeapi = "Adeus Humano, Que Deus te Elimine.\nOops, Digo Ilumine hihi"

global.menu = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg" 
//Logo Do menu do Bot, Troque Apenas o Link
global.adm = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Adm do Bot, Troque Apenas o Link
global.logos = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Logod do Bot, Troque Apenas o Link
global.hentai = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Hentai do Bot, Troque Apenas o Link
global.sticker = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Sticker do Bot, Troque Apenas o Link
global.edits = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Edits do Bot, Troque Apenas o Link
global.premium = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Premium do Bot, Troque Apenas o Link
global.infodono = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do Info Dono Bot, Troque Apenas o Link
global.brincadeira = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Brincadeiras do Bot, Troque Apenas o Link
global.alteradores = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Alteradores do Bot, Troque Apenas o Link
global.menudono = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"
//Logo Do menu Dono do Bot, Troque Apenas o Link

//｡☆✼★━━━━━━━━ EMOJIS DO BOT ━━━━━━━━━★✼☆｡
//Troque os Emojis Apenas, e Salve
//Todos os Lugares do Bot, Que tiver Configurado
//Serão Automaticamente Substituídos pelos Emojis Que Você Quiser
//Apenas Alguns Emojis, Não Irão Ser Substituídos

aquamoji1 = "💦"
aquamoji2 = "💧"
aquamoji3 = "💙"
aquamoji4 = "👥"
aquamoji5 = "👤"
aquamoji6 = "🗣️"
aquamoji7 = "❗"

//｡☆✼★━━━━━━━━ RENDER DO BOT ━━━━━━━━━★✼☆｡
//Troque Caso Você Queira os Gifs e Imagens Diferentes
// Obs: Atenção Para os Links
// .mp4 = vídeo/gif
// .jpg = Imagem

tapão = "https://telegra.ph/file/841664f31eb7539c35a2d.mp4"
//Gif da Brincadeira de Tapa
beijão = "https://telegra.ph/file/dc5962ec8202ffc3d49c1.mp4"
//Gif da Brincadeira de beijo
gayzão = "https://telegra.ph/file/fe1a5a942d6114ebc18a3.jpg"
//Imagem da Brincadeira de Gay
feião = "https://telegra.ph/file/f9542d90d695b327ef4d1.jpg"
//Imagem da Brincadeira de Feio
mateii = "https://telegra.ph/file/1135a19fceefa7074caf8.mp4"
//Gif da Brincadeira de Matar
cornão = "https://telegra.ph/file/3182942e577dbbc27b17e.jpg"
//Imagem da Brincadeira de Corno
vesgão = "https://telegra.ph/file/93f84abd5eac215d2868a.jpg"
//Imagen da Brincadeira de Vesgo
bebão = "https://telegra.ph/file/b69ac603e275e610d2c34.jpg"
//Imagem da Brincadeira de Bêbado 
gadão = "https://telegra.ph/file/6ac2858647969cca031fd.jpg"
//Imagem da Brincadeira de Gado
gostosão = "https://telegra.ph/file/ac9a9ba3b6af7fe5c3d2b.jpg"
//Imagem da Brincadeira de Gostoso
gostosona = "https://telegra.ph/file/20a8a295064d2a4481997.jpg"
//Imagem da Brincadeira de Gostosa
nazista = "https://telegra.ph/file/fb2762032047db19d206b.jpg"
//Imagem da Brincadeira de Nazista
chutão = "https://telegra.ph/file/d4b2525d2e1aeb33fa626.mp4"
//Gif da Brincadeira de Chute
dança = "https://telegra.ph/file/e90ea86031158b7298ee4.mp4"
//Gif da Brincadeira de Dança 
casar = "https://telegra.ph/file/e9b02f179ff4e70baaeab.mp4"
//Gif da Brincadeira de Casar
socão = "https://telegra.ph/file/f737009edab409fe7be43.mp4"
//Gif da Brincadeira de soco

//｡☆✼★━━━━━━━ CONFIGURAÇÃO━━━━━━━━━★✼☆｡
//Configure o Bot Aqui, Colocando Suas Informações
//Não Ira Substituir Tudo, Pois Manterei Meus Créditos

global.numerodonoa = ["553175416530"] 
//Número Do Dono, Coloque do Mesmo Jeito Que Esta ai.
//Caso Queira Por Outro Número Como Dono,Basta Por uma Vírgula e por o Número do Novo Dono
global.NumeroBot = "553191179654"
//Numero do Seu Bot
tohkapi = "AquaSola"
//Sua Key do Site de Api da Tohka, Caso Não Tenha Uma Conta
//Não Altere Nada Aqui, Mas Caso Tenha Sua Conta
//Basta Apagar a Minha, e Por A Sua Key
//Site: https://tohka.tech
global.banChats = false
//Precisa Mexer Aqui Não
global.wlcm = []
//Precisa Mexer Aqui Não
global.banChats = false
//Precisa Mexer Aqui Não
global.gcrevoke = [] 
//Precisa Mexer Aqui Não
global.packname = "AQUA BOT OFICIAL"
//Marca D'água do Emojimix 
global.packname2 = `#TeamAqua`
//Marca D'água (em Manutenção ainda)
global.author = "LICHT SAN"
//Marca D'água do Criador da Figurinha 
global.sessionName = "CONEXÃO DIVINA"
//Nome do Qrcode (Não Recomendo Alterar)
global.NomeDoBot = "AQUA BOT OFICIAL"
//Nome do Bot, Pode por Qualquer Coisa
global.linkgrupss = "https://chat.whatsapp.com/HowVmkSOG3k9kbhdZW2TVj"
//Link do Grupo Oficial da Aqua Bot
global.prefix = "/"
//Prefixo do Bot
global.NickDono = "LICHT SAN"
// Nome do Dono do Bot
global.websitex = "https://youtube.com/channel/UCCy_5Qpvgil8r-LyP9JF9Rw"
//Site que Vc Quiser, Precisa Mexer Aqui Não, Pq Não Serve Pra Nada Ainda

//｡☆✼★━━━━━━━ BEM VINDO━━━━━━━━━★✼☆｡

global.bv = "So um teste man"
//Aqui e a Mensagem de Bem Vindo, Personalize
//OBS: A Base Ira Continuar a Mesma, Mas Pode Alterar As Mensagens
global.tchau = "ADEUS"
//Aqui e a Mensagem de Adeus, Personalize
//OBS: A Base Ira Continuar a Mesma, Mas Pode Alterar As Mensagens

//=====================================//
//São Algumas Mensagens do Bot, Pode Alterar o Que Quiser
//Cuidado, Pra Não Apagar os ' '
//Se Apagar, Coloque De volta
//Caso Contrário, o Bot Não Vai Funcionar

global.mess = {
    success: '*[ 😁 PRONTINHO 💦  ]*',
    
    admin: '*[ DESCULPE, SO ADMS ]*',
    
    botAdmin: '*[ PRECISO SER ADM ]*',
    
    owner: '*[ DESCULPE, SO MEU DONO ]*',
    
    group: '*[ DESCULPE, SÓ EM GRUPOS ]*',
    
    private: '*[ DESCULPE, SÓ NO PRIVADO ]*',
    
    bot: '*[ SÓ NO NÚMERO DO BOT ]*',
    
    wait: '*[ ESPERE UM POUCO, TÔ FAZENDO ]*',
    
    linkm: '*[ ESQUECEU DO LINK ?]*',
    
    donosmt: '*[ EI, SÓ MEU DONO PODE USAR ]*',
    
    premium: '*[ SÓ USUÁRIOS _PREMIUNS_ ]*',
    
    ban: '*[ VOCÊ ESTA BANIDO DO SISTEMA ]*'
}

//============ATENÇÃO=============//
//Não Mexa Em Nada Aqui

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//============ATENÇÃO=============//
//Não Mexa Em Nada Aqui

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
//============FIM=============//
//Obrigado Por Utilizar a Deusa Aqua
//By: Licht San
//@Licht.Offc