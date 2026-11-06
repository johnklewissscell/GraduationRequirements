const leftItems = document.querySelectorAll("#left > div");
const contentWrapper = document.querySelector("#contentwrapper");

function setActiveItem(activeItem) {
  leftItems.forEach((item) => {
    const isActive = item === activeItem;
    item.style.flexGrow = isActive ? "2.5" : "1";
    item.querySelector("h2").style.letterSpacing = isActive ? "3px" : "0";
  });
}

leftItems.forEach((item) => {
  item.style.flex = "1 1 0";
  item.style.minHeight = "0";
  item.style.transition = "flex-grow 600ms ease-in-out, filter 600ms ease";
  const heading = item.querySelector("h2");
  heading.style.transition = "letter-spacing 600ms ease-in-out";
  item.style.flexGrow = "1";
  heading.style.letterSpacing = "0";

  item.addEventListener("mouseenter", () => {
    item.style.filter = "brightness(0.85)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.filter = "";
  });

  item.addEventListener("click", () => {
    setActiveItem(item);
  });
});

const defaultActiveItem = document.querySelector("#left #credits");
if (defaultActiveItem) {
  requestAnimationFrame(() => {
    setActiveItem(defaultActiveItem);
  });
}

const seals = [
  // State Seals
  {
    id: 1,
    name: "Military Seal",
    type: "State",
    description:
      "Provide evidence that a student has enlisted in a branch of the U.S. Armed Forces, or do another option listed on the linked site.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Military-btn.png.aspx",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Military-Entlistment-Seal",
  },
  {
    id: 2,
    name: "Science Seal",
    type: "State",
    description:
      "Earn a proficient score on the Biology end-of-course exam or meet alternative advanced science criteria.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jsdBs2gFTL1B67mKdFMSMjgJ4RGAv4S6iJhoyf10ug&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%e2%80%99s-Graduation-Requirements/Graduation-Seals/Science-Seal",
  },
  {
    id: 3,
    name: "OhioMeansJobs Readiness Seal",
    type: "State",
    description:
      "Demonstrate specific professional skills required for success in the workplace.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/OMJ-btn.png.aspx",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/OhioMeansJobs-Readiness-Seal",
  },
  {
    id: 4,
    name: "Industry-Recognized Credential Seal",
    type: "State",
    description:
      "Earn a 12-point approved industry-recognized credential, a group of credentials in a single career field, or obtain a state issued license for practice in an exam-requiring vocation.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/IRC-btn.png.aspx",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Industry-Recognized-Credential-Seal",
  },
  {
    id: 5,
    name: "College-Ready Seal",
    type: "State",
    description: "Earn remediation-free scores on the ACT, SAT, or CLEP.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZj4JABUtYEEDugFNnRS0u4CG1uZB8ZjEFdDMzfjn2g&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/College-Ready-Seal",
  },
  {
    id: 6,
    name: "Citizenship Seal",
    type: "State",
    description:
      "Satisfy one of the American History options and one of the American Government options listed on the linked site.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Citizenship-btn.png.aspx",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%e2%80%99s-Graduation-Requirements/Graduation-Seals/Citizenship-Seal",
  },
  {
    id: 7,
    name: "Seal of Biliteracy",
    type: "State",
    description:
      "Demonstrate high levels of proficiency in English and at least one other language.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Q3dvjAPzbxH8UVVWKijMsRVQ_2QaWRurLV4AAk3Sw&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Seal-of-Biliteracy",
  },
  {
    id: 8,
    name: "Honors Diploma Seal",
    type: "State",
    description:
      "Earn one of six honors diplomas as outlined on the linked site.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG6tMArZZlLZGNy8giWmjIxMJwPKueKOYHKKArfU49Q&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%e2%80%99s-Graduation-Requirements/Graduation-Seals/Honors-Seal",
  },

  // Local Seals (Defined by local school districts)

  {
    id: 9,
    name: "Fine and Performing Arts Seal",
    type: "Local",
    description:
      "Demonstrate skills in courses or through extra-curricular activities.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXcji2Fu6gKUT48WIoozhWM4c2gdonDmhfKKqyQ1JOg&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Locally-Defined-Diploma-Seal",
  },
  {
    id: 10,
    name: "Student Engagement Seal",
    type: "Local",
    description:
      "Meaningfully participate in Board-approved extra-curricular activities.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf2us6QKxpumbHZdcNszqM2NWhzNNdtrZ7U-u5uQ4QQ&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Locally-Defined-Diploma-Seal",
  },
  {
    id: 11,
    name: "Community Service Seal",
    type: "Local",
    description:
      "Granted to those who complete a community service project.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/CS-btn.png.aspx",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Locally-Defined-Diploma-Seal",
  },
  {
    id: 12,
    name: "Technology Seal",
    type: "State",
    description: "Earn a proficient score on an IB or AP test or meet alternative technology criteria.",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbObEYFYpQMujgqblJUfaOKMEyTwUszSLrS66RqIaAdw&s=10",
    linkurl: "https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Technology-Seal",
  },
];

