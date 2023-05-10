import React from "react";
import { useStyles } from "./styles";
import { useRandomEmoji, useOnClickOutside } from "hooks";

interface DropdownProps {
  items: string[];
}

export const DropDown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [list, setList] = React.useState(items);
  const [newItem, setNewItem] = React.useState("");
  const menuRef = React.useRef<HTMLUListElement>(null);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const newEmoji = useRandomEmoji();

  const classes = useStyles({ isOpen });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newItem) {
      setList([...list, newItem + newEmoji]);
      setNewItem("");
    }
  };

  const onListItemClick = (item: string) => {
    if (newItem !== item) {
      setNewItem(item);
      setIsOpen(false);
    }
  };

  const scrollToLast = () => {
    if (menuRef.current) {
      menuRef.current.scrollTop = menuRef.current.scrollHeight;
    }
  };

  useOnClickOutside(componentRef, () => isOpen && setIsOpen(false));

  React.useEffect(() => {
    scrollToLast();
  }, [list.length]);

  return (
    <div className={classes.dropdown} ref={componentRef}>
      <input
        className={classes.input}
        type="text"
        placeholder="Enter new item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
      />
      <ul className={classes.dropdownMenu} role="tablist" ref={menuRef}>
        {list.map(item => (
          <li
            className={classes.listItem}
            key={item}
            onClick={() => onListItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
