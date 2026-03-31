
// Card 222222222222222222222222

const Card = ({ data }) => {
    
  return (
    <div className='card'>

      <div className="top">
        <span className="s1">{data.status}</span>
        <span>{data.rate}</span>
      </div>

      <div className="center">
        <img src={data.img} alt="Profile" />
        <h3>{data.name}</h3>
        <p className="role">{data.role}</p>
        <p className="company">🏢 {data.company}</p>

        <div className="skill">
          {data.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        <p className="description">{data.description}</p>
      </div>

      <hr />

      <div className="bottom">
        <button onClick={() => window.location.reload()}>VIEW PROFILE</button>
      </div>

    </div>
  );
};

export default Card;