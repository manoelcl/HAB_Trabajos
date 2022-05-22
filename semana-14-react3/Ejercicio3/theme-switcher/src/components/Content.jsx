import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const Content = () => {
  const theme = useContext(ThemeContext);
  return (
    <article className={theme ? "dark" : undefined}>
      lafñdkñaDKJDSAKJDAkAḰJADÑKjkfdsklasfdlñjafd
    </article>
  );
};

export default Content;
