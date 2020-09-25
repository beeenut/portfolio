import React, { Component } from "react";

var descrips = [
  {
    title: "Adaptive Navigation Utilizing a Drone Cluster",
    background: [
      "Within the Robotic Systems Lab, my Senior Design project focused on using adaptive navigation (an advanced technique for quickly navigating an area to find critical points of interest). Specifically my team of four researched, designed, integrated, and tested a drone swarm to autonomously navigate 3 - dimensions using adaptive navigation. ",
      "The main objective for this project was to implement the communication and control systems to safely fly multiple drones simultaneously as a single cluster. As a team we decided before we could fly all of the drones, we had to be able to fly each of the drones individually. This resulted in creating a state based controller capable of receiving inputs from 4 joysticks and transferring control between each state.  Our project consisted of 3 main subsystems: the drones, the communication, and the control.",
      "My main contribution on this project focused on the hardware including: the drones, radios, gps, motors, scalar field sensors, beacon, and the power management system. I first identified each of the hardware components necessary to make a flight ready system capable of using adaptive navigation. I did so by integrating and configuring each of the drones and components to act as one cohesive unit. I also examined four of the RSL’s old 3DR X8 octa-quad-copters and equipped them with our new components. I ensured proper power management for the new components as well. In addition, I developed, calibrated, and tested the scalar field sensors to be used for adaptive navigation. Once all the subsystems tests were complete, I worked on testing the fully integrated system. This was conducted through stationary tests of all of the systems. Additionally, I completed necessary safety forms and pre-flight checklists as well as receiving my FAA Part 107 drone license.",
      "Unfortunately due to Covid-19, our project was significantly delayed. Additionally, due to safety concerns, we were unable to let our drones take to the skys; however, we were able to verify all of our software, and hardware, through stationary tests and a simulation environment. ",
    ],
    techs: [
      "Arduino",
      "Pixhawk",
      "Xbee",
      "Matlab",
      "Soldering Iron",
      "Serial Interfaces",
    ],
    image: "drone-overview.png",
    extraimages: [
      "drone.png",
      "drone-quarantine-workbench.jpg",
      "drone-groundstation.jpg",
      "drone-fullview.jpg",
      "drone-teardown.jpg",
      "drone-closeup.jpg",
    ],
    videos: "",
  },
  {
    title: "PCB Speaker",
    background: [
      "I designed a PCB speaker using EAGLE for my intro to senior design course. This project consisted of digging through product datasheets, learning how to properly route traces, and picking components to ensure proper design and functionality. To verify the design I used DRC and ERC checks. Once verified, the design was sent to a board house and I generated a bill of materials.",
    ],
    techs: ["EAGLE"],
    image: "pcb-speaker.png",
    extraimages: [],
    video: "",
  },
  {
    title: "Advanced Computer Architecture",
    background: [
      "Using Verilog and Vivado, I implemented a 5 stage pipeline with hazard detection, forwarding, and a cache for memory. This project was a continuation of a previous project done in my first computer architecture class. The original project was a 5 stage pipeline that used NOPs between instructions to avoid data hazards. The goal was to sort an array of integers without using NOPs. By doing so, I gained a better understanding of how to use Verilog and a solid understanding of hazards, forwarding, and caching.",
      "Due to time constraints, and the unexpected amount of time debugging, I tested the pipeline using instructions to find a maximum number. Once I successfully implemented the Hazard Detection Unit and Forwarding Unit, I tested the code for branching and for most data hazards. After debugging and making fixes, both units worked successfully. I then wrote new instructions to find a maximum number within memory.",
      "I designed the cache to be a direct mapped write through cache. The cache module was implemented such that the main memory co-existed within the cache module. This was done so wires did not need to be added and rearranged. This solution also worked for my system because going to main memory wouldn’t cost any cycles, so by combining the cache and main memory in one module the cache module could be simpler. The cache was completed without any errors and through simulation tests using the maximum instruction code, I was able to verify my design",
      "The simplified instruction set is shown below and the architectural block diagram is shown above.",
    ],
    techs: ["Vivado HLx", "Verilog", "Design Verification"],
    image: "pipeline.png",
    extraimages: ["instruction-set.PNG", "instruction-code.PNG"],
    video: "",
  },
  {
    title: "Mouse Controlled LED Light Strip",
    background: [
      "For this project I used an STM32L4 Discovery Board and the Kiel IDE to implement different color patterns on a 72- LED strip. I started by coding embedded C in a low level (LL) environment. This involved coding closer to the hardware (primarily on the GPIO ports and pins). Once I successfully demonstrated the ability to turn the lights on and off with a timer, I moved to the hardware abstraction layer (HAL). I coded a similar functionally to the LL code  and added more lights. ",
      "After going through both of these abstraction layers, I moved into the STM’s CubeMX platform to easily configure ports, interrupts and timing. Once able to implement a rainbow pattern that filled the led from one side and drained to the other, I started experimenting with the USB standard library. I was able to connect my computer mouse to theSTM32 board with an OTG adapter, use the mouse scroll wheel to increase the speed of the draining, and click the mouse to change the LED color. ",
    ],
    techs: [
      "Embedded C",
      "LL",
      "HAL",
      "CubeMX",
      "Kiel IDE",
      "STM32L4-Disco-Board",
      "USB - Library",
    ],
    image: "led.png",
    extraimages: [],
    video: "",
  },
  {
    title: "4 Bit Ripple Carry Adder Hierarchical Design",
    background: [
      "For my final project in my very-large-scale integration (VLSI) course, I created the layout for a 4-bit ripple carry adder. I initiated the hierarchical design with transistor level schematics. This was followed by: creating an OR gate, an AND gate, and a XOR gate, then creating a half adder and, then a full adder schematic. Once each component was made, I connected each full adder module to make a 4-bit ripple carry adder schematic . I was able to verify the design by creating a testbench and using the Synopsys’s Simulation and Analysis Environment (SAE) to generate a waveform.",
      "Once I created the schematic, I moved onto the layout. I started by building the layout for the gates, then moved up the hierarchical design until I reached the final four-bit adder. Once the design was complete, I verified the layout through the Design Rule Check (DRC) and the Layout vs. Schematic (LVS) check.",
    ],
    techs: [
      "Synopsys Custom Compiler",
      "Layout vs. Schematic (LVS)",
      "Simulation and Analysis Environment (SAE)",
    ],
    image: "full-adder.png",
    extraimages: ["HA.png", "full-adder.png", "4bit.png"],
    video: "",
  },
  {
    title: "BrendanEngh.com",
    background: [
      "Although it would have been way simpler and less time consuming, I decided I didn't want to use a website builder. I did this because I have previously worked as a web tester and had experience with the MERN stack. However, for this project I didn't want to start at square one, so I decided to use a React.js template that I found online. This template was created by Tim Baker and uses the ShoutOut CeeVee HTML template. Link to both items can be found below. Although most of the CSS had been completed for the responsive template, I changed almost all component JavaScript files and added many new ones of my own. This also required me to write much of my own CSS and change pre existing CSS. This project took me a week before I was ready to host it and is still a work in progress. This project has been a great learning experience and has greatly helped me develop more advanced web development skills.",
      "Web hosting is done using Netlify and the domain was purchased through google domains.",
      "Tim Baker Repo - https://github.com/tbakerx/react-resume-template",
      "ShoutOut HTML template - https://www.styleshout.com/demo/?theme=ceevee",
    ],
    techs: [
      "React.js",
      "Node.js",
      "Javascript",
      "CSS",
      "HTML",
      "GitHub",
      "Goggle Domains",
      "Netlify",
    ],
    image: "website.png",
    extraimages: [],
    video: "",
  },
];

