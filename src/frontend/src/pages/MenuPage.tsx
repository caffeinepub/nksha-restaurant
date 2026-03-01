import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  veg?: boolean;
  vegan?: boolean;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "kulcha",
    label: "Gourmet Kulcha",
    items: [
      {
        name: "Truffle Essence, Mushroom And Cheese Kulcha",
        price: "₹550",
        desc: "Truffle essence, mushroom and cheese kulcha.",
        veg: true,
      },
      {
        name: "Tulsi Chutney With Sooke, Tamatar, Cheddar & Mozzarella Kulcha",
        price: "₹550",
        desc: "Masala crusted and basil flavoured kulcha.",
        veg: true,
      },
      {
        name: "Barbecue Chicken Tikka Kulcha",
        price: "₹600",
        desc: "Smoked chicken, ginger, chilli, cheese and stuffed.",
      },
    ],
  },
  {
    id: "soups",
    label: "Soups",
    items: [
      {
        name: "Bhune Tamatar Gud Ka Shorba",
        price: "₹450",
        desc: "Methi nimki, chotte tamatar, samudri namak and peanut.",
        veg: true,
      },
      {
        name: "Earthy Mushroom Shorba",
        price: "₹450",
        desc: "Extra virgin olive oil, enoki pakoda.",
        veg: true,
      },
      {
        name: "Murgh Kali Mirch Shorba",
        price: "₹500",
        desc: "Pulled chicken, chicken roundels and butter.",
      },
    ],
  },
  {
    id: "chaat",
    label: "Chaat",
    items: [
      {
        name: "Palak And Betel Leaf Chaat",
        price: "₹450",
        desc: "Curd, mint and sweet chutney, salted boondi, sev, pomegranate seeds, laccha adrak.",
        veg: true,
      },
      {
        name: "Karari Laccha Aloo Tikki Avocado Chaat",
        price: "₹550",
        desc: "Stuffed, shallow fried in pure ghee, chutney, pomegranate, avocado scoop.",
        veg: true,
      },
      {
        name: "Chandni Chowk Dahi Bhalla Papdi Chaat",
        price: "₹500",
        desc: "Twisted with fresh berries, special roasted chaat masala and kachalu pickle.",
        veg: true,
      },
    ],
  },
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Punjabi Paneer Tikka",
        price: "₹750",
        desc: "Char grilled, onion, tomato, ajwain, kasoori methi.",
        veg: true,
      },
      {
        name: "Tawa Dahi Ke Kebab",
        price: "₹700",
        desc: "Ginger pickle.",
        veg: true,
      },
      {
        name: "Stuffed Kashmiri Gucchi Kebab [4 Pieces]",
        price: "₹950",
        desc: "Charred, stuffed morel, cottage cheese, mawa, nuts, cardamom, coriander.",
        veg: true,
      },
      {
        name: "Edamame Peas Water Chestnut Ke Kebab",
        price: "₹750",
        desc: "Pan seared, ghee, truffle essence.",
        veg: true,
      },
      {
        name: "Porcini Button Mushroom Galouti Kebab",
        price: "₹750",
        desc: "Melt in mouth, rare spices, kewra, rose petals.",
        veg: true,
      },
      {
        name: "Bharwan Tandoori Aloo",
        price: "₹700",
        desc: "Stuffed potato and cottage cheese, nuts, sesame seeds.",
        veg: true,
      },
      {
        name: "Pesto And Corn Seekh Kebab",
        price: "₹700",
        desc: "Skewered, tandoori cooked.",
        veg: true,
      },
      {
        name: "Malai Broccoli Tandoori",
        price: "₹700",
        desc: "Chargrilled, cream cheese, cardamom, mace, tomato sesame chutney.",
        veg: true,
      },
      {
        name: "Purani Dilli Paneer Tikka",
        price: "₹750",
        desc: "Coriander, char grilled, garlic and parmesan chutney.",
        veg: true,
      },
      {
        name: "Multi Seed Hara Bhara Kebab",
        price: "₹700",
        desc: "Stuffed, smoked cheese and seeds crusted.",
        veg: true,
      },
      {
        name: "Tandoori Water Chestnut Chatpata",
        price: "₹700",
        desc: "Marinated, chaat masala, coriander.",
        veg: true,
      },
      {
        name: "Tandoori Mirchi",
        price: "₹700",
        desc: "Charred shishito pepper, potato and cheese mash.",
        veg: true,
      },
      {
        name: "Highway Chicken Tikka",
        price: "₹850",
        desc: "Chicken leg boneless, onion, coriander steam, mustard oil, charred.",
      },
      {
        name: "Parmesan Malai Tikka",
        price: "₹850",
        desc: "Boneless Chicken leg, cream marinade, charred, Parmesan.",
      },
      {
        name: "Tilismi Dill Afghani Chicken",
        price: "₹800",
        desc: "Chicken leg, chargrilled, saffron, green herbs.",
      },
      {
        name: "Banjara Chicken Tikka",
        price: "₹850",
        desc: "Boneless chicken, yoghurt marinated, charred, spices.",
      },
      {
        name: "Tandoori Fresh Oyster Mushroom Achari",
        price: "₹700",
        desc: "Pickle and yoghurt marinated and tangy.",
      },
      {
        name: "Mutton Chapli Kebab",
        price: "₹950",
        desc: "Shallow fried, ghee, onion, tomato, pomegranate seeds.",
      },
      {
        name: "Pathar Ka Gosht",
        price: "₹1,000",
        desc: "Tenderized mutton piccata, curd, brown onion, cardamom, clove.",
      },
      {
        name: "Galouti Kebab",
        price: "₹1,000",
        desc: "Mouth melting mutton mince patties, desi ghee, potli masala, smoked.",
      },
      {
        name: "Mutton Seekh Kebab",
        price: "₹1,000",
        desc: "Skewered mince, brown onion, mint, cinnamon, mace.",
      },
      {
        name: "Roti Pe Boti",
        price: "₹1,000",
        desc: "Dum cooked Lucknawi mutton boneless, royal cumin, crispy flat bread.",
      },
      {
        name: "Tandoori Jhinga",
        price: "₹1,700",
        desc: "Tiger prawns, hung curd, ajwain, cinnamon powder, lemon.",
      },
      {
        name: "Three Peppercorn Macchi Tikka",
        price: "₹1,400",
        desc: "Pink, green and black peppercorn crushed, rawas filet, charred.",
      },
      {
        name: "Tandoori Lobster Tikka",
        price: "₹2,000",
        desc: "Ajwain, lime, pepper, garam masala, charred.",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Ranjit Shahi Paneer",
        price: "₹750",
        desc: "Cottage cheese slices and mince, spinach tossed, layered, tomato gravy.",
        veg: true,
      },
      {
        name: "Nksha Paneer Lababdar With Chives",
        price: "₹800",
        desc: "Flavoured cottage cheese roundels, onion tomato gravy.",
        veg: true,
      },
      {
        name: "Parmesan Malai Kofta",
        price: "₹800",
        desc: "Parmesan and cottage cheese croquettes, onion, almond and cashew gravy, truffle essence.",
        veg: true,
      },
      {
        name: "Lehsuni Palak",
        price: "₹800",
        desc: "Creamy spinach puree, onion, tomato, cardamon, kasoori methi.",
        veg: true,
      },
      {
        name: "Gucchi Matar Methi Malai",
        price: "₹1,000",
        desc: "Kashmiri stuffed morels, fenugreek leaves, onion, cashew nut.",
        veg: true,
      },
      {
        name: "Aloo Katliyan",
        price: "₹800",
        desc: "Sliced potato, curry leaves, yellow chilli, fried garlic.",
        veg: true,
      },
      {
        name: "Subz Panchratan",
        price: "₹800",
        desc: "Melange of vegetables, ajwain, tomato gravy.",
        veg: true,
      },
      {
        name: "Amritsari Chole",
        price: "₹800",
        desc: "Imli chutney.",
        veg: true,
      },
      {
        name: "Dal Nksha",
        price: "₹800",
        desc: "Slow cooked black lentil, butter, cream, kasoori methi.",
        veg: true,
      },
      {
        name: "Smoked Yellow Dal Tarka",
        price: "₹750",
        desc: "Hing smoked, desi ghee, red chilli whole, green chilli, garlic.",
        veg: true,
      },
      {
        name: "Bhindi Do Pyaaza",
        price: "₹750",
        desc: "Okra, ground spices, dry mango powder and green onion.",
        veg: true,
      },
      {
        name: "Aloo Gobi Adraki",
        price: "₹800",
        desc: "Dum cooked, tomato and laccha adrak.",
        veg: true,
      },
      {
        name: "Makai Matar Singhara",
        price: "₹800",
        desc: "Home pounded garam masala, spices, onion, tomato, peas and water chestnut.",
        veg: true,
      },
      {
        name: "Three Tamatar Sev Curry",
        price: "₹800",
        desc: "Red, yellow & green tomato, sev, mustard seeds and curry leaves.",
        veg: true,
      },
      {
        name: "Nksha Subz Kofta",
        price: "₹800",
        desc: "Potato & assorted vegetable roundels, signature yellow tomato and gravy.",
        veg: true,
      },
      {
        name: "Nalli Nihari",
        price: "₹1,000",
        desc: "Slow cooked mutton shank, home pounded spices, ginger, chilli, lime.",
      },
      {
        name: "Mutton Rogan Josh",
        price: "₹950",
        desc: "Kashmiri delicacy, mutton boneless, hing, saffron, ginger and fennel powder.",
      },
      {
        name: "Smoked Laal Maas",
        price: "₹1,000",
        desc: "Mutton boneless, garlic, mathania chilli, Rajasthani delicacy.",
      },
      {
        name: "Mutton Beliram",
        price: "₹1,000",
        desc: "Slow simmered mutton from maharaja ranjit singh kitchen.",
      },
      {
        name: "Delhi Style Butter Chicken",
        price: "₹950",
        desc: "Not sweet. Chicken leg boneless, tomato, butter, cream, kasoori methi.",
      },
      {
        name: "Daryaganj Chicken Changezi",
        price: "₹950",
        desc: "Roasted boneless chicken, onion, tomato, curd, yellow chilli powder.",
      },
      {
        name: "Methi Chicken",
        price: "₹900",
        desc: "Punjab's favourite, boneless chicken leg, fresh fenugreek, onion, chilli, mustard oil.",
      },
      {
        name: "Murg Rogan Josh",
        price: "₹950",
        desc: "Kashmiri delicacy, chicken boneless, hing, saffron, ginger and fennel powder.",
      },
      {
        name: "Tawa Macchi Masala",
        price: "₹1,200",
        desc: "Rawas, onion tomato gravy, peppers.",
      },
      {
        name: "Lehsuni Lobster Tikka Makhni",
        price: "₹2,000",
        desc: "Tandoor cooked lobster, buttery tomato gravy, garam masala and lime.",
      },
      {
        name: "Butter Pepper Garlic Prawns & Crab Meat",
        price: "₹1,500",
        desc: "Tossed, cracked pepper. Fresh coriander.",
      },
      {
        name: "Dum Ka Jheenga",
        price: "₹1,500",
        desc: "Yellow tomato gravy, mustard and coriander.",
      },
    ],
  },
  {
    id: "rice-biryani",
    label: "Rice & Biryani",
    items: [
      { name: "Steamed Basmati Rice", price: "₹450", veg: true },
      { name: "Edamame Aur Gucchi Pulao With Raita", price: "₹950", veg: true },
      {
        name: "Dum Subz Biryani With Raita",
        price: "₹800",
        desc: "Dum cooked, melange of vegetables, basmati rice.",
        veg: true,
      },
      {
        name: "Dum Chicken Biryani With Raita",
        price: "₹950",
        desc: "Dum cooked, boneless chicken leg, basmati rice.",
      },
      {
        name: "Dum Gosht Biryani With Raita",
        price: "₹1,050",
        desc: "Dum cooked, boneless mutton leg, basmati rice.",
      },
      {
        name: "Dum Jheenga Biryani",
        price: "₹2,200",
        desc: "Dum cooked, medium size prawns, basmati rice.",
      },
    ],
  },
  {
    id: "sides-breads",
    label: "Sides & Breads",
    items: [
      {
        name: "Kachumber Salad",
        price: "₹300",
        desc: "Onion, tomato, cucumber, cumin, black salt.",
        veg: true,
      },
      {
        name: "Boondi Raita",
        price: "₹300",
        desc: "Salted gram flour fritters, roasted cumin.",
        veg: true,
      },
      {
        name: "Crispy Bhindi Raita",
        price: "₹300",
        desc: "Crispy okra, roasted cumin.",
        veg: true,
      },
      { name: "Plain Tandoori Roti", price: "₹150", veg: true },
      { name: "Butter Tandoori Roti", price: "₹150", veg: true },
      {
        name: "Pyaaz Ki Tandoori Roti",
        price: "₹175",
        desc: "Whole wheat, onion, red chilli, ghee, earthy bread.",
        veg: true,
      },
      {
        name: "Atta Rumali Roti",
        price: "₹175",
        desc: "80% Whole wheat flour.",
        veg: true,
      },
      { name: "Butter Laccha Parantha", price: "₹175", veg: true },
      { name: "Pudina Laccha Parantha", price: "₹175", veg: true },
      { name: "Ajwaini Laccha Parantha", price: "₹175", veg: true },
      { name: "Green Chilli Laccha Parantha", price: "₹175", veg: true },
      { name: "Masala Laccha Parantha", price: "₹175", veg: true },
      { name: "Plain Naan", price: "₹175", veg: true },
      { name: "Coriander And Garlic Naan", price: "₹175", veg: true },
      {
        name: "Delhi Butter Naan",
        price: "₹175",
        desc: "Triangular naan, sesame, coriander.",
        veg: true,
      },
      {
        name: "Khamiri Naan",
        price: "₹150",
        desc: "Leavened, poppy seed topped.",
        veg: true,
      },
      {
        name: "Missi Roti",
        price: "₹150",
        desc: "Gram flour, coriander, ajwain, chilli.",
        veg: true,
      },
      {
        name: "Multigrain Roti",
        price: "₹200",
        desc: "Flat bread, mix flour, pumpkin seeds, sunflower seeds, oats, flax seeds.",
        veg: true,
      },
      {
        name: "Gluten Free Roti",
        price: "₹175",
        desc: "Tandoori cooked, millet based.",
        veg: true,
      },
      {
        name: "Amritsari Kulcha",
        price: "₹200",
        desc: "Potato stuffed, coriander seeds, chilli, fenugreek, anardana.",
        veg: true,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Chenna Payesh",
        price: "₹500",
        desc: "Angoori rasmalai, milk reduction, cardamom.",
        veg: true,
      },
      {
        name: "Date & Almond Ice Cream",
        price: "₹450",
        desc: "House made and ajwa dates.",
        veg: true,
      },
      { name: "Classic Saffron Phirni", price: "₹500", veg: true },
      {
        name: "Warm Panjiri With Kesar Pista Kulfi",
        price: "₹500",
        desc: "Sugarfree, whole wheat, desi ghee, rose petals.",
        veg: true,
      },
    ],
  },
  {
    id: "jain",
    label: "Jain Menu",
    items: [
      {
        name: "Jain Bhune Tamatar Shorba",
        price: "₹450",
        desc: "Jeera nimki, chotte tamatar, samudri namak. [No ginger, no garlic]",
        veg: true,
      },
      {
        name: "Jain Punjabi Paneer Tikka",
        price: "₹750",
        desc: "Char grilled cottage cheese, tomato. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Tawa Dahi Ke Kabab",
        price: "₹700",
        desc: "Ginger Pickled Optional. [Ginger optional, no garlic, no onion, no potato, no carrot]",
        veg: true,
      },
      {
        name: "Jain Malai Broccoli Tandoori",
        price: "₹700",
        desc: "Chargrilled, cream cheese, cream, cardamom, mace. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Chandni Chowk Dahi Bhalla Papri Chaat",
        price: "₹500",
        desc: "Fresh berries, special roasted chaat masala. [No ginger/carrot/beetroot/potato]",
        veg: true,
      },
      {
        name: "Jain Palak And Betel Leaf Chaat",
        price: "₹500",
        desc: "Curd, mint and sweet chutney, salted boondi, sev, pomegranate. [Ginger optional, carrot optional]",
        veg: true,
      },
      {
        name: "Jain Ranjit Shahi Paneer",
        price: "₹750",
        desc: "Cottage cheese slices and mince, layered with tossed Spinach, tomato gravy. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Tandoori Palak Paneer",
        price: "₹750",
        desc: "Charred cottage cheese, creamy spinach, cardamom. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Matar Methi Malai",
        price: "₹800",
        desc: "Green peas, fenugreek leaves, cashew nut. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Subzi Punjratni",
        price: "₹800",
        desc: "Melange of vegetables, ajwain. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Dal Nksha",
        price: "₹800",
        desc: "Slow cooked black lentil, butter, cream, kasoori methi. [No ginger, no garlic, no onion]",
        veg: true,
      },
      {
        name: "Jain Matar Paneer",
        price: "₹800",
        desc: "Special dhaba style cottage cheese, peas, tomato. [Ginger optional, no garlic, no onion]",
        veg: true,
      },
    ],
  },
  {
    id: "vegan",
    label: "Vegan Menu",
    items: [
      {
        name: "Bhune Tamatar Aur Gud Ka Shorba, Pine Nut Soup",
        price: "₹350",
        desc: "Jeera nimki, chotte tamatar, samudri namak.",
        veg: true,
        vegan: true,
      },
    ],
  },
  {
    id: "holi",
    label: "Holi Special",
    items: [
      {
        name: "Agra Aloo With Bedmi Poori [3 Pieces]",
        price: "₹750",
        desc: "Light & Crisper Version of Poori.",
        veg: true,
      },
      {
        name: "Purani Dilli Chole Bhature [2 Pieces]",
        price: "₹750",
        desc: "Paneer Stuffed.",
        veg: true,
      },
      {
        name: "Trio Mathri Chhat",
        price: "₹500",
        desc: "Namak Para, Masala Mathri, Trikona Mathri, Sprouts and Curd.",
        veg: true,
      },
      {
        name: "Ragda Tikki",
        price: "₹500",
        desc: "Potato Patty and Tangy Spice Mix.",
        veg: true,
      },
      {
        name: "Kesari Mawa Gujiya [3 Pieces]",
        price: "₹400",
        desc: "Desi Ghee.",
        veg: true,
      },
      { name: "Badam Thandai [250 Ml]", price: "₹395", veg: true },
    ],
  },
];

