import React from "react";
import { DashboardCard } from "../components/dashboard-card";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const topics = [
  {bootstrap_classes: "col-sm-8 col-md-6", image: "https://source.unsplash.com/WLUHO9A_xik/1080x700", title: "Most Recent Test Post", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec."},
  {bootstrap_classes: "col-sm-4 col-md-3", image: "https://source.unsplash.com/Z1tWLxk7krs/1080x700", title: "Testing Posts Yo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec."},
  {bootstrap_classes: "col-sm-4 col-md-3", image: "https://source.unsplash.com/GnU2altkUSQ/1080x700", title: "Filler Post Dude", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec."},
  {bootstrap_classes: "col-sm-4 col-md-3", image: "https://source.unsplash.com/X6CZGpJBi8U/1080x700", title: "Mhmm.. Filler Posts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec."},
  {bootstrap_classes: "col-sm-4 col-md-3", image: "https://source.unsplash.com/czVtGYACOMg/1080x700", title: "Not a Lorem Ipsum Post", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec."},
  {bootstrap_classes: "col-sm-4 col-md-3", image: "https://source.unsplash.com/xMh_ww8HN_Q/1080x700", title: "Old of Posts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec."}
]

export const DashboardPage = () => <section className="blogTiles">
    <div>
      <Carousel>
        {
          topics.map( (topic, index) =><Carousel.Item interval={1000}>
            <img className="d-block w-100" alt={`slide ${index}`} src={topic.image}  />
              <Carousel.Caption>
                <h3>{topic.title}</h3>
                <p>{topic.description} <Link to={encodeURIComponent(topic.title.toLowerCase())}>Click Here</Link></p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        }
      </Carousel>
    </div>
    <div className="container">
      <div className="">
        <h2>Drop <span>It</span></h2>
        <div className="row">
          {
            topics.map( 
              (topic, index) => <DashboardCard 
                key={encodeURIComponent(topic.title.toLowerCase())}
                bootstrap_classes={topic.bootstrap_classes}
                description = {topic.description}
                image = {topic.image}
                title = {topic.title} 
                link_to = {`${encodeURIComponent(topic.title.toLowerCase())}`}
              />
            )
          }
          <div className="col-sm-4 col-md-3">
            <Link to="#" className="tileLast">
              <span>“Always pass on what you have learned.”</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>