// import Onclicklogic from "../../Onclicklogic/Onclicklogic"

function Iconbutton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-1/5 h-full  bg-zmapmenu flex justify-center items-center pt-[0.5rem] pb-[0.5rem]"
    >
      {icon}
    </button>
  );
}

export default Iconbutton;
