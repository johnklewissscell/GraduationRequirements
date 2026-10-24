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
    name: "Military Enlistment Seal",
    type: "State",
    description:
      "Provide evidence that a student has enlisted in a branch of the U.S. Armed Forces.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Military-btn.png.aspx",
  },
  {
    id: 2,
    name: "Science Seal",
    type: "State",
    description:
      "Earn a proficient score on the Biology end-of-course exam or meet alternative advanced science criteria.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jsdBs2gFTL1B67mKdFMSMjgJ4RGAv4S6iJhoyf10ug&s=10",
  },
  {
    id: 3,
    name: "OhioMeansJobs Readiness Seal",
    type: "State",
    description:
      "Meet the requirements and criteria established for the readiness seal, demonstrating work-readiness and professional competencies.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/OMJ-btn.png.aspx",
  },
  {
    id: 4,
    name: "Industry-Recognized Credential Seal",
    type: "State",
    description:
      "Earn a 12-point approved industry-recognized credential or group of credentials in a single career field.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/IRC-btn.png.aspx",
  },
  {
    id: 5,
    name: "College-Ready Seal",
    type: "State",
    description: "Earn remediation-free scores on the ACT or SAT.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZj4JABUtYEEDugFNnRS0u4CG1uZB8ZjEFdDMzfjn2g&s=10",
  },
  {
    id: 6,
    name: "Citizenship Seal",
    type: "State",
    description:
      "Earn a score of proficient or higher on both the American History and American Government end-of-course exams.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/Citizenship-btn.png.aspx",
  },
  {
    id: 7,
    name: "Seal of Biliteracy",
    type: "State",
    description:
      "Meet requirements including proficiency requirements on assessments in English and a world language.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Q3dvjAPzbxH8UVVWKijMsRVQ_2QaWRurLV4AAk3Sw&s=10",
  },
  {
    id: 8,
    name: "Honors Diploma Seal",
    type: "State",
    description:
      "Satisfy the requirements for any of the state-recognized honors diplomas.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG6tMArZZlLZGNy8giWmjIxMJwPKueKOYHKKArfU49Q&s=10",
  },

  // Local Seals (Defined by local school districts)

  {
    id: 9,
    name: "Fine and Performing Arts Seal",
    type: "Local",
    description:
      "Demonstrate skill in the fine or performing arts by meeting localized state-approved criteria.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXcji2Fu6gKUT48WIoozhWM4c2gdonDmhfKKqyQ1JOg&s=10",
  },
  {
    id: 10,
    name: "Student Engagement Seal",
    type: "Local",
    description:
      "Participate in extracurricular activities such as athletics, music, or club involvement.",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf2us6QKxpumbHZdcNszqM2NWhzNNdtrZ7U-u5uQ4QQ&s=10",
  },
  {
    id: 11,
    name: "Community Service Seal",
    type: "Local",
    description:
      "Granted to those who complete required hours of community service.",
    imageurl:
      "https://education.ohio.gov/getattachment/Topics/Ohio-s-Graduation-Requirements/Ohio%E2%80%99s-Graduation-Requirements/Graduation-Seals/CS-btn.png.aspx",
  },
];

