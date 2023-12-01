function Home() {

  return (
      <div>
    {/* First Div */}
    <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: 'lightblue', padding: '2px', borderRadius: '10px', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', margin: '0'}}>Our Mission</h2>
    </div>

    {/* Second Div */}
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', marginTop: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Image Div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img src="mission.jpeg" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto', marginTop: "33px" }} />
      </div>

      {/* Text Div */}
      <div style={{ flex: 1, marginLeft: '10px' }}>
        <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid #ffffff', fontSize: '18px', color: 'black' }}>
          <h3>Mission of CLEAR</h3>
          <p>The Civic Leadership Education and Research (CLEAR) Initiative exhibits a research and education profile focused on public and nonprofit sector employment, which represents a significant proportion of the national labor economy. CLEAR will be dedicated to understanding and developing the talent needs of the civic leadership workforce for the 21st century.</p>
          <h3> Objective of Our Dashboard</h3>
          <p>The hope of this project is to produce an API (and subsequent dashboard/platform) that will provide participating governments the opportunity to contribute data seamlessly to analyze trends on an ongoing basis. The study will include several steps toward the final product of the API and dashboard. Deliverables will be inclusive of the US's full federal public sector labor market.</p>
        </div>
      </div>
    </div>

    {/* Third Div */}
    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '5px', marginBottom: '10px', background: 'lightblue', padding: '2px', borderRadius: '10px', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', margin: '0'}}>Meet our Team</h2>
    </div>

    {/* Fourth Div (Team Member) */}
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Circular Photo */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Resh.jpg" alt="Team Member" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black'}}>
        <h3>Prof. William G. Resh</h3>
        <p>Role: Project Mentor</p>
        <p style = {{marginTop: '-20px'}}>Email-id: wresh@usc.edu</p>
      </div>
      </div>

    </div>

{/* this is the section you need to edit  */}
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Keunyoung (Eli) Lee_smile.jpg" alt="Team Member 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black'}}>
        <h3>Eli Lee</h3>
        <p>Role: Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: keunyoul@usc.edu</p>
      </div>
      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Yi Ming.PNG" alt="Team Member 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black'}}>
        <h3>Yi Ming</h3>
        <p>Role: Backend & Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: yming897@usc.edu </p>
      </div>
      </div>
    </div>



    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Kecheng(Anderson) Liu.JPG" alt="Team Member 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Kecheng Liu</h3>
        <p>Role: Full Stack Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: liukeche@usc.edu</p>
      </div>

      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Screenshot.png" alt="Team Member 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Darren Cao</h3>
        <p>Role: Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: darrenca@usc.edu</p>
      </div>
      </div>
    </div>



    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Josephina.jpg" alt="Team Member 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Josephina Bian</h3>
        <p>Role: Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: zhennibi@usc.edu </p>
      </div>

      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="logo192.png" alt="Team Member 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Nicole Dias</h3>
        <p>Role: Data & Frontend Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: ndias@usc.edu</p>
      </div>
      </div>
    </div>


    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <img src="Sukwon Choi.jpg" alt="Team Member 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Sukwon Choi</h3>
        <p>Role: Data Development</p>
        <p style={{ marginTop: '-20px'}} >Email-id: sukwonch@usc.edu</p>
      </div>

      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', borderRadius: '50%', overflow: 'hidden' }}>
        <div style={{ flex: 1, marginLeft: '10px' }}>
      </div>
      </div>
    </div>




    {/* Repeat the above "Team Member" div structure for each team member */}
  </div>
  );
}

export default Home