import NavBar from '../nav';

const Home = () => (
  <div className="App">
    <NavBar />
    <div className="home-container">
      <h1>Welcome to my calculations page</h1>
      <p>
        Math Magician is a simple app that allow the users to perform
        calculation using all existing operators; it is a simple app that helps
        us to get started with React.Js
      </p>
      <p>
        {' '}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo
        veritatis optio. Fuga voluptatibus, dolorem error quo aspernatur
        repudiandae natus unde deleniti voluptate, mollitia quibusdam illo
        inventore nisi dolor maxime.Aperiam natus exercitationem illum!
        Maiores exercitationem fuga molestiae,
        rerum dignissimos incidunt inventore corrupti laboriosam qui totam reiciendis
        accusamus vel ea aliquid odio nostrum tenetur, corporis perspiciatis cum,
        et quae aspernatur?
        Suscipit placeat repudiandae nostrum, nulla ea natus nesciunt iste, perspiciatis repellat,
        totam eveniet.
        {' '}
      </p>
    </div>
  </div>
);

export default Home;
