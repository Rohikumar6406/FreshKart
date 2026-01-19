import Strawberry from '../../assets/Strawberry.jpg'
import Butter from '../../assets/Butter.jpg'
import Eggs from '../../assets/Eggs.jpg'
import Cabbage from '../../assets/Cabbage.jpg'
import Eggplant from '../../assets/Eggplant.jpg'
import Shrimp from '../../assets/Shrimp.jpg'
import Kiwi from '../../assets/Kiwi.jpg'
import Capsicum from '../../assets/Capsicum.jpg'
import Broccoli from '../../assets/Broccoli.jpg'
import Yogurt from '../../assets/Yogurt.jpg'
import GoatMeat from '../../assets/Goat Meat.jpg'
import ChickenBreast from '../../assets/ChickenBreast.jpg'
import Kale from '../../assets/Kale.jpg'
import Cheese from '../../assets/Cheese.jpg'
import CondensedMilk from '../../assets/CondensedMilk.jpg'
import Salmon from '../../assets/Salmon.jpg'
import Banana from '../../assets/Banana.jpg'
import Milk from '../../assets/Milk.jpg'
import Pineapple from '../../assets/Pineapple.jpg'
import Tofu from '../../assets/Tofu.jpg'
import Tilapia from '../../assets/Tilapia.jpg'
import SliceCheese from '../../assets/SliceCheese.jpg'
import RicottaCheese from '../../assets/RicottaCheese.jpg'
import Grapes from '../../assets/Grapes.jpg'
import BitterGourd from '../../assets/Bitter Gourd.jpg'
import BottleGourd from '../../assets/Bottle Gourd.jpg'
import Catfish from '../../assets/Catfish.jpg'
import Herring from '../../assets/Herring.jpg'
import Hilsa from '../../assets/Hilsa.jpg'
import LadyFinger from '../../assets/LadyFinger.jpg'
import Lettuce from '../../assets/Lettuce.jpg'
import Onion from '../../assets/Onion.jpg'
import Pabda from '../../assets/Pabda.jpg'
import Potato from '../../assets/Potato.jpg'
import Rohu from '../../assets/Rohu.jpg'
import Tomato from '../../assets/Tomato.jpg'
import Trout from '../../assets/Trout.jpg'
import Tuna from '../../assets/Tuna.jpg'

const products = [
     {
        id: 1,
        name: 'Strawberry',
        price: 3.0,
        category: 'Fruits',
        image: Strawberry
    },
    {
        id: 2,
        name: 'Butter',
        price: 3.5,
        category: 'Dairy',
        image: Butter
    },
    {
        id: 3,
        name: 'Eggs',
        price: 2.05,
        category: 'Dairy',
        image: Eggs
    },
    {
        id: 4,
        name: 'Cabbage',
        price: 3.0,
        category: 'Vegetables',
        image: Cabbage
    },
    {
        id: 5,
        name: 'Eggplant',
        price: 4.0,
        category: 'Vegetables',
        image: Eggplant
    },
    {
        id: 6,
        name: 'Shrimp',
        price: 3.5, category: 'Chicken & Seafood',
        image: Shrimp
    },
    {
        id: 7,
        name: 'Kiwi',
        price: 2.05,
        category: 'Fruits',
        image: Kiwi
    },
    {
        id: 8,
        name: 'Green Capsicum',
        price: 4.0,
        category: 'Vegetables',
        image: Capsicum
    },
    {
        id: 9,
        name: 'Broccoli',
        price: 2.0,
        category: 'Vegetables',
        image: Broccoli
    },
    {
        id: 10,
        name: 'Yogurt',
        price: 3.0,
        category: 'Dairy',
        image: Yogurt
    },
    {
        id: 11,
        name: 'GoatMeat',
        price: 8.0,
        category: 'Chicken & Seafood',
        image: GoatMeat
    },
    {
        id: 12,
        name: 'Chicken Breast',
        price: 7.0,
        category: 'Chicken & Seafood',
        image: ChickenBreast
    },
    {
        id: 13,
        name: 'Kale Leaves',
        price: 3.0,
        category: 'Vegetables',
        image: Kale
    },
    {
        id: 14,
        name: 'Mozzarella Cheese',
        price: 7.0,
        category: 'Dairy',
        image: Cheese
    },
    {
        id: 15,
        name: 'Condensed Milk',
        price: 5.0,
        category: 'Dairy',
        image: CondensedMilk
    },
    {
        id: 16,
        name: 'Salmon Filet ',
        price: 4.0,
        category: 'Chicken & Seafood',
        image: Salmon
    },
    {
        id: 17,
        name: 'Banana ',
        price: 2.0,
        category: 'Fruits',
        image: Banana
    },
    {
        id: 18,
        name: 'Milk Bottle (3)',
        price: 8.0,
        category: 'Dairy',
        image: Milk
    },
    {
        id: 19,
        name: 'PineApple',
        price: 5.0,
        category: 'Fruits',
        image: Pineapple
    },
    {
        id: 20,
        name: 'Tofu Cubes',
        price: 4.0,
        category: 'Dairy',
        image: Tofu
    },
    {
        id: 21,
        name: 'Tilapia Fish',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Tilapia
    },
    {
        id: 22,
        name: 'Slice Cheese',
        price: 5.0,
        category: 'Dairy',
        image: SliceCheese
    },
    {
        id: 23,
        name: 'Ricotta Cheese',
        price: 7.0,
        category: 'Dairy',
        image: RicottaCheese
    },
    {
        id: 24,
        name: 'Grapes',
        price: 3.0,
        category: 'Fruits',
        image: Grapes
    },
    {
        id: 25,
        name: 'Lettuce Leaf',
        price: 3.0,
        category: 'Vegetables',
        image: Lettuce
    },

    {
        id: 26,
        name: 'BitterGourd',
        price: 3.0,
        category: 'Vegetables',
        image: BitterGourd
    },

    {
        id: 27,
        name: 'BottleGourd',
        price: 3.0,
        category: 'Vegetables',
        image: BottleGourd
    },
    {
        id: 28,
        name: 'Catfish',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Catfish
    },
    {
        id: 29,
        name: 'Herring',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Herring
    },
    {
        id: 30,
        name: 'Hilsa',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Hilsa
    },
    {
        id: 31,
        name: 'LadyFinger',
        price: 3.0,
        category: 'Vegetables',
        image: LadyFinger
    },
    {
        id: 32,
        name: 'Lettuce',
        price: 3.0,
        category: 'Vegetables',
        image: Lettuce
    },
     {
        id: 33,
        name: 'Onion',
        price: 3.0,
        category: 'Vegetables',
        image: Onion
    },
     {
        id: 34,
        name: 'Potato',
        price: 3.0,
        category: 'Vegetables',
        image: Potato
    },
    {
        id: 35,
        name: 'Tomato',
        price: 3.0,
        category: 'Vegetables',
        image: Tomato
    },
    {
        id: 36,
        name: 'Rohu',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Rohu
    },
    {
        id: 37,
        name: 'Trout',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Trout
    },
     {
        id: 38,
        name: 'Tuna',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Tuna
    },
    {
        id: 39,
        name: 'Pabda',
        price: 3.0,
        category: 'Chicken & Seafood',
        image: Pabda
    },
];


export default products
