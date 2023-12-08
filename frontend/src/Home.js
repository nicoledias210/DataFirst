function Home() {

  return (
      <div>
    
    <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: 'lightblue', padding: '2px', borderRadius: '10px', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', margin: '0'}}>Our Mission</h2>
    </div>

    
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', marginTop: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Image Div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img src="mission.jpeg" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto', marginTop: "33px" }} />
      </div>

      
      <div style={{ flex: 1, marginLeft: '10px' }}>
        <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid #ffffff', fontSize: '18px', color: 'black' }}>
          <h3 style={{fontWeight: 'bold'}}>Mission of CLEAR</h3>
          <p style={{textAlign: 'justify', justifyContent: 'center'}}>The Civic Leadership Education and Research (CLEAR) Initiative exhibits a research and education profile focused on public and nonprofit sector employment, which represents a significant proportion of the national labor economy. CLEAR will be dedicated to understanding and developing the talent needs of the civic leadership workforce for the 21st century.</p>
          <h3 style={{fontWeight: 'bold'}}> Objective of Our Dashboard</h3>
          <p style={{textAlign: 'justify', justifyContent: 'center'}}>The hope of this project is to produce an API (and subsequent dashboard/platform) that will provide participating governments the opportunity to contribute data seamlessly to analyze trends on an ongoing basis. The study will include several steps toward the final product of the API and dashboard. Deliverables will be inclusive of the US's full federal public sector labor market.</p>
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
        <img src="Resh.jpg" alt="Team Member" style={{ width: 'auto', overflow: 'hidden', height: '450px', borderRadius: '50%' }} />
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
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="p32.png" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Eli Lee</h3>
        <p>Role: Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: keunyoul@usc.edu</p>
      </div>
      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="p4.png" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Yi Ming</h3>
        <p>Role: Backend & Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: yming897@usc.edu </p>
      </div>
      </div>
    </div>



    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="Kecheng(Anderson) Liu.jpeg" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Kecheng Liu</h3>
        <p>Role: Full Stack Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: liukeche@usc.edu</p>
      </div>

      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="Screenshot.png" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Darren Cao</h3>
        <p>Role: Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: darrenca@usc.edu</p>
      </div>
      </div>
    </div>



    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="Josephina.jpg" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Josephina Bian</h3>
        <p>Role: Data Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: zhennibi@usc.edu </p>
      </div>

      </div>
      {/* Team Member 2 */}
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="Nicole.jpeg" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
        <div style={{ flex: 1, marginLeft: '10px', color :'black' }}>
        <h3>Nicole Dias</h3>
        <p>Role: Data & Frontend Development</p>
        <p style = {{marginTop: '-20px'}}>Email-id: ndias@usc.edu</p>
      </div>
      </div>
    </div>


    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Team Member 1 */}
      <div style={{ flex: 1, marginRight: '10px', overflow: 'hidden', color: '#ffffff', fontWeight: '600' }}>
        <div style={{ width: '400px', height: '450px', overflow: 'hidden', borderRadius: '50%', marginLeft: '80px'}}><img src="Sukwon Choi.jpg" alt="Team Member 1" style={{ width: '100%', height: 'auto%', textAlign: 'center'}} /></div>
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

    <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: 'lightblue', padding: '2px', borderRadius: '10px', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', margin: '0'}}>Our Awards</h2>
    </div>

     {/*Award1*/}
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', marginTop: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Image Div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img src="Award1.png" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto', marginTop: "130px" }} />
      </div>

      
      <div style={{ flex: 1, marginLeft: '10px' }}>
        <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center', border: '2px solid #ffffff', fontSize: '18px', color: 'black' }}>
          <h3 style={{fontWeight: 'bold'}}>Best Interdisciplinary Data Scientist - Yi Ming</h3>
          <p style={{textAlign: 'justify', justifyContent: 'center'}}>Yi has led the team throughout the entire process. He has been the most agile and flexible in his skill set (though all of the students were great)! His ability to quickly and wholly absorb domain specificity and apply his broad data science skills to that domain made this project a great success. Not only will this project have direct policy impacts, but the Volcker Alliance has preliminarily approved funding for this project to be extended, which Yi will subsequently lead. I cannot more emphatically endorse this individual for this award, and to further this point, I am recommending him for several PhD programs in Public Policy, including ours at the Sol Price School of Public Policy. Those schools are by their very nature interdisciplinary in their orientation (data science, public policy, political science, public administration, management, etc), and he will one day be a superstar!</p>
        </div>
      </div>
    </div>

    {/*Award2*/}
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', marginTop: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Image Div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img src="Award2.png" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto', marginTop: "100px" }} />
      </div>

      
      <div style={{ flex: 1, marginLeft: '10px' }}>
        <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: '', padding: '20px', borderRadius: '10px', border: '2px solid #ffffff', fontSize: '18px', color: 'black' }}>
          <h3 style={{fontWeight: 'bold'}}>Best Data Science Open and Sharing Practices</h3>
          <p style={{textAlign: 'justify', justifyContent: 'center'}}>This team has created an open data dashboard that will aid actors across the federal government in identifying hiring trends and outcomes. Such stakeholders include the US Office of Personnel Management, the US General Services Administration's Office of Evaluation Sciences, researchers in the fields of political science, public management, and labor economics, career counselors at higher education institutions, and good government organizations across the United States. Such a tool did not exist until these students put their minds and efforts to this enterprise, and it will pay off in so many ways to so many stakeholders dedicated to ensuring the best and brightest have access to careers in federal service.</p>
        </div>
      </div>
    </div>

    {/*Award3*/}
    <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', marginTop: '10px', background: '', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      {/* Image Div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <img src="Award3.png" alt="Your Alt Text" style={{ maxWidth: '100%', height: 'auto', marginTop: "120px" }} />
      </div>

      
      <div style={{ flex: 1, marginLeft: '10px' }}>
        <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px', background: '', padding: '20px', borderRadius: '10px', border: '2px solid #ffffff', fontSize: '18px', color: 'black' }}>
          <h3 style={{fontWeight: 'bold'}}>Best Interdisciplinary Data Science Team</h3>
          <p style={{textAlign: 'justify', justifyContent: 'center'}}>This team has been, from top to bottom and left to right, an extraordinary collaborative experience, whose product (an analytical dashboard that provides longitudinal analysis on the federal civil service labor market) will inform policymakers, employers, educators, and researchers for years to come. The work is already a key dimension of the Sol Price School's Civic Leadership Education and Research (CLEAR) Initiative and its continued development will be funded by the Volcker Alliance --- a national nonprofit organization dedicated to good government. Each student contributed consistently, with great vigor, and with exceptional rigor throughout. I will do anything I can within my power to assure that this group of exceptional humans are able to meet their potential as they deserve every success in life if they pursue things as they did in this project.</p>
        </div>
      </div>
    </div>




  </div>
  );
}

export default Home