import './home.css'
import Display_model from './display_model';
import Logo from './Logo';

function Home() {
  return (
    <div class="home">
      <Logo />
      <Display_model />
      <div class="title">
        <p class="header">The Mall</p>
        <p class="paragraph">Experience the future of shopping</p>
      </div>
      <div>
        <a class="btn-dark"href="#"></a>
      </div>
    </div>
  );
}

export default Home;