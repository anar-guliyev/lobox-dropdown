import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: 400,
    margin: "0 auto",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5rem",
    "& p": {
      marginBottom: 16,
      fontWeight: 500,
      color: "#707379",
    },
  },
  tabs: {
    height: 40,
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #0000ff63",
    color: "#0000ff63",
    fontWeight: 600,
    fontSize: 14,
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    cursor: "pointer",
    "& span": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      height: "100%",
    },
    "& span.active": {
      color: "#fff",
      backgroundColor: "#0000ff63",
    },
  },
});