class Project extends Component {
  render() {
    var current = this.props.title;
    var projects = descrips.map(function (projects) {
      if (projects.title === current) {
        var projectImage = "images/portfolio/" + projects.image;

        var paragraphs = projects.background.map(function (paragraphs) {
          return (
            <div className="para">
              <p>{paragraphs}</p>
              <br />
            </div>
          );
        });

        var tech = projects.techs.map(function (tech) {
          return <span>{tech}</span>;
        });

        var extraImages = projects.extraimages.length >= 1;
        var images = projects.extraimages.map(function (images) {
          var imagee = "images/portfolio/" + images;
          return (
            <div className="exImage">
              <img alt={images} src={imagee} />
            </div>
          );
        });

        return (
          <div>
            <h1>{projects.title}</h1>
            <div className="project-wrapper">
              <div className="image">
                <img alt={projects.title} src={projectImage} />
              </div>
              <div className="techs">
                <h3>Technologies Used</h3>
                <div className="skill-item">{tech}</div>
              </div>
              <div>
                <h3>Description</h3>
                {paragraphs}
              </div>
              <div>
                <h3 className={extraImages ? "show" : "noShow "}>Images</h3>
                <div className="images">{images}</div>
              </div>
            </div>
          </div>
        );
      }
    });
    return <div className="project">{projects}</div>;
  }
}

export default Project;
