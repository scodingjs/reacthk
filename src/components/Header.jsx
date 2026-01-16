

const Header =() => {
 return(

  <header className="sticky-header  ">
 
    <a href="/" className="name-portfolio">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt=" Logo"/> */}
        <span>Sangeetha Kaliaperumal</span>
    </a>
     <nav className="">
      <ul className="web-section-links">
        <li>
          <a href="#" className=""current="page">Home</a>
        </li>
        <li>
          <a href="/aboutme" className="">About</a>
        </li>
        <li>
          <a href="/projects" className="">Projects</a>
        </li>
        <li>
          <a href="/testimonials" className="">Testimonial</a>
        </li>
        <li>
          <a href="/resume" className="">Resume</a>
        </li>
        <li>
          <a href="/contact" className="">Contact Me</a>
        </li>
      </ul>
    </nav>
   
  </header>
  )
}

export default Header;
