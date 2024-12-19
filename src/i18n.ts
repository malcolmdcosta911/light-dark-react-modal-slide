import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hero: {
            title: "Merry Christmas",
            subtitle:
              "He and Klaus continue to deliver presents in Smeerensburg and beyond for eleven years. On the twelfth year, Klaus mysteriously disappears.",
          },
          section1: {
            p: `In 19th-century Norway,[6] the Royal Postmaster General has enrolled Jesper Johansen, his son, into the Royal postman training academy. Jesper, with the intent to return to his privileged lifestyle, deliberately underperforms, so his father assigns him as the postman of the distant, northern island town of Smeerenburg with the task of establishing a post office there and posting 6,000 letters within a year. If Jesper fails, he will be cut off from the family's fortune.


            Jesper finds Smeerensburg comprised almost entirely by two feuding familial clans, the Ellingboes and the Krums, who have been in conflict with each other since the stone age. Desperately seeking letters from the townsfolk to no avail, Jesper finds an isolated house far outside of town, discovering it to be filled with handmade toys and inhabited by an elderly, reclusive woodsman named Klaus. Terrified by Klaus' imposing appearance, Jesper flees, leaving behind a drawing from one of Smeerensburg's Krum children, and Klaus forces Jesper to enter the boy’s home to secretly deliver a toy to the child that cheers him up.`,
          },
          section2: {
            p: `Noticing that Klaus's toy supply is running out, Jesper tries persuading Klaus to make more toys in time for Christmas, but Klaus refuses and forces Jesper away after the latter happens upon his keepsake. Motivated by Márgu, a Sámi girl who can't write or speak in Norwegian, Jesper works with Alva to help Márgu write a letter for a sled he then attempts to build alone. Seeing Jesper's effort, Klaus reconciles with him and the two finish the sled, and upon delivering it and seeing Márgu's joy, Jesper is genuinely moved. Klaus reveals he had made the toys for the children he and his late wife Lydia hoped to have but could not conceive and agrees to the Christmas plan, and Márgu arrives with the rest of her people to help. As the town and Jesper's relationship with Alva flourish, Jesper finds himself conflicted about whether to leave Smeerensburg.`,
          },
        },
      },
      fr: {
        translation: {
          hero: {
            title: "Joyeux noël",
            subtitle:
              "Lui et Klaus continuent de livrer des cadeaux à Smeerensburg et au-delà pendant onze ans. La douzième année, Klaus disparaît mystérieusement.",
          },
          section1: {
            p: `Dans la Norvège du XIXe siècle[6], le ministre royal des Postes a inscrit Jesper Johansen, son fils, à l'académie royale de formation des facteurs. Jesper, avec l'intention de revenir à son style de vie privilégié, est délibérément sous-performant, c'est pourquoi son père le confie comme facteur de la lointaine ville insulaire du nord de Smeerenburg avec la tâche d'y établir un bureau de poste et d'y poster 6 000 lettres en un an. Si Jesper échoue, il sera coupé de la fortune familiale.

            Jesper découvre que Smeerensburg est presque entièrement composé de deux clans familiaux en conflit, les Ellingboes et les Krums, qui sont en conflit les uns avec les autres depuis l'âge de pierre. Cherchant désespérément des lettres des habitants de la ville, en vain, Jesper trouve une maison isolée loin de la ville, découvrant qu'elle est remplie de jouets faits à la main et habitée par un bûcheron âgé et solitaire nommé Klaus. Terrifié par l'apparence imposante de Klaus, Jesper s'enfuit, laissant derrière lui un dessin de l'un des enfants Krum de Smeerensburg, et Klaus force Jesper à entrer dans la maison du garçon pour lui livrer secrètement un jouet qui lui remonte le moral.`,
          },
          section2: {
            p: `Remarquant que les réserves de jouets de Klaus s'épuisent, Jesper essaie de persuader Klaus de fabriquer plus de jouets à temps pour Noël, mais Klaus refuse et force Jesper à partir après que ce dernier soit arrivé à son souvenir. Motivé par Márgu, une fille sami qui ne sait ni écrire ni parler norvégien, Jesper travaille avec Alva pour aider Márgu à rédiger une lettre pour un traîneau qu'il tente ensuite de construire seul. Voyant l'effort de Jesper, Klaus se réconcilie avec lui et les deux terminent le traîneau, et en le livrant et en voyant la joie de Márgu, Jesper est véritablement ému. Klaus révèle qu'il avait fabriqué les jouets pour les enfants que lui et sa défunte épouse Lydia espéraient avoir mais n'ont pas pu concevoir et accepte le plan de Noël, et Márgu arrive avec le reste de son peuple pour l'aider. Alors que la ville et la relation de Jesper avec Alva s'épanouissent, Jesper se retrouve en conflit quant à l'opportunité de quitter Smeerensburg.`,
          },
        },
      },
    },
  });

export default i18n;
