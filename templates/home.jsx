import Heading from 'components/heading/heading';
import PropTypes from 'prop-types';

const Home = ({ title, description }) => {
  return (
    <div className="home">
      <div className="home__header">
        <Heading text={title} level={1} />
        <p className="home__lead">{description}</p>
      </div>
      <div className="home__content">[HARD CODED CONTENT]</div>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
