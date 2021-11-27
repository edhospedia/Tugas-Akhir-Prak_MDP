import './ProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
 
export default function ProfileCard (props) {
    return (
        <div class="cardProfile">
            <div className="desc">
                <img src={props.image} alt="avatar.jpg" className="gambar"/>
            </div>
            <div class="classView">
                <p class="nama">{props.nama}</p>
                <p class="uraian"> {props.desc} </p>
                
                <div class="classButton">
                    <a href="https://github.com/edhospedia" target="_blank"> <button class="btng"> <FontAwesomeIcon icon={faGithub} /> </button></a>
                    <a href="https://www.instagram.com/edhossp/" target="_blank"> <button class="btni"> <FontAwesomeIcon icon={faInstagram} /> </button></a>
                    <a href="https://wa.me/6281390263113" target="_blank"> <button class="btnw"> <FontAwesomeIcon icon={faWhatsapp} /> </button> </a>
            
                </div>
                <p class="nim"> {props.nim} </p>
            </div>
            
        </div>
    );
}
