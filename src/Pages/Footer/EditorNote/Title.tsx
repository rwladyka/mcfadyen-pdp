type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex justify-center uppercase mb-4 font-bold text-sm">
      {text}
    </div>
  );
};

export default Title;
