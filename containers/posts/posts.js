import Post from '../../components/post/Post';

const Posts = ({ posts }) => {
  return (
    <div className="row">
      <div className="col-12">
        <section>
          <header className="major">
            <h2>Ultimas dicas de viajens</h2>
          </header>
          <div className="row">
            {posts
              ? posts.map((post, i) => {
                  return (
                    <Post
                      title={post.title}
                      description={post.description}
                      key={i}
                    />
                  );
                })
              : ''}
          </div>
        </section>
      </div>
      <div className="col-12">
        <section>
          <header className="major">
            <h2>The Blog</h2>
          </header>
          <div className="row">
            <div className="col-6 col-12-small">
              <section className="box">
                <a href="#" className="image featured">
                  <img src="images/pic08.jpg" alt="" />
                </a>
                <header>
                  <h3>Magna tempus consequat</h3>
                  <p>Posted 45 minutes ago</p>
                </header>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed et blandit
                  consequat sed veroeros lorem et blandit adipiscing feugiat
                  phasellus tempus hendrerit, tortor vitae mattis tempor, sapien
                  sem feugiat sapien, id suscipit magna felis nec elit.
                  ClassName aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos lorem ipsum dolor sit amet.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button icon solid fa-file-alt">
                        Continue Reading
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button alt icon solid fa-comment">
                        33 comments
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
            </div>
            <div className="col-6 col-12-small">
              <section className="box">
                <a href="#" className="image featured">
                  <img src="images/pic09.jpg" alt="" />
                </a>
                <header>
                  <h3>Aptent veroeros aliquam</h3>
                  <p>Posted 45 minutes ago</p>
                </header>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed et blandit
                  consequat sed veroeros lorem et blandit adipiscing feugiat
                  phasellus tempus hendrerit, tortor vitae mattis tempor, sapien
                  sem feugiat sapien, id suscipit magna felis nec elit.
                  ClassName aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos lorem ipsum dolor sit amet.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button icon solid fa-file-alt">
                        Continue Reading
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button alt icon solid fa-comment">
                        33 comments
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Posts;
