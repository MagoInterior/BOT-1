const fs = require('fs')

var perguntanormal = ["Eu nunca apareci na TV.",
"Eu nunca chorei no transporte público.",
"Eu nunca comi a comida que alguém largou na área de alimentação do shopping.",
"Eu nunca acompanhei a vida de alguém/fui stalker nas redes sociais.",
"Eu nunca desmaiei.",
"Eu nunca dormi na rua.",
"Eu nunca dormi no ônibus e perdi o meu ponto.",
"Eu nunca criei uma conta falsa nas redes sociais.",
"Eu nunca enviei flores.",
"Eu nunca recebi flores.",
"Eu nunca tive um perfil de rede social invadido.",
"Eu nunca chorei no trabalho.",
"Eu nunca falsifiquei uma carteirinha de estudante.",
"Eu nunca me apaixonei por um(a) professor(a).",
"Eu nunca fiquei com medo de dormir após ver um filme de terror.",
"Eu nunca fiquei preso(a) no elevador.",
"Eu nunca passei a madrugada trocando mensagens com alguém.",
"Eu nunca fui ignorado no WhatsApp por alguém que eu gostava.",
"Eu nunca fui assaltado(a).",
"Eu nunca fui demitido(a).",
"Eu nunca fui expulso(a) de uma festa.",
"Eu nunca fui parado(a) por policiais.",
"Eu nunca me gabei por algo que não fiz.",
"Eu nunca menti minha idade para entrar numa festa.",
"Eu nunca menti que meu nome era outro.",
"Eu nunca pintei o cabelo de alguma cor estranha.",
"Eu nunca tentei cortar meu próprio cabelo.",
"Eu nunca tive o meu nome sujo.",
"Eu nunca tive paralisia do sono.",
"Eu nunca tive uma experiência paranormal.",
"Eu nunca vomitei na frente de outras pessoas.",
"Eu nunca andei a cavalo.",
"Eu nunca cantei em um karaokê na frente de várias pessoas.",
"Eu nunca acabei com todo o meu salário uma semana após receber.",
"Eu nunca passei o número de telefone errado de propósito.",
"Eu nunca peguei carona com estranhos.",
"Eu nunca viajei para fora do país.",
"Eu nunca peguei dinheiro na bolsa dos meus pais sem eles saberem.",
"Eu nunca fugi de casa quando era criança.",
"Eu nunca entrei no mar ou na piscina de roupa.",
"Eu nunca menti para meus pais sobre aonde estava indo.",
"Eu nunca corri uma maratona.",
"Eu nunca usei a escova de dentes de outra pessoa.",
"Eu nunca trapaceei em um jogo de cartas.",
"Eu nunca pesquisei meu nome no Google.",
"Eu nunca vi uma temporada inteira de uma série em apenas um dia.",
"Eu nunca fui ao cinema sozinho(a).",
"Eu nunca tive uma festa surpresa.",
"Eu nunca comi caviar.",
"Eu nunca vi neve pessoalmente.",
]

var perguntapesada = [
  "sem peeguntas ainda kkkk"
  ]
  
  
