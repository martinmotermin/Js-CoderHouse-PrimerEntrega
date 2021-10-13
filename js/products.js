'use strict';

let store = [];

/*
Categorias: bazar, bano, deco, iluminacion, muebles, sillones y sofa
*/

class Product {
  constructor(id, name, description, category, price, stock) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = parseFloat(price);
    this.stock = Number(stock);
    this.soldOut = false;
  }
}

// bazar

const product1 = new Product(
  1,
  'Plato de sitio redondo',
  'Natural patinado - borde con rayas y hojas',
  'Bazar',
  806,
  10
);

const product2 = new Product(
  2,
  'Bandeja de plastico y madera',
  '43cm x 29cm',
  'Bazar',
  999,
  10
);

const product3 = new Product(
  3,
  'Botella redonda de vidrio con tapa de acero',
  '1 Litro',
  'Bazar',
  870,
  10
);

const product4 = new Product(
  4,
  'Botella de vidrio cuadrada con tapa metal',
  '1 Litro',
  'Bazar',
  632,
  10
);

const product5 = new Product(
  5,
  'Jarro - Mug de cerámica',
  'Medidas: Diámetro 9.5 cm / Alto 9.5 cm',
  'Bazar',
  718,
  10
);

const product6 = new Product(
  6,
  'Cuchara de madera Lisa',
  'Largo: 23 cm / ancho máx.: 7.5 cm / profundidad: 4 cm',
  'Bazar',
  455,
  10
);

const product7 = new Product(
  7,
  'Molinillo redondo de acero',
  'Tamaño Grande: 27 cm',
  'Bazar',
  4810,
  10
);

const product8 = new Product(
  8,
  'Azucarera de vidrio con tapa y pico metálico',
  'Diámetro: 7 cm, Alto (con pico) 17 cm',
  'Bazar',
  550,
  10
);

const product9 = new Product(
  9,
  'Azucarera Acrílico Cónica con Cuchara',
  'Medidas: Diametro 8 cm / Alto 11 cm',
  'Bazar',
  1020,
  10
);

const product10 = new Product(
  10,
  'Bowl cerámica blanco con borde dorado',
  '20 cm diámetro x 6 cm alto',
  'Bazar',
  980,
  10
);

const product11 = new Product(
  11,
  'Posa vaso Sauce set x 6u',
  'Cuadrados - 10x10cm',
  'Bazar',
  1045,
  10
);

const product12 = new Product(
  12,
  'Cortador de pizza acero black',
  'largo: 20 cm, ancho máx.: 7 cm, profundidad: 2 cm',
  'Bazar',
  699,
  10
);

// bano

const product13 = new Product(
  13,
  'Jabón liquido con rosca - Tilo',
  'Medidas: 350 ml',
  'Baño',
  570,
  10
);

const product14 = new Product(
  14,
  'Esponja exfoliante pompón - Visón',
  'Material: Poliester / Algodón',
  'Baño',
  330,
  10
);

const product15 = new Product(
  15,
  'Cepillo Baño - Cromo Rayas',
  'Cepillo baño cromo. Altura 37cm',
  'Baño',
  1268,
  10
);

const product16 = new Product(
  16,
  'Cesto ropa bamboo - Circular',
  '35cm diam x 50cm alto',
  'Baño',
  4480,
  10
);

const product17 = new Product(
  17,
  'Toalla de piso, lisa beige',
  '50x70 cm, 100% algodón',
  'Baño',
  1570,
  10
);

const product18 = new Product(
  18,
  'Dispenser jabón líquido',
  'Figuras marinas blanco',
  'Baño',
  1310,
  10
);

const product19 = new Product(
  19,
  'Alfombra Pompón - Natural y negro',
  'Alfombra 50 x 80',
  'Baño',
  3123,
  10
);

const product20 = new Product(
  20,
  'Alfombra de baño con pelo y base de goma',
  '40x60cm',
  'Baño',
  2070,
  10
);

