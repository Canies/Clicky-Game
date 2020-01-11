import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends:friends,
    highscore: 0,
    score: 0,
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
   let newfriends = this.state.friends.map(friend => {
      if (friend.id !== id) {

        if (friend.clicked===false){
          friend.clicked = true
          this.setState({
  
            highscore: this.state.highscore+1,
            score: this.state.score+1
  
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
     
      return friend

    });

    newfriends.sort((a, b) => {
      return Math.random() - 0.5;
    })

    if(this.state.score=== 0){
     newfriends = this.state.friends.map(friend => {
        friend.clicked=false
        return friend
      })
    }

    // Set this.state.friends equal to the new friends array
    this.setState({ friends:newfriends });

  };





  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
    High Score: <span> {this.state.highscore}</span>  Score:  <span>{this.state.score}</span>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
