'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import styles from './FilterSidebar.module.css';

const filterSectionsData = [
  {
    id: 'idealFor',
    title: 'IDEAL FOR',
    options: ['Men', 'Women', 'Baby & Kids'],
  },
  {
    id: 'occasion',
    title: 'OCCASION',
    options: ['Casual', 'Formal', 'Party', 'Sport'],
  },
  {
    id: 'work',
    title: 'WORK',
    options: ['Office', 'Remote', 'Creative'],
  },
  {
    id: 'fabric',
    title: 'FABRIC',
    options: ['Cotton', 'Linen', 'Polyester'],
  },
];

const FilterGroup = ({
  title,
  id,
  options,
  openSection,
  setOpenSection,
}: {
  title: string;
  id: string;
  options: string[];
  openSection: string | null;
  setOpenSection: Dispatch<SetStateAction<string | null>>;
}) => {
  const isOpen = openSection === id;
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) => (prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]));
  };

  const unselectAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div className={styles.filterSection}>
      <h3 className={styles.header} onClick={() => setOpenSection(isOpen ? null : id)}>
        <span>{title}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}></span>
      </h3>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <button onClick={unselectAll} className={styles.unselectButton}>
          Unselect all
        </button>
        <ul className={styles.optionsList}>
          {options.map((option: string) => (
            <li key={option}>
              <label className={styles.optionLabel}>
                <input
                  type='checkbox'
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function FilterSidebar() {
  const [openSection, setOpenSection] = useState<string | null>('idealFor');

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizableFilter}>
        <label>
          <input type='checkbox' />
          CUSTOMIZABLE
        </label>
      </div>

      {filterSectionsData.map((section) => (
        <FilterGroup
          key={section.id}
          id={section.id}
          title={section.title}
          options={section.options}
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
      ))}
    </aside>
  );
}