const courseRequirements = [
  {
    id: 1,
    name: "Mathematics",
    units: 4,
    description: "Earn 4 units of mathematics coursework",
    additionalContext:
      "Must include 1 unit of Algebra II or equivalent, or 1 unit of Advanced Computer Science. Parents must sign a written statement acknowledging that not taking Algebra II might negatively impact college admissions decisions before a student may substitute Advanced Computer Science for Algebra II. Students who are enrolled in a career technical program may complete a career-based pathway math course as an alternative to Algebra II or Advanced Computer Science.",
    imageurl: "https://cdn-icons-png.flaticon.com/128/2249/2249539.png",
  },
  {
    id: 2,
    name: "English Language Arts",
    units: 4,
    description: "Earn 4 units of English language arts coursework",
    additionalContext:
      "No additional context.",
    imageurl: "https://cdn-icons-png.flaticon.com/128/3131/3131650.png",
  },
  {
    id: 3,
    name: "Social Studies",
    units: 3,
    description: "Earn 3 units of social studies coursework",
    additionalContext:
      "Must include at least 1/2 unit in world history and civilizations.",
    imageurl: "https://cdn-icons-png.flaticon.com/128/2682/2682065.png",
  },
  {
    id: 4,
    name: "Science",
    units: 3,
    description: "Earn 3 units of science coursework",
    additionalContext:
      "Must include 1 unit of physical sciences, 1 unit of life sciences, and 1 unit of advanced study in 1 or more of: chemistry, physics, other physical science, advanced biology, or other life science, astronomy, physical geology, or other earth or space science, computer science.",
    imageurl: "https://cdn-icons-png.flaticon.com/128/15394/15394641.png",
  },
  {
    id: 5,
    name: "Health & Physical Education",
    units: 1,
    description:
      "Earn 1/2 a unit of health and 1/2 a unit of physical education coursework",
    additionalContext:
      "Students who have participated in interscholatic athletics, marching band, show choir, or cheerleading for at least 2 full seasons, as defined in the high school handbook, while enrolled in grades 9-12 and as documented by the athletic director, may be excused from the high school PE requirement. Students electing such an excuse shall complete 1/2 unit of at least 60 hours of instruction in another course of study which is designated by the Board as meeting the high school curriculum requirements.",
    imageurl: "https://cdn-icons-png.flaticon.com/128/857/857418.png",
  },
  {
    id: 8,
    name: "Elective Coursework",
    units: 5,
    description:
      "Earn 5 units of elective coursework to hit the 20-credit minimum",
    additionalContext:
      "Must include 1 or any combination of a foreign language, computer coding, fine arts, business, career-technical education, family and consumer sciences, technology, agricultural education, a JROTC program approved by US Congress, or English, Math, Science, or Social Studies courses not otherwise required.",
    imageurl: "https://cdn-icons-png.flaticon.com/128/3898/3898082.png",
  },
];

const creditPageContext =
  "Students must receive instruction in economics and financial literacy during grades 9-12. Additionally, all students must receive instruction in cardiopulmonary resuscitation and the use of an automatied external defibrillator from an approved source during grades 9-12. Unless the student is exemped from such training due to a disability or by written request of the parent.";

const sealsButton = document.querySelector("#left #seals");
const creditsButton = document.querySelector("#left #credits");
const abilityButton = document.querySelector("#left #ability");

