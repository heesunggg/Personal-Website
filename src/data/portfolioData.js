const BASE_URL = process.env.PUBLIC_URL || '';

const portfolioData = {
  name: "Heesung Han",
  title: "Mechanical Engineering Student",
  bio: "Hi! I am a mechanical engineering student at Olin College of Engineering who loves designing, prototyping, and iterating through engineering problems. I have interned at Simplehuman, where I've gained hands-on experience in testing and product development. I am involved in organizations at my school such as Baja SAE and Phoenix Farming. I'm always excited to take on the next challenge!",
  email: "1220heesung@gmail.com",
  linkedin: "linkedin.com/in/heesunghan",
  github: "github.com/heesunggg",
  resume: `${BASE_URL}/images/Heesung Resume-UpdatedMain.pdf`,
  profileImage: `${BASE_URL}/images/linkedinpfp.jpg`,

  experiences: [
    // 1st: Simplehuman
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
            text: "Simplehuman is a company focused on designing products that make everyday living more efficient. As a Research and Development intern, I worked across multiple early-stage product concepts, where I tested prototypes, researched new technologies, and explored ways to improve user experience and reliability. My work ranged from experimenting with sensors and fluid-handling mechanisms to developing CAD models, fabricating rapid prototypes, and running performance tests. Throughout the internship, I collaborated closely with engineers across different departments, strengthened my skills in Fusion 360, 3D printing, and laser cutting, and learned how to approach product development through fast iteration and clear communication.",
            layout: "text-left"
          }
        },
        {
          heading: "Key Projects",
          content: {
            image: `${BASE_URL}/images/scentdiffuser.jpg`,
            textBlocks: [
              {
                text: "During my time on the R&D team, I worked on several exploratory product concepts, each requiring a mix of engineering design, hands-on prototyping, and experimental validation. I tested and analyzed early trash can mechanisms, evaluated steamer performance, and supported research into scent diffusion technologies by measuring spray outputs, testing nebulizer geometries, and examining condensation behavior under different flow conditions. I built multiple custom fixtures, including 3D-printed nebulizer housings, tortuous-path prototypes, and a full XYZ positioner with detachable needles to simulate consistent nebulizer performance.",
              },
              {
                text: "I also worked on sensor-based prototypes, using a picoleaf film sensor to study a triggerless water-spray concept, integrating Hall-effect sensors to detect magnet positioning in a moving pendulum setup, and researching carbon-nanotube-based Miralon materials for potential heating applications. Across all these projects, I designed parts in Fusion 360, 3D printed and laser-cut components, assembled and tested mechanisms, and iterated based on data and team feedback.",
              },
            ]
          },
        }
      ]
    },
    // 2nd: MIT / Olin Aerial Farm Monitoring Research (Summer 2026)
    {
      id: 8,
      title: "Research Intern",
      company: "MIT / Olin College — Aerial Farm Monitoring Research",
      date: "Summer 2026",
      thumbnailImage: `${BASE_URL}/images/aerialfarm_cover.jpg`,
      detailImage: `${BASE_URL}/images/aerialfarm_cover.jpg`,
      thumbnailScale: 1.4,
      shortDesc: "Comparing helical vs. hook anchoring for a drone-deployed soil probe",
      tags: ["Research", "Electrical Systems", "Arduino", "Control Code", "MATLAB", "Prototyping", "Design of Experiments", "Field Testing"],
      sections: [
        {
          heading: "Overview",
          content: {
            text: "Farms cover a lot of ground, and driving equipment across a field to probe the soil compacts the dirt you are trying to measure. The idea behind this research, part of Olin's aerial farm monitoring work with an MIT PhD candidate, is to have a **drone carry a small probing payload**, set it down, take a soil moisture reading, and fly on. My focus over the summer was the piece that makes that possible: how the payload **anchors itself** to the ground so it can drill without pushing itself back off the soil.",
            layout: "text-left"
          }
        },
        {
          heading: "Why Anchoring Is Hard",
          content: {
            text: "When the probe's auger spins into the soil, the soil pushes back — the reaction force lifts and spins the whole payload instead of driving the probe down. It needs a mechanism that pins it to the ground, deploys in seconds, works across soft and hard soil, and adds almost no weight. The entire payload had to stay light enough for the drone to carry, which kept every part under a tight mass budget.",
            layout: "text-left"
          }
        },
        {
          heading: "Two Prototypes",
          content: {
            text: "I built two full payloads with different anchoring strategies so we could compare them head to head across the same soil conditions.",
            layout: "text-left"
          }
        },
        {
          subheading: "Helical Anchors",
          content: {
            image: `${BASE_URL}/images/aerialfarm_cover.jpg`,
            imagePosition: "right",
            imageSize: "medium",
            layout: "side-by-side",
            text: "Screw-in augers that thread down into the soil and resist being pulled back out. This design held the most anchoring force in testing, but it stood tall on the payload and was sensitive to how level the ground was.",
          }
        },
        {
          subheading: "Hook Mechanism",
          content: {
            image: `${BASE_URL}/images/aerialfarm_hook.png`,
            imagePosition: "left",
            imageSize: "medium",
            layout: "side-by-side",
            text: "Servo-driven hooks that swing out to roughly 120 degrees and bite into the soil, tested in both single and repeated deployments. Lower profile and flat against the ground, which made landing far more reliable.",
          }
        },
        {
          heading: "Electrical System & Controls",
          content: {
            layout: "text-left",
            textBlocks: [
              {
                text: "I owned all of the electronics on both payloads. The system is built around an **Arduino Nano** driving the anchor actuators, the auger motor, and a load cell for force measurement. I kept the parts list deliberately minimal — no heavy motors or oversized components — so the finished payload came in under the drone's mass limit.",
              },
              {
                text: "I wrote the control routine that runs a full deployment cycle end to end — anchor, drill, measure, retract — and a MATLAB script that records the force data live throughout every test run.",
              },
            ]
          }
        },
        {
          heading: "Lab Testing & Comparison",
          content: {
            image: `${BASE_URL}/images/aerialfarm_pulltest.jpg`,
            imagePosition: "right",
            imageSize: "medium",
            layout: "side-by-side",
            textBlocks: [
              {
                text: "We tested both designs against soil compacted to a range of strengths from roughly 0.2 to 2.0 MPa, running 10 trials per soil condition. For pull-out strength, the payload was tied by string to a digital scale, zeroed, and pulled straight up while the scale logged force; a separate load-cell setup measured the compressive reaction force the anchor drives into the soil.",
              },
              {
                text: "I processed the raw data in MATLAB — splitting continuous logs into individual trials, smoothing, subtracting the system's dead weight, dropping faulty runs, and generating box-and-whisker plots of anchor retention and reaction force across soil strength.",
              },
            ]
          }
        },
        {
          heading: "Field Testing",
          content: {
            image: `${BASE_URL}/images/aerialfarm_field.jpg`,
            imagePosition: "left",
            imageSize: "medium",
            layout: "side-by-side",
            text: "We took both payloads out to a working farm to test on real ground. Uneven soil made consistent deployment much harder than the flat lab buckets, and the drone tether snagging on the anchor mechanism during descent was a recurring problem we had to design around.",
          }
        },
        {
          heading: "Outcome",
          content: {
            text: "On pure anchoring performance the helical design held better, but it sat tall and was unstable on landing — on uneven farm soil it struggled to touch down upright and stay put. The hook payload landed flat, stayed stable, and deployed reliably, so the team moved forward with the hook design. The results are being written up for a paper targeting **ICRA 2027**, so detailed numbers are not public yet.",
            layout: "text-left"
          }
        }
      ]
    },
    // 3rd: Pacifier Shield FEA Research
    {
      id: 9,
      title: "Mechanical Engineering Research Intern",
      company: "Pacifier Shield FEA Research — Olin College",
      date: "2025 - Current",
      thumbnailImage: `${BASE_URL}/images/pacifierfea_cad.png`,
      detailImage: `${BASE_URL}/images/pacifierfea_cad.png`,
      shortDesc: "Nonlinear FEA of how pacifier shield design loads the infant mandible",
      tags: ["ANSYS", "Nonlinear FEA", "Transient Structural", "SolidWorks", "Contact Modeling", "Biomechanics", "Research"],
      sections: [
        {
          heading: "Overview",
          content: {
            text: "I am a research intern on a project titled **Finite Element Analysis of Pacifier Shield Impact on the Infant Mandible**. Pacifiers are widely used to soothe infants and are associated with a lower risk of SIDS, but there is growing evidence linking pacifier use to disruption of the cranio-facial-respiratory complex. Earlier work in the group quantified the forces the pacifier **bulb** applies to the palatal vault; this project shifts attention to the largely overlooked pacifier **shield**.",
            layout: "text-left"
          }
        },
        {
          heading: "The Problem",
          content: {
            text: "Pacifier shields were designed for choking prevention rather than biomechanical function, and their rigid, flat shape has gone largely unchanged for decades. Natural sucking needs free, protrusive movement of the mandible to support healthy temporomandibular joint (TMJ) development. A stiff shield pressed against the chin can restrict that motion and hold the mandible in a retruded position during a critical window of rapid jaw growth.",
            layout: "text-left"
          }
        },
        {
          heading: "Objective",
          content: {
            text: "Use nonlinear, dynamic finite element analysis to evaluate how different pacifier shield designs affect force distribution and restriction of mandibular movement in the developing infant jaw.",
            layout: "text-left"
          }
        },
        {
          heading: "Approach",
          content: {
            image: `${BASE_URL}/images/pacifierfea_assembly.png`,
            imagePosition: "right",
            imageSize: "medium",
            layout: "side-by-side",
            text: "The analysis workflow:",
            bullets: [
              "Modeled the pacifier, infant bone, and infant jaw in SolidWorks and mated them into a single assembly",
              "Imported the assembly into ANSYS, assigned material properties, defined contact conditions between the bodies, and refined the contact surface mesh",
              "Applied a pressure vs. time load curve representing a realistic suck cycle and ran a transient structural analysis",
              "Solved for stress, deformation, and reaction force to track how mandibular loading evolves through the cycle and where peak impact occurs",
            ]
          }
        },
        {
          heading: "Results",
          content: {
            image: `${BASE_URL}/images/pacifierfea_stress.png`,
            imagePosition: "left",
            imageSize: "medium",
            layout: "side-by-side",
            text: "Running the model with a Philips Avent Soothie pacifier produced equivalent (von-Mises) stress and deformation maps across the mandible over a full suck cycle, showing where and when the shield drives peak loading into the jaw. These baseline results give us a reference to compare alternative shield geometries against.",
          }
        },
        {
          heading: "Further Work",
          content: {
            image: `${BASE_URL}/images/pacifierfea_transient.png`,
            imagePosition: "right",
            imageSize: "medium",
            layout: "side-by-side",
            textBlocks: [
              {
                text: "Next steps are to draw conclusions from a more detailed jaw model and to finalize a simulation that incorporates the rocking motion the pacifier induces on the mandible, which we have not yet been able to implement reliably.",
              },
            ]
          }
        }
      ]
    },
    // 4th: Robolabs / Phoenix Farming
    {
    id: 3,
    title: "Mechanical Lead",
    company: "Phoenix Farming- Olin/MIT Aerial Farm Monitoring Research",
    date: "2024-Current",
    thumbnailImage: `${BASE_URL}/images/roblabssamplerreal.png`,
    detailImage: `${BASE_URL}/images/robolabs_covert_image.jpg`,
    shortDesc: "HydroFleet - autonomous drone system for soil moisture mapping",
    tags: ["CAD", "Manufacturing", "Arduino", "Onshape", "Research", "3D printing", "Prototyping", "Systems Integration", "Testing"],
    sections: [
        {
        heading: "Overview",
        content: {
            text: "Phoenix Farming is Olin's agricultural robotics lab, focused on developing aerial and ground-based solutions to modern farming challenges. I joined the team in Fall 2024 and worked on two early projects before transitioning to **HydroFleet** in Fall 2025, a multi-drone soil moisture mapping system developed in collaboration with an MIT PhD candidate as part of the **Farm Robotics Challenge**. The project wrapped up in Spring 2026 and is now patent pending.",
            layout: "text-left"
        }
        },
        {
        heading: "Fall 2024 Projects",
        subheading: "Automated Claw for Weed Removal",
        content: {
            text: "My first project with Phoenix Farming was a servo-driven, three-prong gripper for weed removal. I modeled it in Onshape and fabricated it using 3D printing, refining the geometry across iterations to improve tolerances and performance. I tested the claw using a servo motor to validate its motion, which helped me get up to speed on tolerance management and designing for fabrication.",
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
                    text: "I also contributed to early CAD work on a drone docking station designed to house a 25-by-25-inch drone and enable autonomous landing and data transfer to farmers. The project was paused due to time and budget constraints before reaching a full prototype.",
                },
                },
        {
        heading: "HydroFleet — Soil Sampling Module",
        content: {
            image: `${BASE_URL}/images/soilsamplerimage.png`,
            imagePosition: "right",
            imageSize: "medium",
            layout: "side-by-side",
            textBlocks: [
            {
                text: "HydroFleet is a multi-drone system that autonomously collects high-resolution soil moisture data across crop fields to support precision irrigation. At the core of the system is a novel soil sampling module - a lightweight electromechanical assembly that performs a full measurement cycle once lowered to the ground by the drone.",
            },
            {
                text: "As mechanical lead, I was involved across the full system: anchoring mechanism design, overall assembly, 3D printing, and field testing.",
            },
            ]
        }
        },
        {
        subheading: "Anchoring Mechanism",
        content: {
            textBlocks: [
            {
                text: "The anchoring mechanism was the hardest problem on the project. When the auger spins to drill into soil, it generates an upward reaction force that lifts the module off the ground. We went through many anchor iterations trying to solve this.",
            },
            {
                text: "The final design used servo-driven anchor arms at roughly 120-degree intervals around the base frame, each with a tapered curved tip that digs in and resists pullout as the auger drives down. Fixed spikes on the underside add rotational resistance during drilling. Getting this right took significant iteration and hands-on testing in real soil conditions.",
            },
            ]
        }
        },
        {
        subheading: "Weight & Design Tradeoffs",
        content: {
            text: "Staying under the drone's payload limit was a constant constraint. Every component had to justify its weight: we used 3D-printed gears, an aluminum shaft, and a lightweight Arduino Nano for onboard computing. The drone battery powers the entire module directly, cutting out the need for a separate power source.",
            layout: "text-left"
        }
        },
        {
        heading: "Status & Next Steps",
        content: {
            text: "HydroFleet is complete and currently patent pending. The team is now working toward publishing research papers based on the system's design and field results. This was one of the most technically demanding projects I have worked on, and seeing it go from early concept to a working system tested on a real farm was a rewarding experience.",
            layout: "text-left"
        },
        links: [
            {
            text: "Farm Robotics Challenge Submission: Report",
            url: `${BASE_URL}/images/Robolabsfinalreport.pdf`
            },

        ]
        },
    ],
    },
    // 5th: Owl Vision
    {
    id: 7,
    title: "Mechanical Engineering Intern",
    company: "Owl Vision",
    date: "2026 - Current",
    thumbnailImage: `${BASE_URL}/images/owlvisionlogo.jpg`,
    detailImage: `${BASE_URL}/images/owlvisiondetailedimage.webp`,
    shortDesc: "Bee health monitoring R&D — handheld hive scanning device",
    tags: ["Mechanical Design", "CAD", "Prototyping", "Human-Centered Design", "R&D", "Stakeholder Interviews", "Leadership"],
    sections: [
        {
        heading: "Overview",
        content: {
            text: "Owl Vision builds AI-powered pest monitoring systems that give farmers real-time insect data to protect crops and cut pesticide use. I joined a five-person intern team to design and prototype a handheld hive-scanning device for sideliner beekeepers. We started with a blank slate with no defined product, and worked through user research, stakeholder interviews, and rapid iteration to reach a working MVP by the end of the semester.",
            layout: "text-left"
        }
        },
        {
        heading: "Target User & Problem",
        content: {
            text: "We focused on sideliner beekeepers : operators with enough hives to care about monitoring tools but who still do inspections by hand. The core problem was straightforward: beekeepers do not want to lose their bees, and most health issues go undetected between inspections. There was no easy way to get a quick read on what was happening inside a hive without fully opening it.",
            layout: "text-left"
        }
        },
        {
        heading: "Product Requirements",
        content: {
            textBlocks: [
            {
                text: "Through interviews and design reviews, we landed on these core functions for the device:",
                bullets: [
                "Monitor nectar flow and bee behavior",
                "Monitor temperature and humidity inside the hive",
                "Detect pests if visible, including Varroa mites",
                "Detect queen bee presence and swarming behavior",
                ]
            },
            {
                text: "Those functions drove a clear set of design constraints:",
                bullets: [
                "Handheld and portable - needs to fit into tight spaces between frames",
                "Lightweight and ergonomic - usable with one gloved hand",
                "Camera for vision-based detection",
                "Temperature and humidity sensor as a secondary health indicator",
                "Battery-powered with app integration for readouts",
                "Non-invasive - frames are lifted to scan, not disturbed",
                ]
            }
            ]
        }
        },
        {
        heading: "Final Concept & Prototype",
        content: {
            image: `${BASE_URL}/images/Beeprojectslide.png`,
            imagePosition: "right",
            imageSize: "medium",
            layout: "side-by-side",
            textBlocks: [
            {
                text: "The MVP had two core mechanisms. The camera mechanism let the user lift a frame, line up the device, and press a button to capture and analyze imagery. The temperature and humidity sensor used a telescoping drop-down that positioned between two middle frames and extended halfway into the hive with one button press, then retracted cleanly.",
            },
            {
                text: "The overall form prioritized compactness, ease of movement, and simplicity. The device needed to work in the field with gloves on and no extra tools.",
            },
            ]
        }
        },
        {
        heading: "What's Next",
        content: {
            text: "This project is continuing next semester. The plan is to take the current proof-of-concept and develop it into a full 3D-printed physical prototype, moving from rough form to something testable in real hive conditions. More updates to come.",
            layout: "text-left"
        }
        },
        {
        heading: "My Role",
        content: {
            bullets: [
            "Led a team of 5 through concept development and MVP build",
            "Used structured design frameworks to guide prototyping decisions",
            "Ran stakeholder interviews with beekeepers and outside experts to shape requirements",
            "Designed the mechanical prototype for image and sensor data collection inside active hives",
            "Coordinated testing and wrote up findings and next-step recommendations",
            ]
        }
        },
    ],
    },
    // 6th: Baja SAE
    {
      id: 2,
      title: "Mechanical Engineer",
      company: "Baja SAE",
      date: "2024-2026",
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
            { text: "Design Review Slides", url: `${BASE_URL}/images/CVTGuardingBaja2024-2025.pdf` },
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
                text: "I led the design of the rear spool for Olin Baja SAE, collaborating with another team member to ensure integration with the gearbox and drivetrain. The rear spool transfers power to the front spool and rear wheels, and it is currently being fabricated for the 2026 summer competition. I designed the system in SolidWorks, considering components such as the spool, brake rotor, splines, sprockets, and bearing mounts. I selected materials with input from mentors and peers, and used MATLAB to calculate strains on bolts to ensure the brake rotor would operate safely without shearing. I managed the PDM workflow, chose components, and am currently manufacturing the parts using the lathe and mill, performing most of the fabrication personally. The manufacturing process is ongoing.",
              },
            ]
          },
          links: [
            { text: "Design Review Slides 1- Rear Output", url: `${BASE_URL}/images/1_RearOutput2025DesignReview.pdf` },
            { text: "Design Review Slides 2- Rear Output", url: `${BASE_URL}/images/2_RearOutput2025DesignReview.pdf` },
          ]
        },
      ]
    },
    // 7th: FRC Captain 2024
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
            text: "During the 2024 Crescendo season, I served as the **Team Captain** and **Main Strategist** for FRC Team 687 (The Nerd Herd). I oversaw 112 students, especially in mechanical design of the entire robot. I improved communication with the team by leading team and mentor meetings over three times a week, and I managed the team schedule by using a Gantt chart system. As a Main Strategist, I created game plans with other teams that effectively showcased the skill sets of the robot. This season was statistically the best season in the teams **23** year history.",
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
              "Ventura County Team Sustainability Award",
            ],
            image: `${BASE_URL}/images/687_full_cad.png`,
            layout: "side-by-side",
            imagePosition: "left"
          },
          links: [
            { text: "Technical Binder", url: `${BASE_URL}/images/frcjudgepacket.pdf` },
            { text: "Robot Reveal", url: "https://www.youtube.com/watch?v=qZN4iUNxiVg" },
            { text: "More in Depth about the Robot", url: "https://www.youtube.com/watch?v=Kwxz9v-WoYA" },
            { text: "Watch the robot in Action!", url: "https://www.thebluealliance.com/team/687/2024" },
          ]
        }
      ]
    },
    // 8th: FRC Design Lead 2023
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
            text: "During the 2023 Charged Up season, I served as **Design Leader** and **Robot Driver** for FRC Team 687 (The Nerd Herd). I led the CAD design and prototyping of a World Division-winning robot with advanced game piece manipulation and scoring capabilities. The robot featured both cube and cone handling mechanisms, and I focused primarily on the Drivetrain, A-Frame, and multi-stage cascading elevator. The season was highly successful, achieving accomplishments never seen in the team's **22-year** history.",
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
              "Los Angeles Regional Winners",
              "Los Angeles Industrial Design Award",
            ],
            image: `${BASE_URL}/images/687_award_2023.jpg`,
            layout: "side-by-side",
            imagePosition: "right"
          },
          links: [
            { text: "Full Season Documentation", url: "https://nerdherd.github.io/Documentation/home.html" },
            { text: "Elevator Assembly Guide", url: `${BASE_URL}/images/687-23-elevatorasmguide.pdf` },
            { text: "Watch the robot in action!", url: "https://www.thebluealliance.com/team/687/2023" }
          ]
        }
      ]
    },
  ],

  projects: [
    {
      id: 1,
      title: "BoxBot",
      thumbnailImage: `${BASE_URL}/images/mainphototrying.png`,
      detailImage: `${BASE_URL}/images/mainphototrying.png`,
      date: "Fall 2025",
      shortDesc: "Principles of Integrated Engineering: Move Boxes of various sizes.",
      tags: ["Leadership", "Team Management", "Mechanical Design", "Onshape", "Fabrication", "Design Analysis", "Rapid Prototyping", "Website Development", "GitHub"],
      sections: [
        {
          heading: "Project Overview",
          content: {
            textBlocks: [
              {
                text: "BoxBot is a robot designed to handle boxes of varying sizes using adaptive gripping mechanisms. As a project manager of three other engineers, I am in charge of managing timelines, updating the order sheet, and making sure we are meeting the deadlines. As a mechanical engineer, I have designed and fabricated the drive base, having weight and compatibility as key constraints.",
              },
              {
                text: "In a span of 8 weeks, we designed and prototyped this robot. We spent countless hours working on this project. Please check out the BoxBot Website link for more detailed information.",
              }
            ],
            layout: "text-left",
            image: `${BASE_URL}/images/colorfulcadupdated.png`,
          },
          links: [
            { text: "Box Bot Website", url: "https://heesunggg.github.io/boxbotwebsite/" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Wall Climber Robot",
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
                text: "The goal of this robot was to climb a wall and grab an object. As mechanical director for a team of five in my Engineering Design and Development class, I led the design process and helped the team explore creative approaches, including using propellers and generating a vacuum to stick to the wall. Although the project didn't ultimately succeed due to time constraints, it provided an important opportunity to tackle real-world engineering challenges.",
              },
              {
                text: "Through this project, I led the mechanical design, creating detailed drawings and ensuring integration with the electrical and software systems. I guided the team's decision-making using a structured matrix, balancing factors like propulsion method, weight, and motor selection. Managing challenges such as long lead times for parts and weight constraints, I strengthened my problem-solving and rapid prototyping skills. I also coordinated team communication, presented detailed product specifications to industry partners across Southern California, and mentored an intern by assigning meaningful tasks that contributed to our progress.",
              },
            ]
          },
          links: [
            { text: "Here is a Proof of Concept for the project!", url: `${BASE_URL}/images/MonteraCDR 2_ POC.pdf` },
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
                text: "This line-detection robot uses IR reflectance sensors to determine whether it is following the line correctly. Collaborating with another student in the course **Principles of Integrated Engineering**, I worked on the chassis design, focusing on optimized wheel placement and adjustable IR sensor mounts.",
              },
              {
                text: "Through this project, I strengthened my rapid prototyping skills and learned to design with the electrical system in mind. I accounted for 3D-printing constraints, tolerances for the motor mounts, and adaptability for different sensor configurations.",
              },
            ]
          },
          links: [
            { text: "Here is the write up for the Line Detection Robot!", url: `${BASE_URL}/images/Mini-Project 3_ DC-Motor-Control.pdf` },
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
      shortDesc: "Software Design: An interactive action packed survival game.",
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
            { text: "Click here for the games Github page!", url: "https://bookish-adventure-nrv5e9e.pages.github.io/" },
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Mastering Manufacturing",
      thumbnailImage: `${BASE_URL}/images/masteringmanufacturingcoverreal2.png`,
      detailImage: `${BASE_URL}/images/masteringmanufacturingcoverreal2.png`,
      date: "Fall 2025",
      shortDesc: "Learning the basics of the machine shop: the mill, the lathe, horizontal bandsaw, and the CNC mill",
      tags: ["CAD", "Fusion 360", "Design for Manufacturing", "Manual Mill", "Manual Lathe", "Horizontal Bandsaw", "CNC Mill", "Computer Aided Manufacturing"],
      sections: [
        {
          heading: "Project Overview",
          content: {
            textBlocks: [
              {
                text: "I always felt weak on manufacturing compared to my CAD skills. This semester, I made it my goal to be in the machine shop at least once every week, fabricating things I thought was cool. To get used to the machine shop, I used the manual mill to face and drill through different parts for Baja. I used the manual lathe to face through the rear output shaft for Baja.",
              },
              {
                text: "My first project was the Aluminum Cross-shaped figure. Using Fusion 360, I CAMmed the figure. After facing the cross to be a 1 in by 1 in by 1 in cube, we used the CAM and the CNC mill to create the finish you see in the image.",
              },
              {
                text: "My second project was a brass dice. Using Fusion 360, I designed a dice that has the standard hole patterns, but lines connecting some of the holes together. Some of the challenges were to make sure we designed it so it can be manufacturable. After the CAM in the picture below, we faced the brass stock and CNC milled the cube.",
              },
              {
                text: "This experience taught me how to CAM and manufacture, and in the Spring 2026 semester, you can expect more manufacturing projects, such as a turner's cube and a brass pen.",
              },
            ],
            layout: "text-left",
            image: `${BASE_URL}/images/CAMsetup.png`,
          },
        }
      ]
    },
  ]
};

export default portfolioData;
