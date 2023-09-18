type IconType = {
  SVGIcon: string;
  alt: string;
};

const Icon = ({ SVGIcon, alt }: IconType) => {
  return <img src={SVGIcon} alt={alt} />;
};

export default Icon;
