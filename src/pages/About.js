import React from "react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <h1> À propos </h1>
      <p>
        <br />
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
        contenu n'en soit modifié. Il a été popularisé dans les années 1960
        grâce à la vente de feuilles Letraset contenant des passages du Lorem
        Ipsum, et, plus récemment, par son inclusion dans des applications de
        mise en page de texte, comme Aldus PageMaker.
      </p>
      <br />
      <p>
        Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là,
        mais la majeure partie d'entre elles a été altérée par l'addition
        d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du
        texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous
        devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous
        les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même
        extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de
        Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en
        combinaison de plusieurs structures de phrases, pour générer un Lorem
        Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune
        répétition, ni ne contient des mots farfelus, ou des touches d'humour.
      </p>
    </div>
  );
};

export default About;
