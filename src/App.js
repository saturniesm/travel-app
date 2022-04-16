import React from "react";
import logo from "./logo.svg";
import "assets/scss/styles.scss";

function App() {
  return (
    <div className="Parent-box">
      <Image />
      <Text isDiscount="yes" Kategori="Ayam" Title="Node js" />
      {/* <ReviewUser /> */}
    </div>
  );
}

function Image() {
  return (
    <div className="Img">
      <img src={logo} alt="logo chilling"></img>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return <p>50% Discount</p>;
  } else {
    return <p>There's no discount</p>;
  }
}

// function ReviewUser() {
//   const user = [
//     {
//       id: 1,
//       name: "acel daily",
//       username: "acel",
//       reviewUser: "Good stuff hero",
//     },
//     {
//       id: 2,
//       name: "saturn and moon",
//       username: "satoon",
//       reviewUser: "Bad stuff hero",
//     },
//   ];

//   const userMap = user.map((userList) => (
//     <div>
//       <h3>{userList.name}</h3>
//       <p>{userList.username}</p>
//       <p>{userList.review}</p>
//     </div>
//   ));
// }

function Text(props) {
  const { Kategori, Title, isDiscount } = props;
  const superiority = ["faster", "the same language", "prettier"];
  const superiorityMap = superiority.map((itemSuperiority) => (
    <li>{itemSuperiority}</li>
  ));
  return (
    <div className="Font">
      <p className="Kategori">{Kategori}</p>
      <p className="Title">{Title}</p>
      <p className="Price">Rp 12.000</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="Info">
        Random Text. The fields of events, symbols or predictability in 1 red
        marbles from this view, randomness is a random input (such as from a
        random input (such as 4. In statistics, a population consists of an
        outcome, rather than haphazardness, and the population.
        <ul>{superiorityMap}</ul>
      </p>
      <a
        onClick={(name) => AddCard(Title, name)}
        className="Button-card"
        href="#"
      >
        Add to card
      </a>
    </div>
  );

  function AddCard(name) {
    console.log("Buy", name);
  }
}

export default App;
