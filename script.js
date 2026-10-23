const leftItems = document.querySelectorAll('#left > div');
const contentWrapper = document.querySelector('#contentwrapper');

function setActiveItem(activeItem) {
	leftItems.forEach((item) => {
		const isActive = item === activeItem;
		item.style.flexGrow = isActive ? '2.5' : '1';
		item.querySelector('h2').style.letterSpacing = isActive ? '3px' : '0';
	});
}

leftItems.forEach((item) => {
	item.style.flex = '1 1 0';
	item.style.minHeight = '0';
	item.style.transition = 'flex-grow 600ms ease-in-out, filter 600ms ease';
	const heading = item.querySelector('h2');
	heading.style.transition = 'letter-spacing 600ms ease-in-out';
	item.style.flexGrow = '1';
	heading.style.letterSpacing = '0';

	item.addEventListener('mouseenter', () => {
		item.style.filter = 'brightness(0.85)';
	});

	item.addEventListener('mouseleave', () => {
		item.style.filter = '';
	});

	item.addEventListener('click', () => {
		setActiveItem(item);
    if (item.id !== 'seals') {
      contentWrapper.replaceChildren();
      contentWrapper.classList.remove('seals-grid');
    }
	});
});

const defaultActiveItem = document.querySelector('#left #credits');
if (defaultActiveItem) {
  requestAnimationFrame(() => {
    setActiveItem(defaultActiveItem);
  });
}

const seals = [
  // State Seals
  { 
    id: 1, 
    name: "Military Enlistment Seal", 
    type: "State", 
    description: "Provide evidence that a student has enlisted in a branch of the U.S. Armed Forces.", 
    imageurl: "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Military-btn.png.aspx" 
  },
  { 
    id: 2, 
    name: "Science Seal", 
    type: "State", 
    description: "Earn a proficient score on the Biology end-of-course exam or meet alternative advanced science criteria.", 
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jsdBs2gFTL1B67mKdFMSMjgJ4RGAv4S6iJhoyf10ug&s=10" 
  },
  { 
    id: 3, 
    name: "OhioMeansJobs Readiness Seal", 
    type: "State", 
    description: "Meet the requirements and criteria established for the readiness seal, demonstrating work-readiness and professional competencies.", 
    imageurl: "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/OMJ-btn.png.aspx" 
  },
  { 
    id: 4, 
    name: "Industry-Recognized Credential Seal", 
    type: "State", 
    description: "Earn a 12-point approved industry-recognized credential or group of credentials in a single career field.", 
    imageurl: "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/IRC-btn.png.aspx" 
  },
  { 
    id: 5, 
    name: "College-Ready Seal", 
    type: "State", 
    description: "Earn remediation-free scores on the ACT or SAT.", 
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZj4JABUtYEEDugFNnRS0u4CG1uZB8ZjEFdDMzfjn2g&s=10" 
  },
  { 
    id: 6, 
    name: "Citizenship Seal", 
    type: "State", 
    description: "Earn a score of proficient or higher on both the American History and American Government end-of-course exams.", 
    imageurl: "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Citizenship-btn.png.aspx" 
  },
  { 
    id: 7, 
    name: "Seal of Biliteracy", 
    type: "State", 
    description: "Meet requirements including proficiency requirements on assessments in English and a world language.", 
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Q3dvjAPzbxH8UVVWKijMsRVQ_2QaWRurLV4AAk3Sw&s=10" 
  },
  { 
    id: 8, 
    name: "Honors Diploma Seal", 
    type: "State", 
    description: "Satisfy the requirements for any of the state-recognized honors diplomas.", 
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG6tMArZZlLZGNy8giWmjIxMJwPKueKOYHKKArfU49Q&s=10" 
  },


  // Local Seals (Defined by local school districts)

    { 
    id: 9, 
    name: "Fine and Performing Arts Seal", 
    type: "Local", 
    description: "Demonstrate skill in the fine or performing arts by meeting localized state-approved criteria.", 
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXcji2Fu6gKUT48WIoozhWM4c2gdonDmhfKKqyQ1JOg&s=10" 
  },
  { 
    id: 10, 
    name: "Student Engagement Seal", 
    type: "Local", 
    description: "Participate in extracurricular activities such as athletics, music, or club involvement.", 
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf2us6QKxpumbHZdcNszqM2NWhzNNdtrZ7U-u5uQ4QQ&s=10" 
  },
  { 
    id: 11, 
    name: "Community Service Seal", 
    type: "Local", 
    description: "Granted to those who complete required hours of community service.", 
    imageurl: "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/CS-btn.png.aspx" 
  }
];

