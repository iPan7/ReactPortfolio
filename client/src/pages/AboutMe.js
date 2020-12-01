import React from "react";

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="panel panel-primary">
            <div className="panel-heading">About Ian</div>
            <div className="panel-body">
              Ian Panlilio was born on July 25, 1993 in Walnut Creek, CA.
              Initially joining the US Army National Guard as an Infantryman in
              2012, he eventually commissioned as an officer in 2016 from the UC
              Berkeley Army ROTC program. He is now a lieutenant currently
              serving as the Camp San Luis Obispo Detachment Commander and Fuel
              Platoon Leader for the 349th Quartermaster Company. He graduated
              from UC Berkeley in 2016 with a Bachelor's Degree in Rhetoric with
              an emphasis in Public Discourse and holds an associate's degree in
              Political Science. His hobbies include, but are not limited to
              competition shooting, skiing, biking, hiking, food touring,
              traveling, video games, tabletop wargaming, painting, writing,
              cars, and airsoft. He recently competed in the 2019 California
              Combat Match, placing within the top 10 shooters overall at the
              event. He is now currently pursuing a career in the computer
              field.
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="well text-center">
            <div>
              <img
                className="img-responsive"
                src="https://imgur.com/Ycm4C0l.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}