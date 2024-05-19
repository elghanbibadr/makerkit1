import { linksListsData } from "../../../../public/data/data";

 const List = ({ title, items }) => (
  <ul className="mb-6">
    <h6>{title}</h6>
    {items.map((item, index) => (
      <li
        className="hover:text-white duration-300 my-3 cursor-pointer"
        key={index}
      >
        {item}
      </li>
    ))}
  </ul>
);


export const LinksList = () => {
 return  <div className="md:grid md:grid-cols-3 md:col-span-4 lg:col-span-3  md:gap-x-3 ">
    {linksListsData.map(({ title, items }) => {
      return <List title={title} items={items} />;
    })}
  </div>;
};
