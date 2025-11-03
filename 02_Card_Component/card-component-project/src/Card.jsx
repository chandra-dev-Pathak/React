import './Card.css';
import profile_picc from './assets/profile_image.jpg'

function Card() {

    let name = 'Chandra dev pathak';

    return (

        < div className='card' >
            <img className='card_img' src={profile_picc} alt="profile-picc" />
            <h1 className='card_name'>{name}</h1>
            <p className='card_discription'>I am Mern stack developer specially foucs on core Java-script</p>
        </div >
    );

}

export default Card