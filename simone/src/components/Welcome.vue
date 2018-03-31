<template>
  <div class="cv">
    <div class="first-column">
      <h1><a href="/">Simone Chinaglia</a></h1>
      <p>Software Developer, VueJs Collaborator and git passionate</p>
      <ul class="undername">
        <li><a href="mailto:hello@simonechinaglia.net" target="_blank">Email</a></li>
        <li><a href="https://www.linkedin.com/in/simonechinaglia/" target="_blank">Linkedin</a></li>
        <li><a href="https://github.com/thezenycode" target="_blank">Github</a></li>

      </ul>
    </div>
    <div class="second-column">
      <h2>Summary</h2>
      <p>Software Developer, collaborator of the VueJS, experience in Cloud Architect on AWS. Always interested in giving the most efficient and powerful solutions to end user with high capacity for evolution and maintenance.
      I provide full stack services at a senior-level of expertise from over 6 years of web development.</p>
  <hr/>
      <h2 class="top-10">Experience</h2>

      <h3>Freelance Software Developer</h3>
      <h4>From August 2017 - Present</h4>
      <p>
      I am a freelance Software Developer with strong skills in web design and digital marketing services.
      Develop Web applications using Foundation Zurb, CSS3, Ruby on Rails and js. Working with git on Bitbucket for versioning and build custom web application across the aws infrastructure.
      </p>
<!--second experience-->
      <h3>Frontend Developer & AWS Solution Architect, <a href="https://comoco.it" class="link-to-company" target="_blank" >ComoComunica</a></h3>
      <h4>From December 2015 - to August 2017</h4>
      <p>
      I am employed in the Creative Web Area. Developed fully functional responsive web platforms and sites based on Business Requirements using HTML/HTML5, CSS3, JavaScript and JQuery. Working with git on bitbuket to develope custom web appilcation on amazon aws.
      </p>
      <ul class="experience">

        <li>Worked in both Agile and Waterfall settings.</li>
        <li>Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
        <li>Maintained brand standards under company guidelines.</li>
        <li>Consulted and documented UI best practices and code standards.</li>
        <li>Participated in projects in all stages of the product life cycle.</li>
        <li>Leveraged responsive web frameworks to consistently complete product deliverables ahead of schedule.</li>
        <li>Created custom plugins, templates, and functions for Wordpress based sites</li>
        <li>  Fixed front end bugs (HTML, CSS, Javascript errors (JQUERY), testing (A/B Split Testing), unit testing</li>
        <li>UX tests to test the usability of mobile or websites</li>
        <li>Optimized pages for page speed using Google Page Speed (API) for Apache to obtain higher rankings on Search Engines (SEM)</li>
      </ul>

<!--first experience-->
<h3>Freelance Web Developer and Designer</h3>
<h4>From August 2009 - to December 2015</h4>
<p>
Oversaw all web design, graphic design, and marketing campaigns for product development company.Communicated directly with clients to establish project parameters, wrote proposals for design work, analyzed competitor web sites, determined web site content, produced site maps for client approval, and communicated progress with client throughout length of project.
<br/>Designed and managed e-commerce, WordPress websites, blogs, design logos and marketing collateral.

Provided internet related services including web site design, front-end web development, domain name registration, web hosting, search engine optimization / submission, newsletters. Maintained client websites on an ongoing basis.
</p>
<ul>
  <li>Integrated social media applications on web sites and blogs.</li>
  <li>Created interface designs for integration into web applications.</li>
<li>Created highly effective marketing campaigns, product presentations, and trade show materials.</li>
<li>Contribute to productivity through effective supervision of printing functions.</li>
</ul>

<!--End of experience-->
      <h2>Featured Skills</h2>
<p class="tech-lang">
<span>VueJS</span>
<span>Webpack</span>
<span>OctoberCMS</span>
<span>Bitbucket</span>
<span>Amazon Web Services (AWS)</span>
<span>Git</span>
<span>Sass</span>
<span>Foundation Framework</span>
<span>Bootstrap</span>
<span>Css3</span>
<span>JavaScript</span>
<span>Apache</span>
<span>Web Applications</span>
<span>Object-Oriented Programming (OOP)</span>
<span>MySQL</span>
<span>Project Management</span>
<span>Adobe Creative Suite</span>
<span>Mac & PC platforms</span>
<span>WordPress</span>
<span>MongoDB</span>
<span>Contentful</span>
<span>GatsbyJS</span>
<span>Netlify</span>
<span>GruntJS</span>
<span>PHP</span>
<span>Css variables</span>
<span>Web Application Security</span>
<span>Snyk</span>
<span>Angular 2</span>
<span>TypeScript</span>
<span>Haml</span>
<span>Jade</span>
<span>Agile & Waterfall Methodologies</span>
<span>LAMP</span>
</p>

<!--Certification-->
<h2>Certifications</h2>
<ul>
  <li><strong>ZURB:</strong> Foundation Certified Developer</li>
<li><strong>AMAZON WEB SERVICES:</strong> AWS Solution Architect</li>
</ul>

<!--Project-->
<h2>Projects</h2>

<h3>VueJS Italy</h3>
<h4>From September 2017 - to present</h4>
<p>
Collaborate actively with the international team of vueJS to develop and translate the js library. https://it.vuejs.org/</p>
<h3>October CMS</h3>
<h4>From September 2017 - to present</h4>
<p>
Collaborate actively with the international team of October CMS.</p>

</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
height: auto;

}
h1 a {
        font-weight: 700;
    margin: 0;
    line-height: 1;
    text-decoration: none;
    color: #222222;
    opacity: 1;

}
.top-10{
  padding-top: 17px;
}
hr {
  border: 1px solid rgba(34,34,34,.25);
}
.tech-lang span {
    border: 1px solid rgba(34,34,34,.25);
    padding: 0px 18px;
    border-radius: 50px;
    margin: 0 -1px 5px 0;
    line-height: 2.5rem;
    display: inline-block;
}
.tech-lang span:hover{
color:white;
background: #222;
transition: background-color 0.5s ease;
}
body, html {
min-height: 100%;
}
.first-column {
    margin-right: 6vw;
    flex-basis: 10rem;
    flex-shrink: 0;
text-align: left;
}
.first-column ul {
    display: -webkit-box;

}
.first-column ul li {
    display: -webkit-box;
    margin: 0 10px 0 0;
}
.second-column{
    flex: 1 0 22rem;
    padding: 0 1em 0 1.75em;
    min-height: calc(100vh - 12vw - 2rem);
    max-width: 100%;
text-align: left;
}

.second-column ul {
    /*margin: 0 0 2em;*/
    padding: 0;
    list-style-type: circle;

}
.second-column li{
  display: block;

display: list-item;
    text-align: -webkit-match-parent;
}
h4 {
    margin-top: 0;
    margin-bottom: .5em;
    font-weight: 400;
}
h3{
      font-size: 1em;
    margin-top: .5em;
    margin-bottom: 0;
}

h2{
      margin: 0;
    font-size: .75em;
    opacity: .5;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
}
h1{
  font-weight: 700;
    margin: 0;
    line-height: 1;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #222222;
    opacity: .5;
}

.link-to-company a {
  color: #222222;
font-style: italic;
}

p {
    line-height: 1.3;
}
.cv{

    width: 68rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 6vw;
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;

}
.undername ul {
  display: inline-flex;
}

@media (max-width: 748px){
.cv{
  padding: 10vw 4vw 6vw;
}
.first-column {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 12vw;
}
.second-column{
    flex: 1 1 auto;
}

}

@media (max-width: 600px){
  html {
      font-size: 14.5px;
  }
}

</style>
