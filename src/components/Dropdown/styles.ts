import { createUseStyles } from "react-jss";

type ThemeProps = {
  isOpen: Boolean;
};

export const useStyles = createUseStyles({
  dropdown: {
    position: "relative",
    width: "100%",
  },
  dropdownMenu: {
    position: "absolute",
    top: 50,
    left: 0,
    listStyle: "none",
    width: "100%",
    backgroundColor: "#fff",
    padding: "1rem 0.75rem",
    opacity: (theme: ThemeProps) => (theme.isOpen ? "1" : "0"),
    pointerEvents: (theme: ThemeProps) => (theme.isOpen ? "auto" : "none"),
    maxHeight: 300,
    borderRadius: 10,
    border: "1px solid #ececec",
    //Scroll styling
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#c6c9ce",
      borderRadius: 5,
    },
    scrollBehavior: "smooth",
  },
  listItem: {
    fontSize: 16,
    fontWeight: 500,
    padding: "4px 8px",
    color: "#707379",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f2f4ff",
      color: "#7586ba",
    },
  },
  input: {
    fontSize: 16,
    height: 38,
    width: "100%",
    padding: "0.375rem 0.75rem",
    borderRadius: 8,
    fontWeight: 500,
    color: "#7b8086",
    fontFamily: "Roboto",
    border: "1px solid #c6c9ce",
    outline: "none",
    "&:focus": {
      outline: "solid #d7dfff",
      border: "1px solid #8e9ad5",
    },
  },
});
