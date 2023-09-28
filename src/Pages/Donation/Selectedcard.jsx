

const Selectedcard = ({phone}) => {
    const {id, Picture, Category, Description, Price, Card_bg, Text_and_button_bg, more_details} = phone 
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
       
            <div className="card" style={cardStyle}>
              <figure><img src={Picture} alt="Product" /></figure>
              <div className="card-body">
                <h2 className="card-title rounded-lg w-28 p-3" style={categoryStyle}>{Category}</h2>
                <p className="text-xl font-bold" style={descriptionStyle}>{Description}</p>
              </div>
            </div>
        
        </div>
      );
};

export default Selectedcard;