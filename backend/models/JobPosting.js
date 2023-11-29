import mongoose from "mongoose";

const { Schema } = mongoose;

let jobPostingSchema = new Schema({
    agency: String, // search
    bureau: String, // search
    appointment_type: String, // filter: "Permanent", NaN, "Term", "Intermittent", "Agency Employees Only", "Seasonal", "Term appt, 
    // NTE 13 mos", "Term appt, NTE 2 yrs", "Term appt, NTE 4 yrs", "Agency employees only", "Term appt, NTE 3 yrs", "Multiple Appointment Types"
    vacancy_announcement_types: String, // filter: null值怎么办
    /* -All
	    -Open To Public
        -DE
        -DE, IMP
        -DE, ST
        -DE, ST, IMP
      -Open to Federal Employees (Status or Internal Merit Promotion)
        -IMP
        -ST
        -ST, IMP
    */
    job_series_number: Number, // search
    job_series_title: String, //search
    grade: Number, //filter ALL, 0 - 15
    announcement_locations: String, // filter State: All... what is remote work?
    
  },
  { timestamps: true }
);
  
const JobPosting = mongoose.model('JobPosting', jobPostingSchema, 'job_postings');
  
export default JobPosting;
