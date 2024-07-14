import Link from "next/link";
import styles from "./links.module.css";

export default function Links() {
  const menus = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className={styles.links}>
      {menus.map((url) => (
        <Link href={url.path} key={url.id}>
          {url.title}
        </Link>
      ))}
    </div>
  );
}
