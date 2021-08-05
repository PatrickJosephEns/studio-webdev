import './home.css'
import Display_model from './display_model';

function Home() {
  return (
    <div id="home">
      <Display_model />
      <div class="title">
        <p class="header">The Mall</p>
        <p class="paragraph">Experience the future of shopping</p>
      </div>
    </div>
  );
}

export default Home;