import "../styles/HomePage.css";

const HomePageView = () => {
  return (
      <div style={{textAlign: 'center'}} className="homepage-container">
        <p>This is an app to manage students and campuses.</p>
        <p>Head to <b>All Campuses</b> or <b>All Students</b> to begin.</p>
      </div>
  );
}

export default HomePageView;