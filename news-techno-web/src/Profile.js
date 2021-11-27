import { Fragment } from 'react';
import ProfileCard from './ProfileCard';
import "./Profile.css";
 
export default function Profile() {
 
    const anggota = [
      {
        id: 1,
        nama: "Edho Satrio Pambudi",
        nim: "21120116120023",
        image: "https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG32.png",
        desc: "S1 Teknik Komputer Fakultas Teknik Universitas Diponegoro",
      }
    ];
 
    return (
      <>
      <br/>
      <p id="profiles">About Us</p>
      <div className="containerProfile">
        {anggota.map((item, index) => (
          <Fragment key={item.id}>
            <ProfileCard
              nama={item.nama}
              image={item.image}
              nim={item.nim}
              desc={item.desc}
            />
            {anggota.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      </>
    );
  }
  