function VegBadge({ vegan }: { vegan?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[10px] font-bold tracking-wider uppercase border ${
        vegan
          ? "bg-[oklch(0.35_0.10_145/0.20)] border-[oklch(0.55_0.18_145/0.50)] text-[oklch(0.65_0.18_145)]"
          : "bg-[oklch(0.25_0.09_145/0.20)] border-[oklch(0.45_0.12_145/0.50)] text-[oklch(0.60_0.16_145)]"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          vegan ? "bg-[oklch(0.60_0.18_145)]" : "bg-[oklch(0.50_0.15_145)]"
        }`}
      />
      {vegan ? "Vegan" : "Veg"}
    </span>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-5 border-b border-[oklch(0.20_0.035_155)] last:border-0 group relative">
      {/* Hover gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[oklch(0.72_0.130_85)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
      <div className="flex-1 min-w-0 pl-0 group-hover:pl-3 transition-all duration-300">
        <div className="flex items-center flex-wrap gap-2 mb-1.5">
          <h3 className="font-display text-base sm:text-[1.05rem] font-normal text-[oklch(0.92_0.015_85)] group-hover:text-[oklch(0.80_0.130_82)] transition-colors leading-snug">
            {item.name}
          </h3>
          {item.veg && <VegBadge vegan={item.vegan} />}
        </div>
        {item.desc && (
          <p className="font-body text-sm text-[oklch(0.55_0.018_85)] leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
      <span
        className="font-display text-base font-semibold text-gold-price whitespace-nowrap flex-shrink-0 pt-0.5"
        style={{ color: "oklch(0.80 0.130 82)" }}
      >
        {item.price}
      </span>
    </div>
  );
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("kulcha");

  const activeCategory = menuData.find((c) => c.id === activeTab);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-[oklch(0.09_0.025_155)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url(/assets/uploads/unnamed-8--12.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0.020_155/0.70)] to-[oklch(0.09_0.025_155)]" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4"
          >
            ✦ Crafted with Passion ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light italic tracking-display text-[oklch(0.97_0.012_85)] leading-[0.95]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Our Menu
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
      </section>

      {/* MENU CONTENT */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Category Tabs */}
          <div className="overflow-x-auto pb-3 mb-10 scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 font-body text-sm font-medium tracking-wider uppercase rounded-sm whitespace-nowrap transition-all duration-200 ${
                    activeTab === cat.id
                      ? "bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)]"
                      : "bg-[oklch(0.13_0.035_155)] border border-[oklch(0.25_0.040_155)] text-[oklch(0.65_0.020_85)] hover:border-[oklch(0.72_0.130_85)] hover:text-[oklch(0.72_0.130_85)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-5 mb-10">
                  <h2
                    className="font-display text-3xl sm:text-4xl font-light italic tracking-display text-[oklch(0.92_0.015_85)] whitespace-nowrap"
                    style={{ fontVariationSettings: '"opsz" 48' }}
                  >
                    {activeCategory.label}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-[oklch(0.72_0.130_85/0.50)] to-transparent" />
                </div>

                <div className="bg-[oklch(0.11_0.030_155)] border border-[oklch(0.22_0.038_155)] rounded-sm p-4 sm:p-6">
                  {activeCategory.items.map((item) => (
                    <MenuItemCard key={item.name} item={item} />
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[oklch(0.20_0.035_155)]">
                  <div className="flex items-center gap-2">
                    <VegBadge />
                    <span className="font-body text-xs text-[oklch(0.55_0.018_85)]">
                      Vegetarian
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VegBadge vegan />
                    <span className="font-body text-xs text-[oklch(0.55_0.018_85)]">
                      Vegan
                    </span>
                  </div>
                  <span className="font-body text-xs text-[oklch(0.45_0.015_85)] ml-auto">
                    All prices inclusive of taxes
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
