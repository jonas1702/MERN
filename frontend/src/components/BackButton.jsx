import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ destination = '/'  }) => {
    return (
        <div>
            <Link to={destination}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default BackButton