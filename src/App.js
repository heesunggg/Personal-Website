import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

// Sample data - Replace with your actual information
const BASE_URL = process.env.PUBLIC_URL || '';
const portfolioData = {
  name: "Heesung Han",
  title: "Mechanical Engineering Student",
  bio: "Hi! I am a mechanical engineering student at Olin College of Engineering who loves designing, prototyping, and iterating through engineering problems. I have interned at Simplehuman, where I've gained hands-on experience in testing and product development. I am involved in organizations at my school such as Baja SAE and Phoenix Farming. I'm always excited to take on the next challenge!",
  email: "1220heesung@gmail.com",
  linkedin: "linkedin.com/in/heesunghan",
  github: "github.com/heesunggg",
  resume: `${BASE_URL}/images/Resume- Heesung Han.pdf`,
  profileImage: `${BASE_URL}/images/linkedinpfp.jpg`,
  
  experiences: [
    {
      id: 1,
      title: "Research and Development Intern",
      company: "Simplehuman",
      date: "2024",
      thumbnailImage: `${BASE_URL}/images/simplehuman_cover.jpg`,
      detailImage: `${BASE_URL}/images/simplehuman_cover.jpg`,
      shortDesc: "Product testing and development",
      tags: ["Product Design", "Testing", "CAD", "Autodesk Fusion 360", "Solidworks", "Laser cutting", "3D printing"],
      sections: [
        {
          heading: "Overview",
          subheading: "Summer Internship Experience",
          content: {
            text: "Simplehuman is a company focused on designing products that make everyday living more efficient. As a Research and Development intern, I worked across multiple early-stage product concepts, where I tested prototypes, researched new technologies, and explored ways to improve user experience and reliability. My work ranged from experimenting with sensors and fluid-handling mechanisms to developing CAD models, fabricating rapid prototypes, and running performance tests. Throughout the internship, I collaborated closely with engineers across different departments, strengthened my skills in Fusion 360, 3D printing, and laser cutting, and learned how to approach product development through fast iteration and clear communication. ",

            layout: "text-left"
          }
        },
        {
          heading: "Key Projects",
          content: {
            image:`${BASE_URL}/images/scentdiffuser.jpg`,
            textBlocks: [
              {
            text: "During my time on the R&D team, I worked on several exploratory product concepts, each requiring a mix of engineering design, hands-on prototyping, and experimental validation. I tested and analyzed early trash can mechanisms, evaluated steamer performance, and supported research into scent diffusion technologies by measuring spray outputs, testing nebulizer geometries, and examining condensation behavior under different flow conditions. I built multiple custom fixtures, including 3D-printed nebulizer housings, tortuous-path prototypes, and a full XYZ positioner with detachable needles to simulate consistent nebulizer performance.",
              },
              {
            text: "I also worked on sensor-based prototypes, using a picoleaf film sensor to study a triggerless water-spray concept, integrating Hall-effect sensors to detect magnet positioning in a moving pendulum setup, and researching carbon-nanotube-based Miralon materials for potential heating applications. Across all these projects, I designed parts in Fusion 360, 3D printed and laser-cut components, assembled and tested mechanisms, and iterated based on data and team feedback.",
              },
              {
              }
            ]
          },

        }
      ]
    },
    {
      id: 2,
      title: "Mechanical Engineer",
      company: "Baja SAE",
      date: "2024-Current",
      thumbnailImage: `${BASE_URL}/images/transparentbajalogo.png`,
      detailImage: `${BASE_URL}/images/Baja_Team_Photo_2025.jpg`,
      shortDesc: "Drivetrain design- Rear Spool",
      tags: ["Solidworks", "Manual Lathe", "Team Collaboration", "Manual Mill", "Analysis", "Research"],
            sections: [
        {
          heading: "Overview",
          content: {
            text: "Olin Baja SAE is Olin College's team for the Baja SAE off-road vehicle competition, which challenges engineering students to build vehicles capable of navigating harsh terrains. I am a **drivetrain engineer** on the team, specializing in the rear spool, a critical component that transfers power from the gearbox to both the front spool and the rear wheels. I have also conducted research and contributed to the design of the Continuously Variable Transmission (CVT) guarding.",
            layout: "text-left"
          }
        },
        {
          heading: "Projects",
          subheading: "Continuously Variable Transmission (CVT) guarding",
          content: {
            text: "The CVT was my first project in Olin Baja SAE, giving me an introduction to the Baja car and its systems. The CVT is an automatic transmission that uses pulleys and a belt or chain to provide a continuous range of gear ratios instead of fixed gears. I conducted research, created some CAD models, and presented our findings and proposed design changes, including improvements to ease of access, to the team and alumni. This process helped me quickly learn about automotive systems, respond to detailed technical questions, and improve my presentation and collaboration skills.",

            layout: "side-by-side",
            image: "",
            imagePosition: "right",
            imageSize: "medium",
          },
                    links: [
            {
              text: "Design Review Slides",
              url: `${BASE_URL}/images/CVTGuardingBaja2024-2025.pdf`
            },

          ]
        },
        {
          subheading: "Rear Spool",
          content: {
            image: `${BASE_URL}/images/rearspool.png`,
            imagePosition: "right",
            imageSize: "large",
            textBlocks: [
              {
                text: "I led the design of the rear spool for Olin Baja SAE, collaborating with another team member to ensure integration with the gearbox and drivetrain. The rear spool transfers power to the front spool and rear wheels, and it is currently being fabricated for the 2026 summer competition. I designed the system in SolidWorks, considering components such as the spool, brake rotor, splines, sprockets, and bearing mounts. I selected materials with input from mentors and peers, and used MATLAB to calculate strains on bolts to ensure the brake rotor would operate safely without shearing. I managed the PDM workflow, chose components, and am currently manufacturing the parts using the lathe and mill, performing most of the fabrication personally. The manufacturing process is ongoing. ",
              },

            ]
          },
            links: [
            {
              text: "Design Review Slides 1- Rear Output",
              url: `${BASE_URL}/images/1_RearOutput2025DesignReview.pdf`
            },
            {
              text: "Design Review Slides 2- Rear Output",
              url: `${BASE_URL}/images/2_RearOutput2025DesignReview.pdf`
            },

          ]
          
        },


      ] 

    },
    {
      id: 3,
      title: "Mechanical Engineer",
      company: "Phoenix Farming- Olin/MIT Aerial Farm Monitoring Research",
      date: "2024-Current",
      thumbnailImage: `${BASE_URL}/images/robolabsfrontcover.png`,
      detailImage: `${BASE_URL}/images/robolabs_background.png`,
      shortDesc: "Farm Robotics Researcher",
      tags: ["CAD", "Manufacturing", "Arduino", "Onshape", "Research", "3D printing", "Prototyping"],
      sections: [
        {
          heading: "Overview",
          content: {
            text: "Phoenix Farming is Olin’s **agricultural robotics lab**, focused on developing aerial and ground-based solutions to modern farming challenges. I joined the team in Fall 2024 and have contributed to several projects, including an automated claw for weed removal, a drone docking station that enables autonomous landing and data transfer to local farmers, and an automated drone system equipped with a soil-moisture sampler that collects readings from up to six inches below the surface to support better decision-making in the field. This work is conducted alongside the **Farm Robotics Challenge**, where our research directly informs and supports competition development.  ",
            layout: "text-left"
          }
        },
        {
          heading: "All projects",
          subheading: "Onboarding Project- Automated claw for Weed Removal",
          content: {
            text: "The automated claw was my first onboarding project with Phoenix Farming. The design used a servo-driven, three-prong gripper to remove weeds, which I modeled in Onshape and fabricated using 3D printing. I presented the design and my reasoning to the team, refining the geometry to achieve better 3D-printing tolerances. I tested the claw using a servo motor to validate its motion and performance, which helped me build a stronger understanding of tolerance management, motor requirements, and designing for practical fabrication.",
            bullets: [

            ],
            layout: "side-by-side",
            image: `${BASE_URL}/images/clawrobolabslockedin.png`,
            imagePosition: "right",
            imageSize: "medium",
          },
        },
        {
          subheading: "Drone Docking Station",
          content: {
            layout: "side-by-side",
            image: `${BASE_URL}/images/robolabsdockingstation.png`,
            imagePosition: "left",
            imageSize: "medium",
            textBlocks: [
              {
                text: "The docking station was designed to house a 25-by-25-inch drone and enable autonomous landing and data transfer to farmers. Unfortunately, due to limited time and budget, the project was put on hold for the rest of the semester. Before the pause, I developed the CAD for the system, which incorporated a gear mechanism and a belt-and-pulley setup to position and secure the drone within the station.",
              },

            ]
          }
        },
        {
          subheading: "Current project - Autonomous soil moisture sampling robot",
          content: {
            image: "",
            imagePosition: "right",
            imageSize: "medium",
            textBlocks: [
              { 
                text: "This semester, I’m working with an MIT PhD candidate and three other Olin students to develop a soil-moisture sampling drone capable of collecting data from a depth of six inches, with an eventual target of eighteen inches. I led the mechanical design for several key components, including the auger holder, probe platform, and motor placement, and created the full Onshape assembly for the probe system.",

              },
              {
                text: "I also selected lightweight components and designed the structure to meet strict payload limitations, resulting in a 610-gram prototype that can be carried by the drone. Throughout the project, I participated in weekly meetings and design reviews, where we evaluated weight tradeoffs, soil properties, and motor performance. I gained experience in prototyping, subsystem integration, soil-sampling methods, component testing, and collaborating closely with both teammates and a research lead.",

              },
              {
                text: "This project is still ongoing, so more updates will be posted in the spring of 2026. ",

              },
              
            ]
          },
          links: [
            {
              text: "Mark 1 Prototype Video",
              url: "https://youtube.com/shorts/Do9_tr8Wu1I?feature=share"
            },
                        {
              text: "Mark 2 Prototype Video",
              url: "https://www.youtube.com/watch?v=f9SXiV7TELU"
            },

          ]
        },

      ] 
    },
    {
      id: 4,
      title: "Captain",
      company: "First Robotics Competition Team 687",
      date: "2024",
      thumbnailImage: `${BASE_URL}/images/687_2024.png`,
      detailImage: `${BASE_URL}/images/frc2024_banner.jpg`,
      shortDesc: "2 times Finalist: Top 15 in California",
      tags: ["Scouting", "Strategy", "Autodesk Fusion 360", "3D printing", "Leadership", "Team Management"],
      sections: [
        {
          heading: "Season Summary",
          content: {
            text: "During the 2024 Crescendo season, I served as the **Team Captain** and **Main Strategist** for FRC Team 687 (The Nerd Herd). I oversaw 112 students, especially in mechanical design of the entire robot. I improved communication with the team by leading team and mentor meetings over three times a week, and I managed the team schedule by using a Gantt chart system. As a Main Strategist, I created game plans with other teams that effectively showcased the skill sets of the robot. This season was statistically the best season in the teams **23** year history. ",
            layout: "text-left"
          }
        },
        {
          heading: "Robot Systems",
          subheading: "Drivetrain + A-Frame System",
          content: {
            text: "The Drivetrain and A-Frame system was designed as following:",
            bullets: [
              "Swerve Drive for better maneuverability",
              "27 in X 27 in chassis dimension",
              "125 pounds as close to the ground as possible (better weight distribution)",
              "Able to support the weight of the shooter",
              "Able to pivot the shooter",
            ],
            layout: "side-by-side",
            image: `${BASE_URL}/images/frame2024.png`,
            imagePosition: "right",
            imageSize: "medium",
          },
        },
        {
          subheading: "Intake System",
          content: {
            layout: "side-by-side",
            image: `${BASE_URL}/images/frc2024intake.png`,
            imagePosition: "left",
            imageSize: "medium",
            textBlocks: [
              {
                text: "The Intake system was designed as following:",
                bullets: [
                  "Able to rapidly grab game piece off the ground",
                  "Push the piece into the shooter",
                  "Sensor-based game piece detection and tracking",
                  "Under the bumper for collision safety",
                  "Effective belt rigging to effectively collect game piece"
                ]
              },
              
            ]
          }
        },
        {
          subheading: "Shooter System",
          content: {
            layout: "side-by-side",
            image: `${BASE_URL}/images/2024frcshooter.png`,
            imagePosition: "right",
            imageSize: "medium",
            textBlocks: [
              {
                text: "The Shooter system was designed as following:",
                bullets: [
                  "Vertical flywheels after multiple iterations of testing",
                  "Able to score in various locations",
                  "Able to pivot to any scoring location",
                  "Indexer system that funnels game piece to the middle of the robot",
                  "Vision detection on where the scoring location is"
                ]
              },
              
            ]
          }
        },
        {
          heading: "Season Success",
          content: {
            text: "Our team achieved unprecedented success in the 2024 season.",
            bullets: [
              "**Hopper Championship Division Third Place**",
              "Los Vegas Regional Finalist",
              "Los Angeles Regional Finalist",
              "Los Angeles Regional Inspiration Award",
              "Ventura County Team Sustainability Award ",

            ],
            image: `${BASE_URL}/images/687_full_cad.png`,
            layout: "side-by-side",
            imagePosition: "left"
          },
          links: [
            {
              text: "Technical Binder",
              url: `${BASE_URL}/images/frcjudgepacket.pdf`
            },
            {
              text: "Robot Reveal",
              url: "https://www.youtube.com/watch?v=qZN4iUNxiVg"
            },
                        {
              text: "More in Depth about the Robot",
              url: "https://www.youtube.com/watch?v=Kwxz9v-WoYA"
            },
                                    {
              text: "Watch the robot in Action!",
              url: "https://www.thebluealliance.com/team/687/2024"
            },
          ]
        }
      ]
    },

    {
      id: 6,
      title: "Design Lead",
      company: "First Robotics Competition Team 687",
      date: "2023",
      thumbnailImage: `${BASE_URL}/images/687_2023.png`,
      detailImage: `${BASE_URL}/images/frc_2023_groupwin.JPG`,
      shortDesc: "World Division Winner: Top 32 out of 3354 robots",
      tags: ["Autodesk Fusion 360", "3D printing", "laser cutting", "Leadership", "Robot Driver"],
      sections: [
        {
          heading: "Season Summary",
          content: {
            text: "During the 2023 Charged Up season, I served as **Design Leader** and **Robot Driver** for FRC Team 687 (The Nerd Herd). I led the CAD design and prototyping of a World Division-winning robot with advanced game piece manipulation and scoring capabilities. The robot featured both cube and cone handling mechanisms, and I focused primarily on the Drivetrain, A-Frame, and multi-stage cascading elevator. The season was highly successful, achieving accomplishments never seen in the team’s **22-year** history.",
            layout: "text-left"
          }
        },
        {
          heading: "Robot Systems",
          subheading: "Drivetrain + A-Frame System",
          content: {
            text: "The Drivetrain and A-Frame system was designed as following:",
            bullets: [
              "Swerve Drive for better maneuverability",
              "29 in X 29 in chassis dimension",
              "125 pounds as close to the ground as possible (better weight distribution)",
              "Hold the weight of the elevator",
              "Not tippy when stored inside the robot perimeter"
            ],
            layout: "side-by-side",
            image: `${BASE_URL}/images/2023drivetrain+Aframe.png`,
            imagePosition: "right",
            imageSize: "medium",
          },
        },
        {
          subheading: "Elevator + Claw System",
          content: {
            layout: "side-by-side",
            image: `${BASE_URL}/images/elevatornew.png`,
            imagePosition: "left",
            imageSize: "small",
            textBlocks: [
              {
                text: "The Elevator system was designed as following:",
                bullets: [
                  "Able to extend 72 inches",
                  "Able to compress to 27 inches",
                  "Rapid Compression and Extension",
                  "6 Different iterations until the Final Product",
                  "Low Placement of Motors (Center of Gravity)"
                ]
              },
              {
                text: "The Claw system was designed as following:",
                bullets: [
                  "Able to Intake Both Cube and Cones",
                  "Motor and Wheel based",
                  "Compact and modular",
                  "Ease of Maintenance and rapid reassembly"
                ]
              },
            ]
          }
        },
        {
          heading: "Season Success",
          content: {
            text: "Our team achieved unprecedented success in the 2023 season.",
            bullets: [
              "**Archimedes Championship Division Winner**",
              "Los Angeles Regional Winners ",
              "Los Angeles Industrial Design Award",
            ],
            image: `${BASE_URL}/images/687_award_2023.jpg`,
            layout: "side-by-side",
            imagePosition: "right"
          },
          links: [
            {
              text: "Full Season Documentation",
              url: "https://nerdherd.github.io/Documentation/home.html"
            },
            {
              text: "Elevator Assembly Guide",
              url: `${BASE_URL}/images/687-23-elevatorasmguide.pdf`
            },
                        {
              text: "Watch the robot in action!",
              url: "https://www.thebluealliance.com/team/687/2023"
            }
          ]
        }
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "BoxBot- Ongoing Project",
      thumbnailImage: `${BASE_URL}/images/boxbotcoverphotofornow.png`,
      detailImage: `${BASE_URL}/images/boxbotcoverphotofornow.png`,
      date: "Fall 2025",  
      shortDesc: "Principles of Integrated Engineering: Autonomously move boxes of any sizes.",
      tags: ["Leadership", "Team Management", "Mechanical Design", "Onshape", "Fabrication", "Design Analysis", "Rapid Prototyping"],
      sections: [
        {
          heading: "Project Overview",
          content: {
            text: "BoxBot is an autonomous robot designed to handle boxes of varying sizes using adaptive gripping mechanisms.  As a project manager of three other engineers, I am in charge of managing timelines, updating the order sheet, and making sure the we are meeting the deadlines. As a mechanical engineer, I have designed and fabricated the drive base, having weight and compatibility as key constraints. This project is still ongoing, and final updates with more details of the project will be released in early 2026.",
            bullets: [

            ],
            layout: "text-left",
            image: `${BASE_URL}/images/updatedcadboxbotv2.png`,

          },
                  links: [
            {
              text: "Teleop Video of BoxBot ",
              url: `https://youtu.be/tdZVUh1zeNE`
            },
          ]
        }

      ]
    },
    {
      id: 2,
      title: "Wall Climber Robot ",
      thumbnailImage: `${BASE_URL}/images/transparentwallclimb.png`,
      detailImage: `${BASE_URL}/images/transparentwallclimb.png`,
      date: "Fall 2023-Spring 2024",  
      shortDesc: "Engineering Design and Development: A Wall Climbing robot.",
      tags: ["CAD", "Autodesk Fusion 360", "3D printing", "Electrical Integration", "Leadership"],
      sections: [
        {
          heading: "Project Overview",
          content: {
            textBlocks: [
              {
                text: "The goal of this robot was to climb a wall and grab an object. As mechanical director for a team of five in my Engineering Design and Development class, I led the design process and helped the team explore creative approaches, including using propellers and generating a vacuum to stick to the wall. Although the project didn’t ultimately succeed due to time constraints, it provided a important opportunity to tackle real-world engineering challenges. ",
              },
              {
                text: "Through this project, I led the mechanical design, creating detailed drawings and ensuring integration with the electrical and software systems. I guided the team’s decision-making using a structured matrix, balancing factors like propulsion method, weight, and motor selection. Managing challenges such as long lead times for parts and weight constraints, I strengthened my problem-solving and rapid prototyping skills. I also coordinated team communication, presented detailed product specifications to industry partners across Southern California, and mentored an intern by assigning meaningful tasks that contributed to our progress.",

              },
            ]
          },
          links: [
            {
              text: "Here is a Proof of Concept for the project!",
              url: `${BASE_URL}/images/MonteraCDR 2_ POC.pdf`
            },
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Line Detection Robot",
      thumbnailImage: `${BASE_URL}/images/linefollowingtrans.png`,
      detailImage: `${BASE_URL}/images/linefollowingtrans.png`,
      date: "Fall 2025",  
      shortDesc: "Principles of Integrated Engineering: Line following robot.",
      tags: ["CAD", "Onshape", "3D printing", "Integration"],
      sections: [
        {
          heading: "Project Overview",
          content: {
            textBlocks: [
              {
                text: "This line-detection robot uses IR reflectance sensors to determine whether it is following the line correctly. Collaborating with another student in the course **Principles of Integrated Engineering**, I worked on the chassis design, focusing on optimized wheel placement and adjustable IR sensor mounts. ",
              },
              {
                text: "Through this project, I strengthened my rapid prototyping skills and learned to design with the electrical system in mind. I accounted for 3D-printing constraints, tolerances for the motor mounts, and adaptability for different sensor configurations.",

              },
            ]
          },
          links: [
            {
              text: "Here is the write up for the Line Detection Robot!",
              url: `${BASE_URL}/images/Mini-Project 3_ DC-Motor-Control.pdf`
            },
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Soft Heads",
      date: "Spring 2025",  
      thumbnailImage: `${BASE_URL}/images/softheads_screen.png`,
      detailImage: `${BASE_URL}/images/softheads_screen.png`,
      shortDesc: "Software Design: An interactive action packed survival game. ",
      tags: ["Gameplay Prototyping", "Game Loop Architecture", "Python", "Version Control (Git)", "GitHub Projects"],
      sections: [
        {
          heading: "Project Overview",
          content: {
            textBlocks: [
              {
                text: "SoftHeads is a fast-paced, physics-driven survival game where players customize their fighter, battle waves of enemies, and try to outlast 300 opponents. Our team built the game from the ground up using Python, Pygame, and OpenCV, combining real-time combat mechanics with custom player avatars created from uploaded or webcam images.",
              },
              {
                text: "Through this project, I learned how to structure a full game loop, manage collision and physics systems, design character interactions, and implement responsive controls. I also gained experience integrating computer vision tools, optimizing performance for real-time gameplay, and collaborating in a multi-developer workflow using GitHub and version control.",

              },
            ]
          },
          links: [
            {
              text: "Click here for the games Github page!",
              url: "https://bookish-adventure-nrv5e9e.pages.github.io/"
            },
          ]
        }
        
      ]
    }
    
  ]
};
const ImageCard = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-lg cursor-pointer aspect-square"
    >
      <img 
        src={item.thumbnailImage || item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }}
      />
      <div 
        className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center"
        style={{
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s ease'
        }}
      >
        <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
        {item.company && <p className="text-white text-sm mb-3">{item.company}</p>}
        <p className="text-white text-sm leading-relaxed">{item.shortDesc}</p>
      </div>
    </div>
  );
};

const formatText = (text) => {
  if (!text) return null;
  
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    return <span key={idx}>{part}</span>;
  });
};

const ContentSection = ({ content }) => {
  if (!content) return null;
  
  const { text, bullets, image, layout = "text-left", imagePosition = "right", imageSize = "full", textBlocks } = content;
  
  const getImageSizeClass = (size) => {
    const sizes = {
      "small": "w-48",          // 192px (12rem)
      "medium": "max-w-md",     // ~448px
      "large": "max-w-2xl",     // ~672px
      "full": "w-full"
    };
    return sizes[size] || sizes["full"];
  };
  
  // Render a single text/bullets group
  const renderTextBlock = (blockText, blockBullets, key) => (
    <div key={key} className="mb-6 last:mb-0">
      {blockText && <p className="text-lg text-gray-700 leading-relaxed mb-4">{formatText(blockText)}</p>}
      {blockBullets && blockBullets.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {blockBullets.map((bullet, idx) => (
            <li key={idx} className="text-base leading-relaxed">{formatText(bullet)}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
  if (layout === "side-by-side" && image) {
    return (
      <div className={`flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`}>
        <div className="flex-1">
          {/* If textBlocks exist, use those; otherwise use single text/bullets */}
          {textBlocks && textBlocks.length > 0 ? (
            textBlocks.map((block, idx) => renderTextBlock(block.text, block.bullets, idx))
          ) : (
            renderTextBlock(text, bullets, 0)
          )}
        </div>
        <div className="flex-1">
          <img 
            src={image} 
            alt="Section content"
            className={`${getImageSizeClass(imageSize)} rounded-lg border border-gray-200`}
          />
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* If textBlocks exist, use those; otherwise use single text/bullets */}
      {textBlocks && textBlocks.length > 0 ? (
        textBlocks.map((block, idx) => renderTextBlock(block.text, block.bullets, idx))
      ) : (
        <>
          {text && <p className="text-lg text-gray-700 leading-relaxed mb-4">{formatText(text)}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="text-base leading-relaxed">{formatText(bullet)}</li>
              ))}
            </ul>
          )}
        </>
      )}
      {image && layout === "text-left" && (
        <div className="mt-6">
          <img 
            src={image} 
            alt="Section content"
            className={`${getImageSizeClass(imageSize)} rounded-lg border border-gray-200 mx-auto`}
          />
        </div>
      )}
    </>
  );
};

const DetailPage = ({ item, onBack, type }) => {
  const hasSections = item.sections && Array.isArray(item.sections) && item.sections.length > 0;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mt-16">
          <div className="aspect-video w-full bg-gray-100 relative">
            <img 
              src={item.detailImage || item.image || item.thumbnailImage}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{item.title}</h1>
            {item.company && (
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <span className="font-medium">{item.company}</span>
                {item.date && (
                  <>
                    <span>•</span>
                    <span>{item.date}</span>
                  </>
                )}
              </div>
            )}
            {!item.company && item.date && (
              <div className="text-gray-600 mb-6">
                <span>{item.date}</span>
              </div>
            )}
            
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {hasSections ? (
              <div className="space-y-12">
                {item.sections.map((section, idx) => (
                  <div key={idx} className="border-t border-gray-200 pt-8 first:border-t-0 first:pt-0">
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{section.heading}</h2>
                    )}
                    {section.subheading && (
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">{section.subheading}</h3>
                    )}
                    
                    <ContentSection content={section.content} />
                    
                    {section.links && section.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {section.links.map((link, linkIdx) => (
                          <a 
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                          >
                            <span>{link.text}</span>
                            <ExternalLink size={16} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                {item.fullDesc && (
                  <p className="text-lg text-gray-700 leading-relaxed">{item.fullDesc}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleCardClick = (item, type) => {
    setScrollPosition(window.scrollY);
    setSelectedItem(item);
    setSelectedType(type);
  };
  
  const handleBack = () => {
    setSelectedItem(null);
    setSelectedType(null);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };
  
  if (selectedItem) {
    return (
      <DetailPage 
        item={selectedItem} 
        onBack={handleBack}
        type={selectedType}
      />
    );
  }
  
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat, Georgia, serif' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <div className="mb-8 flex justify-center">
            <img 
              src={portfolioData.profileImage} 
              alt={portfolioData.name}
              className="w-48 h-48 rounded-full object-cover border-2 border-gray-200 shadow-md"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            {portfolioData.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{portfolioData.title}</p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            {portfolioData.bio}
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={portfolioData.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3 inline-block relative">
              Experience
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform translate-y-2"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolioData.experiences.map(exp => (
              <ImageCard 
                key={exp.id} 
                item={exp} 
                onClick={() => handleCardClick(exp, 'experience')}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3 inline-block relative">
              Projects
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform translate-y-2"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolioData.projects.map(proj => (
              <ImageCard 
                key={proj.id} 
                item={proj} 
                onClick={() => handleCardClick(proj, 'project')}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Get in touch!</p>
            <div className="flex justify-center gap-6 flex-wrap text-gray-700">
              <a href="mailto:1220heesung@gmail.com" className="hover:text-gray-900 transition-colors">
                1220heesung@gmail.com
              </a>
              <span className="text-gray-400">•</span>
              <a href="tel:310-650-7055" className="hover:text-gray-900 transition-colors">
                310-650-7055
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
