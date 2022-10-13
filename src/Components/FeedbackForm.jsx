import React from 'react';
import fedbckStyl from './Feedback.module.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function FeedbackForm() {
    const navigate = useNavigate();
    const submitFeedback = () => {
        navigate('/result');
    }
    return (
        <div className={fedbckStyl.cardmain}>
            <div className={fedbckStyl.card}>
                <div className={fedbckStyl.headings}>
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
                </div>

                <div className={fedbckStyl.btnGroup}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>

                <button className={fedbckStyl.submitBtn} onClick={() => submitFeedback()}>
                    SUBMIT
                </button>
            </div>


        </div>
    )
}

//#121417

export default FeedbackForm;

