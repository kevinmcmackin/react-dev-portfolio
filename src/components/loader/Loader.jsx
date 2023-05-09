import React from 'react';
import { BarLoader } from 'react-spinners';
import './loader.css'


function Loader() {
    return (
        <div className="loading__container">
            <div className="loading__wrap">
                <h1>Loading</h1>
                <BarLoader color="#4db5ff" loading={true} width={100} />
            </div>
        </div>
    );
}

export default Loader;
