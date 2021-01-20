import React, { useState } from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import db from '../Firebase';

function TweetBox() {
   const [tweetMessage, setTweetMessage] = useState('');
   const [tweetImage, setTweetImage] = useState('');

   const sendTweet = e => {
      e.preventDefault();
      db.collection('posts').add({
         displayName: "CodingTough",
         username: "codingtough",
         verified: true,
         text: tweetMessage,
         image: tweetImage,
         avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com"
      });
      setTweetMessage('');
      setTweetImage('');
   }
   
   return (
      <div className="tweetBox">
         <form>
            <div className="tweetBox__input">
               <Avatar src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
               <input 
                  onChange={e => setTweetMessage(e.target.value)}
                  value={tweetMessage}
                  placeholder="What's happening?" 
                  type="text" 
               />
            </div>
            <input 
               onChange={e => setTweetImage(e.target.value)}
               value={tweetImage}
               className="tweetBox__imageInput"
               placeholder="Optional: Enter image URL" 
               type="text" 
            />
            <Button 
               onClick={sendTweet}
               type="submit"
               className="tweetBox__tweetButton"
            >
               Tweet
            </Button>
         </form>
      </div>
   )
}

export default TweetBox;
