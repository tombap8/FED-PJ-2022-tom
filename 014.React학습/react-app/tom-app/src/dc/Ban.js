// 배너 컴포넌트 - Ban.js
import "./css/ban.css";

function Ban() {

    const ban_data = [
        {},
        {}
    ];


    return (
        <div className="banner">
            <ul className="slider">
                <li>
                    <img className="banimg" src="./images/dcm21.jpg" alt="배너" />
                    <section className="bantit">
                        <h3>GOTHAM GAZETTE</h3>
                        <h2>WORLDS TRAVELER</h2>
                        <p>
                            Barry who? The Flash isn't the only DC hero this summer who's been
                            traveling through the multiverse.
                        </p>
                        <button>New Places, Familiar Faces</button>
                    </section>
                </li>
            </ul>
        </div>
    );
} /////////// Ban 컴포넌트 /////////////

export default Ban;
