import React, { useState, useEffect } from 'react';
import "./Style/AboutPage.css";
import { Button } from '@mui/material';

function AboutPage({
  isAppBgColorDark
}) {
  const [orgMembers, setOrgMembers] = useState([]);

  useEffect(() => {
    setOrgMembers([
      {
        fullName: "Aman Kumar",
        designation: "CEO",
        isFoundingMember: true,
        imagePath: "/CEO.jpeg"
      },
      {
        fullName: "k_aman02",
        designation: "Contributor",
        isFoundingMember: false,
        imagePath: "/contributor-aman.k.jpg"
      }
    ])
  }, []);

  // if (orgMembers?.length <= 0) return null;
  return (
    <div className='about-page-container'>
        <div className='about-page grid grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            orgMembers.map((member, key) => {
              return (
                <span 
                  key={key}
                  className={`member-card clickable ${isAppBgColorDark ? 'light-border' : 'dark-border'}`}
                >
                  <span className='member-card-image-tag'><img src={member.imagePath} alt={member.fullName} /></span>
                  <span className='member-card-member-name'>{member.fullName}</span>
                  <span className={`member-card-member-designation ${isAppBgColorDark ? 'light-background' : 'pencil-background'}`}>
                    {member.isFoundingMember ? (member.designation + ', Founding Member') : (member.designation)
                  }</span>
                </span>
              )
            })
          }
        </div>

    </div>
  )
}

export default AboutPage;