import React from 'react'; 

export default function HeaderView({urlImage}) {

    return (<div className="headerView">
        <img src={urlImage} alt=""/>
    </div>); 
}