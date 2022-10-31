


function Slider(){
    return(
            <div className=" bg-opacitybd text-sm rounded-sm p-3 flex gap-2 flex-col text-white">
                Opacity filter
            <input type="range" min="1" max="100" value="50"/>
            </div>
    )
}

export default Slider