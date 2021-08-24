import './home.css'
import Display_model from './display_model';
import Display_shops from './display_shops';

const Row = ({ children }) => <div className="row justify-content-center rows">{children}</div>

function Home() {
  return (
    <>
      <div id="home">
        <Display_model />
        <div class="title">
          <p class="header">The Mall</p>
          <p class="paragraph">Experience the future of shopping</p>
        </div>
      </div>
      <Row>
        <Display_shops />
      </Row>
    </>
  );
}

export default Home;