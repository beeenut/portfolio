import React, { Component } from "react";

var descrips = [
  {
    title: "Adaptive Navigation Utilizing a Drone Cluster",
    background: [
      "For my Senior Design project I worked on a team of four to research, design, integrate, and test a drone swarm to autonomously navigate 3 - dimensions using adaptive navigation. Adaptive navigation is an advanced technique for quickly navigating an area to find critical points of interest. My team and I completed this project for the Robotic Systems Lab, which specializes in adaptive navigation research.",
      "The main objective for this project was to implement the communication and control systems to safely fly multiple drones simultaneously as a single cluster. We also decided that before we could fly all of the drones we would need to be able to fly each of the drones individually. This resulted in a state based controller that was capable of receiving inputs from 4 joysticks and transferring control between each state.  Our Project consisted of 3 main subsystem: the drones, the communication, and the control.",
      "My main focus for this project was on the hardware which included the drones, radios, gps, motors, scalar field sensors, beacon, and the power management system. I began by identifying each of the hardware components necessary to make a flight ready system to perform adaptive navigation. This involved integrating and configuring each of the drones and components to act as one cohesive unit. I was responsible for examining four of the RSL’s old 3DR X8 octa-quad-copters and equipping them with all our new components. This also included ensuring proper power management for the new components. I developed, calibrated, and tested the scalar field sensors to be used for adaptive navigation. Once all the subsystems tests were complete I worked on testing the fully integrated system. This was conducted through stationary tests of all of the systems. Additionally, I completed necessary safety forms and pre-flight checklists as well as receiving my FAA Part 107 drone license.",
      "Unfortunately due to Covid-19 our project was significantly delayed and due to safety concerns we were unable to let our drones take to the skys. However, we were able to verify all of our software as well hardware through stationary tests and a simulation environment. Photos of the project as well as our team's final thesis can be downloaded below.",
    ],
    techs: "drone.jpg",
    image: "drone.jpg",
    videos: "",
  },
  {
    title: "PCB Speaker",
    background: [
      "This was a PCB speaker designed using EAGLE. This project consisted of digging through product datasheets, learning how to properly route traces, and picking components to ensure proper design and functionality. To verify the design I used DRC and ERC checks. Once verified, the design was sent to a board house and I generated a bill of materials. ",
    ],
    techs: "drone.jpg",
    image: "pcb-speaker.png",
    video: "",
  },
  {
    title: "Advanced Computer Architecture",
    background: [
      "For this project I implemented a 5 stage pipeline with hazard detection, forwarding, and a cache for memory. This project was done using Verilog and Vivado. This project was a continuation of a previous project done in my first computer architecture class. The original project was a 5 stage pipeline that used NOPs between instructions to avoid data hazards. The goal of this project was to sort an array of integers without using NOPs. By doing this I was hoping to gain a better understanding of how to use Verilog and a solid understanding of hazards, forwarding, and caching.",
      "Due to time constraints and the unexpected amount of time debugging I ended up testing the pipeline using instructions to find a maximum number. Once I successfully implemented that Hazard Detection Unit and Forwarding Unit, I tested the code in such a way that would test branching and most data Hazards. After time was spent debugging and making fixes, both units were working successfully. Once this was done I wrote new instructions to find a maximum number within memory. The new instructions revealed an issue with my Store instruction. All the other instructions seemed to work, including the conditional branches and jumps. I was unable to find the cause of this issue so I moved on to implementing the data cache in hopes the problem would be solved by replacing the data memory module",
      "I designed the cache to be a direct mapped write through cache. The cache module was implemented in such a way that main memory co-existed within the cache module. This was done so wires didn’t need to be added and rearranged. This solution also worked for my system because going to main memory wouldn’t cost any cycles, so by combining the cache and main memory in one module the cache module could be simpler. The cache was completed without any errors, however, through simulation tests using the maximum instruction code, the same error as mentioned before still existed. This issue was never resolved, but I would guess it is either an issue with my vivado simulation, or how I initialized the memory to include a range of numbers. I designed the cache to be a direct mapped write through cache. The cache module was implemented in such a way that main memory co-existed within the cache module. This was done so wires didn’t need to be added and rearranged. This solution also worked for my system because going to main memory wouldn’t cost any cycles, so by combining the cache and main memory in one module the cache module could be simpler. The cache was completed without any errors, however, through simulation tests using the maximum instruction code, the same error as mentioned before still existed. This issue was never resolved, but I would guess it is either an issue with my vivado simulation, or how I initialized the memory to include a range of numbers.",
      "The simplified instruction set is shown below and the architectural block diagram is shown above.",
    ],
    techs: "drone.jpg",
    image: "pipeline.png",
    video: "",
  },
  {
    title: "Mouse Controlled LED Light Strip",
    background: [
      "For this project I used an STM32L4 Discovery Board and the Kiel IDE to implement different patterns on a 72- LED strip. The beginning of the project consisted of coding embedded C in a low level (LL). This involved coding closer to the hardware particularly the GPIO ports and pins. Once I successfully demonstrated I could turn lights on and off based on a timer I moved to the hardware abstraction layer (HAL). I coded a similar functionally to the LL and added more lights. ",
      "After going through both these abstraction layers I moved into the STM’s CubeMX platform to easily configure ports,interrupts and timing. Once I was able to implement a cool rainbow pattern that would fill the led from one side and then drain to the other, I started experimenting with the USB standard library. I ended up connecting my computer mouse to theSTM32 board with an OTG adapter. I was able to use the mouse scroll wheel to increase the speed of the draining and was able to click the mouse to change the LED color.",
    ],
    techs: "drone.jpg",
    image: "led.jpg",
    video: "",
  },
  {
    title: "4 Bit Ripple Carry Adder Hierarchical Design",
    background: [
      "For this project I created the layout for a 4-bit ripple carry adder. I started the hierarchical design with transistor level schematics. I did this through multiple steps including creating an OR gate, an AND gate, and a XOR gate, then creating a half adder, then a full adder schematic. Once each component was made I connected each full adder module to make a 4-bit ripple carry adder schematic . I was able to verify the design by creating a testbench and using the Synopsys’s Simulation and Analysis Environment (SAE) to generate a waveform.",
      "Once I created the schematic I was ready to start on the layout. I started by building the layout for the gates and then moving up the hierarchical design until I reached the final four-bit adder. Once the design was complete I verified the layout through the Design Rule Check (DRC) and the Layout vs. Schematic (LVS) check.",
    ],
    techs: "drone.jpg",
    image: "full-adder.png",
    video: "",
  },
  {
    title: "BrendanEngh.com",
    background: [
      "Although it would have been way simpler and less time consuming, I decided I didn't want to use a website builder. I did this because I have previously worked as a web tester and had experience with the MERN stack. However, for this project I didn't want to start at square one, so I decided to use a react template that I found online. This template was created by Tim Baker and uses the ShoutOut CeeVee HTML template. Link to both items can be found below. Although most of the CSS had been completed for the responsive template, I changed almost all component JavaScript files and added many new ones of my own. This also required me to write much of my own CSS and change pre existing CSS. This project took me a week before I was ready to host it and is still a work in progress. This project has been a great learning experience and has greatly helped me develop more advanced web development skills.",
      "Web hosting is done using Netlify and the domain was purchased through google domains.",
      "Tim Baker Repo - https://github.com/tbakerx/react-resume-template",
      "ShoutOut HTML template - https://www.styleshout.com/demo/?theme=ceevee",
    ],
    techs: "drone.jpg",
    image: "website.png",
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
        return (
          <div>
            <h5>{projects.title}</h5>
            <div className="project-wrapper">
              <div className="image">
                <img alt={projects.title} src={projectImage} />
              </div>
              {paragraphs}
            </div>
          </div>
        );
      }
    });
    return <div id="project">{projects}</div>;
  }
}

export default Project;
