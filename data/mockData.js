import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
    new Category('c1', 'Italiana', '#f5428d', '#e1e5ed'),
    new Category('c2', 'Fast-Food', '#f54242', '#e1e5ed'),
    new Category('c3', 'Hamburgeria', '#f5a442', '#e1e5ed'),
    new Category('c4', 'Alemã', '#f5d142', '#2b2c2e'),
    new Category('c5', 'Vegana', '#41d95d', '#e1e5ed'),
    new Category('c6', 'Exotica', '#f368df', '#e1e5ed'),
    new Category('c7', 'Café-da-Manhã', '#9eecff', '#2b2c2e'),
    new Category('c8', 'Indiana', '#b9ffb0', '#2b2c2e'),
    new Category('c9', 'Francesa', '#ffc7ff', '#2b2c2e'),
    new Category('c10', 'Asiática', '#47fced', '#2b2c2e'),
]

export const MEALS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Espaguete com Molho de Tomate',
      'Barato',
      'Fácil',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      20,
      [
        '4 Tomates',
        '1 Colher de Sopa de Azeite de Oliva',
        '1 Cebola',
        '250g Espaguete',
        'Tempero à Gosto',
        'Queijo (optional)'
      ],
      [
        'Corte o tomate e a cebola em cubos pequenos.',
        'Ferva água suficiente e adicione sal ao levantar fervura.',
        'Coloque o espaguete na água fervendo - deixe na fervura de 10 a 12 minutos.',
        'Refogue a cebola no azeite.',
        'Após 2 minutos, adicione o tomate, sal e outros condimentos a gosto.',
        'Ferva 1 minuto e adicione o molho ao macarrão escorrido.',
        'Adicione queijo a vontade sobre o prato.',
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Torrada Califórnia',
      'Barato',
      'Fácil',
      'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
      10,
      [
        '1 Fatia de Pão Branco',
        '1 Fatia de Presunto',
        '1 Fatia de Abacaxi',
        '2 Fatias de Queijo',
        'Manteiga',
      ],
      [
        'Passe manteiga em um lado da pão branco.',
        'Coloque o presunto, o abacaxi e o queijo sobre o pão branco.',
        'Leve ao forno à 200°C por cerca de 10 minutos.',
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'Hamburger Clássico',
      'Moderado',
      'Fácil',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      45,
      [
        '300g Carne Moída',
        '1 Tomate',
        '1 Pepino',
        '1 Cebola',
        'Ketchup',
        '2 Pães de Hamburger'
      ],
      [
        'Faça 2 hamburgeres com a carne moída',
        'Frite a carne por cerca de 4 minutos de cada lado',
        'Frite rapidamente os pães por cerca de 1 minuto de cada lado',
        'Passe ketchup nos pães',
        'Sirva o hamburger com tomate, pepino e cebola.'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Wiener Schnitzel',
      'Caro',
      'Difícil',
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
      60,
      [
        '8 Postas de Vitela (Costeleta)',
        '4 Ovos',
        '200g Farinha de Rosca',
        '100g Farinha de Trigo',
        '300ml Manteiga',
        '100g Óleo Vegetal',
        'Sal',
        'Salsa',
        'Fatias de Limão'
      ],
      [
        'Fatie a vitela em cerca de 2-4mm e tempere com sal em ambos os lados.',
        'Em um prato raso, mexa os ovos brevemente com um garfo.',
        'Cubra levemente as costeletas de farinha, mergulhe no ovo e, finalmente, cubra com farinha de rosca',
        'Aqueça a manteiga e o óleo em uma panela grande (deixe a gordura esquentar) e frite os schnitzels até dourar dos dois lados.',
        'Mexa a panela regularmente para que os schnitzels fiquem rodeados de óleo e a crosta fique "fofa".',
        'Retire e escorra em papel toalha. Frite a salsa no óleo restante e escorra.',
        'Coloque os schnitzels em um prato quente e sirva decorado com salsa e fatias de limão.'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Salada de Salmão Defumado',
      'Caro',
      'Fácil',
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
      15,
      [
        'Rúcula',
        "Alface",
        'Salsinha',
        'Funcho',
        '200g Salmão Defumado',
        'Mostarda',
        'Vinagre Balsâmico',
        'Azeite de Oliva',
        'Sal e Pimenta'
      ],
      [
        'Lave e corte a salada e as ervas',
        'Corte o salmão em cubos',
        'Misture a mostarda, o vinagre e o azeite em um recipiente',
        'Prepare a salada',
        'Adicione o salmão e misture.'
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Mousse de Laranja',
      'Barato',
      'Difícil',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        '4 Folhas de Gelatina',
        '150ml de Suco de Laranja',
        '80g de Açúcar',
        '300g de Iogurte',
        '200g de Creme de Leite',
        'Raspas de Laranja'
      ],
      [
        'Dissolver a gelatina em uma vasilha em água fervendo',
        'Adicione suco de laranja e açúcar',
        'Tire a panela do fogão',
        'Adicione 2 colheres de sopa de iogurte',
        'Misture a gelatina com o iogurte restante',
        'Esfrie tudo na geladeira',
        'Chicoteie o creme e levante-o sob a massa alaranjada',
        'Voltar ao fogo novamente por pelo menos 4 horas',
        'Sirva com casca de laranja'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Panquecas',
      'Barato',
      'Fácil',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      20,
      [
        '1 1/2 Copos de Farinha de Trigo',
        '3 1/2 Colher de Sopa de Fermento',
        '1 Colher de Chá de Sal',
        '1 Colher de Sopa de Açúcar',
        '1 1/4 Copos de Leite',
        '1 Ovo',
        '3 Colher de Sopa de Manteiga Derretida'
      ],
      [
        'Em uma tigela grande, peneire a farinha, o fermento, o sal e o açúcar.',
        'Faça um poço no centro e despeje o leite, o ovo e a manteiga derretida; misture até ficar homogêneo.',
        'Aqueça uma frigideira levemente untada com óleo em fogo médio alto.',
        'Despeje ou coloque a massa na chapa, usando aproximadamente 1/4 de xícara para cada panqueca. Doure em ambos os lados e sirva quente.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Frango ao Curry Cremoso',
      'Caro',
      'Difícil',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      35,
      [
        '4 Peitos de Frango',
        '1 Cebola',
        '2 Dentes de Alho',
        '1 Pedaço de Gengibre Pequeno',
        '4 Colher de Sopa de Amendôas',
        '1 Colher de Chá de Pimenta Caiena',
        '500ml Leite de Coco'
      ],
      [
        'Fatie e frite o peito de frango',
        'Transforme cebola, alho e gengibre em pasta e refogue tudo',
        'Adicione temperos e refogue',
        'Adicione o peito de frango + 250 ml de água e cozinhe tudo por 10 minutos',
        "Adicione o leite de coco",
        'Sirva com arroz'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Suflê de Chocolate',
      'Barato',
      'Difícil',
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
      45,
      [
        '1 Teaspoon melted Butter',
        '2 Tablespoons white Sugar',
        '2 Ounces 70% dark Chocolate, broken into pieces',
        '1 Tablespoon Butter',
        '1 Tablespoon all-purpose Flour',
        '4 1/3 tablespoons cold Milk',
        '1 Pinch Salt',
        '1 Pinch Cayenne Pepper',
        '1 Large Egg Yolk',
        '2 Large Egg Whites',
        '1 Pinch Cream of Tartar',
        '1 Tablespoon white Sugar'
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
        'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
        'Place chocolate pieces in a metal mixing bowl.',
        'Place bowl over a pan of about 3 cups hot water over low heat.',
        'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
        'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
        'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
        'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
        'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
        'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
        'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
        'Transfer a little less than half of egg whites to chocolate.',
        'Mix until egg whites are thoroughly incorporated into the chocolate.',
        'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
        'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
        'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c2', 'c5', 'c10'],
      'Salada de Aspargos com Tomate Cereja',
      'Caro',
      'Difícil',
      'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
      30,
      [
        'Aspargos Brancos e Verdes',
        '30g Nozes',
        '300g Tomates Cereja',
        'Salada',
        'Sal, Pimenta e Azeite de Oliva'
      ],
      [
        'Lave, descasque e corte os aspargos',
        'Cozinhe em água e sal',
        'Adicione sal e pimenta nos aspargos',
        'Assar os nozes',
        'Corte os tomates na metade',
        'Misture com aspargos, salada e molho',
        'Sirva com baguete'
      ],
      true,
      true,
      true,
      true
    )
  ];