const product21 = new Product(
  21,
  'Alfombra de baño Hojas',
  '40 x 60cm',
  'Baño',
  1912,
  10
);

const product22 = new Product(
  22,
  'Dispenser jabón líquido',
  'De vidrio redondo rayas',
  'Baño',
  760,
  10
);

const product23 = new Product(
  23,
  'Espejo con mango bamboo',
  'Medidas: Largo 20 cm / Ancho Máx. 10 cm / Profundidad 1 cm',
  'Baño',
  550,
  10
);

const product24 = new Product(
  24,
  'Canasto pvc - Blanco',
  'Grande 30x40x20',
  'Baño',
  2779,
  10
);

// Deco

const product25 = new Product(
  25,
  'Funda de almohadón Margarita Grafito',
  '40x40cm',
  'Deco',
  1200,
  10
);

const product26 = new Product(
  26,
  'Caja organizadora rectangular - NEW YORK',
  'Grande: Ancho 39 cm / Prof. 26 cm / Alto 14 cm',
  'Deco',
  2390,
  10
);

const product27 = new Product(
  27,
  'Bandeja huevo de madera plateada',
  'Grande: Ancho 22 cm / Largo 40 cm',
  'Deco',
  920,
  10
);

const product28 = new Product(
  28,
  'Florero cónico marmolado gris y negro',
  'Alto 15 cm, Diámetro Sup. 9 cm, Diámetro base 8 cm, Diámetro Máx. 13.5 cm',
  'Deco',
  2017,
  10
);

const product29 = new Product(
  29,
  'Cubrecama pesado Hindú liso con rayas 2 plazas y media',
  'Medidas: Ancho 240cm / Largo 260 cm',
  'Deco',
  5140,
  10
);

const product30 = new Product(
  30,
  'Espejo Dalam Madera',
  '61 cm diámetro total',
  'Deco',
  11597,
  10
);

const product31 = new Product(
  31,
  'Campana de vidrio base de madera',
  'Tamaño: Alto 33 cm / Diámetro base 19.5 cm',
  'Deco',
  2915,
  10
);

const product32 = new Product(
  32,
  'Tarro De Cerámica Rosa Con Tapa De Madera - Rombos',
  'Medidas: Diámetro 10.5 cm / Alto 15cm',
  'Deco',
  3030,
  10
);

const product33 = new Product(
  33,
  'Planta Adan - Base Negra',
  'Grande 90 cm alto.',
  'Deco',
  9800,
  10
);

const product34 = new Product(
  34,
  'Perchero - Línea Vintage - Roble',
  'De madera de paraíso en lustre roble',
  'Deco',
  20150,
  10
);

const product35 = new Product(
  35,
  'Planta Adan - Base cemento',
  'Chica: 50 cm alto total (maceta + planta) / diámetro de maceta:12cm / alto de maceta: 11 cm',
  'Deco',
  6540,
  10
);

const product36 = new Product(
  36,
  'Bowl - Cobre y Negro',
  'GRANDE 20 cm diámetro x 10 cm alto',
  'Deco',
  1180,
  10
);

// Iluminacion

const product37 = new Product(
  37,
  'Lámpara de mesa - Embudo Platil',
  'Diámetro de base 14 cm - Altura 51cm',
  'Iluminacion',
  7500,
  10
);

const product38 = new Product(
  38,
  'Lámpara de mesa linea Nórdica "Dinamarca" Negro',
  'Altura mínima: 48 cm - Diámetro base: 18 cm',
  'Iluminacion',
  8880,
  10
);

const product39 = new Product(
  39,
  'Pantalla Medio círculo de seagrass',
  'Medidas: 50 cm diámetro x 30 cm alto',
  'Iluminacion',
  16100,
  10
);

const product40 = new Product(
  40,
  'Lámpara de colgar Yute - EMMA',
  '56 cm diámetro - 53 cm altura',
  'Iluminacion',
  16800,
  10
);

