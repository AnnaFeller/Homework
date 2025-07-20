import {friends} from "../utils/constant.js";
import Photo from "./Photo.jsx";
import {useState} from "react";

const Team = () => {
    const [zoomed, setZoom] = useState(null);

    const click = (index) => {
        if (zoomed === index) {
            setZoom(null);
        } else {
            setZoom(index);
        }
    }


    return (
        <section className="w-full max-w-4xl mx-auto border border-yellow-500 rounded-b-2xl p-4">
            <div className="grid grid-cols-3 gap-2">
                {friends.map((friend, index) => {
                    if (zoomed !== null && zoomed !== index)
                        return null
                    return (
                        <Photo picture={friend.src} key={index} isZoomed={setZoom === index}
                               onClick={() => click(index)}/>

                    )
                })}
            </div>

        </section>
    );
};

export default Team;