function createRequirementSummary(title, messages) {
  const summary = document.createElement("header");
  summary.className = "requirement-summary";
  const heading = document.createElement("h2");
  heading.textContent = title;
  const points = document.createElement("div");
  points.className = "requirement-summary-points";
  messages.forEach((message) => {
    const point = document.createElement("p");
    point.textContent = message;
    points.append(point);
  });
  summary.append(heading, points);
  return summary;
}

function transitionContent(update) {
  const supportsViewTransitions =
    typeof document.startViewTransition === "function";
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  contentWrapper.classList.remove("content-entering");

  if (supportsViewTransitions && !prefersReducedMotion) {
    try {
      document.startViewTransition(update);
    } catch {
      update();
      requestAnimationFrame(() =>
        contentWrapper.classList.add("content-entering"),
      );
    }
  } else {
    update();
    requestAnimationFrame(() =>
      contentWrapper.classList.add("content-entering"),
    );
  }
}

function buildAbilityPage() {
  transitionContent(() => {
    contentWrapper.replaceChildren();
    contentWrapper.classList.remove(
      "credits-grid",
      "seals-grid",
      "seals-expanded",
      "ability-view",
    );
    contentWrapper.classList.add("ability-view");

    const pageHeader = document.createElement("header");
    pageHeader.className = "ability-page-header";
    const eyebrow = document.createElement("span");
    eyebrow.className = "ability-eyebrow";
    eyebrow.textContent = "Competency requirements";
    const title = document.createElement("h1");
    title.textContent = "Demonstrating competency";
    const intro = document.createElement("p");
    intro.textContent =
      "Meet the state-test benchmark, or use an approved alternative to demonstrate competency.";
    pageHeader.append(eyebrow, title, intro);

    const testPanel = document.createElement("section");
    testPanel.className = "ability-test-panel";
    testPanel.setAttribute("aria-labelledby", "ability-test-title");
    const testPanelHeading = document.createElement("div");
    testPanelHeading.className = "ability-test-panel-heading";
    const testHeading = document.createElement("h2");
    testHeading.id = "ability-test-title";
    testHeading.textContent = "State tests";
    testPanelHeading.append(testHeading);

    const testPanelBody = document.createElement("div");
    testPanelBody.className = "ability-test-panel-body";
    const testSummary = document.createElement("p");
    testSummary.className = "ability-test-summary";
    testSummary.textContent =
      "Students must earn competency scores on both end-of-course tests:";
    const subjectList = document.createElement("div");
    subjectList.className = "ability-subject-list";
    ["Algebra I", "English Language Arts II"].forEach((subject, index) => {
      const subjectChip = document.createElement("div");
      subjectChip.className = "ability-subject-chip";
      const subjectIndex = document.createElement("span");
      subjectIndex.textContent = `0${index + 1}`;
      const subjectName = document.createElement("strong");
      subjectName.textContent = subject;
      subjectChip.append(subjectIndex, subjectName);
      subjectList.append(subjectChip);
    });
    testPanelBody.append(testSummary, subjectList);

    const retakeNote = document.createElement("aside");
    retakeNote.className = "ability-retake-note";
    retakeNote.setAttribute("role", "note");
    const retakeLabel = document.createElement("strong");
    retakeLabel.className = "ability-retake-label";
    retakeLabel.textContent = "Retake support";
    const retakeText = document.createElement("p");
    retakeText.innerHTML =
      "If a student does not pass, the school provides <strong>remediation and support</strong>, and the student retakes the test at least once.";
    retakeNote.append(retakeLabel, retakeText);
    testPanel.append(testPanelHeading, testPanelBody, retakeNote);

    const pathwaySection = document.createElement("section");
    pathwaySection.className = "ability-pathway-section";
    pathwaySection.setAttribute("aria-labelledby", "ability-pathways-title");
    const pathwayHeader = document.createElement("header");
    pathwayHeader.className = "ability-pathway-header";
    const pathwayTitle = document.createElement("h2");
    pathwayTitle.id = "ability-pathways-title";
    pathwayTitle.textContent = "Other ways to show competency";
    const pathwayHint = document.createElement("p");
    pathwayHint.textContent = "Select a pathway to see its requirements.";
    pathwayHeader.append(pathwayTitle, pathwayHint);

    const routeGrid = document.createElement("div");
    routeGrid.className = "ability-route-grid";
    const pathways = [
      {
        letter: "A",
        title: "ACT or SAT",
        category: "Test score",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjfs-ue81Yqth19KOV9n6gvZXy2UK337VduWEVl8aPQ&s=10",
        summary: "Earn a remediation-free score in the subject area not passed.",
        intro:
          "Use a remediation-free score in the math or English subject area that corresponds to the state test not passed.",
        sections: [],
      },
      {
        letter: "B",
        title: "Combine two options",
        category: "Two-part pathway",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4zT0hBfGUpQEKX3GNEb-7h6SmF7yRHScayjp1DP1Zg&s=10",
        summary: "Complete 2 options, including at least 1 foundational option.",
        intro:
          "Complete two qualifying options. At least one must come from the foundational group; the second may be foundational or supporting.",
        sections: [
          {
            title: "Foundational options",
            items: [
              "Earn proficient scores on 3 or more WebXams in one career pathway.",
              "Earn a 12-point approved industry-recognized credential, or a group of credentials.",
              "Complete a pre-apprenticeship recognized by the Ohio State Apprentice Council, a registered apprenticeship in the chosen career field, or provide acceptance evidence for an approved apprenticeship restricted to participants age 18 or older.",
            ],
          },
          {
            title: "Supporting options",
            items: [
              "Complete a 250-hour work-based learning experience with positive evaluations.",
              "Earn the required score on WorkKeys.",
              "Earn the OhioMeansJobs Readiness Seal.",
            ],
          },
        ],
      },
      {
        letter: "C",
        title: "Military enlistment",
        category: "Service",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2t--A9J-y1IbKg51y0XV21oC9yJ5Y3TKZZp7DvH1pQ&s=10",
        summary: "Provide a signed contract to enter a U.S. armed service branch after graduation.",
        intro:
          "Enlist in the military and present evidence of a signed contract to enter a branch of the U.S. armed services upon graduation.",
        sections: [],
      },
      {
        letter: "D",
        title: "College Credit Plus",
        category: "College credit",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwsxXXs-mULbEM_zweQm2QHpIqlU96XiMbjEq5ogatw&s=10",
        summary: "Earn college-level credit in the subject area not passed.",
        intro:
          "Earn credit through the College Credit Plus Program for a college-level math and/or English course in the subject area(s) not passed on the state exams.",
        sections: [],
      },
    ];

    pathways.forEach((pathway) => {
      const routeButton = document.createElement("button");
      routeButton.className = "ability-route-card";
      routeButton.type = "button";
      routeButton.setAttribute("aria-haspopup", "dialog");

      const routeTop = document.createElement("span");
      routeTop.className = "ability-route-top";
      const routeLetter = document.createElement("span");
      routeLetter.className = "ability-route-letter";
      routeLetter.textContent = `${pathway.letter}.`;
      const routeImage = document.createElement("img");
      routeImage.className = "ability-route-image";
      routeImage.src = pathway.imageurl;
      routeImage.alt = "";
      const category = document.createElement("span");
      category.className = "ability-route-category";
      category.textContent = pathway.category;
      routeTop.append(routeLetter, routeImage, category);

      const routeTitle = document.createElement("h3");
      routeTitle.textContent = pathway.title;
      const routeSummary = document.createElement("p");
      routeSummary.textContent = pathway.summary;
      const routeAction = document.createElement("span");
      routeAction.className = "ability-route-action";
      routeAction.setAttribute("aria-hidden", "true");
      routeAction.textContent = "View requirements";
      routeButton.append(routeTop, routeTitle, routeSummary, routeAction);

      const dialog = document.createElement("dialog");
      dialog.className = "ability-detail-dialog";
      dialog.setAttribute("aria-labelledby", `ability-dialog-title-${pathway.letter}`);

      const dialogHeader = document.createElement("header");
      dialogHeader.className = "ability-dialog-header";
      const dialogTitleGroup = document.createElement("div");
      const dialogEyebrow = document.createElement("span");
      dialogEyebrow.className = "ability-dialog-eyebrow";
      dialogEyebrow.textContent = `PATHWAY ${pathway.letter} · ${pathway.category.toUpperCase()}`;
      const dialogTitle = document.createElement("h2");
      dialogTitle.id = `ability-dialog-title-${pathway.letter}`;
      dialogTitle.textContent = pathway.title;
      dialogTitleGroup.append(dialogEyebrow, dialogTitle);

      const dialogClose = document.createElement("button");
      dialogClose.className = "ability-dialog-close";
      dialogClose.type = "button";
      dialogClose.setAttribute("aria-label", "Close pathway details");
      dialogClose.textContent = "×";
      dialogHeader.append(dialogTitleGroup, dialogClose);

      const dialogIntro = document.createElement("p");
      dialogIntro.className = "ability-dialog-intro";
      dialogIntro.textContent = pathway.intro;
      dialog.append(dialogHeader, dialogIntro);

      pathway.sections.forEach((section) => {
        const detailSection = document.createElement("section");
        detailSection.className = "ability-detail-section";
        const sectionHeading = document.createElement("h3");
        sectionHeading.textContent = section.title;
        const list = document.createElement("ul");
        section.items.forEach((itemText) => {
          const item = document.createElement("li");
          item.textContent = itemText;
          list.append(item);
        });
        detailSection.append(sectionHeading, list);
        dialog.append(detailSection);
      });

      const dialogFootnote = document.createElement("p");
      dialogFootnote.className = "ability-dialog-footnote";
      dialogFootnote.textContent =
        "Check with your school counselor for current eligibility details and documentation requirements.";
      dialog.append(dialogFootnote);

      dialogClose.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          dialog.close();
        }
      });
      dialog.addEventListener("close", () => {
        dialog.remove();
        routeButton.focus();
      });
      routeButton.addEventListener("click", () => {
        document.body.append(dialog);
        dialog.showModal();
      });
      routeGrid.append(routeButton);
    });

    pathwaySection.append(pathwayHeader, routeGrid);
    contentWrapper.append(pageHeader, testPanel, pathwaySection);
  });
}

