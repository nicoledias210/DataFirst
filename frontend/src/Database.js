import "./Database.css";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // 需要安装react-tagsinput并导入样式
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FileSaver from 'file-saver';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


function convertToCSV(data) {
    const header = Object.keys(data[0]).join(",");
    const rows = data.map((row) => {
      return Object.values(row).map((value) => {
        if (typeof value === 'string') {
          return value.includes(',') ? `"${value}"` : value;
        } else {
          return value !== undefined ? value : "null";
        }
      }).join(",");
    });
    return header + "\n" + rows.join("\n");
  }
  
  

const Database = () => {
  const agenciesOptions = [
    { label: 'All', value: 'ALL' },
    { label: 'General Services Administration', value: 'General Services Administration' },
    { label: 'Department of the Treasury', value: 'Department of the Treasury' },
    { label: 'Social Security Administration', value: 'Social Security Administration' },
    { label: 'Department of Agriculture', value: 'Department of Agriculture' },
    { label: 'Department of Housing and Urban Development', value: 'Department of Housing and Urban Development' },
    { label: 'Department of State', value: 'Department of State' },
    { label: 'Department of Energy', value: 'Department of Energy' },
    { label: 'National Aeronautics and Space Administration', value: 'National Aeronautics and Space Administration' },
    { label: 'Small Business Administration', value: 'Small Business Administration' },
    { label: 'Department of Justice', value: 'Department of Justice' },
    { label: 'Department of Defense', value: 'Department of Defense' },
    { label: 'Department of Veterans Affairs', value: 'Department of Veterans Affairs' },
    { label: 'Department of the Interior', value: 'Department of the Interior' },
    { label: 'Department of Homeland Security', value: 'Department of Homeland Security' },
    { label: 'Department of Health And Human Services', value: 'Department of Health And Human Services' },
    { label: 'Department of Commerce', value: 'Department of Commerce' },
    { label: 'Office of Personnel Management', value: 'Office of Personnel Management' },
    { label: 'Department of Transportation', value: 'Department of Transportation' },
    { label: 'Department of Labor', value: 'Department of Labor' },
    { label: 'Environmental Protection Agency', value: 'Environmental Protection Agency' },
    { label: 'United States Agency for International Development', value: 'United States Agency for International Development' },
    { label: 'Department of Education', value: 'Department of Education' },
    { label: 'National Science Foundation', value: 'National Science Foundation' }
  ];
  

  const gradeOptions = Array.from({ length: 16 }, (v, i) => ({ label: `Grade ${i}`, value: i }));

  const vacancy_announcement_typesOpions = [
    { label: 'All', value: 'ALL'},
    { label: 'Open To Public', value: 'DE' },
    { label: 'Open to Federal Employees', value: 'NON-DE' },
  ];
  
  const stateOptions = [
    { label: 'All', value: 'ALL' },
    { label: 'AL', value: 'AL' }, { label: 'AK', value: 'AK' },
    { label: 'AZ', value: 'AZ' }, { label: 'AR', value: 'AR' },
    { label: 'CA', value: 'CA' }, { label: 'CO', value: 'CO' },
    { label: 'CT', value: 'CT' }, { label: 'DE', value: 'DE' },
    { label: 'FL', value: 'FL' }, { label: 'GA', value: 'GA' },
    { label: 'HI', value: 'HI' }, { label: 'ID', value: 'ID' },
    { label: 'IL', value: 'IL' }, { label: 'IN', value: 'IN' },
    { label: 'IA', value: 'IA' }, { label: 'KS', value: 'KS' },
    { label: 'KY', value: 'KY' }, { label: 'LA', value: 'LA' },
    { label: 'ME', value: 'ME' }, { label: 'MD', value: 'MD' },
    { label: 'MA', value: 'MA' }, { label: 'MI', value: 'MI' },
    { label: 'MN', value: 'MN' }, { label: 'MS', value: 'MS' },
    { label: 'MO', value: 'MO' }, { label: 'MT', value: 'MT' },
    { label: 'NE', value: 'NE' }, { label: 'NV', value: 'NV' },
    { label: 'NH', value: 'NH' }, { label: 'NJ', value: 'NJ' },
    { label: 'NM', value: 'NM' }, { label: 'NY', value: 'NY' },
    { label: 'NC', value: 'NC' }, { label: 'ND', value: 'ND' },
    { label: 'OH', value: 'OH' }, { label: 'OK', value: 'OK' },
    { label: 'OR', value: 'OR' }, { label: 'PA', value: 'PA' },
    { label: 'RI', value: 'RI' }, { label: 'SC', value: 'SC' },
    { label: 'SD', value: 'SD' }, { label: 'TN', value: 'TN' },
    { label: 'TX', value: 'TX' }, { label: 'UT', value: 'UT' },
    { label: 'VT', value: 'VT' }, { label: 'VA', value: 'VA' },
    { label: 'WA', value: 'WA' }, { label: 'WV', value: 'WV' },
    { label: 'WI', value: 'WI' }, { label: 'WY', value: 'WY' }
  ];
  

  const [agencyTags, setAgencyTags] = useState([]);
  const [bureauTags, setBureauTags] = useState([]);
  const [typeTags, setTypeTags] = useState([]);
  const [titleTags, setTitleTags] = useState([]);
  const [gradeTags, setGradeTags] = useState([]);
  const [seriesNumberTags, setSeriesNumberTags] = useState([]);
  const [locationTags, setLocationTags] = useState([]);
  const [vacancyTypesTag, setVacancyTypesTag] = useState('');


  // 请求后端接口的函数
  const fetchFilteredJobPostings = async () => {
    try {
      const query = {
        agency: agencyTags,
        bureau: bureauTags,
        appointment_type: typeTags,
        job_series_title: titleTags,
        grade: gradeTags.map(str => parseInt(str)),
        job_series_number: seriesNumberTags.map(str => parseInt(str)),
        announcement_locations: locationTags,
        vacancy_announcement_types: vacancyTypesTag // Use the string directly
      };
      console.log(query)
      
      // 过滤掉 'ALL' 标签和空字符串
      Object.keys(query).forEach(
        key => (query[key] === 'ALL' || query[key] === '') && delete query[key]
      );
  
      // Ensure we send a string for vacancy_announcement_types, not an array
      if (Array.isArray(query.vacancy_announcement_types)) {
        query.vacancy_announcement_types = query.vacancy_announcement_types[0];
      }
  
      const response = await axios.get('https://federal-labor-market-dashboard.wl.r.appspot.com/job-postings/filter', { params: query });
      console.log(response.data); // 在这里处理响应数据
      // 测试完comment掉
      const csvData = convertToCSV(response.data);
      const blob = new Blob([csvData], { type: "text/csv" });
      FileSaver.saveAs(blob, "data.csv");
      
    } catch (error) {
      console.error('Error fetching job postings:', error);
    }
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Agency</Form.Label>
              <Typeahead
                id="agency-typeahead"
                labelKey="label"
                multiple
                options={agenciesOptions}
                placeholder="Choose one or more agencies"
                selected={agencyTags.map(tag => agenciesOptions.find(option => option.value === tag))}
                onChange={(selected) => {
                  // Update agencyTags with the selected values
                  setAgencyTags(selected.map(option => option.value));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bureau</Form.Label>
              <TagsInput value={bureauTags} onChange={(tags) => setBureauTags(tags)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Appointment Type</Form.Label>
              <TagsInput value={typeTags} onChange={(tags) => setTypeTags(tags)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Series Title</Form.Label>
              <TagsInput value={titleTags} onChange={(tags) => setTitleTags(tags)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Grade</Form.Label>
              <Typeahead
                id="grade-typeahead"
                labelKey="label"
                multiple
                options={gradeOptions}
                placeholder="Choose one or more grades"
                selected={gradeTags.map(tag => gradeOptions.find(option => option.value === tag))}
                onChange={(selected) => {
                // Update gradeTags with the selected values
                setGradeTags(selected.map(option => option.value));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Series Number</Form.Label>
              <TagsInput value={seriesNumberTags} onChange={(tags) => setSeriesNumberTags(tags)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Typeahead
                id="location-typeahead"
                labelKey="label"
                multiple
                options={stateOptions}
                placeholder="Choose one or more locations"
                selected={locationTags.map(tag => stateOptions.find(option => option.value === tag))}
                onChange={(selected) => {
                // Update gradeTags with the selected values
                setLocationTags(selected.map(option => option.value));
                }}
              />

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vacancy Announcement Types</Form.Label>
              <Form.Select 
                aria-label="Vacancy Announcement Types"
                onChange={(e) => setVacancyTypesTag(e.target.value)}
                value={vacancyTypesTag}
              >
              {vacancy_announcement_typesOpions.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
              ))}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" onClick={fetchFilteredJobPostings}>Filter</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Database;

