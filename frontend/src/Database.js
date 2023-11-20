import React from 'react';
import "./Database.css";

function Database() {
    return (
        <div className="Database container mt-4">
            <h1>Database Filters</h1>
            <form>
                {/* Agency Filter */}
                <div className="form-group">
                    <label htmlFor="agencyFilter">Agency</label>
                    <select className="form-control" id="agencyFilter">
                        {/* Options should be populated dynamically if possible */}
                        <option value="">Select Agency</option>
                        <option value="agency1">Agency 1</option>
                        <option value="agency2">Agency 2</option>
                        {/* Add other agencies here */}
                    </select>
                </div>

                {/* Pay Grade Filter */}
                <div className="form-group">
                    <label htmlFor="payGradeFilter">Pay Grade</label>
                    <select className="form-control" id="payGradeFilter">
                        <option value="">Select Pay Grade</option>
                        <option value="grade1">Grade 1</option>
                        <option value="grade2">Grade 2</option>
                        {/* Add other pay grades here */}
                    </select>
                </div>

                {/* County Filter */}
                <div className="form-group">
                    <label htmlFor="countyFilter">County</label>
                    <select className="form-control" id="countyFilter">
                        <option value="">Select County</option>
                        <option value="county1">County 1</option>
                        <option value="county2">County 2</option>
                        {/* Add other counties here */}
                    </select>
                </div>

                {/* Bureau Filter */}
                <div className="form-group">
                    <label htmlFor="bureauFilter">Bureau</label>
                    <select className="form-control" id="bureauFilter">
                        <option value="">Select Bureau</option>
                        <option value="bureau1">Bureau 1</option>
                        <option value="bureau2">Bureau 2</option>
                        {/* Add other bureaus here */}
                    </select>
                </div>

                {/* Job Title Input */}
                <div className="form-group">
                    <label htmlFor="jobTitleInput">Job Title</label>
                    <input type="text" className="form-control" id="jobTitleInput" placeholder="Enter job title" />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">Apply Filters</button>
            </form>
        </div>
    );
}

export default Database;
