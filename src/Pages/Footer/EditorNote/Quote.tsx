type QuoteProps = {
  text: string;
};

const Quote = ({ text }: QuoteProps) => {
  return (
    <div className="text-center capitalize text-2xl lg:w-1/3 mx-auto">
      {text}
    </div>
  );
};

export default Quote;
