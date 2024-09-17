const Button = ({ name }) => {
  return (
    <div >
      <button className="px-3 py-1 m-2 rounded-lg hover:bg-opacity-80 bg-gray-200 ">{name}</button>
    </div>
  );

};

export default Button;
