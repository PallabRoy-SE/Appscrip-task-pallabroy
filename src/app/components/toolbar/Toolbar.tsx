'use client';

import { useState } from 'react';
import styles from './Toolbar.module.css';

interface ToolbarProps {
  itemCount: number;
  isFilterVisible: boolean;
  onToggleFilter: () => void;
  sortOption: string;
  onSortChange: (option: string) => void;
}

const SORT_OPTIONS = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH'];

export default function Toolbar({
  itemCount,
  isFilterVisible,
  onToggleFilter,
  sortOption,
  onSortChange,
}: ToolbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSortChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <span className={styles.itemCount}>{itemCount} ITEMS</span>
        <button className={styles.filterToggle} onClick={onToggleFilter}>
          {isFilterVisible ? '< HIDE FILTER' : '> SHOW FILTER'}
        </button>
      </div>

      <div className={styles.sortContainer}>
        <button className={styles.sortButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {sortOption}
          <span>▼</span>
        </button>
        {isDropdownOpen && (
          <div className={styles.sortDropdown}>
            {SORT_OPTIONS.map((option) => (
              <div
                key={option}
                className={`${styles.sortOption} ${sortOption === option ? styles.selected : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                <span className={styles.checkIcon}>✓</span>
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
