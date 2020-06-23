import Link from 'next/link';

const Post = ({ title, description }) => {
  return (
    <div className="col-4 col-6-medium col-12-small">
      <section className="box">
        <a href="#" className="image featured">
          {/* <img src={props.image} alt="" /> */}
        </a>
        <header>
          <h3>{title}</h3>
        </header>
        <div>{description}</div>
        <footer>
          <ul className="actions">
            <li>
              <a href="#" className="button alt">
                Find out more
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
};
export default Post;
