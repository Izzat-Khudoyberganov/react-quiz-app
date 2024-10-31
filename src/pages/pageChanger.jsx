import React, { useEffect } from "react";

const PageChanger = () => {
    useEffect(() => {
        sessionStorage.clear();
    }, []);
    return <div>PageChanger</div>;
};

export default PageChanger;
