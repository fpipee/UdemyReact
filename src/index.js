import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import AprovalCard from './AprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <AprovalCard>
                <CommentDetail
                    author="Robsonn"
                    timeAgo="Today at 4:00 pm"
                    comment={"Piu Avanti"}
                    imageL={faker.image.avatar()}
                />
            </AprovalCard>
            <CommentDetail
                author="Elisa"
                timeAgo="Today at 2:00 pm"
                comment={"Strong Soul"}
                imageL={faker.image.avatar()}
            />
            <CommentDetail
                author="Letti"
                timeAgo="Today at 3:00 pm"
                comment={"Avatar"}
                imageL={faker.image.avatar()}
            />            
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));