abilityButton.addEventListener("click", buildAbilityPage);

function buildSealGrid() {
  transitionContent(() => {
    contentWrapper.replaceChildren();
    contentWrapper.classList.remove(
      "credits-grid",
      "seals-expanded",
      "ability-view",
    );
    contentWrapper.classList.add("seals-grid");
    contentWrapper.append(
      createRequirementSummary("Seal Requirements", [
        "Earn at least 2 seals.",
        "At least 1 must be a State Seal.",
      ]),
    );

    const cardGrid = document.createElement("div");
    cardGrid.className = "seal-card-grid";

    seals.forEach((seal) => {
      const card = document.createElement("article");
      card.className = "seal-card";
      card.dataset.sealId = seal.id;
      card.style.viewTransitionName = `seal-card-${seal.id}`;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");

      let image;
      if (seal.imageurl) {
        image = document.createElement("img");
        image.src = seal.imageurl;
        image.alt = seal.name;
      } else {
        image = document.createElement("div");
        image.className = "seal-image-placeholder";
        image.textContent = "Add image";
        image.setAttribute("aria-label", `${seal.name} image placeholder`);
      }

      const imageLink = document.createElement("a");
      imageLink.className = "seal-image-link";
      imageLink.setAttribute("aria-label", `Open link for ${seal.name}`);
      if (seal.linkurl.trim()) {
        imageLink.href = seal.linkurl;
        imageLink.target = "_blank";
        imageLink.rel = "noopener noreferrer";
        imageLink.tabIndex = -1;
      } else {
        imageLink.setAttribute("aria-disabled", "true");
        imageLink.tabIndex = -1;
      }

      const linkHint = document.createElement("span");
      linkHint.className = "seal-link-hint";
      linkHint.textContent = "↗";
      linkHint.setAttribute("aria-hidden", "true");
      linkHint.hidden = true;

      imageLink.append(image, linkHint);
      imageLink.addEventListener("click", (event) => {
        if (!card.classList.contains("is-selected")) {
          event.preventDefault();
          return;
        }
        if (imageLink.hasAttribute("href")) event.stopPropagation();
      });

      const name = document.createElement("h3");
      name.textContent = seal.name;

      const details = document.createElement("div");
      details.className = "seal-details";
      details.hidden = true;

      const detailsHeading = document.createElement("h4");
      detailsHeading.className = "seal-details-heading";
      detailsHeading.textContent = "About this seal";

      const type = document.createElement("p");
      type.className = "seal-type";
      type.textContent = `${seal.type} Seal`;

      const description = document.createElement("p");
      description.className = "seal-description";
      description.textContent = seal.description;

      const guidance = document.createElement("p");
      guidance.className = "seal-guidance";
      guidance.textContent = "Ask your school counselor how to meet this seal's requirements.";
      details.append(detailsHeading, type, description, guidance);

      const closeButton = document.createElement("button");
      closeButton.className = "seal-close";
      closeButton.type = "button";
      closeButton.setAttribute("aria-label", "Close seal details");
      closeButton.textContent = "×";
      closeButton.hidden = true;
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        setSelectedSeal(null);
      });

      card.append(imageLink, name, details, closeButton);
      card.addEventListener("click", () => setSelectedSeal(seal.id));
      card.addEventListener("keydown", (event) => {
        if (event.target.closest(".seal-close, .seal-image-link")) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setSelectedSeal(seal.id);
        }
      });
      cardGrid.append(card);
    });
    contentWrapper.append(cardGrid);
  });
}

