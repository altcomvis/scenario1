import LogoWhite from '../assets/logo-white.svg'; 

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-orange-950 gap-8">
      <img src={LogoWhite} className="w-24" alt="Logo" />
      <nav className="flex gap-6 text-white text-sm">
        <a href="#" className="hover:opacity-50">
          Home
        </a>
        <a href="#" className="hover:opacity-50">
          Categorias
        </a>
        <a href="#" className="hover:opacity-50">
          Perfil
        </a>
      </nav>
    </div>
  );
};

export default Footer;
