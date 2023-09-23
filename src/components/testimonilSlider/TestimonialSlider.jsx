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
      position: "Chef d'entreprise à Strasbourg",
      review:
        "Un immense merci à David pour la réalisation de notre site de faire-part de mariage ! Sa disponibilité et son attitude - tout est possible - nous ont vraiment touchés. Même face à nos demandes parfois exigeantes, il a toujours été arrangeant. Un vrai bonheur de collaborer avec lui. Je recommande les yeux fermés !",
      image: "./img/client/killian.jpeg",
    },
  ];

  return <Carousel testimonials={testimonialsData} />;
};

export default TestimonialSlider;
