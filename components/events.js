import '../css/style.css'
import '../css/responsive.css'
const eventImages=[
  "./assests/img3.jpeg",
  "./assests/img4.jpeg",
  "./assests/img5.jpeg"
]

document.querySelector('#app').innerHTML = `
  <div>
    <nav>
      <div class='brand'>
        <h2><span class='pink'>Kiki</span> Events</h2>
      </div>
      <ul role='navigation'>
        <li><a href="index.html">Home</a></li>
        <li><a href="events.html" class="active">Events</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
      <div class="more">
        <ul>
          <li><a href="tel:0754423664" target="_blank"><i class="fa fa-phone"></i> +254754423664</a></li>
        </ul>      
      </div>
    </nav>

    <div class='body'>
      <p class="header">Kiki Events/ Events</p>

      <div class="hero-section">
        <div>
          <img src="./assests/img2.jpeg" alt="Kiki events images"/>
        </div>
        <article>
          <h1>KiKi Events</h1>
          <p>
            Make your business shine online with a custom party website designed just for you by a professional designer. 
            Need ideas? We’ve collected some amazing examples of party websites from our global community of designers. 
            Get inspired and start planning the perfect party web design today.
          </p>
        </article>
      </div>

      <div class="event-section">
        <img src=${eventImages[0]} alt="Kiki events images"/>
        <img src=${eventImages[1]} alt="Kiki events images"/>
        <img src=${eventImages[2]} alt="Kiki events images"/>
      </div>

    </div>
  </div>
`

