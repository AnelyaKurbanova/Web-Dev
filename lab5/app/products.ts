export interface Product {
  id: number;
  img: string;
  name: string;
  price: string;
  rating: string;
  link: string;
  description: string;
  active: boolean;
  like: number;
  category: string;
  remove: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/he7/63886250180638.jpg?format=gallery-medium',
    name: 'The book of Sparks N.: A diary of memory',
    rating: "../assets/img/stars.png",
    price: "1 071",
    category: "Books",
    like: 0,
    active: false,
    remove: false,
    link: "https://kaspi.kz/shop/p/sparks-n-dnevnik-pamjati-100259727/?c=750000000",
    description: 'This is not a "love affair", but a novel about love. About the love of ordinary men and women like us… Why did this book become an absolute bestseller all over the world? Why does it touch the soul of readers of all ages and intellectual levels? How did Nicholas Sparks manage to repeat the sensational success of "Love Story" and "Sleepless in Seattle"? Why was the film based on the novel "Diary of Memory" a huge success all over the world? It is impossible to explain this. Read the "Diary of Memory" and you will understand for yourself!'
  },
  {
    id: 2,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h93/hde/63820990414878.jpg?format=gallery-medium",
    name: 'Alex mineral Saryagash carbonated 1.5 l',
    rating: "../assets/img/stars.png",
    price: "237",
    category: "Drinks",
    active: false,
    remove: false,
    like: 0,
    link: "https://kaspi.kz/shop/p/aleks-mineral-naja-saryagash-gazirovannaja-1-5-l-100211003/?c=750000000",
    description: 'Alex Saryagash mineral water will not only quench your thirst, but also fill every cell of your body with vitamins.'
  },
  {
    id: 3,
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha9/ha6/64461110083614.jpg?format=gallery-medium",
    name: 'The book of Kishimoto M.: Naruto. Book 7. Legacy',
    rating: "../assets/img/stars.png",
    price: "5 259",
    category: "Books",
    like: 0,
    active: false,
    remove: false,
    link: "https://kaspi.kz/shop/p/kisimoto-m-naruto-kniga-7-nasledie-105701263/?c=750000000",
    description: 'Naruto determination helps Tsunade dispel his own doubts and make the right choice. She refuses to heal the hands of someone who intends to destroy the Village Hidden in the Foliage. Then Orochimaru and Kabuto take a desperate step and attack Tsunade in order to force her to help them, since she does not want to do it of her own free will. Despite the incredible abilities of the legendary kunoichi, the battle threatens to end badly for her… Fortunately, Jiraiya, Naruto and Shizune suddenly appear on the battlefield! But will these three be able to influence the outcome of the battle?..'
  },
  {
    id: 4,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h07/h4e/63892494909470.jpg?format=gallery-medium",
    name: 'Book by King S.: The Green Mile',
    rating: "../assets/img/stars.png",
    price: "1 210",
    category: "Books",
    like: 0,
    active: false,
    remove: false,
    link: "https://kaspi.kz/shop/p/king-s-zelenaja-milja-100316445/?c=750000000",
    description: 'The novel is an event that became the winner of the Bram Stoker Award and inspired Frank Darabont to create a cult film in which Tom Hanks played perhaps his best role. ...Stephen King invites readers into the eerie world of the death row prison block, from where they leave so as not to return, opens the door of the last refuge of those who broke the law and now counts down the last hours…Nerves are exposed to the limit, passions are heated and feelings are heightened. Nothing can be fixed anymore – the last line is very close. But you can also understand and sympathize with those who have to go along the ominous Green Mile to nowhere'
  },
  {
    id: 5,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h58/hc2/64532061945886.jpg?format=gallery-medium",
    rating: "../assets/img/stars.png",
    name: 'Goethes book I. V.: Faust. Neoclassic Book Series Exclusive Classics',
    price: "2 558 ",
    category: "Books",
    like: 0,
    active: false,
    remove: false,
    link: "https://kaspi.kz/shop/p/gjote-i-v-faust-neoclassic-serija-knig-ekskljuzivnaja-klassika-104973759/?c=750000000",
    description: 'Faust. Tragedy" (German: Faust. Eine Tragödie.) is a philosophical drama for reading, which is considered the main work of Johann Wolfgang von Goethe.'
  },
  {
    id: 6,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h38/h15/64176141041694.jpg?format=gallery-medium",
    name: 'The book by Orwell J.: 1984. Exclusive fiction',
    rating: "../assets/img/stars3.png",
    price: "2 400",
    remove: false,
    category: "Books",
    like: 0,
    active: false,
    link: "https://kaspi.kz/shop/p/oruell-dzh-1984-ekskljuzivnaja-fantastika-103907661/?c=750000000",
    description: '984 is a dystopian novel by George Orwell, published in 1949.As M. F. Chernysh, a member of the Russian Academy of Sciences, notes, this is the most important and last work of the writer.'
  },
  {
    id: 7,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-medium",
    name: 'The book of D. Isabekov: Gauhar tas',
    rating: "../assets/img/stars.png",
    price: "1 199",
    category: "Books",
    like: 0,
    remove: false,
    active: false,
    link: "https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000",
    description: 'Bul shyǵarma qarapaıym Almaty oblysyndaǵy aýylda turatyn otbasy týraly jazylaǵan jáne olardyń tirshiligi keremet beınelengen. Otbasynyń quramy: Ákesi, Anasy, 2 balasy jáne otbasyna jańadan kelgen úlken balanyń áıeli. D. Isabekovtyń "Gaýhartas" shyǵarmasy aǵaıyndylardyń eki túrli tárbıe alýynyń nátıjesiń kórsetedi. Úlken balasy, Ybysh, ákesi sıaqty óte qatal, óz-ózin naǵyz erkek dep sanap, únsiz, tek qana qajet kezderde sóıleıtin adam. Al Ybyshtyń inisi, Qaıyrken, anasy sıaqty tańǵalarlyq meıirimdi, sezimshil, ádil jáne shyǵarmashylyq adam.'
  },
  {
    id: 8,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h31/h7b/63824552591390.jpg?format=gallery-medium",
    name: 'Frankl V.s book: To Say Yes to Life! A psychologist in a concentration camp',
    rating: "../assets/img/stars.png",
    price: "1 923",
    category: "Books",
    remove: false,
    like: 0,
    active: false,
    link: "https://kaspi.kz/shop/p/frankl-v-skazat-zhizni-da-psiholog-v-kontslagere-26016160/?c=750000000",
    description: 'This amazing book has made its author one of the greatest spiritual teachers of mankind in the 20th century. In it, the philosopher and psychologist Viktor Frankl, who passed through the Nazi death camps, opened the way for millions of people around the world to comprehend the meaning of life. An additional gift for the reader of this edition is the play "Synchronization in Birkenwald", where an outstanding scientist reveals his philosophy through artistic means.'
  },
  {
    id: 9,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h0e/h20/63813557977118.jpg?format=gallery-medium",
    name: 'The book Polar A.: A mint tale',
    rating: "../assets/img/stars2.png",
    price: "2 225",
    category: "Books",
    remove: false,
    active: false,
    like: 0,
    link: "https://kaspi.kz/shop/p/poljarnyi-a-mjatnaja-skazka-26001187/?c=750000000",
    description: 'The events of the book unfold around a boy who was sent to an orphanage. He quickly realizes that there is no justice in the world. There will be some peppermint cappuccinos, a lot of snow and a couple of broken hearts in this fairy tale.'
  },
  {
    id: 10,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h23/h6c/85180214411294.jpg?format=gallery-medium",
    name: 'Donkey Mask',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Masks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'Donkey Mask'
  },
  {
    id: 11,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h88/hde/83559835697182.jpg?format=gallery-medium",
    name: 'Apple iPhone 13 128Gb Midnight ',
    rating: "../assets/img/stars3.png",
    price: "293 484",
    like: 0,
    remove: false,
    active: false,
    category: "Phone",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics.'
  },
  {
    id: 12,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large",
    name: 'pple iPhone 15 Pro Max 256Gb ',
    rating: "../assets/img/stars3.png",
    price: "630 765",
    like: 0,
    remove: false,
    active: false,
    category: "Phone",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics.'
  },
  {
    id: 13,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=gallery-medium",
    name: 'Apple iPhone 15 Pro 256Gb',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Phone",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics.'

  },
  {
    id: 14,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
    name: 'Samsung Galaxy A24 6 ГБ/128 ГБ ',
    rating: "../assets/img/stars3.png",
    price: "85 363",
    like: 0,
    remove: false,
    active: false,
    category: "Phone",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics'
  },
  {
    id: 15,
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium",
    name: 'Xiaomi Redmi 12C',
    rating: "../assets/img/stars3.png",
    price: "45 999",
    like: 0,
    remove: false,
    active: false,
    category: "Phone",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics'
  },
  {
    id: 16,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hfa/hf6/64013945700382.jpg?format=gallery-medium",
    name: 'Маска для лица Farmstay тканевая Collagen 23 мл',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Masks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The fabric mask is impregnated with a moisturizing serum based on cucumber extract.'
  },
  {
    id: 17,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h5b/h34/63879178420254.jpg?format=gallery-medium",
    name: 'Маска для лица Farmstay тканевая Cucumber 23 мл',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Masks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The fabric mask is impregnated with a moisturizing serum based on cucumber extract.'
  },
  {
    id: 18,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h1c/hcb/63998181277726.jpg?format=gallery-medium",
    name: 'Маска для лица DR. KANG тканевая Vitamin C 21 мл',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Masks ",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The fabric mask is impregnated with a moisturizing serum based on cucumber extract.'
  },
  {
    id: 19,
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha3/hc4/63929396756510.jpg?format=gallery-medium",
    name: 'Маска для лица Farmstay тканевая Real Peach 23 мл',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Masks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The fabric mask is impregnated with a moisturizing serum based on cucumber extract.'
  },
  {
    id: 20,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h41/h46/63848578351134.jpg?format=gallery-medium",
    name: 'Маска для лица Farmstay тканевая Real Peach 23 мл',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Masks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'The fabric mask is impregnated with a moisturizing serum based on cucumber extract.'
  },
  
  {
    id: 21,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h0d/h46/64148420853790.jpg?format=gallery-medium",
    name: 'Холодный чай Fuse-tea манго-ромашка 1 л',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Drinks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'Type: green'
  },

  {
    id: 22,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h4c/hf4/63940055695390.jpg?format=gallery-medium",
    name: 'Pepsi газированный напиток 2 л',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Drinks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'Type: green'
  },

  {
    id: 23,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h76/h7e/85202372034590.jpg?format=gallery-medium",
    name: 'Fanta газированный напиток 2 л',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Drinks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'Type: green'
  },
  {
    id: 24,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h47/63822392066078.jpg?format=gallery-medium",
    name: 'Буратино лимонад буратино 2 л',
    rating: "../assets/img/stars3.png",
    price: "5 750",
    like: 0,
    remove: false,
    active: false,
    category: "Drinks",
    link: "https://kaspi.kz/shop/p/maska-osel-116658754/?c=750000000",
    description: 'Type: green'
  },

];
