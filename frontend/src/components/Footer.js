import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Bradock Intelligence Academy. Todos os direitos reservados.</p>
        
      </div>
    </footer>
  );
}
