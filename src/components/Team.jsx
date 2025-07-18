import {friends} from "../utils/constant.js";
import Photo from "./Photo.jsx";

const Team = () => {
    return (
        <section className="w-full max-w-4xl mx-auto border border-yellow-500 rounded-b-2xl p-4">
            <div className="grid grid-cols-3 gap-2">

                {friends.map((friend, index) => (
                    <Photo picture={friend.src} pos={friend.pos} key={index} />
                ))}
            </div>

        </section>
    );
};

export default Team;