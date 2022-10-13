import React from 'react';
import fedbckStyl from './Feedback.module.css';

function ResultFeedback() {
    return (
        <div className={fedbckStyl.cardmain}>
            <div className={fedbckStyl.card}>
                <div className={fedbckStyl.headings}>
                    <h1>Thank you!</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
                </div>
            </div>


        </div>
    )
}

export default ResultFeedback;
