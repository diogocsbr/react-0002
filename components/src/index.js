import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetail'
import ApprovalCard from './ApprovalCard';

import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
        
            <ApprovalCard>
                <div>
                    <h4>Atenção!</h4>
                    Você tem certeza que deseja fazer isso?
                </div>
                </ApprovalCard>

            <ApprovalCard>
                <CommentDetails author="Sam" timeAgo="Today at 6:00PM" content={ faker.lorem.words() } ImageUrl={ faker.image.avatar() } />
            </ApprovalCard>
            <ApprovalCard><CommentDetails author="Alex" timeAgo="Yesterday at 5:00PM"  content={ faker.lorem.words() } ImageUrl={ faker.image.avatar() } /></ApprovalCard>
            <ApprovalCard><CommentDetails author="Jane" timeAgo="Two days ago"  content={ faker.lorem.words() } ImageUrl={ faker.image.avatar() } /></ApprovalCard>
        </div>
    );    
};

ReactDOM.render(<App />, document.querySelector('#root'));
