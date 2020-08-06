import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import database from './firebase'
import './TinderCards.css'
function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     name:'Steve Jobs',
        //     url: 'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        // },{
        //     name:'Jeff Bezos',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg'
        // }
    ]);
    
    useEffect(() => {


        const unsubscribe = database.collection("people")
        .onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
        return () =>{
            unsubscribe();
        }
    }, []);
    return (
        <div>
           
            <div className="tinderCards__cardContainer">
                {people.map(person=>(
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                        <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
