import React from "react";
import Carousel from "./Carousel";

const TestimonialSlider = () => {
  const testimonialsData = [
    {
      name: "Stephane Wernert",
      position: "Gérant Restaurant Il Girasole Strasbourg",
      review:
        "Un grand merci à David pour le superbe site de mon restaurant ! Ultra réactif, à l'écoute et même en avance sur les délais. Mes clients adorent, et moi aussi. Une collaboration au top ! Je n'hésiterai pas à refaire appel à toi. Bravo et merci !",
      image: "./img/client/stephane.jpeg",
    },
    {
      name: "Killian Petit Grazini",
      position: "Hereux mari d'Elisa depuis 2023",
      review:
        "Un immense merci à David pour la réalisation de notre site de faire-part de mariage ! Sa disponibilité et son attitude - tout est possible - nous ont vraiment touchés. Même face à nos demandes parfois exigeantes, il a toujours été arrangeant. Un vrai bonheur de collaborer avec lui. Je recommande les yeux fermés !",
      image: "./img/client/killian.jpeg",
    },
    {
      name: "Fanny Fuchs",
      position: "Société de gestion immobilière",
      review:
        "Un grand merci à David pour la réalisation impeccable du site vitrine de Guest Season, notre société de location immobilière à Strasbourg. Sa maîtrise en création de site et son expertise en SEO ont vraiment fait la différence. Grâce à lui, notre présence en ligne est solide et professionnelle. Je suis plus que satisfait de son travail et le recommande vivement !",
      image: "./img/client/fanny.jpg",
    },
  ];

  return <Carousel testimonials={testimonialsData} />;
};

export default TestimonialSlider;
