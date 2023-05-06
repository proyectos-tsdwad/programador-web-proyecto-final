import { Book } from "../../models/book/book-model";
import { SelectedBookDto } from "../../models/book/selected-book.dto";
import { TAG } from "../../utils/enums/book.enum";
import { CATEGORY } from "../../utils/enums/book.enum";

export const allBooks: Book[] =
  [
    {
      id: 1,
      title: "Un cuento perfecto",
      author: {
        name: "Elísabet Benavent"
      },
      img: "./assets/img/book-cover/un-cuento-perfecto.png",
      price: 10.499,
      sinopsis: "Érase una vez una mujer que lo tenía todo y un chico que no tenía nada. - Érase una vez una historia de amor entre el éxito y la duda. - Érase una vez un cuento perfecto. Elísabet Benavent; @BetaCoqueta; regresa al panorama de la literatura con una novela que explora el significado del éxito en la vida y reflexiona con ironía y humor acerca de las imposiciones sociales; la presión del grupo y la autoexigencia que; aunque cueste creerlo; no es sinónimo de felicidad.",
      publisher: {
        name: "Ivrea"
      },
      isbn: "9789877391695",
      pageAmount: 640,
      language: "Español",
      genre: "Romantico",
      releaseDate: '2021',
      stock: 35,
      totalSold: 25,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 2,
      title: "El camino del artista",
      author: {
        name: "Julia Cameron"
      },
      img: "./assets/img/book-cover/el-camino-del-artista.png",
      price: 7.999,
      sinopsis: "La mayoría de nosotros anhelamos ser más creativos y muchos creemos que conseguir serlo es imposible porque en realidad no lo somos. Este planteamiento es erróneo y lo único que provoca es que nuestra creatividad se quede dormida en nuestro interior junto a nuestra verdadera esencia. A menudo nos negamos el placer de soñar; de conseguir lo que siempre hemos deseado; de rechazar nuestros impulsos naturales; nuestra propia personalidad. ",
      publisher: {
        name: "Aguilar"
      },
      isbn: "9789877352306",
      pageAmount: 320,
      language: "Español",
      genre: "Auto Ayuda",
      releaseDate: '2019',
      stock: 20,
      totalSold: 20,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 3,
      title: "Violeta",
      author: {
        name: "Isabel Allende"
      },
      img: "./assets/img/book-cover/violeta.png",
      price: 8.399,
      sinopsis: "Violeta; la primera niña de una familia de cinco bulliciosos hermanos; viene al mundo un tormentoso día de 1920. Desde el principio su vida estará marcada por acontecimientos extraordinarios; pues todavía se sienten las ondas expansivas de la Gran Guerra cuando la gripe española llega a las orillas de su país sudamericano natal; casi en el momento exacto de su nacimiento.",
      publisher: {
        name: "Sudamericana"
      },
      isbn: " 9789500766647",
      pageAmount: 400,
      language: "Español",
      genre: "Ficción",
      releaseDate: '2022',
      stock: 50,
      totalSold: 20,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 4,
      title: "Pensar a la Japonesa",
      author: {
        name: "Le Yen Mai"
      },
      img: "./assets/img/book-cover/pensar-a-la-japonesa.png",
      price: 3.390,
      sinopsis: "Quince conceptos fundamentales del pensamiento japonés; quince lugares emblemáticos del país nipón y un único objetivo: sumergirse en los principios esenciales de la filosofía; la espiritualidad; la cultura y la sociedad japonesa.",
      publisher: {
        name: "Urano"
      },
      isbn: "9789507883569",
      pageAmount: 240,
      language: "Español",
      genre: "Auto Ayuda",
      releaseDate: '2022',
      stock: 30,
      totalSold: 18,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 5,
      title: "Heartstopper",
      author: {
        name: "Alice Oseman"
      },
      img: "./assets/img/book-cover/heartstopper.png",
      price: 4.099,
      sinopsis: "Charlie y Nick van al mismo colegio; aunque nunca se habían cruzado hasta el día en que los hacen sentarse juntos en su grupo de estudio. Muy pronto se vuelven amigos y más pronto aún Charlie comienza a sentir cosas por Nick; aunque sabe que es un imposible. Pero el amor obra de formas inesperadas; y Nick está más interesado en Charlie de lo que ninguno de los dos puede llegar a creer.",
      publisher: {
        name: "Vrya"
      },
      isbn: "9789877475876",
      pageAmount: 296,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2020',
      stock: 50,
      totalSold: 30,
      tags: [TAG.TOP_VENDIDOS]
    },
    {
      id: 6,
      title: "Sanar la herida",
      author: {
        name: "Claudia Luchetti"
      },
      img: "./assets/img/book-cover/sanar-la-herida.png",
      price: 6.099,
      sinopsis: "¿Qué es la decodificación? ¿Para qué sirve? ¿Cómo puede ayudarme a sanar mis heridas más profundas? ¿Es posible conocerse y modificar lo que nos hace mal a través del estudio y la deconstrucción de nuestros datos personales? El nombre nos manifiesta; así como también lo que pronunciamos (...)",
      publisher: {
        name: "Grigalbo"
      },
      isbn: "9789502815206",
      pageAmount: 256,
      language: "Español",
      genre: "Auto Ayuda",
      releaseDate: '2022',
      stock: 30,
      totalSold: 8,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 7,
      title: "Punk 57",
      author: {
        name: "Penelope Douglas"
      },
      img: "./assets/img/book-cover/punk-57.png",
      price: 6.400,
      sinopsis: "Eran perfectos el uno para el otro hasta que se conocieron. La novela que ha arrasado en Tik Tok. MISHA. Mi profesora creyó que Ryen era un chico; la suya que Misha era nombre de chica y las dos; completamente equivocadas; nos juntaron para ser amigos por correspondencia. A nosotros no nos costó mucho darnos cuenta del error; pero antes ya habíamos discutido sobre cualquier tema posible: ¿la mejor pizza de la ciudad? ¿iPhone o Android? ¿Es Eminem el mejor rapero de todos los tiempos?",
      publisher: {
        name: "CrossBooks Argentina"
      },
      isbn: " 9789507325502",
      pageAmount: 384,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2022',
      stock: 40,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 8,
      title: "Prisionero",
      author: {
        name: "Roma Damned"
      },
      img: "./assets/img/book-cover/prisionero.png",
      price: 8.268,
      sinopsis: "Cuando Alois Thompson escuchó la sentencia del jurado, la tierra se abrió y el mundo se desmoronó ante sus ojos cansados y vidriosos. Condenado a cinco años de prisión por un homicidio que no cometió, es trasladado a una penitenciaría de máxima seguridad. Allí conocerá a Hendrik Stone, su compañero de celda y el monarca de la prisión. Un ser mitológico destinado a devorar el mundo, con ojos hambrientos de venganza y manos besadas por la sangre de incontables demonios derrotados. De labios torcidos y una boca que parecía veneno puro, amargo y llameante. ¿Cómo sobrevivirá en aquel ambiente hostil donde rige la ley del más fuerte?",
      publisher: {
        name: "Shinka"
      },
      isbn: "9789878960005",
      pageAmount: 656,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2022',
      stock: 27,
      totalSold: 8,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 9,
      title: "Boulevard",
      author: {
        name: "Flor M. Salvador"
      },
      img: "./assets/img/book-cover/boulevard.png",
      price: 6.299,
      sinopsis: "Luke Howland; lleno de problemas y sumido en una desesperación profunda; y Hasley Weigel; tan despistada como optimista; no se ajustan al prototipo de pareja perfecta. Como si cada uno fuese un cielo; uno es tormenta y el otro; un día soleado: él es oscuridad. Ella; un rayo de sol. Y; sin embargo; juntos decidieron ponerle nombre a lo que habían creado: un boulevard teñido de tonos grisáceos y de azules celestes y eléctricos preparándose para la tormenta. Ella era para él y él era para ella. Los lectores dijeron: «Amé a Hasley; Luke y Neisan.",
      publisher: {
        name: "Montena"
      },
      isbn: "9789874924995",
      pageAmount: 360,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2022',
      stock: 32,
      totalSold: 11,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 10,
      title: "La casa de las grietas",
      author: {
        name: "Krystal Sutherland"
      },
      img: "./assets/img/book-cover/la-casa-de-las-grietas.png",
      price: 5.150,
      sinopsis: "Iris; Grey y Vivi Hollow son tres hermanas incuestionablemente extrañas. Cuando eran niñas; desaparecieron en una calle de Edimburgo y regresaron un mes más tarde sin recordar lo sucedido. A partir de ese momento comenzaron a experimentar cambios espeluznantes. Primero; su cabello oscuro se volvió blanco. Luego; sus ojos azules se tornaron negros. Y aunque nunca aumentan de peso; comen sin mesura; incapaces de aplacar su insaciable apetito. La gente las encuentra insoportablemente bellas; inquietantemente excitantes e inexplicablemente peligrosas. Pero ahora; diez años después; Grey desaparece dejando unas pistas confusas sobre su paradero e Iris y Vivi comienzan su búsqueda.",
      publisher: {
        name: "Oceano Travesia"
      },
      isbn: "9788412365597",
      pageAmount: 344,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2022',
      stock: 42,
      totalSold: 10,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 11,
      title: "Un linaje oscuro",
      author: {
        name: "Victoria Vilchez"
      },
      img: "./assets/img/book-cover/un-linaje-oscuro.png",
      price: 6.650,
      sinopsis: "En 1692; una serie de personas fueron arrestadas y acusadas de practicar brujería en Salem. Tras los juicios que se llevaron a cabo; se condenó a veintinueve de ellas y; finalmente; diecinueve murieron ahorcadas. Aunque nadie sabía que; en realidad; los que propiciaron las acusaciones eran brujos blancos; y los condenados a la horca pertenecían a su vez a linajes de brujos oscuros. Hasta ese momento; los aquelarres de ambos bandos habían convivido en equilibro. Danielle Good es una excepción. Ella es una bruja blanca a pesar de que su antepasada; Sarah Good; fue juzgada y condenada siglos atrás.",
      publisher: {
        name: "Ediciones Urano SA"
      },
      isbn: "9789878454498",
      pageAmount: 480,
      language: "Español",
      genre: "Romantico",
      releaseDate: '2022',
      stock: 30,
      totalSold: 9,
      tags: [TAG.NOVEDADES]
    },
    {
      id: 12,
      title: "Todo por volver a verte",
      author: {
        name: "Florencia Vercellone"
      },
      img: "./assets/img/book-cover/todo-por-volver-a-verte.png",
      price: 3.820,
      sinopsis: "Ana vuelve a la Argentina después de 31 años. Ese regreso despierta memorias guardadas bajo llave; recuerdos de una militancia y un amor por los que se había animado a todo. Conoció a Juan en tiempos turbulentos; con una causa en común. Se amaron a pesar del abismo entre sus mundos: ella; contra los mandatos que la ataban a una vida que ya no la representaba; él; cuyo espíritu aguerrido lo animaba a luchar sin reparar en los riesgos.",
      publisher: {
        name: "El Ateneo"
      },
      isbn: "9789500212922",
      pageAmount: 320,
      language: "Español",
      genre: "Romantico",
      releaseDate: '2022',
      stock: 28,
      totalSold: 12,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 13,
      title: "Buscando a Dorothy",
      author: {
        name: "Elizabeth Letts"
      },
      img: "./assets/img/book-cover/buscando-a-dorothy.png",
      price: 3.950,
      sinopsis: "Hollywood; 1938. Cuando Maud Gage Baum; la viuda de L. Frank Baum; reconocido autor de El mago de Oz; se entera de que una productora va a llevar a la gran pantalla la obra de su difunto marido; hace todo lo posible por llegar hasta el set de rodaje. Todo indica que Maud es la única persona que puede ayudar a los productores a mantenerse fieles al espíritu del libro; porque solo ella conoce sus secretos. Pero en cuanto oye a Judy Garland ensayar las primeras notas de Over the Rainbow; Maud reconoce el anhelo que ha definido la historia de su vida.",
      publisher: {
        name: "Umbtriel Editores"
      },
      isbn: "9789878945118",
      pageAmount: 416,
      language: "Español",
      genre: "Ficción",
      releaseDate: '2022',
      stock: 45,
      totalSold: 9,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 14,
      title: "Sigue mi voz",
      author: {
        name: "Ariana Godoy"
      },
      img: "./assets/img/book-cover/sigue-mi-voz.png",
      price: 5.799,
      sinopsis: "Todos conocemos el amor pasional que nos nubla la razón; el amor a primera vista que nos anuda el estómago y el amor platónico que nos llena el corazón de fantasía y admiración. Pero ¿puede una persona enamorarse de otra sin haberla visto? Klara encontrará la respuesta a esta pregunta escuchando con dedicación todos los días su programa favorito de radio Sigue mi voz. Una historia de amor; de superación propia y de aceptación tan preciosa como necesaria.",
      publisher: {
        name: "Montena"
      },
      isbn: "9789878940168",
      pageAmount: 100,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2022',
      stock: 30,
      totalSold: 10,
      tags: [TAG.RECOMENDADOS]
    },
    {
      id: 15,
      title: "La teoría de lo perfecto",
      author: {
        name: "Sophie Gonzalez"
      },
      img: "./assets/img/book-cover/la-teoria-de-lo-perfecto.png",
      price: 4.699,
      sinopsis: "'Darcy es especialista en relaciones... ... a excepción de las propias. Cuando Brougham la atrapa recolectando las cartas del mítico casillero 89; en el que Darcy opera su negocio secreto de consejos románticos; surge el chantaje: o ella lo ayuda a recuperar a su exnovia o la delatará. Y Darcy no puede permitir que su identidad se haga pública; porque muchas cosas saldrían a la luz y habría muchas chances de que Brooke; su mejor amiga y crush-secreto-que-ama-a-alguien- más; ya no vuelva a hablarle.",
      publisher: {
        name: "Vrya"
      },
      isbn: "9789877478655",
      pageAmount: 360,
      language: "Español",
      genre: "Juvenil",
      releaseDate: '2022',
      stock: 36,
      totalSold: 8,
      tags: [TAG.RECOMENDADOS]
    }
  ]

export const selectedBooks: SelectedBookDto[] = [
  {
    id: 1,
    title: "Un cuento perfecto",
    author: {
      name: "Elísabet Benavent"
    },
    img: "./assets/img/book-cover/un-cuento-perfecto.png",
    price: 10.499,
    isbn: "9789877391695",
    selectedAmount: 5
  },
]
