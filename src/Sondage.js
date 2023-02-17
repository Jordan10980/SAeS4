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


    return (
        <>
        <div className='mainContainer'>
            <body className="poll">
                <div className="page1">
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
                            <Button onClick={() => document.querySelector('.page2').scrollIntoView({ behavior: 'smooth' })}>Passer à la sélection des aliments</Button>
                        </Form.Item>
                    </Form>

                    </div>
                    <br/><br/><br/>

                    <div className='page2'>
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
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    </body>
        </div>
        </>

    );
};

export default Sondage;