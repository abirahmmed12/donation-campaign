import { Link } from 'react-router-dom'; // Import the Link component from React Router

const Phonescard = ({ phone }) => {
  const { id, Picture, Category, Category_bg, Description, Price, Card_bg, Text_and_button_bg } = phone;

  const cardStyle = {
    backgroundColor: Category_bg, // Apply Category_bg to the entire card
  };

  const categoryStyle = {
    color: Card_bg, // Apply Category_text_color to the category text
    backgroundColor: Text_and_button_bg, // Add background color to the category text
  };

  const descriptionStyle = {
    color: Text_and_button_bg, // Apply Description_text_color to the description text
  };

  return (
    <div>
      {/* Use the Link component to create a link */}
      <Link to={`/phones/${id}`}>
        <div className="card" style={cardStyle}>
          <figure><img src={Picture} alt="Product" /></figure>
          <div className="card-body">
            <h2 className="card-title rounded-lg w-28 p-3" style={categoryStyle}>{Category}</h2>
            <p className="text-xl font-bold" style={descriptionStyle}>{Description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Phonescard;
