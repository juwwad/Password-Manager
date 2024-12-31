import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-slate-800 flex text-white justify-around items-center p-4 sticky top-0 sm:p-2 sm:hidden">
      <h1 className="font-bold text-3xl"> &lt;Pass<span className="text-green-500">OP</span>/&gt;</h1>
      <Link href="https://github.com/juwwad/" passHref target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
      </Link>
    </div>
  )
}

export default Navbar