function setSelectedSeal(sealId, animate = true) {
  const update = () => {
    const expanded = sealId !== null;
    contentWrapper.classList.toggle("seals-expanded", expanded);
    contentWrapper.dataset.selectedSeal = expanded ? String(sealId) : "";

    const surroundingSlots = [
      "1-1",
      "1-2",
      "1-3",
      "1-4",
      "2-1",
      "2-4",
      "3-1",
      "3-4",
      "4-1",
      "4-2",
      "4-4",
    ];
    const cards = [...contentWrapper.querySelectorAll(".seal-card")];
    const bottomRightSealId = sealId === 11 ? 10 : 11;
    const surroundingCards = cards
      .filter((card) => Number(card.dataset.sealId) !== sealId)
      .sort((first, second) => {
        return Number(Number(first.dataset.sealId) === bottomRightSealId) - Number(Number(second.dataset.sealId) === bottomRightSealId);
      });
    const slotsByCard = new Map(
      surroundingCards.map((card, index) => [card, surroundingSlots[index]]),
    );

    cards.forEach((card) => {
      const isSelected = expanded && Number(card.dataset.sealId) === sealId;
      card.classList.toggle("is-selected", isSelected);
      card.classList.toggle(
        "is-bottom-hidden",
        expanded && !isSelected && slotsByCard.get(card) === "4-2",
      );
      card.setAttribute("aria-expanded", String(isSelected));
      const imageLink = card.querySelector(".seal-image-link");
      const hasImageLink = imageLink.hasAttribute("href");
      imageLink.tabIndex = isSelected && hasImageLink ? 0 : -1;
      imageLink.setAttribute("aria-disabled", String(!isSelected || !hasImageLink));
      imageLink.querySelector(".seal-link-hint").hidden = !(
        isSelected && hasImageLink
      );
      card.querySelector(".seal-details").hidden = !isSelected;
      card.querySelector(".seal-close").hidden = !isSelected;
      card.dataset.expandedSlot = isSelected
        ? "selected"
        : expanded
          ? slotsByCard.get(card)
          : "";
    });
  };

  if (
    animate &&
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    try {
      document.startViewTransition(update);
    } catch {
      update();
    }
  } else {
    update();
  }
}

