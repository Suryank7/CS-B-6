import React from "react";
import ICard from "./ICard";
import url from "../assets/id.jpg";

function Gallery() {
    const student = [
      {
        pic: url ,
        name: "Suryank",
        Branch: "CSE",
        Roll: "2023B0121271",
        Section: "B",
      },
      {
        pic: url,
        name: "Prateek",
        Branch: "CSE",
        Roll: "2023B0121271",
        Section: "B",
      },
      {
        pic: url,
        name: "Aman",
        Branch: "CE",
        Roll: "2023B0125671",
        Section: "C",
      },
      {
        pic: url,
        name: "Rohit",
        Branch: "ECE",
        Roll: "2023B0451271",
        Section: "D",
      },
    ];
    
    return (
        <div className="gallery">
            {/* <ICard name="Aman" Branch="ECE" Roll="2200342342" Section="C" />;
        <ICard name="Suryank" Branch="CSE" Roll="2023B0121271" Section="B" />;
        <ICard name="Suryank" Branch="CSE" Roll="2023B0121271" Section="B" />; */}
            {/* <ICard data={student[3]} />; */}
            {
                student.map((ele, index) => {
                   return <ICard key={index} data={ele} />
                })}
      </div>
    );

}

export default Gallery;
