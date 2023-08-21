const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "The Derma Co 1% Salicylic Acid Gel Face Wash",
        description: "HELPS REDUCE NEW ACNE: The 1% Salicylic Acid Gel Face Wash penetrates deep into the skin, dissolves the skin debris that clogs pores, and eliminates acne-causing bacteria. The 1% concentration of Salicylic Acid in our gel face wash makes it extremely lightweight and easy to absorb. Salicylic Acid also has anti-inflammatory properties that play an important role in fading away red-inflamed pimples.",
        url: "https://m.media-amazon.com/images/I/51vdikp4tPS._SL1500_.jpg",
        price: 500 // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "The Derma Co 1% Hyaluronic Sunscreen",
        description: "PROVIDES BROAD SPECTRUM PROTECTION (PA++++): The PA grading system in sunscreens indicates the level of protection from the UVA rays. So, the presence of more than three ‘+’ signs signifies that sunscreen provides the best protection against UVA rays. Our SPF 50 1% Hyaluronic Sunscreen Aqua Gel with PA++++ formulated with the effective combination of Hyaluronic Acid and Vitamin E protects from sun damage, while also reducing fine lines, wrinkles and making your skin soft and supple.",
        url: "https://m.media-amazon.com/images/I/51x3cj+-iUL._SX522_.jpg",
        price: 1099
      },
    });

    await prisma.products.create({
      data: {
        title: "The Derma Co 10% Vitamin C Face Serum",
        description: "MINIMIZES OPEN PORES: The combination of 5% Niacinamide and 10% Vitamin C accelerates cell regeneration and boosts collagen, thereby helping the skin to shed dead cell build-up from the surface and allowing new and healthy skin layers to take their place. This skin regeneration process also pushes out debris clogged inside pores, ensuring no room for any bacterial infection like acne while also making them less visible and more normal-sized. You and your skin can now confidently go #FilterFree",
        url: "https://m.media-amazon.com/images/I/51iIiB6pEQL._SX522_.jpg",
        price: 2999
      },
    });

    await prisma.products.create({
      data: {
        title: "Dot & Key Vitamin C + E Super Bright Sunscreen",
        description: "2-IN-1 PROTECTS SKIN + BOOSTS GLOW - Packed with SPF 50 PA+++, for even-toned & glowing which protects skin every day. Prevents tanning & gives skin glow, Activates Vitamin D Receptors on skin, making it beneficial to be in the sun. ENHANCES SKIN GLOW & RADIANCE - Infused with Triple Vitamin C & Sicilian Blood",
        url: "https://m.media-amazon.com/images/I/51i5cMLD8eL._SX522_.jpg",
        price: 1099
      },
    });

    await prisma.products.create({
      data: {
        title: "Vaseline Lip Tins Rosy Lips",
        description: "Specialized formulation for complete Lip care .Helps to lock in moisture for Healthy looking and beautiful Lips. Gives Lips a natural, Glossy Shine",
        url: "https://m.media-amazon.com/images/I/51dfE7gyJ2L._SX522_.jpg",
        price: 1299
      },
    });

    await prisma.products.create({
      data: {
        title: "Dove Cream Beauty Bathing Soap Bar",
        description: "NOURISHING BODY SOAP: Dove bathing soaps are specially formulated with 1/4 moisturizing cream that provides a gentle bathing experience on your skin. The moisturizer in the soap for men & women helps to retain moisture in your skin, leaving it feeling soft and smooth.",
        url: "https://m.media-amazon.com/images/I/51QFBzwYXOL._SX522_.jpg",
        price: 689
      },
    });

    await prisma.products.create({
      data: {
        title: "mCaffeine Tan Removal Bath Kit",
        description: "SMOOTH & GLOWING SKIN ESSENTIALS: This Caffeinated routine kit packed with Coffee Body Wash with Berries and Coffee Body Scrub is a must-have for smooth & glowing skin. The duo in this combo helps deep cleanse and polish the skin to get rid of nasties for supple skin.",
        url: "https://m.media-amazon.com/images/I/51P-1+ftf6L._SX522_PIbundle-2,TopRight,0,0_AA522SH20_.jpg",
        price: 22499
      },
    });

    await prisma.products.create({
      data: {
        title: "Minimalist Sunscreen SPF 50",
        description: "This sunscreen is formulated with 4 very effective UV-filters, namely, Uvinul T 150, Avobenzone, Octocrylene and Titanium Dioxide to provide protection from UVA & UVB",
        url: "https://m.media-amazon.com/images/I/611+X0ZGdWL._SX522_.jpg",
        price: 23599
      },
    });

    await prisma.products.create({
      data: {
        title: "The Derma Co 1% Hyaluronic Sunscreen ",
        description: "PROTECTS AGAINST BLUE LIGHT: Blue light, a type of high-energy visible light is emitted by several electronic devices. The blue light from these devices not only disrupts our sleep cycle but also damages our skin significantly. This is why we bring you 1% Hyaluronic Sunscreen Aqua Gel with Vitamin E that protects your skin from not only the sun but also screens. Here’s your skin’s new BFF that keeps it healthy and damage-free.",
        url: "https://m.media-amazon.com/images/I/51-YIFcBkYL._SX522_.jpg",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "GUESS Girl EDT",
        description: "Best fragrance offered by the wonderfull lineups of guess with Girl EDT as the all time top 100 best selleres in EDt. spreads the aromatic smell of pink cherry blossomsa and love",
        url: "https://m.media-amazon.com/images/I/515uE52TWeL._SX522_.jpg",
        price: 159599
      },
    });

    await prisma.products.create({
      data: {
        title: "Bella Vita Luxury FRESH Eau De Toilette",
        description: "No gas body Perfume; Quantity: 100ml; Item Form: Spray; Target Audience: Male .Unique Long lasting fragrances; Soothing experience throughout the day",
        url: "https://m.media-amazon.com/images/I/51zxi-sj5aL._SX522_.jpg",
        price: 19599
      },
    });

    await prisma.products.create({
      data: {
        title: "Minimalist 2% Salicylic Acid Face Wash",
        description: "MULTI LEVEL CLEANSING: Formulated with Capryloyl Salicylic Acid (LHA), which stays on outer layer of skin and provides gentle exfoliation, revealing soft skin, while Salicylic Acid penetrates deep into pores and reduces sebum and oil production. This Salicylic acid and LHA combination provides multi-level cleansing unlike other Salicylic Acid face wash.",
        url: "https://m.media-amazon.com/images/I/51qpGr-1qzL._SX522_.jpg",
        price: 9699
      },
    });

    await prisma.products.create({
      data: {
        title: "Minimalist 10% Vitamin B5 Gel Face Moisturizer",
        description: "Nourishes skin and reduces trans epidermal water loss.  Moisturizes & hydrates skin without the oily feel.  Heals skin & controls sebum",
        url: "https://m.media-amazon.com/images/I/51Sy8ktByyL._SX522_.jpg",
        price: 2125
      },
    });

    await prisma.products.create({
      data: {
        title: "Aqualogica Illuminate+ Oil free Moisturizer",
        description: "MAKES SKIN LUMINOUS AND RADIANT: Get ready to light up the room! Its unique blend of Wild Berries, Alpha Arbutin, and Hyaluronic Acid will give your skin that luminous and plump look. Say goodbye to oily residue and hello to a radiant complexion.",
        url: "https://m.media-amazon.com/images/I/716Nn3OhXbL._SX522_.jpg",
        price: 1599
      },
    });

    await prisma.products.create({
      data: {
        title: "Dot & Key Strawberry Lip Balm",
        description: "Intense Hydration: Infused with Vitamin E, our lip balm deeply moisturizes dry lips, replenishing essential moisture and enhancing lip plumpness for a supple, rejuvenated appearance.",
        url: "https://picsum.photos/id/102/800/800",
        price: 1259
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Car",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://m.media-amazon.com/images/I/61gdPZFgA2L._SX522_.jpg",
        price: 4959
      },
    });

    await prisma.products.create({
      data: {
        title: "SUGAR Cosmetics Lip Moisturizer",
        description: " Enriched with Jojoba Oil & Vitamin E - Moisturizes & renews skin - Contains Shea Butter which acts as an anti-inflammatory - Contains SPF which saves skin against UV rays",
        url: "https://m.media-amazon.com/images/I/51jHPHf8fWL._SX522_.jpg",
        price: 99999
      },
    });

  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();