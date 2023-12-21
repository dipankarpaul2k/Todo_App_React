// Icon imports
import { LinkedinLogo, GithubLogo, Sun, Moon } from "@phosphor-icons/react";

export default function NavBar({ theme, toggleTheme }) {
  return (
    <nav>
      <ul>
        {/* Nav logo */}
        <li>
          <strong className="nav_logo">Todo App</strong>
        </li>
      </ul>
      <ul className="nav_links">
        {/* Linkedin link */}
        <li>
          <a
            href="https://www.linkedin.com/in/iamdipankarpaul/"
            target="_blank"
            title="LinkedIn link"
          >
            <LinkedinLogo size={25} weight="fill" />
          </a>
        </li>

        {/* Github link */}
        <li>
          <a href="https://github.com/dipankarpaul2k" target="_blank" title="Github link">
            <GithubLogo size={25} weight="fill" />
          </a>
        </li>

        {/* Theme toggler */}
        <li>
          <a href="#" onClick={toggleTheme} title="Theme toggler">
            {theme === "dark" ? (
              <Sun size={25} weight="fill" />
            ) : (
              <Moon size={25} weight="fill" />
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
}
