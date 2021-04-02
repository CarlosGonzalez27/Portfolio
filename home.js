function about() {
	var element = document.getElementById("tab-content");
	element.innerHTML = `<ul id="menu">
            <li class="icon fa fa-user current-icon" id="uno" onclick="about()" ></li>
            <li class="icon fa fa-folder-open" id="dos" onclick="projects()"></li>
            <li class="icon fa fa-plus-circle" id="tres" onclick="contact()"></li>
          </ul>
            <h2>About</h2>
            <p>I'm a student at the University of California Irvine looking for computer software opportunities. I was drawn to computer science and engineering because of the creative brainstorming that is required when tackling challenging projects. I've always enjoyed the ability to create interesting things through my programming background. My hobbies include exploring new places and cultures. </p>
            <h2>Skills</h2>
            <p>Through my time as a Computer Science and Engineering student I have learned to use many computer languages which range from assembly in x86 and MIPS to higher level languages like Java and C++. My program of study has given me a sturdy foundation in computer languages that is further complemented by knowledge in the hardware systems that are used to implement them. </p>
`
}

function projects() {
	var element = document.getElementById("tab-content");
	element.innerHTML = `<ul id="menu">
            <li class="icon fa fa-user" id="uno" onclick="about()" ></li>
            <li class="icon fa fa-folder-open current-icon" id="dos" onclick="projects()"></li>
            <li class="icon fa fa-plus-circle" id="tres" onclick="contact()"></li>
          </ul>
            <h2>Projects</h2>
			<h3>Current Projects</h3>
			<p>Remote Photoplethysmography: (Python, OpenCV, C++) Application takes a video feed and processes the video data to determine a users heart rate. </P>
			<p>Home Surveillance System: (Python, OpenCV, C++, Twillio API) A platform for a user to monitor a system of cameras and safety alert systems. <p>
			<h3>Past Project Examples</h3>
			<p>Desktop Scheduling Application: (C++) An application to help business managers with scheduling their employees. </p>
			<p>Secret Santa Application: (Python, Twillio API) Assigns a list of users someone to give a gift to. </p>`
			
}

function contact() {
	var element = document.getElementById("tab-content");
	element.innerHTML = `<ul id="menu">
            <li class="icon fa fa-user" id="uno" onclick="about()" ></li>
            <li class="icon fa fa-folder-open" id="dos" onclick="projects()"></li>
            <li class="icon fa fa-plus-circle current-icon" id="tres" onclick="contact()"></li>
          </ul>
            <h2>Contact</h2>
			<div class= "contact-section">
            <form action="process-form.php" method="post">  <fieldset>   
<legend>Contact Form</legend>  
<p><label for="name">Name:</label></p><p><input type="text" id="name" name="name" size="40" /></p>
<p><label for="email">    Email address:   </label></p><p><input type="text" id="email" name="email" size="40" /></p>
<p><label for="comments">     Message:   </label></p><p><textarea id="comments" name="comments" rows="5" cols="50"></textarea></p>
<p><button type="submit">Send</button></p>
  </fieldset> </form>
<p style="text-align:left; margin-top: 1em; margin-left: 0px">Email: carlos@thelifedev.com</p></div>`
}
 
function numtobit(number) {
	if(number >= 0)
		return number.toString(2);
	else
		return (~number).toString(2);
}