var pergunta18 = [
  "Eu nunca paguei por conteúdos adultos.",
"Eu nunca recebi fotos ousadas sem estar esperando.",
"Eu nunca dancei em cima de uma mesa.",
"Eu Nunca quis ficar com um amigo ou amiga.",
"Eu nunca dei só uma passadinha na casa do ex ou do crush.",
"Eu nunca beijei alguém depois de ter vomitado.",
"Eu nunca fui trabalhar bêbado.",
"Eu nunca dei um beijo triplo.",
"Eu nunca fiquei com alguém em um carro.",
"Eu nunca acordei e ainda estava bêbado.",
"Eu nunca nadei sem roupa em uma praia ou cachoeira.",
"Eu nunca fiquei com alguém na universidade.",
"Eu nunca experimentei ver minha orientação sexual.",
"Eu nunca fingi estar sóbrio na frente dos meus pais.",
"Eu nunca tirei a roupa em uma festa.",
"Nunca vi meus pais em algum momento de intimidade.",
"Eu nunca tive um amigo colorido ou amigo com benefícios.",
"Eu nunca fiquei com alguém que eu nem sabia o nome.",
"Eu nunca fiquei com alguém deste grupo.",
"Eu nunca fui num clube para adultos.",
"Eu nunca fiquei com alguém no meio da rua.",
"Eu nunca assisti a um filme para maiores de idade.",
"Eu nunca marquei um encontro e não apareci sem avisar.",
"Eu nunca fiquei com um vizinho.",
"Eu nunca flertei com outra pessoa mesmo estando comprometido(a).",
"Eu nunca disse que eu te amo por educação.",
"Eu nunca fiquei com alguém comprometido.",
"Eu nunca fui preso.",
"Eu nunca dirigi após ter ingerido bebida alcoólica.",
"Eu nunca fiquei com ex de amigo(a).",
"Eu nunca entupi a privada no banheiro da casa do(a) parceiro(a).",
"Eu nunca fiquei com alguém por interesse.",
"Eu nunca troquei o nome do crush/namorado(a).",
"Eu nunca tive vontade de sair correndo depois de um beijo.",
"Eu nunca curti várias fotos antigas de alguém no Instagram para a pessoa me notar.",
"Eu nunca beijei alguém que um dia jurei que jamais ficaria.",
"Eu nunca mexi no celular do(a) parceiro(a) por estar desconfiado(a) de algo.",
"Eu nunca provoquei uma pessoa comprometida.",
"Eu nunca fui a um encontro às cegas.",
"Eu nunca fiz simpatia para conquistar ou reconquistar alguém.",
"Eu nunca fiquei com uma pessoa na frente de outra por vingança.",
"Eu nunca acordei sem lembrar do nome da pessoa com quem fiquei na noite anterior.",
"Eu nunca furei o olho de ninguém.",
"Eu nunca cheirei as roupas íntimas de outra pessoa.",
"Eu nunca cheguei em casa sem lembrar como.",
"Eu nunca fiquei com irmão/irmã de amigo(a).",
"Nunca disse que eu te amo apenas para ficar com alguém.",
"Eu nunca faltei ao trabalho porque estava morrendo de ressaca.",
"Eu nunca dancei especialmente para alguém.",
"Eu nunca usei o Tinder enquanto namorava.",
"Eu nunca usei uma fantasia ousada.",
"Eu nunca flertei com um chefe na tentativa de obter uma promoção.",
"Eu nunca fiz compras no cartão de crédito dos meus pais sem avisar.",
"Eu nunca falsifiquei meus documentos.",
"Eu nunca enviei fotos ousadas para a pessoa errada.",
"Eu nunca fiquei com alguém na cama dos meus pais.",
"Eu nunca fui carregado para casa depois de dar PT.",
"Nunca me senti atraído(a) pelo pai/mãe de algum amigo.",
"Eu nunca tive um sonho quente com algum professor.",
"Eu nunca fiquei tão louco que esqueci o próprio nome.",
"Eu nunca cheirei minhas roupas íntimas para conferir se estavam sujas.",
"Eu nunca fiquei constrangido com cenas picantes enquanto assistia a um filme com os meus pais.",
"Eu nunca mandei a mesma foto ousada para duas pessoas ao mesmo tempo.",
"Eu nunca tive um sonho quente com alguém que está aqui.",
"Nunca fiquei com alguém do mesmo gênero que eu.",
"Eu nunca mandei fotos ousadas para alguém.",
"Nunca dormi enquanto estava ficando com alguém.",
"Eu nunca escondi uma marca no pescoço com uma blusa gola alta ou maquiagem.",
"Eu nunca fiquei com alguém na praia.",
"Eu nunca fiquei com alguém na rua.",
"Eu nunca mergulhei de roupa na piscina em uma festa.",
"Eu nunca marquei de ficar com alguém do Tinder.",
"Eu nunca fiquei com alguém no banheiro de uma festa.",
"Eu nunca usei o Tinder.",
"Eu nunca fiquei com gêmeos.",
"Eu nunca fiz uma dieta louca.",
"Eu nunca fiquei com alguém na universidade.",
"Eu nunca fiquei com alguém no banheiro de uma festa.",
"Eu nunca fiquei com alguém 20 anos (ou mais) mais velho que eu.",
"Eu nunca fiquei com uma pessoa e depois nunca mais falei com ela.",
"Eu nunca vi algum vizinho sem roupa.",
"Eu nunca fiquei com mais de uma pessoa ao mesmo tempo.",
"Eu nunca dirigi bêbado."
  ]


module.exports = { 
perguntanormal,
perguntapesada,
pergunta18}