const courseRequirements = [
  { 
    id: 1, 
    name: "Mathematics", 
    units: 4, 
    description: "Earn 4 units of mathematics coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/2249/2249539.png"
  },
  { 
    id: 2, 
    name: "English Language Arts", 
    units: 4, 
    description: "Earn 4 units of English language arts coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/3131/3131650.png"
  },
  { 
    id: 3, 
    name: "Social Studies", 
    units: 3, 
    description: "Earn 3 units of social studies coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/2682/2682065.png"
  },
  { 
    id: 4, 
    name: "Science", 
    units: 3, 
    description: "Earn 3 units of science coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/15394/15394641.png"
  },
  { 
    id: 5, 
    name: "Health & Physical Education", 
    units: 1, 
    description: "Earn 1 unit combined of health and physical education coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/857/857418.png"
  },
  { 
    id: 6, 
    name: "Fine Arts", 
    units: 1, 
    description: "Earn 1 unit of fine arts coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/19034/19034678.png"
  },
  { 
    id: 7, 
    name: "Financial Literacy", 
    units: 0.5, 
    description: "Earn 0.5 unit of financial literacy coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/781/781760.png"
  },
  { 
    id: 8, 
    name: "Elective Coursework", 
    units: "4.5 - 5", 
    description: "Earn 4.5 to 5 units of elective coursework to hit the 21-credit minimum",
    imageurl: "https://cdn-icons-png.flaticon.com/128/3898/3898082.png"
  }
];

const sealsButton = document.querySelector('#left #seals');
const creditsButton = document.querySelector('#left #credits');

sealsButton.addEventListener('click', () => {
  contentWrapper.replaceChildren();
  contentWrapper.classList.add('seals-grid');

  // The seal list is ordered with all state seals first and local seals last,
  // so the local seals appear together in the bottom row.
  for (let rowIndex = 0; rowIndex < 3; rowIndex += 1) {
    const row = document.createElement('div');
    row.className = 'seal-grid-row';
    if (rowIndex === 2) row.classList.add('seal-grid-row-centered');

    seals.slice(rowIndex * 4, rowIndex * 4 + 4).forEach((seal) => {
      const card = document.createElement('article');
      card.className = 'seal-card';
      card.style = "cursor: pointer;";

      const image = document.createElement('img');
      image.src = seal.imageurl;
      image.alt = '';

      const name = document.createElement('h3');
      name.textContent = seal.name;

      card.append(image, name);
      row.append(card);
    });

    contentWrapper.append(row);
  }
});

creditsButton.addEventListener('click', () => {
  contentWrapper.replaceChildren();
  contentWrapper.classList.remove('seals-grid');
  contentWrapper.classList.add('credits-grid');

  for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'credits-grid-row';

    courseRequirements.slice(rowIndex * 4, rowIndex * 4 + 4).forEach((credit) => {
      const card = document.createElement('article');
      card.className = 'credit-card';
      card.style.cursor = 'pointer';

      const image = document.createElement('img');
      image.src = credit.imageurl;
      image.alt = credit.name;

      const name = document.createElement('h3');
      name.textContent = credit.name;

      const description = document.createElement('p');
      description.textContent = credit.description;

      card.append(image, name, description);
      row.append(card);
    });

    contentWrapper.append(row);
  }
});


creditsButton.click();

creditsButton.addEventListener('click', () => { 
  contentWrapper.replaceChildren();  //replace children????
  contentWrapper.classList.remove('seals-grid');
  contentWrapper.classList.add('credits-grid');

  for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'credits-grid-row';

    courseRequirements.slice(rowIndex * 4, rowIndex * 4 + 4).forEach((credit) => {
      const card = document.createElement('article'); // should we make this 4x4???
      card.className = 'credit-card';
      card.style.cursor = 'pointer';

      const name = document.createElement('h3');
      name.textContent = credit.name;

      card.append(name);
      row.append(card);
    });

    contentWrapper.append(row);
  }
});