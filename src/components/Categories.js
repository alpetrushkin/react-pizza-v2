import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onActive = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((elem, i) => (
          <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? "active" : ''}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;