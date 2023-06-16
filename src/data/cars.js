import whitei3 from "../assets/i3white.jpeg";
import blacki3 from "../assets/i3black.jpeg";
import orangei3 from "../assets/i3orange.jpeg";
import blacki8 from "../assets/i8black.jpeg";
import whitei8 from "../assets/i8white.jpeg";

export const cars = [
  {
    name: "BMW i3",
    price: 42400,
    colors: [
      { name: "White", price: 0, img: whitei3, exa: "#fff" },
      { name: "Mineral Grey", price: 550, img: blacki3, exa: "#303539" },
      { name: "Orange Metallic", price: 550, img: orangei3, exa: "#CF5A15" },
    ],
    accessories: [
      {
        name: "BMW Charging Station",
        price: 1080,
      },
      {
        name: "BMW Maintenance Program Upgrade",
        price: 1895,
      },
      {
        name: "1 Year BMW Maintenance Program Upgrade",
        price: 975,
      },
    ],
  },
  {
    name: "BMW i8",
    price: 140700,
    colors: [
      {
        name: "Grey Metallic",
        price: 0,
        img: blacki8,
        exa: "#303539",
      },
      {
        name: "White Perl Metallic",
        price: 1800,
        img: whitei8,
        exa: "#D1D1D1",
      },
    ],
    accessories: [
      {
        name: "BMW Laserlight",
        price: 6300,
      },
      {
        name: "BMW Charging Station",
        price: 1080,
      },
      {
        name: "BMW Maintenance Program Upgrade",
        price: 1895,
      },
      {
        name: "1 Year BMW Maintenance Program Upgrade",
        price: 975,
      },
    ],
  },
];
