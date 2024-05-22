import React, { useState } from 'react';
import ClearButton from './ClearButton';

function ExtractEmails() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleExtractEmails() {
    const emailRegex = /[\w]+@[\w\-]+\.[\w]{2,}/g;
    const emails = inputValue.match(emailRegex);
    const uniqueEmails = [...new Set(emails)];
    const formattedEmails = uniqueEmails.join('\n');
    setOutputValue(formattedEmails);
    setInputValue('');
  }

  // function handleClear() {
  //   setInputValue('');
  //   setOutputValue('');
  // }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="title">
              <h1>Email Extractor</h1>
              <p className="subtitle">
                <em>A free online tool to extract email addresses from the text content.</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#eee', borderRadius: '2px' }} className="container-fluid p-2">
        <div className="col-md-6 mx-auto pb-4">
          <label htmlFor="floatingTextarea1" style={{ color: '#8b8b8b' }}>Enter the text/content (max: 100k characters)</label>
          <textarea className="form-control" placeholder="Paste Your Text To Extract..." id="floatingTextarea1" style={{ height: '200px', border: '1px solid #000' }} value={inputValue} onChange={handleInputChange}></textarea>
        </div>

        <div className="col-md-6 mx-auto">
          <textarea className="form-control" placeholder="View Results here..." id="floatingTextarea2" style={{ height: '200px', border: '1px solid #000' }} value={outputValue} readOnly></textarea>
          <label htmlFor="floatingTextarea2"></label>
        </div>

        <div className="col-md-4 mx-auto">
          <button type="button" className="btn btn-dark btn-lg mr-1" onClick={handleExtractEmails}>Extract Email</button>
          <ClearButton />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="pt-2 mb-4">
              <h3>What is Email Extractor?</h3>
              <p style={{ textAlign: 'justify' }}>
                Email Extractor is but a simple email extractor online tool that will help you find email addresses that are hidden in a given text content.
              </p>
              <p>To use, just copy the entire block of text that contains email addresses and paste it in the above input box.</p>
              <p>All you have to do is click on the <b>“Extract Email”</b> button below the text input, it will find all the email addresses present in your input text.</p>
              <p>Any duplicate address that is present would be ignored safely, as a final result, you would be left with a unique list of all the extracted emails.</p>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </div>
  );
}

export default ExtractEmails;