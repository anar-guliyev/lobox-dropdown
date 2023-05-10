import React from "react";
import randomWords from "random-words";
import { useOnClickOutside, useKeyPress, useRandomEmoji } from "hooks";
import { useStyles } from "./styles";

interface DropdownProps {
  items: string[];
}

export const DropDownWithoutInput = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [list, setList] = React.useState(items);
  const enterKeyPressed = useKeyPress("Enter");
  const componentRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const newEmoji = useRandomEmoji();

  const classes = useStyles({ isOpen });

  const scrollToLast = () => {
    if (menuRef.current) {
      menuRef.current.scrollTop = menuRef.current.scrollHeight;
    }
  };

  const onListItemClick = (key: number) => {
    if (key !== activeIndex) {
      setActiveIndex(key);
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    scrollToLast();
  }, [list.length]);

  React.useEffect(() => {
    if (enterKeyPressed && isOpen) {
      const newWord = randomWords(1)[0];

      setList([...list, newWord + newEmoji]);
    }
  }, [enterKeyPressed]);

  useOnClickOutside(componentRef, () => isOpen && setIsOpen(false));

  return (
    <div className={classes.dropdown} ref={componentRef}>
      <div className={classes.input} onClick={e => setIsOpen(true)}>
        {list[activeIndex]}
      </div>
      <ul className={classes.dropdownMenu} role="tablist" ref={menuRef}>
        {list.map((item, key) => (
          <li
            className={classes.listItem}
            key={item}
            onClick={() => onListItemClick(key)}
          >
            {item}
          </li>
        ))}
      </ul>
      <span>
        *Note: When the dropdown is active just click on Enter key. <br />
        (Not the numlock one)
      </span>
    </div>
  );
};
