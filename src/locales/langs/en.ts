import { MAX_RATE, MIN_RATE } from 'src/components/complete-profile-fifth/constants';

import {
  MAX_APPOINTMENT_NAME_LENGTH,
  MIN_APPOINTMENT_NAME_LENGTH,
} from 'src/components/create-appointment/constants';

import { MAX_CHARACTERS_LENGTH } from 'src/constants';
import { CONFIRM_NOTE_MAX_LENGTH } from 'src/components/confirm-appointment/constants';

const en = {
  app_title: 'App title',
  app: `this application`,
  example: 'text for demo purposes',
  btn_next: 'next',
  date: 'Date',
  unexpected_error: 'Something went wrong, try again later...',
  loginForm: {
    emailInvalid: 'Email is incorrect',
    passwordInvalid: 'Password needs to be at least 8 characters',
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    emailPlaceholder: 'E-mail Address',
    passwordPlaceholder: 'Password',
    title: 'Sign In',
    formTitle: 'Sign in to get access to your appointments',
    link: 'Don`t have an account?',
    resetPassword: 'Reset Password',
    signUp: 'Sign Up',
    authError: 'Please enter valid credentials',
  },
  signUpFirstForm: {
    Seeker: {
      Title: 'Seeker',
      Description:
        'Find the perfect caregiver for you or your loved one to get reliable and personalized care',
    },
    Caregiver: {
      Title: 'Caregiver',
      Description:
        'Connect with clients seeking your expertise and provide compassionate care for those in need',
    },
  },
  signUpSecondForm: {
    firstNameInvalid: 'First name maximum length is 100',
    firstNameRequired: 'First name is required',
    lastNameInvalid: 'Last name maximum length is 100',
    lastNameRequired: 'Last name is required',
    emailLengthInvalid: 'Email maximum length is 100',
    emailInvalid: 'Please enter valid email',
    emailExist: 'User with this email already exists',
    emailRequired: 'Email is required',
    phoneLengthInvalid: 'Phone length must be 10 numbers',
    phoneInvalid: 'Phone can`t start with 0',
    phoneInvalid1: 'Phone can`t start with 1',
    phoneExist: 'User with this phone number already exists',
    phoneRequired: 'Phone is required',
    birthDateRequired: 'Birth date is required',
    birthDateMax: 'Age must be at least 18 years old',
    placeholderFirstName: 'First Name',
    placeholderLastName: 'Last Name',
    placeholderEmail: 'E-mail Address',
    placeholderPhone: 'Phone Number',
    placeholderBirthDate: 'Date of Birth',
    placeholderIsOpen: 'I`m open to living in clients` houses',
  },
  signUpThirdForm: {
    countryRequired: 'Country is required',

    stateMaxLength: 'State must be at most 100 characters',
    stateRequired: 'State is required',

    cityMaxLength: 'City must be at most 100 characters',
    cityRequired: 'City is required',

    zipCodeMaxLength: 'Zip code must be at most 100 characters',
    zipCodeRequired: 'Zip code is required',

    addressMaxLength: 'Address must be at most 100 characters',
    addressRequired: 'Address is required',

    placeholderCountry: 'Country',
    placeholderState: 'State',
    placeholderCity: 'City',
    placeholderZipCode: 'Zip Code',
    placeholderAddress: 'Address',
  },
  signUpFourthForm: {
    passwordInvalid: 'Password needs to be at least 8 characters',
    passwordsNotMatching: 'Passwords field and Confirm password field must match',
    passwordRequired: 'Password is required',
    confirmPasswordRequired: 'Confirm password is required',
    placeholderPassword: 'Password',
    placeholderConfirmPassword: 'Confirm Password',
  },
  footer: {
    termsText: 'By signing up you agree to our',
    termsButton: 'Terms & Conditions',
  },
  termsModal: {
    title: 'Terms',
    headText:
      'Welcome to the Caregiver App! Before you begin using our services, we kindly ask you to read and agree to the following terms and conditions, which govern your use of the app. By accessing or using the app, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree to these terms, please refrain from using the app.',
    firstItem:
      'App Purpose: The Caregiver App serves as a platform that connects caregivers with individuals seeking caregiving services. The app facilitates communication and arrangements between caregivers and seekers but does not employ caregivers directly. We do not provide any caregiving services ourselves.',
    secondItem:
      'Eligibility: You must be 18 years or older to use the Caregiver App. By using the app, you represent and warrant that you are of legal age to enter into a binding agreement.',
    thirdItem:
      'User Accounts: To access certain features of the app, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account.',
    fourthItem:
      'User Conduct: While using the Caregiver App, you agree to: a. Provide accurate and up-to-date information in your profile. b. Use the app solely for lawful purposes and in compliance with all applicable laws and regulations. c. Respect the privacy and confidentiality of other users` information. d. Not engage in any fraudulent, misleading, or deceptive activities. e. Not harass, intimidate, or harm other users in any way.',
    fifthItem:
      'Caregiver-Seeker Engagements: a. Caregiver and seeker interactions facilitated through the app are solely between the parties involved. The Caregiver App does not act as an employer or agent for caregivers. b. Caregivers are responsible for setting their own rates, availability, and service terms. c. Seekers are responsible for reviewing and assessing caregivers` qualifications and references. d. The Caregiver App is not liable for any disputes, damages, or claims arising from caregiver-seeker engagements.',
  },
  needHelpModal: {
    title: 'Need Help',
    text: 'Reach out to us via email and we`ll get back to you as soon as possible:',
    email: 'support@afyanexcare.com',
  },
  countries: {
    canada: 'Canada',
    unitedStates: 'USA',
  },
  SignUp: 'Sign Up',
  btn_submit: 'Submit',
  request_code: 'Request new code',
  edit_email: 'Edit email',
  account_verification: {
    account_verification: 'Account Verification',
    sent_code: 'We have sent and OTP verification code to your email, please enter it here',
    request_code: 'Request new code',
    btn_submit: 'Submit',
    successfully_verified: 'Successfully Verified',
    successfully_caregiver:
      'Now you can pass background check and set up your profile and start exploring care seekers in your area',
    successfully_caregiver_btn: 'Set up Profile',
    successfully_seeker:
      'Now you can sign in your account and start seeking care givers in your area',
    successfully_seeker_btn: 'Sign In',
    invalid_code: 'The code doesn’t match. Try again',
  },
  loading: 'Loading...',
  reset_password: {
    title: 'Reset Password',
    enter_email: 'Please enter your e-mail to get a link to reset your password',
    input_label: 'Email Address',
    btn_reset: 'Reset Password',
    btn_back: 'Back to Login',
    sent_code: 'We have sent and OTP verification code to your email, please enter it here',
    enter_new: 'Enter new Password',
    confirm: 'Confirm Password',
    success: 'Your Password is Updated!',
    instructions: 'Now you can go back to login to authenticate with new credentials',
    code_sent: 'Reset code was sent',
    code_not_sent: 'Failed to send reset code',
    placeholder: {
      pass: 'Password',
      confirm_pass: 'Confirm Password',
    },
    aria: {
      toggle: 'toggle password visibility',
    },
    errors: {
      pass: "Passwords don't match",
      pass_required: 'This field is required',
      email: "An account matching that email doesn't exist",
      invalid: 'Enter valid email',
      invalid_pass: 'Password should contain at least {{num}} characters',
      unexpected: 'Something went wrong..',
      invalid_code: "Entered code doesn't match the code which was sent to your email.",
    },
  },
  profile: {
    pageTitle: 'Profile',
    headerTitle: 'Complete Profile',

    qualification: 'Qualification',
    workExperience: 'Work Experience',
    services: 'Services',
    availability: 'Availability',
    rates: 'Rates',
    bio: 'Bio',
  },
  profileQualification: {
    certificationNameMaxLength: `Certification name must be at most ${MAX_CHARACTERS_LENGTH} characters`,
    certificationNameRequired: 'Certification name is required',

    certificationNumberMaxLength: `Certification number must be at most ${MAX_CHARACTERS_LENGTH} characters`,
    certificationNumberRequired: 'Certification number is required',

    certificationLinkMaxLength: `Certification link must be at most ${MAX_CHARACTERS_LENGTH} characters`,
    certificationLinkInvalidUrl: 'Please enter valid URL',

    startDateRequired: 'Start date is required',
    expirationDate: 'Expiration date is required',

    mainTitle:
      'Please specify your experience and feel free to attach any document to proof your certification',
    subTitle: 'Added Certificate(s)',

    next: 'Next',
    save: 'Save',
    return: 'Return',
    delete: 'Delete',

    addCertificate: 'Add Another Certificate',

    placeholderCertificationName: 'Certification Name',
    placeholderCertificationNumber: 'Certification Number (ID)',
    placeholderCertificationLink: 'Certification Link',
    placeholderStartDate: 'Start Date',
    placeholderExpirationDate: 'Expiration Date',
    placeholderCheckbox: 'No expiration date',

    editQualification: 'Edit Qualification',
    deleteCertificate: 'Delete a certificate',
    deleteWarning:
      'Are you sure you want to delete this certificate? Information will not be saved',
  },
  profileBio: {
    fileFormatError: 'Allowed video formats: mp4, mov, avi',
    fileSizeError: 'Upload a shorter video',

    descriptionRequired: 'Description is required',
    descriptionMaxLength: `The maximum is ${MAX_CHARACTERS_LENGTH} characters`,

    fewFactsAboutYou: 'Few facts about you',

    addVideo: 'Add video',
    submit: 'Submit',
  },
  completeProfileSecond: {
    title: 'Please specify your experience and the places you have worked',
    subTitle: 'Added Work place(s)',
    workPlaceLabel: 'Place of Work',
    workTypeLabel: 'Type',
    startDateLabel: 'Start Date',
    endDateLabel: 'End Date',
    checkboxLabel: 'I’m currently working on this position',
    addWorkPlace: 'Add another Work place',
    next: 'Next',
    return: 'Return',
    delete: 'Delete',
    editWorkPlace: 'Edit work place',
    deleteWorkPlace: 'Delete a work place',
    deleteWarning: 'Are you sure you want to delete this work place? Information will not be saved',
    qualifications: { hospital: 'Hospital', clinic: 'Clinic', agency: 'Agency', other: 'Other' },
    errors: {
      workPlaceRequired: 'Work place is required',
      workPlaceLength: `Work place must be at most ${MAX_CHARACTERS_LENGTH} characters`,
      workTypeRequired: 'Work type is required',
      startDateRequired: 'Start date is required',
      endDateRequired: 'End date is required',
    },
  },
  completeProfileThird: {
    title: 'Please specify the services you have experience with or the qualifications you possess',
    personalCare: 'Personal Care Assistance',
    medicationManagement: 'Medication Management',
    mobilitySupport: 'Mobility Support',
    mealPreparation: 'Meal Preparation',
    housekeeping: 'Housekeeping and Laundry',
    socialActivities: 'Social and Recreational Activities',
  },
  completeProfileFourth: {
    specify_time: ' Please specify your preferred time and your availability throughout the week',
    from: 'From',
    to: 'To',
    invalid_time: 'Invalid time selection. Please choose a time later than {{startTime}}. ',
    equal_time_error: 'You cannot choose identical time',
  },
  completeProfileFifth: {
    placeholderRate: 'Rate ($/h)',
    minRateError: `value must be more than ${MIN_RATE} $/h`,
    maxRateError: `maximal value is ${MAX_RATE} $/h`,
    rateRequired: 'rate is required',
  },
  complete_profile: 'complete profile',
  create_appointment: {
    duration: 'Appointment duration is {{hours}}h {{minutes}}m',
    header_text: 'new appointment',
    header_recurring: 'recurring appointment',
    header_one_time: 'one-time appointment',
    not_created: 'No appointments created yet',
    connect_caregivers: 'Connect with caregivers in your area and schedule appointment today.',
    create: 'Create an appointment',
    btn_next: 'next',
    select_days: 'Please select days of the week',
    start_date: 'Start Date',
    end_date: 'End Date',
    start_time: 'Start Time',
    end_time: 'End Time',
    type: {
      one: 'one-time',
      recurring: 'Recurring',
      one_desc: 'Scheduled appointments designed for one specific occasion or purpose.',
      recurring_desc:
        'Scheduled appointments that repeat or predetermined intervals, catering to ongoing or long-term needs',
    },
    modal: {
      header: 'Cancel appointment creation',
      confirmation:
        "Are you sure you want to cancel appointment creation? The appointment won't be saved",
      positive_confirm: 'Yes, cancel',
      aria_label: 'cancel-appointment-modal',
      aria_description: 'modal-to-cancel-appointment',
    },
    placeholder: {
      name: 'Appointment Name',
    },
    errors: {
      min_type_char: `Appointment name should contain more than ${MIN_APPOINTMENT_NAME_LENGTH} characters`,
      max_type_char: `You cannot enter more than ${MAX_APPOINTMENT_NAME_LENGTH} characters`,
    },
  },
  confirm_appointment: {
    caregiver: 'caregiver',
    task_label: 'Task',
    tasks: 'tasks',
    add_task: 'add task',
    add_more: 'add more tasks',
    custom: 'custom tasks',
    additional: 'additional details',
    confirm: 'confirm',
    details: 'Additional Details',
    save: 'save',
    add: 'add',
    add_custom: 'add custom task',
    edit: 'edit custom task',
    charge_message: "We'll charge 1 hour payment in advance to protect the appointment parties",
    max_length_message: `You cannot enter more than ${CONFIRM_NOTE_MAX_LENGTH} characters`,
  },
  health_questionnaire: {
    btn_next: 'Next',
    note_placeholder: 'Enter...',
    note: 'Note',
    header_text: 'Activities of Daily Living Assessment',
    diagnoses: 'Health Concerns and Medical Diagnoses',
    activity: 'Activity',
    back: 'Back',
    submit: 'Submit',
    env: 'Environment Challenges',
    env_description:
      'The following list can be used to indicate challenges that impact functioning within the home environment. Use this checklist as a guide for home modifications that can help improve an elder’s functional independence as their needs and abilities change.',
    diagnoses_list: {
      alzheimers_or_other_dementia: "Alzheimer's/Other Dementia",
      anxiety_disorder: 'Anxiety Disorder',
      arthritis_joint_pain: 'Arthritis, Joint Pain',
      cancer: 'Cancer',
      cognitive_decline: 'Cognitive Decline',
      depression: 'Depression',
      diabetes: 'Diabetes',
      general_age_related_decline: 'General Age-related Decline',
      hearing_loss: 'Hearing Loss',
      heart_disease_chf: 'Heart Disease, CHF',
      hypertension: 'Hypertension',
      incontinence: 'Incontinence',
      lung_disease_copd: 'Lung Disease, COPD',
      mobility_issues: 'Mobility Issues',
      parkinsons_disease: "Parkinson's Disease",
      sleep_issues: 'Sleep Issues',
      vision_loss: 'Vision Loss',
    },
    activities: {
      bathing_showering: 'Bathing/Showering',
      dressing: 'Dressing',
      toileting: 'Toileting',
      planning_balanced_meals: 'Planning Balanced Meals',
      preparing_meals: 'Preparing Meals',
      feeding_self_eating: 'Feeding Self/Eating',
      standing_from_sitting: 'Standing from Sitting',
      transferring_to_from_bed: 'Transferring to/from Bed',
      walking: 'Walking',
      using_the_telephone: 'Using the Telephone',
      calling_for_help: 'Calling for Help',
      managing_medications: 'Managing Medications',
      shopping: 'Shopping',
      driving_managing_transportation: 'Driving/Managing Transportation',
    },
    createAppointmentFourth: {
      location: 'Location',
      area: 'Area',
      availability: 'Availability',
      showAvailableCaregivers: 'Show available caregivers only',
      openToLivingInClientsHouses: 'Open to living in client’s houses',
      servicesTitle: 'Services',
      hourRate: '{{rate}}/h',
      services: {
        personalCare: 'Personal Care Assistance',
        medicationManagement: 'Medication Management',
        mobilitySupport: 'Mobility Support',
        mealPreparation: 'Meal Preparation',
        housekeeping: 'Housekeeping and Laundry',
        socialActivities: 'Social and Recreational Activities',
      },
      bookAppointment: 'Book Appointment',
      numberOfAppointments: 'Appts.',
      rate: 'Rate',
      tabs: {
        bio: 'Bio',
        qualification: 'Qualification',
        workExperience: 'Work Experience',
        services: 'Services',
      },
      period: 'Period',
      present: 'Present',
      certificateNumber: 'Certificate Number (ID)',
      certificateLink: 'Certificate Link',
      noLocations: 'No locations',
      notPreciseLocation: 'Location provided is not precise enough',
      addressDetailsFailed: 'Error fetching address details',
      health_questionnaire: {
        btn_next: 'Next',
        note_placeholder: 'Enter...',
        note: 'Note',
        header_text: 'Activities of Daily Living Assessment',
        diagnoses: 'Health Concerns and Medical Diagnoses',
        activity: 'Activity',
        back: 'Back',
        submit: 'Submit',
        env: 'Environment Challenges',
        env_description:
          'The following list can be used to indicate challenges that impact functioning within the home environment. Use this checklist as a guide for home modifications that can help improve an elder’s functional independence as their needs and abilities change.',
        diagnoses_list: {
          alzheimers_or_other_dementia: "Alzheimer's/Other Dementia",
          anxiety_disorder: 'Anxiety Disorder',
          arthritis_joint_pain: 'Arthritis, Joint Pain',
          cancer: 'Cancer',
          cognitive_decline: 'Cognitive Decline',
          depression: 'Depression',
          diabetes: 'Diabetes',
          general_age_related_decline: 'General Age-related Decline',
          hearing_loss: 'Hearing Loss',
          heart_disease_chf: 'Heart Disease, CHF',
          hypertension: 'Hypertension',
          incontinence: 'Incontinence',
          lung_disease_copd: 'Lung Disease, COPD',
          mobility_issues: 'Mobility Issues',
          parkinsons_disease: "Parkinson's Disease",
          sleep_issues: 'Sleep Issues',
          vision_loss: 'Vision Loss',
        },
        activities: {
          bathing_showering: 'Bathing/Showering',
          dressing: 'Dressing',
          toileting: 'Toileting',
          planning_balanced_meals: 'Planning Balanced Meals',
          preparing_meals: 'Preparing Meals',
          feeding_self_eating: 'Feeding Self/Eating',
          standing_from_sitting: 'Standing from Sitting',
          transferring_to_from_bed: 'Transferring to/from Bed',
          walking: 'Walking',
          using_the_telephone: 'Using the Telephone',
          calling_for_help: 'Calling for Help',
          managing_medications: 'Managing Medications',
          shopping: 'Shopping',
          driving_managing_transportation: 'Driving/Managing Transportation',
        },
        env_challenges: {
          climbing_stairs: 'Climbing stairs',
          turning_doorknobs: 'Turning doorknobs',
          locking_unlocking_doors: 'Locking/unlocking doors',
          operating_light_switches: 'Operating light switches',
          retrieving_and_sorting_mail: 'Retrieving and sorting mail',
          pulling_cabinets_and_drawers_in_kitchen: 'Pulling cabinets and drawers in kitchen',
          pulling_cabinets_and_drawers_in_bathroom: 'Pulling cabinets and drawers in bathroom',
          using_oven_stovetop: 'Using oven/stovetop',
          using_microwave_toaster_small_appliances: 'Using microwave/toaster/small appliances',
          using_large_utensils_for_food_preparation: 'Using large utensils for food preparation',
          entering_shower_bathtub: 'Entering shower/bathtub',
          opening_windows: 'Opening windows',
          accomplishes_alone: 'Accomplishes Alone',
          need_some_help: 'Need Some Help',
          completly_dependent: 'Completely Dependent',
        },
        options: {
          accomplishes_alone: 'Accomplishes Alone',
          need_some_help: 'Need Some Help',
          completely_dependent: 'Completly Dependent',
        },
      },
    },
  },
};

export default en;
