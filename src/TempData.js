import BookImage1 from "./assets/book16 2.png";
import BookImage2 from "../src/assets/book3 5.png";
import BookImage3 from "../src/assets/book3 6.png";
import BookImage4 from "../src/assets/book5 4.png";
import BookImage5 from "../src/assets/book16 4.png";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const booksData = [
  {
    id: 1,
    imageSrc: BookImage1,
    price: 114.99,
    name: "The Lady Beauty Scarlett",
  },
  {
    id: 2,
    imageSrc: BookImage2,
    price: 69.99,
    name: "Great Travel At Desert",
  },
  {
    id: 3,
    imageSrc: BookImage3,
    price: 99.99,
    name: "My Book Cover",
  },
  {
    id: 4,
    imageSrc: BookImage4,
    price: 139.99,
    name: "Simple way of Piece life",
  },
  {
    id: 5,
    imageSrc: BookImage5,
    price: 199.99,
    name: "Your Simple book Cover",
  },
  {
    id: 6,
    imageSrc: BookImage3,
    price: 124.99,
    name: "My Book Cover",
  },
];
export const categories = [
  {
    mainTitle: "Departments",
    categoryTitles: [
      "Fruit & Vegetable",
      "Pantry",
      "Organic Shop",
      "Health Snack",
      "Kitchen & Food Staff",
    ],
  },
  {
    mainTitle: "Departments",
    categoryTitles: [
      "Fruit & Vegetable",
      "Pantry",
      "Organic Shop",
      "Health Snack",
      "Kitchen & Food Staff",
    ],
  },
];
