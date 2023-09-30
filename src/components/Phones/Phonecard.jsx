import React from 'react';
import Swal from 'sweetalert2';

const Phonecard = ({ phone }) => {
  const handleClick = () => {
    const items = JSON.parse(localStorage.getItem("item")) || []; 
    const isExists = items.find((item) => item.id === phone.id);

    if (!isExists) {
      items.push(phone);
      localStorage.setItem("item", JSON.stringify(items));
      
      Swal.fire({
        icon: 'success',
        title: 'Thanks For Your Donation',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'You Already Added This',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  const { id,Card_bg, Picture, Description, Price, Text_and_button_bg, more_details, Category_bg } = phone;

  const buttonStyle = {
    backgroundColor: Category_bg,
    color: 'white',
    
  };
  const categoryStyle = {
    color: Card_bg,
    backgroundColor: Text_and_button_bg,
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="lg:h-96" src={Picture} alt={Description} />
      </figure>
      <div className="card-body">
        <div className="p-14">
          <h2 className="card-title text-2xl m-auto">{Description}</h2>
          <p className="text-xl">{more_details}</p>
        </div>
        <div className="card-actions absolute">
          <div className="bg-black opacity-50 transition-opacity duration-300 relative lg:bottom-32 w-[312px] lg:w-[620px] border lg:h-28 h-16 lg:ml-[313px] bottom-[78px] left-10 lg:left-0 md:left-52"></div>
          <button
            onClick={handleClick}
            className="text-white btn btn-error h-full relative lg:bottom-24 lg:right-80 lg:-left-[600px] bottom-36 left-10 md:bottom-16 md:-left-24 brightness-100 opacity-100"
            style={categoryStyle}
          >
            Donate: {Price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phonecard;
