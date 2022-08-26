import React from 'react';


export default function Contact() {

  const git = 'https://github.com/sarah-svg';
  const handleMainGit = () => {
    window.open(git);
  };
  const linkdin = 'https://www.linkedin.com/in/sarah-skillen/';
  const handleLinkden = () => {
    window.open(linkdin);
  };
  const email = 'mailto: kjskillen@gmail.com';
  const handleEmail = () => {
    window.open(email);
  };

  return (
    <>
          <div className="d-flex contact" name="contact">
          Created by: Sarah Skillen 2022
        <div className="column">
          {/* <a href="mailto: kjskillen@gmail.com" > */}
                  <button onClick={handleEmail}>
                      📧 
            </button>
          {/* </a> */}
        </div>
        <div className="column">
          {/* <a href="https://www.linkedin.com/in/sarah-skillen/" > */}
          <button className="button" onClick={handleLinkden}>
            <img className="imgHeader" src="./linkdin.png" alt="icon link to sarah's linkedin" /></button>
          {/* </a> */}
        </div> 
        <div className="column">
          {/* <a href="https://github.com/sarah-svg"> */}
          <button onClick={handleMainGit}>
            <img className="imgHeader" src="./git.png" alt="icon link to Sarah's github" />
          </button>
         
          {/* </a> */}
        </div>    
      </div>   
   
    </>
  );
}