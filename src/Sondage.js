import Select from 'react-select';
import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import { aliments } from './data';
import { DatePicker, Space } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Pagination } from 'antd';
import'./Sondage.css';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const maxLimit = 10;
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const onChange = (date, dateString) => {
    console.log(date, dateString);
};

function Sondage() {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const page1Ref = useRef(null);
    const page2Ref = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const page1Rect = page1Ref.current.getBoundingClientRect();
        const page2Rect = page2Ref.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        const page1IsVisible = (page1Rect.top >= 0 && page1Rect.bottom <= screenHeight);
        const page2IsVisible = (page2Rect.top >= 0 && page2Rect.bottom <= screenHeight);
        if (page1IsVisible) {
            page1Ref.current.classList.add('zoom');
            page1Ref.current.classList.remove('dezoom');
        } else {
            page1Ref.current.classList.add('dezoom');
            page1Ref.current.classList.remove('zoom');
        }
        if (page2IsVisible) {
            page2Ref.current.classList.add('zoom');
            page2Ref.current.classList.remove('dezoom');
        } else {
            page2Ref.current.classList.add('dezoom');
            page2Ref.current.classList.remove('zoom');
        }
    };



    return (
        <>
        <div className='mainContainer'>
            <body className="poll">
                <div className="page1" ref={page1Ref}>
                    <h3 className='stitle'>Sondage</h3>
                    <Form className="quiz"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        style={{
                            maxWidth: 900,
                        }}
                    >
                        
                        <Form.Item label="Nom"
                            rules={[{ required: true, message: 'Veuillez mettre votre nom!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Prénom">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Date de naissance">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Adresse">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Code postal">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Ville">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Téléphone">
                            <Input />
                        </Form.Item>
                        <br/>
                        <Form.Item>
                            <Button onClick={() => document.querySelector('.page2').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })}>Passer à la sélection des aliments</Button>
                        </Form.Item>
                    </Form>

                    </div>
                    <br/><br/><br/>

                    <div className='page2' ref={page2Ref}>
                        <p> Vous pouvez choisir les aliments en fonction de vos choix en les selectionnant ci-dessous.</p>
                        <br/><br/><br/>
                        <Select
                            options={aliments}
                            isMulti
                            maxMenuHeight={200}
                            value={selectedOption}
                            onChange={handleChange}
                            placeholder="Choisissez vos aliments"
                            //Creer un json au fur et a mesure qu'il choisit des aliments et si les aliments arrivent à 10 alors on désactive le bouton
                            //isOptionDisabled={() => aliments.length >= maxLimit}
                        />
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <button className='b-valider'>valider</button>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    </body>
        </div>
        </>

    );
};

export default Sondage;