const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-4 bg-black  items-center text-center">
      <p className="text-gray-300 text-sm">
        © <span className="text-white">{currentYear}</span> Masud. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
