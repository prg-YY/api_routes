import Footer from "../components/layout/Footer"

const About = () => {
  return (
    <>
      PRG-Coding
      <div>
        <div className="content">About Page</div>
      </div>
    </>
  )
}

export default About

About.getLayout = function getLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
