import styles from "./Main.module.css";
import Band from "../Band";

const bands = [
  {
    image: "https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg",
    name: "Banda 1",
    description: "Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    image: "https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg",
    name: "Banda 2",
    description: "Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    image: "https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg",
    name: "Banda 3",
    description: "Descrição da Banda 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    image: "https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg",
    name: "Banda 4",
    description: "Descrição da Banda 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

function Main() {
  return (
    <main className={styles.main}>
      {bands.map((band, index) => (
        <Band key={index} {...band} />
      ))}
    </main>
  );
};

export default Main;

