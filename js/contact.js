/* ==========================================
   AUTONEST - CONTACT PAGE JAVASCRIPT
========================================== */

/* ---------- ELEMENTS ---------- */

const contactForm = document.getElementById("contactFormElement");

const nameField = document.getElementById("fullName");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");
const termsField = document.getElementById("terms");

const charCount = document.getElementById("charCount");
const formMessage = document.getElementById("formMessage");
const submitBtn = document.getElementById("submitBtn");

/* ---------- ERROR MESSAGES ---------- */

const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  phone: document.getElementById("phoneError"),
  subject: document.getElementById("subjectError"),
  message: document.getElementById("messageError"),
  terms: document.getElementById("termsError"),
};

/* ---------- DISPLAY ERROR ---------- */

function showError(field, errorElement, message) {
  field.classList.add("invalid");
  field.classList.remove("valid");

  errorElement.textContent = message;
}

/* ---------- CLEAR ERROR ---------- */

function clearError(field, errorElement) {
  field.classList.remove("invalid");
  errorElement.textContent = "";
}

/* ---------- FIELD VALIDATION ---------- */

function validateName() {
  const name = nameField.value.trim();

  if (name.length < 3) {
    showError(
      nameField,
      errors.name,
      "Name must contain at least 3 characters.",
    );

    return false;
  }

  nameField.classList.add("valid");
  clearError(nameField, errors.name);

  return true;
}

function validateEmail() {
  const email = emailField.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    showError(emailField, errors.email, "Please enter a valid email address.");

    return false;
  }

  emailField.classList.add("valid");
  clearError(emailField, errors.email);

  return true;
}

function validatePhone() {
  const phone = phoneField.value.trim();

  const phonePattern = /^[0-9+\-\s]{7,15}$/;

  if (phone !== "" && !phonePattern.test(phone)) {
    showError(phoneField, errors.phone, "Please enter a valid phone number.");

    return false;
  }

  clearError(phoneField, errors.phone);

  if (phone !== "") {
    phoneField.classList.add("valid");
  }

  return true;
}

function validateSubject() {
  if (subjectField.value === "") {
    showError(subjectField, errors.subject, "Please select a subject.");

    return false;
  }

  subjectField.classList.add("valid");
  clearError(subjectField, errors.subject);

  return true;
}

function validateMessage() {
  const message = messageField.value.trim();

  if (message.length < 10) {
    showError(
      messageField,
      errors.message,
      "Message must contain at least 10 characters.",
    );

    return false;
  }

  messageField.classList.add("valid");
  clearError(messageField, errors.message);

  return true;
}

function validateTerms() {
  if (!termsField.checked) {
    errors.terms.textContent = "Please agree before submitting.";

    return false;
  }

  errors.terms.textContent = "";

  return true;
}

/* ---------- REAL-TIME VALIDATION ---------- */

nameField.addEventListener("input", validateName);

emailField.addEventListener("input", validateEmail);

phoneField.addEventListener("input", validatePhone);

subjectField.addEventListener("change", validateSubject);

messageField.addEventListener("input", validateMessage);

termsField.addEventListener("change", validateTerms);

/* ---------- CHARACTER COUNTER ---------- */

messageField.addEventListener("input", function () {
  charCount.textContent = this.value.length;
});

/* ---------- FORM SUBMISSION ---------- */

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate all fields

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();
  const isTermsValid = validateTerms();

  // Check all validations

  if (
    !isNameValid ||
    !isEmailValid ||
    !isPhoneValid ||
    !isSubjectValid ||
    !isMessageValid ||
    !isTermsValid
  ) {
    showFormMessage("Please correct the errors before submitting.", "error");

    return;
  }

  // Collect form details

  const formData = {
    name: nameField.value.trim(),

    email: emailField.value.trim(),

    phone: phoneField.value.trim(),

    subject: subjectField.value,

    message: messageField.value.trim(),
  };

  // Show success message

  showFormMessage(
    "✓ Thank you, " +
      formData.name +
      "! Your form has been validated successfully.",
    "success",
  );

  // Display details in console

  console.log("AutoNest Contact Form:", formData);

  // Reset form

  contactForm.reset();

  charCount.textContent = "0";

  // Remove validation styles

  document.querySelectorAll(".form-control").forEach(function (field) {
    field.classList.remove("valid", "invalid");
  });

  // Clear field errors

  Object.values(errors).forEach(function (error) {
    error.textContent = "";
  });
});

/* ---------- FORM MESSAGE ---------- */

function showFormMessage(message, type) {
  formMessage.textContent = message;

  formMessage.className = "form-message " + type;
}

/* ---------- SEARCHABLE FAQ ---------- */

const faqSearch = document.getElementById("faqSearch");

const faqItems = document.querySelectorAll(".faq-item");

const noFaqResults = document.getElementById("noFaqResults");

faqSearch.addEventListener("input", function () {
  const searchValue = this.value.toLowerCase().trim();

  let visibleCount = 0;

  faqItems.forEach(function (item) {
    const faqText = item.textContent.toLowerCase();

    const isMatched = faqText.includes(searchValue);

    item.hidden = !isMatched;

    if (isMatched) {
      visibleCount++;
    }
  });

  noFaqResults.hidden = visibleCount !== 0;
});

/* ---------- BACK TO TOP ---------- */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* Close mobile menu after clicking a link */

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";
  });
});

/* ---------- CONSOLE MESSAGE ---------- */

console.log("AutoNest Contact Page Loaded Successfully 🚗");
