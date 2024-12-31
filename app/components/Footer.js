import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    
    <div className='w-full bg-slate-800 p-4 fixed bottom-0 flex justify-around items-center sm:text-[12px]'>
        <div>
      <h2 className='text-[wheat] '>All rights reserved &copy; 2024</h2>
      <h2 className='text-[wheat] '>Made with Love by <span className='text-green-300'>Jawad Ahmad</span></h2>
        </div>
        <div className="flex gap-6">
            <Link href="https://linkedin.com/in/juwwad/" passHref target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "wheat"}}/>
            </Link>
            <Link href="https://github.com/in/juwwad/" passHref target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "wheat"}}/>
            </Link>
            <Link href="https://twitter.com/juwwad/" passHref target="_blank">
        <FontAwesomeIcon icon={faXTwitter} size="2x" style={{color: "wheat"}}/>
            </Link>
        </div>
    </div>
  )
}

export default Footer