const product41 = new Product(
  41,
  'Balancín Lata - color negro - 4 luces',
  'Altura regulable.',
  'Iluminacion',
  15050,
  10
);

const product42 = new Product(
  42,
  'Lámpara colgante MEDIEVAL pantalla lino',
  'Pantalla 40X50cm enjaulada en hierro 50x60cm',
  'Iluminacion',
  16500,
  10
);

const product43 = new Product(
  43,
  'Dublin colgante Simple',
  'Pantalla cilíndrica 40 cm.',
  'Iluminacion',
  16775,
  10
);

const product44 = new Product(
  44,
  'Lámpara de techo THALES 9 luces',
  'Diámetro 100cm., Altura 90cm',
  'Iluminacion',
  31550,
  10
);

const product45 = new Product(
  45,
  'Balancín Zig Zag 6 luces',
  'Lámpara de techo, balancín 6 luces ubicadas en zig zag',
  'Iluminacion',
  15050,
  10
);

const product46 = new Product(
  46,
  'Lámpara de pie/lectura',
  '1.70m alto',
  'Iluminacion',
  20040,
  10
);

const product47 = new Product(
  47,
  'Lámpara de pie arco brillante',
  'Pantalla cilíndrica blanca 40 cm diámetro x 20 cm de alto',
  'Iluminacion',
  21160,
  10
);

const product48 = new Product(
  48,
  'Lámpara de mesa Línea Nórdica "Noruega"',
  'Diámetro base 25 cm - Altura 70 cm',
  'Iluminacion',
  9850,
  10
);

const product49 = new Product(
  49,
  'Lámpara de pìe arco gigante',
  'Pantalla cónica blanca (diámetro sup. 40 cm / diámetro inf. 50 cm / altura 26 cm)',
  'Iluminacion',
  30340,
  10
);

const product50 = new Product(
  50,
  'Lámpara de mesa Línea Nórdica "Lata"',
  'Diámetro base 19 cm - Altura mínima 38 cm ',
  'Iluminacion',
  9270,
  10
);

const product51 = new Product(
  51,
  'Lámpara Pie Tambor - Línea nórdica',
  '1.70 m altura máxima - 1.30m altura hasta balancín - 0,25cm base ',
  'Iluminacion',
  13680,
  10
);

// Muebles

const product52 = new Product(
  52,
  'Mesa rectangular Contemporánea',
  'Medidas: Largo: 1.80 m. / Profundidad: 0.90 m. / Alto: 0.78 m.',
  'Muebles',
  57260,
  10
);

const product53 = new Product(
  53,
  'Mesa fija Pata Lustre Roble / Tapa Blanca - Línea Vintage',
  'Medidas: Largo: 1.60 m. / Profundidad: 0.90 m. / Alto: 0.80 m',
  'Muebles',
  45640,
  10
);

const product54 = new Product(
  54,
  'Banqueta EMILIA - Jagger Habano',
  'Banqueta pie de cama 1 metro ancho x 0.50 cm profundidad x 0.37 cm alto',
  'Muebles',
  14270,
  10
);

const product55 = new Product(
  55,
  'Silla Osaka - Lustre Roble',
  'Tapizado en pana Mostaza',
  'Muebles',
  17350,
  10
);

const product56 = new Product(
  56,
  'Sillón Individual - HANSEL - Madera y Rattan',
  'Alto Total: 72 cm / Altura asiento 40 cm',
  'Muebles',
  53780,
  10
);

const product57 = new Product(
  57,
  'Mesa de Centro Chic Marble - Tapa símil mármol blanco',
  'Patas cromo - 110 x 60 x 49',
  'Muebles',
  41140,
  10
);

const product58 = new Product(
  58,
  'Mesa tapa Símil Mármol - Pata Cruz símil madera Natural',
  '1.6 x 0.90 mts',
  'Muebles',
  67700,
  10
);

const product59 = new Product(
  59,
  'Rack TV Vintage',
  'Ancho 160 cm - Profundidad 46cm - Altura 65cm',
  'Muebles',
  46370,
  10
);

