import React from "react";
import { Link } from "react-router-dom";

export const DashboardCard = ({bootstrap_classes, image, title, description, link_to}) => <div className={bootstrap_classes}>
  <Link to={link_to} className="tile">
    <div className="tileImage">
      <img className="img-responsive img-fluid" src={image} />
    </div>
    <div className="tileContent">
      <h3>{title}</h3>
      <p>{description}<span>...</span></p>
    </div>
    <div className="tileOverlay">
      <span>Read More</span>
    </div>
  </Link>
</div>