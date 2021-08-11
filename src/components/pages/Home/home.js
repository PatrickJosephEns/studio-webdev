import './home.css'
import Display_model from './display_model';
import Display_shops from './display_shops';

function Home() {
  return (
    <div id="content">
      <div id="home">
        <Display_model />
        <div class="title">
          <p class="header">The Mall</p>
          <p class="paragraph">Experience the future of shopping</p>
        </div>
      </div>
      <Display_shops />
    </div>
  );
}

export default Home;