const courseRequirements = [
  {
    id: 1,
    name: "Mathematics",
    units: 4,
    description: "Earn 4 units of mathematics coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/2249/2249539.png",
  },
  {
    id: 2,
    name: "English Language Arts",
    units: 4,
    description: "Earn 4 units of English language arts coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/3131/3131650.png",
  },
  {
    id: 3,
    name: "Social Studies",
    units: 3,
    description: "Earn 3 units of social studies coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/2682/2682065.png",
  },
  {
    id: 4,
    name: "Science",
    units: 3,
    description: "Earn 3 units of science coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/15394/15394641.png",
  },
  {
    id: 5,
    name: "Health & Physical Education",
    units: 1,
    description:
      "Earn 1 unit combined of health and physical education coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/857/857418.png",
  },
  {
    id: 6,
    name: "Fine Arts",
    units: 1,
    description: "Earn 1 unit of fine arts coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/19034/19034678.png",
  },
  {
    id: 7,
    name: "Financial Literacy",
    units: 0.5,
    description: "Earn 0.5 unit of financial literacy coursework",
    imageurl: "https://cdn-icons-png.flaticon.com/128/781/781760.png",
  },
  {
    id: 8,
    name: "Elective Coursework",
    units: "4.5 - 5",
    description:
      "Earn 4.5 to 5 units of elective coursework to hit the 21-credit minimum",
    imageurl: "https://cdn-icons-png.flaticon.com/128/3898/3898082.png",
  },
];

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

    const leftSection = document.createElement("section");
    leftSection.className = "ability-section ability-section-primary";
    const requirementHeading = document.createElement("h2");
    requirementHeading.className = "ability-primary-heading";
    requirementHeading.textContent = "End-of-course tests";

    const leftText = document.createElement("p");
    leftText.textContent = "Students must take both tests:";

    const testSubjects = document.createElement("div");
    testSubjects.className = "ability-test-subjects";
    [
      {
        name: "Algebra I",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHzNvvQFi-xs1NCcFAUvPEf_QPrcyW_A5L_1wRtsxA&s=10",
      },
      {
        name: "English II",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0ud_RhM07Tt3jZ58eVhyaAHEaK6CMTP3pjKgTQjDng&s=10",
      },
    ].forEach((subject) => {
      const subjectCard = document.createElement("div");
      subjectCard.className = "ability-test-subject";
      //insert icon here
      const icon = document.createElement("img");
      icon.className = "ability-icon-image";
      icon.src = subject.imageurl;
      icon.alt = `${subject.name} icon`;
      const label = document.createElement("span");
      label.textContent = subject.name;
      subjectCard.append(icon, label);
      testSubjects.append(subjectCard);
    });

    const minimumScore = document.createElement("div");
    minimumScore.className = "ability-minimum-score";
    const score = document.createElement("strong");
    score.textContent = "684";
    const scoreCaption = document.createElement("span");
    scoreCaption.textContent = "minimum score required";
    minimumScore.append(score, scoreCaption);

    const pathwayNote = document.createElement("p");
    pathwayNote.className = "ability-pathway-note";
    pathwayNote.textContent =
      "Complete both assessments and meet the required score to use this pathway.";

    leftSection.append(
      requirementHeading,
      leftText,
      testSubjects,
      minimumScore,
      pathwayNote,
    );

    const divider = document.createElement("div");
    divider.className = "ability-divider";
    divider.setAttribute("aria-label", "Or");
    const orLabel = document.createElement("span");
    orLabel.textContent = "OR";
    divider.append(orLabel);

    const rightSection = document.createElement("section");
    rightSection.className = "ability-section ability-section-alternatives";
    const rightText = document.createElement("p");
    rightText.className = "ability-intro";
    rightText.textContent =
      "Before being eligible to demonstrate competency in one of these, students must first receive a recommendation and retake the test.";
    const alternatives = document.createElement("div");
    alternatives.className = "ability-options";
    [
      {
        label: "SAT or ACT",
        description:
          "The SAT and ACT are standardized tests widely used for college admissions in the United States.",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjfs-ue81Yqth19KOV9n6gvZXy2UK337VduWEVl8aPQ&s=10",
      },
      {
        label: "College Credit Plus",
        description:
          "College Credit Plus (CCP) is Ohio's dual-enrollment program that allows students in grades 7–12 to earn college and high school credits at the same time.",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwsxXXs-mULbEM_zweQm2QHpIqlU96XiMbjEq5ogatw&s=10",
      },
      {
        label: "Career Technical",
        description:
          "Career and Technical Education (CTE) is a school program that teaches students specific technical and job skills for high-demand careers.",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4zT0hBfGUpQEKX3GNEb-7h6SmF7yRHScayjp1DP1Zg&s=10",
      },
      {
        label: "Military Readiness",
        description:
          "Military readiness is the ability of a military force to fight and successfully execute its assigned missions at any given moment.",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2t--A9J-y1IbKg51y0XV21oC9yJ5Y3TKZZp7DvH1pQ&s=10",
      },
    ].forEach((pathway) => {
      const option = document.createElement("article");
      option.className = "ability-option";
      option.tabIndex = 0;
      option.setAttribute("role", "button");
      option.setAttribute("aria-expanded", "false");
      //insert icon here
      const icon = document.createElement("img");
      icon.className = "ability-icon-image";
      icon.src = pathway.imageurl;
      icon.alt = `${pathway.label} icon`;
      const optionLabel = document.createElement("h3");
      optionLabel.textContent = pathway.label;
      const descriptionClip = document.createElement("div");
      descriptionClip.className = "ability-option-description-clip";
      const description = document.createElement("p");
      description.className = "ability-option-description";
      description.textContent = pathway.description;
      descriptionClip.append(description);
      const toggleDescription = () => {
        const isExpanded = option.classList.toggle("is-expanded");
        option.setAttribute("aria-expanded", String(isExpanded));
      };
      option.addEventListener("click", toggleDescription);
      option.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleDescription();
        }
      });
      option.append(icon, optionLabel, descriptionClip);
      alternatives.append(option);
    });
    rightSection.append(rightText, alternatives);
    contentWrapper.append(leftSection, divider, rightSection);
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

      const image = document.createElement("img");
      image.src = seal.imageurl;
      image.alt = seal.name;

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

      card.append(image, name, details, closeButton);
      card.addEventListener("click", () => setSelectedSeal(seal.id));
      card.addEventListener("keydown", (event) => {
        if (event.target.closest(".seal-close")) return;
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
      card.setAttribute("aria-expanded", String(isSelected));
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
        "Students need to earn at least 21 credits to graduate.",
      ]),
    );
    const cardGrid = document.createElement("div");
    cardGrid.className = "credit-card-grid";

    courseRequirements.forEach((credit) => {
      const card = document.createElement("article");
      card.className = "credit-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-pressed", "false");

      const image = document.createElement("img");
      image.src = credit.imageurl;
      image.alt = credit.name;

      const name = document.createElement("h3");
      name.textContent = credit.name;

      const description = document.createElement("p");
      description.textContent = credit.description;

      const units = document.createElement("span");
      units.className = "credit-units";
      units.textContent = `${credit.units} ${credit.units === 1 ? "credit" : "credits"}`;
      units.hidden = true;

      const toggleCard = () => {
        const selected = !card.classList.contains("is-selected");
        card.classList.toggle("is-selected", selected);
        card.setAttribute("aria-pressed", String(selected));
        units.hidden = !selected;
      };
      card.addEventListener("click", toggleCard);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleCard();
        }
      });

      card.append(image, name, description, units);
      cardGrid.append(card);
    });

    contentWrapper.append(cardGrid);
  });
});

creditsButton.click();
