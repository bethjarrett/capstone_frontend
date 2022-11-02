import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Panel from '../../components/Panel/Panel';

import first from "../../components/images/img/06.jpg"
import second from "../../components/images/img/07.jpg"
import third from "../../components/images/img/08.jpg"
import forth from "../../components/images/img/09.jpg"
import fifth from "../../components/images/img/10.jpg"
import sixth from "../../components/images/img/11.jpg"
import seventh from "../../components/images/img/12.jpg"
import eight from "../../components/images/img/13.jpg"
import ninth from "../../components/images/img/14.jpg"
import tenth from "../../components/images/img/15.jpg"
import eleventh from "../../components/images/img/16.jpg"
import twefth from "../../components/images/img/17.jpg"
import thirteenth from "../../components/images/img/18.jpg"

export default function Photos(props)
{
    var items = [
        {
            name: "Tatham Hall, 2006",
            description: "I transferred to York University (well, is it transferring if you didn't have any credits?). This picture from my dorm shows friends playing Smash Bros, but a Super Nintendo and Sega Genesis are the only consoles in sight. All of these were considered 'retro' at the time.",
            img: first
        },
        {
            name: "Montreal, 2007",
            description: "Even though it wasn't my first time in Montreal, it was my first trip without anyone policing me. Here I am wearing two pairs of gloves, gesturing towards 5 rum and cokes.",
            img: second
        },
        {
            name: "Florida, 2008",
            description: "I went to Magic Kingdom for the first time at 20 years old. I was staying a 2 hour drive from the park. I waited 2 hours to ride Pirates of the Caribbean.",
            img: third
        },
        {
            name: "Strike, 2009",
            description: "The teaching assistants and contract faculty at York went on strike for 3 months. I worked full-time for the duration. I made so much money that I went on two trips this year. The strike was the best thing that happened to me throughout my undergraduate experience.",
            img: forth
        },
        {
            name: "Pitchfork Music Festival, 2010",
            description: "This festival fell smack in the middle of 2010, the year I moved downtown, broke up with my long-term boyfriend, and freaked out about graduating.",
            img: fifth
        },
        {
            name: "Incheon Teachers Orientation, 2011",
            description: "In 2011, I applied to the Japanese English Teacher program. I didn't get in. So I applied to teach in Korea, which, in my 23-year-old brain, was close enough. They took everyone there, as long as you finished your degree and didn't have any convictions.",
            img: sixth
        },
        {
            name: "Everland, 2012",
            description: "As English teachers, we didn't get many days off. We did get election day off, though. Since we couldn't vote, we went to an amusement park, dressed in animal onesies.",
            img: seventh
        },
        {
            name: "Incheon Grand Park, 2013",
            description: "I took my students to this park for their summer English class. Here my students are passing Onion O's to each other on chopsticks in their mouths.",
            img: eight
        },
        {
            name: "Jeju Island, 2014",
            description: "I went home for awhile. But then I went back.",
            img: ninth
        },
        {
            name: "Toronto, 2015",
            description: "I spent all of 2015 in Toronto, the first full year home since 2010. I almost moved to Japan, though. Almost.",
            img: tenth
        },
        {
            name: "Memphis, 2016",
            description: "I reuinited with my closest friends from South Korea in the southern United States. Here we are watching the annual 4th of July hot dog eating contest, being broadcast in the all-you-can-eat BBQ place in Memphis.",
            img: eleventh
        },
        {
            name: "Memphis, 2017",
            description: "I had a lot of jobs in 2017. They were all bullshit. The last one I got just to make enough money to visit New Orleans and back to Memphis to see my pals.",
            img: twefth
        },
        {
            name: "Windsor, 2018",
            description: "I went to do my Master's degree at the University of Windsor. Awful city.",
            img: thirteenth
        }
    ]

    return (
<div className="container">
    <div className="row">
        <Panel />
        <div className='col-sm-8 pt-5'>
            <h1>Photos</h1>
            <span>A picture and some highlights from every posting year, just in case you needed some context.</span>
            <hr />
            <Carousel
            navButtonsAlwaysVisible	={true}
            autoPlay = {false}
            NextIcon={<FaArrowCircleRight />}
            PrevIcon={<FaArrowCircleLeft />}
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    </div>
</div>
    )
}
function Item(props)
{
    return (
<div>
    <h2>{props.item.name}</h2>
    <p>{props.item.description}</p>
    <img src={props.item.img} alt={props.item.name} className="img-fluid carousel-img mx-auto d-block"/>
</div>
    )
}