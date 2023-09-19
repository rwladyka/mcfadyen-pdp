type ViewMoreLikeThisProps = {
  items: string[];
};

const ViewMoreLikeThis = ({ items }: ViewMoreLikeThisProps) => (
  <div className="flex justify-center flex-col my-20 mx-[18px]">
    <h2 className="uppercase font-bold text-center">
      view more like this product
    </h2>
    <ul className="flex justify-center gap-6 mt-3 text-sm">
      {items.map((item) => (
        <li key={item} className="uppercase underline cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ViewMoreLikeThis;
