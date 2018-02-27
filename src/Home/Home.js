import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>test</p>
                        </td>
                        <td className="About">
                            <p className="Headline">Hello, there! Welcome to my website.</p>
                            <div className="Content">
                            <p>My full name is Jenna Anne Kovacs, and I recently graduated from the University of Florida as a
                                <a href="/diploma"> Bachelor of Science in Computer Engineering. </a>
                                My degree path consisted of courses centered around both software and hardware; however, I would like to focus on <strong>software development</strong> for my future career. 
                                I have educational experience in object-oriented programming using Java and C++, and professional (internship) experience working in 
                                LabVIEW and TestStand within the Test Engineering department at Harris Corporation. 
                                Outside of my classes and internships, I have been teaching myself basic web development, which has resulted in the creation of this website. 
                                For more details, see my <a href="/resume"> resume </a> and <a href="/project1"> projects</a>.</p>
                            <p>Even though I've been entirely raised in Florida, I was actually born in Michigan. While growing up I spent most of my childhood deeply involved in school and sports - 
                                gymnastics dominated my early years (ages 6-12), and then I switched to competitive volleyball in middle and high school, and even did cheerleading during my senior year.
                                Balancing school and sports (especially gymnastics) was not always an easy task, but I managed to uphold an above-average GPA nonetheless, which allowed me to attend my first choice of 
                                colleges that I applied to. Upon my entrance to college, I continued pursuing my passion for sports by joining the gymnastics club at UF, 
                                and spent my last semester playing volleyball on an intramural team.</p>
                            <p>I attribute a lot of my self-discipline and work ethic from my experiences as a gymnast... (to be continued) </p>
                            <p>My ultimate goal for my profession is to work in a field I enjoy that also helps to benefit others and the world for the greater good. During my college years, I spent a summer abroad in 
                                Australia studying renewable energy technologies, and I would love to work for a company that encompasses and encourages sustainable living practices. Studying abroad
                                also sparked my desire to travel and see the world, and has allowed me to broaden my perspective. <a href="/contact"> Send me a message</a> if you're interested in having me join your team!</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Home;