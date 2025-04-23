import Style from './Footer.module.css';

function Footer(){
  return(
    <footer className={Style.footer}>
      <p>&copy; {new Date().getFullYear()} Programação. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