const product60 = new Product(
  60,
  'Rack TV Contemporáneo Roble',
  'Ancho 155cm - Profundidad 45cm - Altura 62cm',
  'Muebles',
  72290,
  10
);

const product61 = new Product(
  61,
  'Mesa de luz Contemporánea - Lustre Nogal',
  'Largo: 0.48 m. Profundidad: 0.38 m., Alto: 0.77 m.',
  'Muebles',
  28480,
  10
);

// Sillones y sofas

const product62 = new Product(
  62,
  'Sillón Atenas - Individual - Nirvana Gris Azulado',
  'ancho: 74 cm - profundo: 70 cm - alto: 74 cm',
  'Sillones y sofas',
  21400,
  10
);

const product63 = new Product(
  63,
  'Sofá Trento - 2 cuerpos Nirvana Piedra (Beige)',
  'Estructura: 90% madera maciza y 10% aglomerado de partículas.',
  'Sillones y sofas',
  53600,
  10
);

const product64 = new Product(
  64,
  'Sillón Valentino + Banqueta',
  'sillón: 2.33 mts x 0.93 profundidad / Banqueta',
  'Sillones y sofas',
  143300,
  10
);

const product65 = new Product(
  65,
  'Sillón Cartagena - Individual - Beige',
  'Modelo: Cartagena',
  'Sillones y sofas',
  27400,
  10
);

const product66 = new Product(
  66,
  'Sofá Chester - 3 cuerpos Cuerotex Chocolate',
  '2.05 mts x 0.96 prof. - 100% madera maciza',
  'Sillones y sofas',
  113800,
  10
);

const product67 = new Product(
  67,
  'Sofá Camastro Shot nickel',
  '1.75 mts ancho x 0.93 cm profundidad x 0.75 cm alto',
  'Sillones y sofas',
  76500,
  10
);

const product68 = new Product(
  68,
  'Sofá Valentino II Esquinero Lino Gris Oscuro',
  '2.87 m x 2.10 x 0.94',
  'Sillones y Sofas',
  138800,
  10
);

const product69 = new Product(
  69,
  'Sofá Orión Nirvana Gris Azulado',
  '1.95 mts x 0.95 profundidad',
  'Sillones y Sofas',
  61500,
  10
);

const product70 = new Product(
  70,
  'Sofá Trento Nirvana Gris',
  'Estructura: 90% madera maciza y 10% aglomerado de partículas.',
  'Sillones y sofas',
  53600,
  10
);

const product71 = new Product(
  71,
  'Sofá Valentino con Butaca con Brazo',
  'Sillón + Banqueta: 2.53 largo x 0.93 profundidad del sillón x 1.86 mts chaise long',
  'Sillones y sofas',
  144100,
  10
);

const product72 = new Product(
  72,
  'Sofá Camastro Pana Shot Gris',
  'Medidas: 2.30 mts x 0.90',
  'Sillones y sofas',
  100517,
  10
);

store.push(
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
  product27,
  product28,
  product29,
  product30,
  product31,
  product32,
  product33,
  product34,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
  product41,
  product42,
  product43,
  product44,
  product45,
  product46,
  product47,
  product48,
  product49,
  product50,
  product51,
  product52,
  product53,
  product54,
  product55,
  product56,
  product57,
  product58,
  product59,
  product60,
  product61,
  product62,
  product63,
  product64,
  product65,
  product66,
  product67,
  product68,
  product69,
  product70,
  product71,
  product72
);

localStorage.setItem('Store', JSON.stringify(store));
const productsContainer = document.getElementById('productsContainer');

store.forEach((el) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.textContent = el.name;
  cardTitle.classList.add('card-tittle');
  const cardText = document.createElement('p');
  cardText.textContent = el.description;
  cardText.classList.add('card-text');
  const cardPrice = document.createElement('p');
  cardPrice.textContent = `$${el.price}`;
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice);
  card.appendChild(cardBody);
  productsContainer.appendChild(card);
});
