import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import CarouselComponent from "./CarouselComponent";
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CatCardComponent from "./CatCardComponent";



export class MainComponent extends Component {
    constructor() { 
        super();
        this.state = {
            // make a property named cards with an array of objects on the inside
            cats: [
                {
                    id: 0,
                    image: 'assets/images/cat1.jpg',
                    name: 'Steve',
                    sex: 'M',
                    Age: 'Senior',
                    Temperment: "Calm"
                },
                {
                    id: 1,
                    image: 'assets/images/cat2.jpg',
                    name: 'Larry',
                    sex: 'F',
                    Age: 'Young Adult',
                    Temperment: "Terrified"
                },
                {
                    id: 2,
                    image: 'assets/images/cat3.jpg',
                    name: 'Richie',
                    sex: 'M',
                    Age: 'Kitten',
                    Temperment: "Curious"
                },
                {
                    id: 3,
                    image: 'assets/images/cat4.jpg',
                    name: 'Ernest Von Pussenstein',
                    sex: 'M',
                    Age: 'Kitten',
                    Temperment: "Playful"
                },
                {
                    id: 4,
                    image: 'assets/images/cat5.jpg',
                    name: 'Orange',
                    sex: 'F',
                    Age: 'Young Adult',
                    Temperment: "Playful"
                },
                {
                    id: 5,
                    image: 'assets/images/cat6.jpg',
                    name: 'Willie',
                    sex: 'M',
                    Age: 'Adult',
                    Temperment: "Curious"
                }

            ],
        };
    }
    render() {
        let cardList = this.state.cats.map(cat => {
            return (
                <Col sm="4">
                    <CatCardComponent cat={cat}/>
                </Col>
            )
         })
        return (
            <div>
                <HeaderComponent />
             
                <CarouselComponent />
                <Row>
                    {cardList}
                </Row>
                <FooterComponent/>
            </div>
        )
    }
}

export default MainComponent;
