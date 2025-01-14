import React from 'react';

interface CategoryItem {
  category: string;
  items: string[];
}

interface CategoryListProps {
  data: CategoryItem[];
}

export function CategoryList({ data }: CategoryListProps) {
  return (
    <div className="space-y-6">
      {data.map((category, index) => (
        <div key={index}>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{category.category}</h4>
          <ul className="space-y-2">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}