sealsButton.addEventListener("click", () => {
  if (!contentWrapper.classList.contains("seals-grid")) {
    buildSealGrid();
  } else if (contentWrapper.classList.contains("seals-expanded")) {
    // Keep the navigation tab's flex-grow transition independent of the
    // full-page View Transition used when opening a seal card.
    setSelectedSeal(null, false);
  }
});

creditsButton.addEventListener("click", () => {
  transitionContent(() => {
    contentWrapper.replaceChildren();
    contentWrapper.classList.remove(
      "seals-grid",
      "seals-expanded",
      "ability-view",
    );
    contentWrapper.classList.add("credits-grid");
    contentWrapper.append(
      createRequirementSummary("Credit Requirement", [
        "Students need to earn at least 20 credits to graduate.",
      ]),
    );

    const contextBox = document.createElement("section");
    contextBox.className = "credit-page-context";
    const contextToggle = document.createElement("button");
    contextToggle.className = "credit-page-context-toggle";
    contextToggle.type = "button";
    contextToggle.setAttribute("aria-expanded", "false");
    contextToggle.setAttribute("aria-controls", "credit-page-context-text");
    contextToggle.textContent = "＋ Additional credit information";

    const contextText = document.createElement("p");
    contextText.id = "credit-page-context-text";
    contextText.className = "credit-page-context-text";
    contextText.textContent = creditPageContext;
    contextText.hidden = true;

    contextToggle.addEventListener("click", () => {
      const isExpanded = contextToggle.getAttribute("aria-expanded") !== "true";
      contextToggle.setAttribute("aria-expanded", String(isExpanded));
      contextToggle.textContent = `${isExpanded ? "−" : "＋"} Additional credit information`;
      contextText.hidden = !isExpanded;
      contextBox.classList.toggle("is-expanded", isExpanded);
    });

    contextBox.append(contextToggle, contextText);
    contentWrapper.append(contextBox);

    const cardGrid = document.createElement("div");
    cardGrid.className = "credit-card-grid";

    courseRequirements.forEach((credit) => {
      const card = document.createElement("article");
      card.className = "credit-card";
      card.dataset.creditId = credit.id;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");

      const image = document.createElement("img");
      image.src = credit.imageurl;
      image.alt = credit.name;

      const name = document.createElement("h3");
      name.textContent = credit.name;

      const description = document.createElement("p");
      description.textContent = credit.description;

      const openCreditDetails = () => {
        const dialog = document.createElement("dialog");
        dialog.className = "credit-detail-dialog";
        dialog.setAttribute("aria-labelledby", "credit-detail-title");

        const closeButton = document.createElement("button");
        closeButton.className = "credit-detail-close";
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "Close credit details");
        closeButton.textContent = "×";

        const detailImage = document.createElement("img");
        detailImage.className = "credit-detail-image";
        detailImage.src = credit.imageurl;
        detailImage.alt = "";

        const detailTitle = document.createElement("h2");
        detailTitle.id = "credit-detail-title";
        detailTitle.textContent = credit.name;

        const detailUnits = document.createElement("span");
        detailUnits.className = "credit-detail-units";
        detailUnits.textContent = `${credit.units} ${credit.units === 1 ? "credit" : "credits"}`;

        const detailDescription = document.createElement("p");
        detailDescription.className = "credit-detail-description";
        detailDescription.textContent = credit.description;

        const contextHeading = document.createElement("h3");
        contextHeading.className = "credit-context-heading";
        contextHeading.textContent = "Additional context";

        const context = document.createElement("p");
        context.className = "credit-context";
        context.textContent = credit.additionalContext;

        dialog.append(
          closeButton,
          detailImage,
          detailTitle,
          detailUnits,
          detailDescription,
          contextHeading,
          context,
        );
        document.body.append(dialog);
        card.setAttribute("aria-expanded", "true");

        let isClosing = false;
        const closeDialog = () => {
          if (isClosing) return;
          isClosing = true;
          dialog.classList.add("is-closing");
          document.body.classList.remove("credit-detail-open");
          document.body.classList.add("credit-detail-closing");
          window.setTimeout(() => {
            if (dialog.open) dialog.close();
          }, 260);
        };

        closeButton.addEventListener("click", closeDialog);
        dialog.addEventListener("cancel", (event) => {
          event.preventDefault();
          closeDialog();
        });
        dialog.addEventListener("close", () => {
          card.setAttribute("aria-expanded", "false");
          document.body.classList.remove(
            "credit-detail-open",
            "credit-detail-closing",
          );
          dialog.remove();
          card.focus();
        });

        const showDialog = () => {
          dialog.showModal();
          document.body.classList.add("credit-detail-open");
        };

        if (
          typeof document.startViewTransition === "function" &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          card.style.viewTransitionName = "credit-detail";
          try {
            document.startViewTransition(() => {
              card.style.viewTransitionName = "none";
              showDialog();
              dialog.style.viewTransitionName = "credit-detail";
            });
          } catch {
            card.style.viewTransitionName = "none";
            showDialog();
          }
        } else {
          showDialog();
        }
      };
      card.addEventListener("click", openCreditDetails);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openCreditDetails();
        }
      });

      card.append(image, name, description);
      cardGrid.append(card);
    });

    contentWrapper.append(cardGrid);
  });
});

creditsButton.click();
