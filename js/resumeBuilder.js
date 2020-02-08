var bio = {
    'name': 'Hardik Khatri',
    'role': 'Web Developer',
    'contacts': {
    'mobile': '9462722325',
    'email' : 'hardikkhatri61@gmail.com',
    'github': 'hardik100',
    'twitter': "@hardik100",
    'location': 'India'  
},
  'welcome message': 'hey i am hardik and i want a platform to work with enhance my skills along with the growth of the organisation',
  'skills': ['front-end web development','html','css','javascript'],
  'biopic': "images/fry.jpg"
};

var education = {
	"schools": [
    {
		"name": "JECRC Foundation",
		"location": "Jaipur",
		"degree": "Bachelor Of Technology (B.TECH)",
		"majors": ["Electronics & Communication"],
		"dates": "2015-2019",
		"url": "www.jecrcfoundation.com"
  }
],
"onlinecourses": [
    {
    "title": "Responsive Web Design",
    "school": "Freecodecamp",
    "dates": 2019,
    "url": "www.freecodecamp.org"
  },
  {
    "title": "Front end web development - Udacity",
		"school": "",
		"dates": 2020,
    "url": "www.udacity.com"
  }
]
}

var work = {
  "jobs" : [
    {
     "employer": "PD Institute",
     "title": "Digital Marketing intern",
     "dates": "may 2019 - july 2019",
     "location" : "Jaipur",
     "description" : "learnt all the marketing strategy with digital platforms"
    },
    {
      "employer": "Teleperformance",
      "title": "customer support",
      "dates": "august 2019 - oct 2019",
      "location" : "Jaipur",
      "description" : "had to talk with the customers of flipkart and listen all their queries and resolve them."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "portfolio site",
      "dates": "2020",
      "description" : "made a portfolio website that how a website look like while working with divs",
      "images": []
    },
    {
      "title": "animal trading card",
      "dates": "2020",
      "description": "this is an animal trading card of a specified animal",
      "images": ["images/animaltradingcard.jpg"]
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedName + formattedRole);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedBiopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio["welcome message"]);
$("#header").append(formattedMessage);


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);
}


function displayWork() {
for(job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
var formattedDatesLocation = formattedDates + formattedLocation;
$('.work-entry:last').append(formattedDatesLocation);
var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}

displayWork();


projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);
   var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
   $('.project-entry:last').append(formattedDescription);
   
   if(projects.projects[project].images.length > 0) {
     for(image in projects.projects[project].images) {
       var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
       $('.project-entry:last').append(formattedImage);
     }
   }
 }
 }

 projects.display();

 education.display = function() {
   
   for(school in education.schools) {
     $('#education').append(HTMLschoolStart);
     var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
     var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
     var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
     $(".education-entry:last").append(formattedLocation);
     var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
     $(".education-entry:last").append(formattedDates);
     var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
     $('.education-entry:last').append(formattedMajors);
}

  $('.education-entry').append(HTMLonlineClasses);
  for(onlinecourse in education.onlinecourses) {
   var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[onlinecourse].title);
   var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses[onlinecourse].school);
   var formattedTitleSchool = formattedTitle + formattedSchool;
   $('.education-entry:last').append(formattedTitleSchool);
   var formattedDates = HTMLonlineDates.replace("%data%",education.onlinecourses[onlinecourse].dates);
   $('.education-entry:last').append(formattedDates);
   var formattedUrl = HTMLonlineURL.replace("%data%",education.onlinecourses[onlinecourse].url);
   $('.education-entry:last').append(formattedUrl);
}
 }
 education.display();
 $('#mapDiv').append(googleMap);