import "./nav-top.css";
import "./header.css";

export default {
  title: "Component/Top Navigation",
};
export const Regular = () => `
<nav class="nav-top">
  <a href="#aboutme" class="nav-top__button">Who am I?</a>
  <a href="#biography" class="nav-top__button">Biography</a>
  <a href="#projects" class="nav-top__button">Projects</a>
  <a href="#contact" class="nav-top__button">Contact</a>
</nav>
`;
